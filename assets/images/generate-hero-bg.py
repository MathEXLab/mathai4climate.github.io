#!/usr/bin/env python3
"""Regenerates the hero background: a numerically-integrated streamline globe
(flowing contour lines wrapped around a sphere, with one vortex) plus soft
anomaly-style blobs, in the site's blue/green brand colors.

Usage: python3 assets/images/generate-hero-bg.py
Writes two things:
  - assets/images/hero-bg.svg — a plain static copy, fully visible, for quick
    previewing (e.g. open directly, or via an <img> tag). Not used by the site.
  - index.html — patches the inline, animated copy between the
    <!-- HERO_BG_SVG_START --> / <!-- HERO_BG_SVG_END --> markers in the hero
    section. This is the one the browser actually renders; it's inlined
    (rather than a CSS background-image) so theme.css can animate the lines
    drawing themselves in on load (see .hero-line / .hero-ring / .hero-blob
    and the hero-line-draw / hero-blob-fade keyframes in theme.css).

To retheme: change ACCENT/SIGNAL below to match the new :root --accent/--signal
in theme.css. To reposition the globe: change CX/CY/R. Keep blobs clear of the
hero's left text column (roughly x<780, 90<y<460 in the 1600x500 viewBox) since
the hero copy lives there.
"""
import math
import os
import re

# ---------- streamfunction on the globe disk ----------
# vortex center (in u,v unit-disk coords)
VX, VY = 0.28, -0.05
VSTRENGTH = 1.35
VSIGMA = 0.22

def psi(u, v):
    r2 = u*u + v*v
    if r2 >= 1.0:
        return None
    # large-scale wavy flow (orthographic-ish foreshortening handled implicitly
    # by working directly in disk coords, which naturally compresses lines near the rim)
    val = math.sin(3.1*u + 1.6*v) + 0.55*math.sin(5.2*u - 1.1*v + 0.6)
    val += 0.35*math.sin(1.7*v*4.0)
    # vortex bump -> closed loops around (VX,VY)
    dx, dy = u-VX, v-VY
    val += VSTRENGTH * math.exp(-(dx*dx+dy*dy)/(2*VSIGMA*VSIGMA))
    return val

H = 1e-3
def grad(u, v):
    p1 = psi(u+H, v); p2 = psi(u-H, v)
    p3 = psi(u, v+H); p4 = psi(u, v-H)
    if None in (p1, p2, p3, p4):
        return 0.0, 0.0
    return (p1-p2)/(2*H), (p3-p4)/(2*H)

def velocity(u, v):
    du, dv = grad(u, v)
    # perpendicular to gradient -> flows along psi contours
    vu, vv = dv, -du
    m = math.hypot(vu, vv)
    if m < 1e-9:
        return 0.0, 0.0
    return vu/m, vv/m

def integrate(u0, v0, step, max_steps):
    pts = [(u0, v0)]
    u, v = u0, v0
    for _ in range(max_steps):
        vu, vv = velocity(u, v)
        if vu == 0 and vv == 0:
            break
        # RK2 (midpoint)
        mu, mv = u + vu*step*0.5, v + vv*step*0.5
        if mu*mu + mv*mv >= 1.0:
            break
        vu2, vv2 = velocity(mu, mv)
        u2, v2 = u + vu2*step, v + vv2*step
        if u2*u2 + v2*v2 >= 1.0:
            break
        u, v = u2, v2
        pts.append((u, v))
    return pts

lines = []  # list of list of (u,v)

# general flow lines: seed along left edge
n_seed = 46
for i in range(n_seed):
    v0 = -0.94 + 1.88*i/(n_seed-1)
    u0 = -math.sqrt(max(0.0, 1-v0*v0)) + 0.02
    fwd = integrate(u0, v0, 0.006, 900)
    bwd = integrate(u0, v0, -0.006, 200)
    bwd.reverse()
    full = bwd[:-1] + fwd
    if len(full) > 8:
        lines.append(full)

# extra seeds along the top/bottom edges to fill in coverage
for i in range(14):
    u0 = -0.9 + 1.8*i/13
    v0 = math.sqrt(max(0.0, 1-u0*u0)) - 0.02
    fwd = integrate(u0, v0, 0.006, 700)
    bwd = integrate(u0, v0, -0.006, 700)
    bwd.reverse()
    full = bwd[:-1] + fwd
    if len(full) > 8:
        lines.append(full)

# vortex loops: seed radially outward from vortex center
for i in range(9):
    r = 0.035 + i*0.033
    u0, v0 = VX + r, VY
    pts = integrate(u0, v0, 0.006, 260)
    if len(pts) > 8:
        lines.append(pts)

# ---------- render to SVG ----------
CX, CY, R = 1260, 240, 270
ACCENT = "#1668a8"   # matches --accent in theme.css
SIGNAL = "#1f8a5f"   # matches --signal in theme.css

def to_px(u, v):
    return CX + u*R, CY + v*R

