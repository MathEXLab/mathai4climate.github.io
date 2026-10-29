/* =====================================================================
   PROGRAM RENDERER
   Reads window.PROGRAM (assets/data/program.js) and renders:
     - the week/day cards on index.html   -> <div id="program-week-schedule">
     - the per-day tabs with abstracts    -> <div id="program-detailed">
   Nothing in here needs editing when the schedule changes.
   ===================================================================== */
(function () {
  'use strict';

  var DETAIL_PAGE = 'schedule.html';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function isTBC(s) {
    return !s || String(s).trim() === '' || /^tbc$/i.test(String(s).trim());
  }

  function speakerFor(session) {
    var P = window.PROGRAM || {};
    if (!session.speaker) return null;
    var sp = (P.speakers || {})[session.speaker];
    if (!sp) {
      if (window.console) console.warn('program.js: no speaker entry for slug "' + session.speaker + '"');
      return null;
    }
    return sp;
  }

  function talkTitle(sp) {
    return (sp && !isTBC(sp.title)) ? sp.title : 'Title TBC';
  }

  function typeLabel(session) {
    var t = session.type ? session.type : '';
    if (session.virtual) t = t ? t + ' (virtual)' : 'Virtual';
    return t;
  }

  /* ---------------------------------------------------------------
     index.html: compact day cards (same markup/classes as before)
  --------------------------------------------------------------- */
  function renderSessionRow(session) {
    if (session.break !== undefined) {
      return '<li class="session-row is-break"><span class="session-time">' + esc(session.time) +
             '</span><span class="session-title">' + esc(session.break) + '</span></li>';
    }
    if (session.social !== undefined) {
      return '<li class="session-row is-social"><span class="session-time">' + esc(session.time) +
             '</span><span class="session-title">' + esc(session.social) + '</span></li>';
    }
    if (session.label !== undefined) {
      return '<li class="session-row is-talk"><span class="session-time">' + esc(session.time) +
             '</span><span class="session-title">' + esc(session.label) + '</span></li>';
    }

    var sp = speakerFor(session);
    var type = typeLabel(session);
    var cls = 'session-row is-talk' + (/keynote/i.test(session.type || '') ? ' is-keynote' : '');
    var html = '<li class="' + cls + '"><span class="session-time">' + esc(session.time) + '</span>' +
               '<span class="session-title">';
    if (session.wording && sp) {
      // Custom wording, e.g. "Fireside chat with <name>, <affiliation>"
      html += '<span class="session-wording">' + esc(session.wording) + '</span> ';
    } else if (type) {
      html += '<span class="session-type">' + esc(type) + '</span> ';
    }
    if (sp) {
      if (session.noTalk) {
        // No title/abstract for this session: plain name, no pop-up or link
        html += '<span class="session-speaker-plain">' + esc(sp.name) + '</span>';
      } else {
        html += '<a class="session-speaker" href="' + DETAIL_PAGE + '#talk-' + esc(session.speaker) + '"' +
                ' data-talk-title="' + esc(talkTitle(sp)) + '">' + esc(sp.name) + '</a>';
      }
      if (session.wording && sp.affiliation) {
        html += '<span class="session-affiliation">, ' + esc(sp.affiliation) + '</span>';
      }
    } else {
      html += '<span class="session-tbc">TBC</span>';
    }
    html += '</span></li>';
    return html;
  }

  function renderDayCard(day) {
    var html = '<div class="day-card' + (day.holiday ? ' day-card-holiday' : '') + '">' +
               '<div class="day-card-header"><span class="day-card-num">' + esc(day.day) + '</span>' +
               '<span class="day-card-date">' + esc(day.date) + '</span></div>';
    if (day.holiday) {
      html += '<div class="holiday-badge"><em>' + esc(day.holiday) + '</em> - <strong>no sessions</strong></div>';
    }
    if (day.theme) html += '<div class="day-card-theme">' + esc(day.theme) + '</div>';
    html += '<ul class="day-card-list">' + (day.sessions || []).map(renderSessionRow).join('') + '</ul></div>';
    return html;
  }

  function renderWeekSchedule(container) {
    var P = window.PROGRAM || {};
    container.innerHTML = (P.schedule || []).map(function (week) {
      return '<div class="week-block">' +
             '<div class="week-block-label"><span>' + esc(week.label) + '</span>' + esc(week.dates) + '</div>' +
             '<div class="week-grid">' + (week.days || []).map(renderDayCard).join('') + '</div></div>';
    }).join('');
    initPopovers(container);
  }

  function initPopovers(container) {
    if (!window.bootstrap || !bootstrap.Popover) return;
    var links = container.querySelectorAll('.session-speaker');
    Array.prototype.forEach.call(links, function (el) {
      var title = el.getAttribute('data-talk-title');
      var tbc = title === 'Title TBC';
      new bootstrap.Popover(el, {
        trigger: 'hover focus',
        placement: 'top',
        html: true,
        customClass: 'talk-popover',
        content: '<div class="talk-popover-title' + (tbc ? ' is-tbc' : '') + '">' + esc(title) + '</div>' +
                 '<div class="talk-popover-hint">Click for the abstract</div>'
      });
    });
  }

  /* ---------------------------------------------------------------
     schedule.html: one tab per day, full titles and abstracts
  --------------------------------------------------------------- */
  /* Wrap http(s) URLs and DOIs in links. Input is already escaped. */
  function linkify(escaped) {
    return escaped
      .replace(/(https?:\/\/[^\s<]+[^\s<.,;:)])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/(^|[\s(])doi:\s*(10\.\d{4,9}\/[^\s<]+[^\s<.,;:)])/gi, function (m, pre, doi) {
        return pre + '<a href="https://doi.org/' + doi + '" target="_blank" rel="noopener">doi:' + doi + '</a>';
      });
  }

  /* Blank lines split paragraphs. A paragraph that is just "References"
     becomes a heading, and the paragraphs after it are styled as references. */
  function paragraphs(text) {
    if (isTBC(text)) return '<p class="talk-abstract-tbc">Abstract to follow.</p>';
    var inRefs = false;
    return String(text).trim()
      .replace(/^[ \t]*references:?[ \t]*$/gim, '\n\nReferences\n\n')   // own paragraph even without blank lines
      .split(/\n\s*\n/).map(function (p) {
      p = p.trim().replace(/\s*\n\s*/g, ' ');
      if (!p) return '';
      if (/^references:?$/i.test(p)) {
        inRefs = true;
        return '<span class="talk-references-label">References</span>';
      }
      return '<p' + (inRefs ? ' class="talk-ref"' : '') + '>' + linkify(esc(p)) + '</p>';
    }).join('');
  }

  function renderDetailSession(session) {
    var time = '<div class="talk-time">' + esc(session.time) + '</div>';
    if (session.break !== undefined) {
      return '<div class="talk-item is-break">' + time + '<div class="talk-body"><span class="talk-plain">' + esc(session.break) + '</span></div></div>';
    }
    if (session.social !== undefined) {
      return '<div class="talk-item is-social">' + time + '<div class="talk-body"><span class="talk-plain">' + esc(session.social) + '</span></div></div>';
    }
    if (session.label !== undefined) {
      return '<div class="talk-item is-event">' + time + '<div class="talk-body"><span class="talk-plain">' + esc(session.label) + '</span></div></div>';
    }

    var sp = speakerFor(session);
    var type = typeLabel(session);
    var id = sp ? ' id="talk-' + esc(session.speaker) + '"' : '';
    var html = '<div class="talk-item is-talk"' + id + '>' + time + '<div class="talk-body">';
    if (type && !(session.wording && sp)) html += '<span class="schedule-tag">' + esc(type) + '</span>';
    if (sp) {
      html += '<span class="talk-speaker">' + (session.wording ? esc(session.wording) + ' ' : '') + esc(sp.name) + '</span>';
      if (sp.affiliation) html += '<span class="talk-affiliation">' + esc(sp.affiliation) + '</span>';
      if (!session.noTalk) {
        var t = talkTitle(sp);
        html += '<h5 class="talk-title' + (t === 'Title TBC' ? ' is-tbc' : '') + '">' + esc(t) + '</h5>';
        html += '<div class="talk-abstract">' + paragraphs(sp.abstract) + '</div>';
      }
    } else {
      html += '<span class="talk-speaker is-tbc">Speaker TBC</span>';
    }
    html += '</div></div>';
    return html;
  }

  function renderDetailedSchedule(container) {
    var P = window.PROGRAM || {};
    var days = [];
    (P.schedule || []).forEach(function (week) {
      (week.days || []).forEach(function (day) { days.push({ week: week, day: day }); });
    });

    var nav = '<ul class="nav program-tabs" role="tablist">';
    var panes = '<div class="tab-content program-panes">';
    days.forEach(function (d, i) {
      var id = 'day-' + (i + 1);
      var active = i === 0;
      nav += '<li class="nav-item" role="presentation">' +
             '<button class="nav-link' + (active ? ' active' : '') + (d.day.holiday ? ' is-holiday' : '') + '" id="' + id + '-tab" data-bs-toggle="tab" data-bs-target="#' + id + '" type="button" role="tab" aria-controls="' + id + '" aria-selected="' + active + '">' +
             '<span class="program-tab-num">' + esc(d.day.day) + '</span><span class="program-tab-date">' + esc(d.day.date) + '</span></button></li>';

      panes += '<div class="tab-pane fade' + (active ? ' show active' : '') + '" id="' + id + '" role="tabpanel" aria-labelledby="' + id + '-tab">' +
               '<div class="program-day-header"><span class="eyebrow">' + esc(d.week.label) + ' · ' + esc(d.day.day) + '</span>' +
               '<h3>' + esc(d.day.date) + '</h3>';
      if (d.day.theme) panes += '<p class="program-day-theme">' + esc(d.day.theme) + '</p>';
      if (d.day.holiday) panes += '<div class="holiday-badge"><em>' + esc(d.day.holiday) + '</em> - <strong>no sessions</strong></div>';
      panes += '</div><div class="talk-list">' + (d.day.sessions || []).map(renderDetailSession).join('') + '</div></div>';
    });
    nav += '</ul>';
    panes += '</div>';
    container.innerHTML = nav + panes;

    openHashTarget(container);
    window.addEventListener('hashchange', function () { openHashTarget(container); });
  }

  /* schedule.html#talk-ghil -> switch to that day's tab and scroll to the talk */
  function openHashTarget(container) {
    var hash = window.location.hash;
    if (!hash || hash.indexOf('#talk-') !== 0) return;
    var target = container.querySelector(hash.replace(/[^\w#-]/g, ''));
    if (!target) return;
    var pane = target.closest('.tab-pane');
    var btn = pane && container.querySelector('[data-bs-target="#' + pane.id + '"]');
    if (btn && window.bootstrap && bootstrap.Tab) bootstrap.Tab.getOrCreateInstance(btn).show();
    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.classList.add('is-highlighted');
    }, 150);
  }

  /* ---------------------------------------------------------------
     Boot
  --------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    var week = document.getElementById('program-week-schedule');
    if (week) renderWeekSchedule(week);
    var detail = document.getElementById('program-detailed');
    if (detail) renderDetailedSchedule(detail);
  });
})();