def thin(pts, keep_every=3, min_move=1.2):
    # subsample + drop points that barely moved in pixel space, to shrink path size
    out = [pts[0]]
    last = to_px(*pts[0])
    for i, p in enumerate(pts[1:], start=1):
        if i % keep_every != 0 and i != len(pts) - 1:
            continue
        px = to_px(*p)
        if math.hypot(px[0]-last[0], px[1]-last[1]) >= min_move:
            out.append(p)
            last = px
    if out[-1] != pts[-1]:
        out.append(pts[-1])
    return out

def px_length(pts):
    total = 0.0
    prev = to_px(*pts[0])
    for u, v in pts[1:]:
        cur = to_px(u, v)
        total += math.hypot(cur[0]-prev[0], cur[1]-prev[1])
        prev = cur
    return total

thinned_lines = [thin(pts) for pts in lines]
thinned_lines = [pts for pts in thinned_lines if len(pts) >= 2]

def render_paths(animated):
    path_defs = []
    for i, pts in enumerate(thinned_lines):
        d = "M " + " L ".join(f"{to_px(u,v)[0]:.1f},{to_px(u,v)[1]:.1f}" for u, v in pts)
        if animated:
            length = px_length(pts)
            path_defs.append(
                f'<path d="{d}" class="hero-line" fill="none" stroke="{ACCENT}" '
                f'stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" '
                f'style="--len:{length:.1f};--i:{i}"/>'
            )
        else:
            path_defs.append(f'<path d="{d}" fill="none" stroke="{ACCENT}" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"/>')
    return "\n".join(path_defs)

# ---------- anomaly blobs (data-driven-transcode inspired) ----------
# Kept clear of the left text column (roughly x<780, 90<y<460): the hero copy
# lives there and must not fight the background for attention.
BLOB_SPECS = [
    # (cx, cy, rx, ry, color, opacity, rotation)
    (880, 120, 65, 42, "SIGNAL", 0.15, 10),
    (840, 400, 55, 34, "SIGNAL", 0.13, -12),
    (1470, 80, 60, 40, "SIGNAL", 0.14, 8),
    (1500, 400, 65, 42, "SIGNAL", 0.13, -10),
    (1560, 230, 45, 60, "ACCENT", 0.12, 0),
]
wave_y = 486
for i, x in enumerate([880, 1020, 1160, 1300, 1440]):
    color = "SIGNAL" if i % 2 == 0 else "ACCENT"
    BLOB_SPECS.append((x, wave_y, 65, 26, color, 0.10, -6 if i % 2 else 6))

def render_blobs(animated):
    blobs = []
    for i, (cx, cy, rx, ry, color_name, opacity, rot) in enumerate(BLOB_SPECS):
        color = ACCENT if color_name == "ACCENT" else SIGNAL
        cls = ' class="hero-blob"' if animated else ""
        style = f' style="--bi:{i}"' if animated else ""
        blobs.append(
            f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="{color}" '
            f'fill-opacity="{opacity}" transform="rotate({rot} {cx} {cy})" '
            f'filter="url(#blobBlur)"{cls}{style}/>'
        )
    return "\n".join(blobs)

def render_ring(animated):
    if animated:
        circumference = 2 * math.pi * R
        return (f'<circle cx="{CX}" cy="{CY}" r="{R}" class="hero-ring" fill="none" '
                f'stroke="{ACCENT}" stroke-opacity="0.7" stroke-width="3" '
                f'style="--len:{circumference:.1f}"/>')
    return f'<circle cx="{CX}" cy="{CY}" r="{R}" fill="none" stroke="{ACCENT}" stroke-opacity="0.7" stroke-width="3"/>'

def render_svg(animated):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 500" preserveAspectRatio="xMidYMid slice">
<defs>
<filter id="blobBlur" x="-50%" y="-50%" width="200%" height="200%">
<feGaussianBlur stdDeviation="18"/>
</filter>
</defs>
<g>
{render_blobs(animated)}
</g>
<g>
{render_paths(animated)}
{render_ring(animated)}
</g>
</svg>'''

here = os.path.dirname(os.path.abspath(__file__))

static_svg = render_svg(animated=False)
static_out = os.path.join(here, "hero-bg.svg")
with open(static_out, "w") as f:
    f.write(static_svg)

animated_svg = render_svg(animated=True)
index_path = os.path.join(here, "..", "..", "index.html")
with open(index_path) as f:
    html = f.read()

pattern = re.compile(
    r'(<!-- HERO_BG_SVG_START -->\n)(.*?)(\n?<!-- HERO_BG_SVG_END -->)',
    re.DOTALL
)
if not pattern.search(html):
    raise SystemExit(
        "Could not find HERO_BG_SVG_START/END markers in index.html — "
        "add an empty <!-- HERO_BG_SVG_START -->\\n<!-- HERO_BG_SVG_END --> "
        "pair inside the .hero-bg div in the hero section first."
    )
html = pattern.sub(lambda m: m.group(1) + animated_svg + m.group(3), html, count=1)
with open(index_path, "w") as f:
    f.write(html)

print("wrote", static_out, "(static preview)")
print("patched", index_path, "(animated, inline)")
print("lines:", len(thinned_lines), "| blobs:", len(BLOB_SPECS))