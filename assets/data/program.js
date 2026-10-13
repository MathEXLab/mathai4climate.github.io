/* =====================================================================
   PROGRAM DATA — the single source of truth for the schedule.

   Both index.html (day cards) and schedule.html (titles + abstracts)
   are rendered from this file. Edit this file only; never the HTML.

   SPEAKERS
     Keyed by a short slug. Each speaker is its own block:

       ghil: {
         name: "Michael Ghil",
         affiliation: "UCLA",
         title: "Talk title here",
         abstract: `
     Paste the abstract here, over as many lines as you like.
     A blank line starts a new paragraph.

     References

     1. First reference, pasted as-is. URLs and DOIs become links.

     2. Second reference.
     `
       },

     Notes on the abstract block:
       - Leave it as `TBC` until you have the text.
       - A paragraph that is just the word "References" becomes a small
         heading, and everything after it is styled as references.
       - Line breaks inside a paragraph are joined up, so a paste from a
         PDF that wraps mid-sentence still reads as one paragraph.
       - The only thing you cannot paste is a backtick ( ` ). Replace it
         with ' if one appears.

   SCHEDULE
     A list of weeks, each with a list of days, each with sessions.
     A session is ONE of:
       { time: "14:00–15:00", type: "Keynote", speaker: "ghil" }
       { time: "11:00–11:30", type: "Short talk", speaker: null }   -> shows TBC
       { time: "10:30–11:00", break: "Tea break" }
       { time: "19:00–21:00", social: "Workshop Dinner" }
       { time: "11:00–12:00", label: "Opening ceremony" }           -> plain event
     Optional on a talk:  virtual: true   -> adds "(virtual)"
     Optional on a day:   theme: "..."    -> small line under the date
                          holiday: "..."  -> green badge, e.g. public holiday

   To move a talk, cut/paste its line. To change its time, edit the
   string. To park a session, comment the line out with //.
   ===================================================================== */

window.PROGRAM = {

  speakers: {
    /* ---- Week 1 ---- */
    ghil: {
      name: "Michael Ghil",
      affiliation: "Ecole Normale Supérieure, Paris, France; University of California at Los Angeles, CA, USA; Imperial College London, UK",
      title: "Global warming & global weirding: A nonautonomous dynamical systems perspective",
      abstract: `
The phenomenon of global warming is by now scientifically well established. The important aspects of “how, how much and when” are being explored quantitatively, as well as qualitatively, and extra-scientific objections persist.

This aspect of the climate sciences refers, however, mostly if not exclusively, to mean global near-surface atmospheric temperatures and to those other climatic and environmental phenomena that can be linked in a more-or-less straightforward manner to it. A large number of phenomena associated with regional extrema of temperature and precipitation, such as strong and persistent floods and droughts or cold and warm extrema, are still quite puzzling and often exploited in extra-scientific objections to global warming.

The theory of nonautonomous dynamical systems (NDSs) has by now been given considerable play in studying the effects of anthropogenic forcing on global warming. More recently, NDS theory has been shown to be a powerful methodology in going beyond the effect of time-dependent forcing on means and on to full distributions of equivariant measures. This review talk will cover some of the results in the above-mentioned directions for deterministic as well as random forcing. A possible role for AI in elucidating these phenomena will be mentioned as well.
References
1. Ashwin, P., U. Feudel, M. Ghil, 2026: Introduction to the Double Focus Issue: Nonautonomous dynamical systems in the sciences, Chaos: An Interdisciplinary Journal of Nonlinear Science, 36, chosen by the Editors as Featured Article, 080401, https://doi.org/10.1063/5.0333561 .

2. Chekroun, M. D., E. Simonnet, and M. Ghil, 2011: Stochastic climate dynamics: Random attractors and time-dependent invariant measures, Physica D, 240(21), 1685–1700, doi:10.1016/j.physd.2011.06.005 .

3. Ghil, M., and V. Lucarini, 2020: The physics of climate variability and climate change, Rev. Mod. Phys., 92(3), 035002, doi: 10.1103/RevModPhys.92.035002.

4. Ghil, M., A. Haraux, J. Roux, and N. Bodnariuk, 2026: Mathematics for the Environment, Springer Science & Business Media, 900 pp., in final stages of preparation, to appear in 2 vols., Mathematical Tools & Applications to Climate and Ecology.

5. Maraldi, B., H. A. Dijkstra, and M. Ghil, 2025: Intraseasonal atmospheric variability under climate trends, Chaos, 35(5), 053136, https://doi.org/10.1063/5.0253103 .

6. B. Walsh, 2014: Forget global warming and get ready for global weirding. TIME Magazine, December 29, 2014 - January 5, 2015 issue, https://time.com/3640189/global-warming-global-weirding/. Feature article.
`
    },

    feudel: {
      name: "Ulrike Feudel",
      affiliation: "ICBM, Carl von Ossietzky University Oldenburg, Germany",
      title: "Critical transitions in complex dynamical systems: theory and applications to ecosystems and climate",
      abstract: `
Many systems in nature are characterized by the coexistence of different stable states for a 
given set of environmental parameters and external forcing. Examples for such behavior can 
be found in different fields of science ranging from mechanical or chemical systems to 
ecosystem and climate dynamics. Perturbations, applied to those natural systems can lead 
to a critical transition from one stable state to another. Such critical transitions -- also called 
tipping phenomena -- can happen in various ways: (1) due to bifurcations, i.e. changes in the 
dynamics when external forcing or parameters are varied extremely slow (2) due to 
fluctuations which are always inevitable in natural systems, (3) due to shocks or extreme 
events, and (4) due to rate-induced transitions, i.e. when external forcing changes too fast 
compared to the ability of the forced system to follow the changes. We discuss these critical 
transitions and their characteristics and illustrate them with examples from mechanical and 
natural systems. Moreover, we relate them to the concept of resilience developed in 
ecology. Special emphasis is given to non-autonomous systems, in which we highlight the 
interplay between different time scales, like the dissipative time scale and the time scale of 
the variation of parameters or forcing. Moreover, we discuss the role of unstable states, that 
are not directly observable in nature, but nevertheless act as the organizing centers of the 
dynamics.
`
    },

    urbani: {
      name: "Cristina Urbani",
      affiliation: "Universitas Mercatorum, Rome, Italy",
      title: "Analysis of a Two-Layer Diffusive Energy Balance Model",
      abstract: `
Energy Balance Models (EBMs) provide a simple yet effective framework for describing the Earth's climate. Introduced by Budyko and Sellers in the late 1960s, classical EBMs describe the evolution of the zonally averaged surface temperature through a one-dimensional diffusive equation.

A natural extension of these models is to include vertical resolution by accounting for the energy exchange between the Earth's surface and the atmosphere. In this talk, I will present the mathematical analysis of a two-layer diffusive EBM. I will first briefly review the main results obtained for the spatially homogeneous model, including well-posedness, positivity, and long-time behaviour [1].

I will then focus on the spatially dependent system [2]. The main ingredient is the establishment of new maximum and comparison principles for coupled degenerate cooperative parabolic systems. These results allow us to prove global well-posedness, preservation of positivity, and the existence of distinguished equilibria. Finally, I will discuss the asymptotic dynamics of the model by proving the existence of a global attractor.

I will conclude with a brief glimpse into the stochastic version of the model, highlighting some of the mathematical results obtained so far in [3].  

References

1. P. Cannarsa, V. Lucarini, P. Martinez, C. Urbani, J. Vancostenoble, Analysis of a Two-Layer Energy Balance Model: Long-Time Behaviour and Greenhouse Effect, Chaos, 33 (2023), 113111

2. P. Cannarsa, V. Lucarini, P. Martinez, C. Urbani, J. Vancostenoble, Comparison Principles and Long-Time Behaviour for a Diffusive Energy Balance Model with Vertical Resolution, (2026) submitted

3. J. Broeker,  P. Cannarsa, G. Carigi, T. Kuna, C. Urbani, A Stochastic Two-Layer Energy Balance Model: well-posedness and exponential ergodicity, (2026) preprint
`
    },

    see: {
      name: "Simon See",
      affiliation: "Director, NVIDIA AI Technology Center",
      title: "TBC",
      abstract: `
TBC
`
    },

    zanchi: {
      name: "Marco Zanchi",
      affiliation: "Laboratoire des Sciences du Climat et de l’Environnement (LSCE), France",
      title: "Learning a recurrence-based latent space of North Atlantic-European weather regimes with Joint Embedding Predictive Architectures",
      abstract: `
European winter weather is largely organised into a small number of recurrent and persistent large-scale flow configurations of the North Atlantic European circulation, known as weather regimes. These regimes influence cold spells, windstorms, and prolonged anomalies in energy demand and renewable energy production. They are widely used in sub-seasonal prediction, climate model evaluation, and the interpretation of extreme events. Weather regimes are typically identified by clustering in a truncated Empirical Orthogonal Function (EOF) space, whose dimensionality is fixed a priori according to a variance criterion. Yet variance is not the fundamental property that defines a weather regime: regimes are atmospheric states that recur frequently and in which the atmosphere tends to persist.

We propose to learn a representation of the circulation in which recurrence itself provides the training signal, using a Joint Embedding Predictive Architecture (JEPA). JEPAs learn without labels and without reconstructing the input: a convolutional encoder is trained to map different views of the same underlying state to nearby latent representations. The choice of views therefore determines what the representation retains (what the views have in common) and what it discards. In computer vision, these views are typically generated through hand-crafted augmentations, which have no obvious physical justification for geopotential fields. Here, we derive them directly from the dynamics. For each winter day in ERA5 daily 500-hPa geopotential height anomalies from 1979 to the present, we identify the 15 closest circulation analogues, excluding temporally adjacent days, and treat them as different views of the same dynamical state. The resulting latent space therefore retains the features shared by recurrences of a flow configuration, while VICReg regularisation prevents representation collapse.

We evaluate the recurrence-based latent space against EOF and beta-variational autoencoders representations of equal dimension on a held-out period. We first ask whether the classical regimes (NAO+, NAO-, Atlantic Ridge and Scandinavian Blocking) emerge as distinct regions of the latent space without being imposed, using externally defined circulation indices as linear probes. We then test whether the latent geometry encodes the local dimension and persistence of the flow, and whether residence times and transition pathways are more coherent than in variance-based coordinates. The approach is designed to be transferred to climate model simulations, where it can address whether anthropogenic forcing alters this organisation and not only the mean state.
`
    },

    yang: {
      name: "Yuxuan Yang",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    galfi: {
      name: "Melinda Galfi",
      affiliation: "Vrije Universiteit Amsterdam, Netherlands",
      title: "How surprising are rare climate extremes?",
      abstract: `
From a human perspective, extreme weather and climate events are always surprising. However, the statistical and physical characteristics of different types of extremes can vary substantially, as reflected in the three distinct tail behaviours of limiting extreme-value distributions.
In the climate system, extremes on large spatial scales frequently exhibit strong similarities. For example, intense heatwaves in the mid-latitudes tend to share common spatio-temporal evolution and underlying circulation patterns. We refer to this property as the “typicality of extremes”. Notably, this resemblance tends to increase with event intensity, a feature that can be interpreted within the framework of large deviation theory. At smaller spatial scales, by contrast, extremes display greater heterogeneity and complexity, often associated with fat-tailed distributions.
In this presentation, I first discuss these characteristics in a steady-state climate. I then examine how global warming may alter the behaviour and typicality of extremes and discuss the implications of these properties for the training of AI models.
`
    },

    galatolo: {
      name: "Stefano Galatolo",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    ortega: {
      name: "Juan-Pablo Ortega",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    barker: {
      name: "Dale Barker",
      affiliation: "Centre for Climate Research Singapore",
      title: "TBC",
      abstract: `
TBC
`
    },

    dong: {
      name: "Chenyu Dong",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    andrews: {
      name: "Emma Andrews",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    fan: {
      name: "Jingfang Fan",
      affiliation: "Beijing Normal University, China",
      title: "Complexity science and AI Methods for Earth System Tipping Points",
      abstract: `
Critical phenomena are common in nature and society, from phase transitions and extreme weather to sea-ice loss, ecosystem degradation, and financial fluctuations. When complex systems approach a critical threshold, they often show early-warning signals such as critical slowing down, stronger fluctuations, expanding correlations, and reduced resilience. The Earth system is a coupled complex system involving the atmosphere, ocean, land, biosphere, and cryosphere. Local disturbances may be amplified and trigger cascading changes across regions and components. This talk will introduce key ideas from statistical physics, nonlinear dynamics, complex systems science, and artificial intelligence, including phase transitions, percolation, self-organized criticality, critical slowing down, complex networks, and data-driven prediction. Typical examples such as extreme weather and climate tipping points will be used to show how these methods help reveal mechanisms, improve early warning, and support climate-risk management.
`
    },

    vaienti: {
      name: "Sandro Vaienti",
      affiliation: "Université de Toulon et Centre de Physique Théorique, Marseille, France",
      title: "Statistics of open systems and metastability",
      abstract: `
We review a few recent results on open dynamical systems, eventually randomly perturbed. Two main points will be addressed. Limit theorems characterizing convergence to equilibrium on the surviving set and metastability whenever "openess" allows jumps of the trajectories among different regions in phase space.

`
    },

    brunet: {
      name: "Gilbert Brunet",
      affiliation: "Scientist Emeritus, Environment and Climate Change Canada",
      title: "Understanding Predictability, Physical and Dynamical Processes to inform Data-driven Weather and Climate Prediction Models R&D",
      abstract: `
Extreme weather events are increasingly producing unprecedented floods, droughts, wildfires, 
and ecosystem disruptions across spatial and temporal scales. Rapid urbanization and the 
evolving global economy have amplified the need for accurate climate-change projections and 
improved numerical weather prediction, particularly for disruptive—and occasionally 
beneficial—weather and climate phenomena. Meeting this demand requires continued 
progress in understanding atmospheric predictability, physical processes, and dynamical 
systems, especially as artificial intelligence (AI) becomes more deeply integrated into 
prediction science. A central challenge is to identify the physical and dynamical processes that 
govern the predictability of diverse weather and climate events so that AI-based prediction 
systems can be trained in a scientifically grounded and optimal manner. Our discussion will 
highlight several key examples, ranging from predictors of tropical-cyclone genesis to 
diagnostics of planetary-scale climate extremes. 
At intermediate time scales, notably sub-seasonal to seasonal (S2S) prediction, we show how 
data-driven weather and climate models can be significantly optimized through targeted 
training strategies. The S2S variability of the global atmosphere has been extensively 
characterized over recent decades. A prevailing paradigm decomposes this variability into two 
normal-mode components—quasi- or discrete modes and continuous spectra—interpreted as 
perturbations to a time-mean zonal flow (Brunet 1994; Zadra et al. 2002a,b). Discrete modes 
represent transient phenomena such as storms and teleconnections, while the continuous 
spectrum acts as an atmospheric “skeleton” that modulates large-scale circulation. Under this 
framework, the discrete spectrum encompasses familiar S2S variability patterns such as the 
Arctic Oscillation and the Madden–Julian Oscillation.
We demonstrate that this atmospheric decomposition, known as empirical normal modes 
(ENMs), forms a complete and unique Hamiltonian canonical basis. This canonical property 
enables substantial dimensionality reduction of the atmospheric evolution operator, offering a 
powerful pre-conditioning strategy for data-driven S2S prediction. We outline how ENMs can 
be computed using spatial covariance methods and discuss their theoretical equivalence to 
POP/LIM approaches based on time-lag covariances. Their predictive potential is illustrated 
through statistical regression and AI-based techniques following Brunet and Vautard (1996).
Finally, we will address atmospheric waviness, whose dynamical interpretation has remained 
ambiguous. Using potential vorticity (PV) as a materially conserved tracer, we formulate 
waviness in terms of the Rossby restoring-force mechanism and derive a PV-based measure 
of meridional displacement. Applied to 40 winters of ERA-5 data, this framework reveals robust 
trends in the restoring-force parameter γ₀ and links its variability to atmosphere angular 
momentum (AAM), ENSO, the Arctic Oscillation, and the Pacific–North American pattern. A 
weakened background PV gradient at high latitudes explains increased trend in meridional 
air-mass excursions and recent temperature extremes (Brunet, Lin and Davies, 2026)
`
    },

    gaybalmaz: {
      name: "Francois Gay-Balmaz",
      affiliation: "Nanyang Technological University, Singapore",
      title: "Thermodynamically Consistent Modeling of Geophysical Fluids: A Variational Perspective",
      abstract: `
We present a Lagrangian variational framework for the modeling of single- and multicomponent geophysical fluids, encompassing both reversible (entropy-conserving) and irreversible (entropy-generating) processes. The framework naturally incorporates moisture and extends to semi-compressible fluid models relevant to atmospheric and oceanic dynamics. By construction, the resulting equations satisfy the first and second laws of thermodynamics, providing a systematic route to thermodynamically consistent models. We also discuss recent developments in using this variational structure to construct thermodynamically consistent numerical discretizations for geophysical fluid systems.
`
    },

    liu: {
      name: "Yang Liu",
      affiliation: "National University of Singapore, Singapore",
      title: "In-Context Operator Networks (ICON): A Research Program for Numerical Intelligence",
      abstract: `
Intelligence is commonly understood as the ability to acquire knowledge, adapt to unfamiliar situations, and solve new problems. Large language models exhibit this capacity by inferring task-relevant knowledge from textual context and applying it to new tasks. Yet intelligence need not be confined to language. Scientific and social systems often reveal themselves numerically before we can fully describe them in words. We call the ability to acquire and apply knowledge from numerical context “numerical intelligence” and view it as a foundational pillar of artificial intelligence alongside linguistic intelligence.

We proposed “In-Context Operator Learning” paradigm and the corresponding model “In-Context Operator Networks” (ICON) for numerical intelligence. We will show how a single ICON model (without fine-tuning) manages multiple families of PDE problems. In our latest work, we trained Unified ICON (UNICON) on real-world datasets across different disciplines, including weather, hydrology, power, and traffic. And it generalizes to completely novel disciplines, e.g. web activity. Apart from the model itself, we can also design “harness” for ICON due to the flexibility of the context. We will introduce building blocks, including “chain of operators” and “contextual ensemble learning”. With such techniques, we outperformed state-of-the-art (SOTA) expert models in disciplines unseen in training.

To accelerate our research, we built Evolving Ensemble of Agents (EvE), a decentralized agent system that co-evolves with downstream task solutions. We will show how EvE helps ourselves design ICON architectures and harness systems, and beyond.
See more details on the website: https://scaling-group.github.io/
`
    },

    li: {
      name: "Qianxiao Li",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    palmer: {
      name: "Tim Palmer",
      affiliation: "University of Oxford, UK",
      title: "Persistent anticyclones, AI and quantum computing: Why We Need a 'CERN for Climate Change'",
      abstract: `
At the thermodynamic level, climate change is simple 19th Century physics. Predictions of warmer wetter winters and hotter drier summers draw on such thermodynamic ideas. However, these do not explain what happened this summer, where drought, heatwaves and fire spread across large parts of Europe. The proximate cause of such meteorological conditions was a persistent anticyclone positioned over Western Europe. Were such anticylonic conditions made more likely by climate change? To answer this question requires us to understand not just the thermodynamic aspects of climate change, but the dynamic feedbacks too. This changes climate change prediction from a simple thermodynamic problem to a highly complex, nonlinear 21st Century problem. Indeed I argue that it is so complex that current generation climate models are simply not good enough to provide reliable answers. I conclude we need a “CERN for Climate Change” (where nations pool human and computational resources) to understand whether the summer of 2026 is going to be the new year-on-year normal for Europe, or whether it is a summer we are unlikely to experience again for many years. Along the way, I will try to discuss the potential role of AI and quantum computing in helping answer these questions.  
`
    },

    mengaldo: {
      name: "Gianmarco Mengaldo",
      affiliation: "National University of Singapore, Singapore",
      title: "TBC",
      abstract: `
TBC
`
    },

    qin: {
      name: "Bo Qin",
      affiliation: "",
      title: "Tracing Uncertainties of Extreme El Niño Prediction to Mesoscale Ocean Currents",
      abstract: `
The predictability of the El Niño-Southern Oscillation (ENSO) has been extensively investigated by tracing monthly averaged or large-scale initial errors, such as heat content and coupled atmosphere-ocean perturbations. Yet these slowly evolving initial errors may originate from smaller-scale ocean dynamics, which exist in current numerical model and ocean observing system. The relations and energy transition processes between small scale processes and basin wide event remain poorly investigated. In this investigation, mesoscale ocean-current errors are revealed as a hidden source of ENSO forecast uncertainty. A differentiable ocean AI model is constructed, trained on high-resolution GLORYS reanalysis product and coupled with conditional nonlinear optimal perturbation (CNOP) method to identify the most influential current errors for extreme El Niño forecasts. The resulting CNOP-type initial errors are strongly event dependent. For the 1997/98 El Niño, the current error located in the eastern Pacific results in the largest forecast error through locally suppressing original subsurface warming. For the 2015/16 event, the dominate error originates in the western Pacific, reorganizes upper ocean temperature structure and affects the eastern Pacific through the equatorial waveguide. Further analysis reveals that these current errors reshape mesoscale eddy count and eddy kinetic energy, then triggers large-scale temperature errors that weaken El Niño development. The monthly growth rate of the obtained CNOP initial error is aligned with the spring predictability barrier, and their structures are reflected in simulated analysis errors caused by unresolved mesoscale currents. These findings extend ENSO predictability beyond large-scale thermal signals, reveal a mesoscale route of ENSO forecast failure and provide a physical basis for targeted ocean observations and data assimilation.
`
    },


    /* ---- Week 2 ---- */
    gottwald: {
      name: "Georg Gottwald",
      affiliation: "University of Sydney, Australia",
      title: "A Localized Schroedinger Bridge Sampler for Generative Modelling",
      abstract: `
We consider the generative problem of sampling from an unknown distribution for which only a sufficiently large number of training samples are available. We show how combining Schroedinger bridges and Langevin dynamics provides an efficient framework for such problems, in particular for data which are concentrated on a compact sub-manifold. A key bottleneck of this approach though is the exponential dependence of the required training samples on the dimension d of the ambient state space. We propose a localization strategy which exploits conditional independence of conditional expectation values. Our localization replaces a single high-dimensional Schroedinger bridge problem by d low-dimensional Schroedinger bridge problems over the available training samples. In this context, a connection to multi-head self attention transformer architectures is established. The localized sampler is stable and geometric ergodic. The sampler also naturally extends to conditional sampling and to Bayesian inference. We demonstrate the performance of our proposed scheme through experiments on a Gaussian problem with increasing dimensions, on a temporal stochastic process, and on a stochastic subgrid-scale parametrization conditional sampling problem. We show how this can be sued for sub grid-scale parametrizatioon on a multi scale L96 model. This is joint work with Sebastian Reich.
`
    },

    falasca: {
      name: "Fabrizio Falasca",
      affiliation: "Courant Institute of Mathematical Sciences, New York University, USA",
      title: "Challenges and strategies for data-driven modeling of multiscale turbulent systems: focus on climate modeling, forced responses and causality.",
      abstract: `
Current advances in data-driven weather forecasting are motivating the development of autoregressive neural emulators for the climate system. Climate emulation, however, poses distinct challenges: useful models should be numerically stable, capture stationary statistics, and predict responses to external perturbations. Accurately capturing forced responses is essential for advancing scientific understanding as it allows us to probe causal mechanisms via “what if?” experiments.

In the first part of this talk, I will discuss conceptual limitations that arise when learning models of multiscale dynamical systems such as the Earth's climate from observational data. In particular, I will clarify how the ability of a climate emulator to reproduce perturbed statistics depends critically on (a) the choice of an appropriate coarse-grained representation and (b) stochastic parameterizations of unresolved processes. These considerations will motivate reduced-order stochastic models tailored to specific scientific questions, processes, and scales as a complementary approach to general-purpose climate emulators.

I will then present novel strategies for constructing and validating such low-order stochastic models. First, I will introduce a discrete-time formulation of turbulent dynamical systems with exact energy-conserving nonlinearities that can be parameterized by neural networks, yielding stable physics-constrained emulators. Second, I will leverage the fluctuation-dissipation theorem (FDT), together with advances in generative modeling, to estimate responses to perturbations from unperturbed data alone, providing a new benchmark for model validation. Third, I will show that the FDT also provides causal constraints that can be optionally incorporated into neural networks loss functions. After testing the framework on idealized models of geophysical turbulence, I will present a real-world application to tropical climate dynamics using reanalysis data. The resulting response-validated stochastic model is used to investigate the long-term causal drivers of El Niño–Southern Oscillation variability by probing its response to perturbations across tropical ocean basins and variables. Taken together, these results provide a modular framework for stable reduced-order models capable of probing causal mechanisms in realistic, partially observed turbulent dynamical systems.
`
    },

    froyland: {
      name: "Gary Froyland",
      affiliation: "UNSW Sydney, Australia",
      title: "Detecting transient metastability and optimising system perturbations from observations",
      abstract: `
In the first part of this talk I describe how to identify the emergence (and disappearance) of transient almost-invariant sets using a time-expanded Fokker-Planck generator. The leading eigenvectors of this inflated generator capture the full spacetime evolution of the almost-invariant sets.  I will illustrate this with the tracking of the onset and decay of atmospheric blocks, and the continual emergence and disappearance of 3D turbulent superstructures in Rayleigh-Benard convection.
In the second part of the talk I describe how to apply the operator-based methodology of optimal linear response to systems that are only partially observable. Given a user-specified objective that the user desires to maximally increase or decrease, one may explicitly determine the optimal perturbation to maximally move this objective in the desired direction. Crucially, these optimal perturbations may be obtained in the original observation space or in any other desired observed coordinates. An initial illustration is given for the Lorenz system (with full observation), and then we apply our techniques to optimally perturb the decorrelation time and cycle period of the El-Nino Southern Oscillation.
`
    },

    sciamarella: {
      name: "Denise Sciamarella",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    jfreitas: {
      name: "Jorge Milhazes Freitas",
      affiliation: "Centro de Matemática e Faculdade de Ciências da Universidade do Porto, Portugal",
      title: "Clustering profiles of extremes in dynamical models",
      abstract: `
Dynamical systems are very useful for modelling meteorological phenomena, where heavy-tailed extremes may exhibit different clustering profiles. We consider specially designed decorated point processes, capable of describing and recording these clustering profiles. These tools are then used to gain further statistical insight, including the study of enriched functional limit theorems and large deviations for sums of heavy-tailed observables.
`
    },

    yiou: {
      name: "Pascal Yiou",
      affiliation: "Laboratoire des Sciences du Climat et de l’Environnement (LSCE), France",
      title: "Beyond extremes: a few thoughts on black swans and aliens, where statistics and physics meet",
      abstract: `
Climate extremes are intensifying globally. Our ability to anticipate unprecedented events is limited by the computational burden of sampling distribution tails of variables and the limited number of observations. Solving this fundamental discrepancy has led to several research alleys. This presentation will explore some of them. The overarching goal is to understand the gap between known observed records, and potential (unobserved) most extremes.
The notion of “black swans” has been popularized by Taleb (2010). Black swans can be defined by observations that escape our empirical understanding. I propose a pragmatic statistical way of defining black swans, and argue that such unexpected events can be fairly frequent. 
The simulation of climate black swans can be achieved through the use of rare event algorithms (Noyelle, 2024). Such approaches seem to allow extrapolating empirical scaling laws (Lancelin et al., 2026; Miloshevich et al., 2024). But nothing guarantees that the obtained extremes are the most extremes.
If we assume that climate dynamical variables (i.e., the variables of the primitive equations (Peixoto and Oort, 1992)) evolve around a compact (strange) attractor (Temam, 1988), then those variables are bounded. I will illustrate why this is true for temperature, and how to determine an upper bound from physical principles.
I will discuss the implication of the existence of bounds and the fact that records are far from those bounds (for temperature). I will introduce “aliens”, which are events that have never been reached, but are physically possible. This offers a new paradigm that complements black swans.

References
1. Lancelin, A., Wikner, A., Dubus, L., Le Priol, C., Abbot, D. S., Bouchet, F., Hassanzadeh, P., and Weare, J.: AI-boosted rare event sampling to characterize extreme weather, Physical Review Letters, 137, 064201, 2026.
2. Miloshevich, G., Lucente, D., Yiou, P., and Bouchet, F.: Extreme heat wave sampling and prediction with analog Markov chain and comparisons with deep learning, Environmental Data Science, 3, e9, https://doi.org/10.1017/eds.2024.7, 2024.
3. Noyelle, R.: Statistical and dynamical aspects of extreme heatwaves in the mid-latitudes, PhD Thesis, Univ. Paris-Saclay, 289 pp., 2024.
4. Peixoto, J. P. and Oort, A. H.: Physics of climate, American Institute of Physics, New York, xxxix, 520 p. pp., 1992.
5. Temam, R.: Infinite-dimensional dynamical systems in mechanics and physics, Springer-Verlag, New York, xvi, 500 p. pp., 1988.

`
    },

    zhou: {
      name: "Xiaoling Zhou",
      affiliation: "Centre for Climate Research Singapore, Singapore",
      title: "Climate Downscaling in Southeast Asia Using Generative AI Methods",
      abstract: `
Artificial Intelligence (AI) has emerged as a promising approach for enhancing regional climate projections through efficient, high-resolution climate downscaling. This presentation introduces our AI downscaling strategy for Southeast Asia (SEA), focusing on the development of generative AI models for regional climate applications. An overview of the datasets, model architecture, and evaluation framework will first be presented, followed by the implementation of AI downscaling models based on the NVIDIA CorrDiff framework. The trained models are developed to downscale coarse-resolution global climate models (GCMs) to finer spatial resolution, with a particular focus on daily precipitation and daily maximum temperature. Model performance is evaluated using a range of statistical and spatial verification metrics to assess the representation of daily total precipitation, spatial structures and climate change signals. Initial results demonstrate that the AI models can effectively reconstruct fine-scale climate features while maintaining good agreement with the reference datasets. Finally, the presentation discusses the remaining challenges for AI-based climate downscaling, particularly the temporal consistency and transferability of AI models across different GCMs. Future work on improving model generalization and robustness to support regional climate projection applications in Southeast Asia will also be outlined.
`
    },

    carrassi: {
      name: "Alberto Carrassi",
      affiliation: "University of Bologna, Italy",
      title: "Merging data assimilation and machine learning at various degrees: examples from Arctic sea ice and radiative transfer",
      abstract: `
Data assimilation (DA) and machine learning (ML) share a common mathematical ground: both seek to infer the state of a system, or the rules that govern it, from incomplete and noisy data. Their convergence has become a defining shift across Earth-system science. In this talk I will discuss how DA and ML can be merged at increasing degrees of integration, with examples from Arctic sea ice, coupled atmosphere–ocean dynamics and atmospheric radiative transfer.

At a first level, DA trains ML. Analysis increments carry information about the systematic error of the forecast model, and a neural network trained on them can learn to correct it. I will show how this hybrid approach improves forecast skill and attractor reconstruction in a coupled atmosphere–ocean model, substantially reduces errors in the Icepack sea-ice column model, and, embedded in a 3D-Var global ocean–sea-ice reanalysis, clearly improves sea-ice thickness in the central Arctic.

At a second level, ML replaces components of the DA system. I will present AI-neXtSIM, a fully data-driven sea-ice emulator, and discuss two known limitations of deterministic emulators: the damping of small, fast scales in the power spectrum and an under-dispersion that makes ensembles collapse. I will show how physics-like hyperparameters, playing the role of the air–ice drag coefficient, can be identified in the network and used to build ensembles. On the observation side, I will introduce an ML emulator of a radiative transfer model for ESA's forthcoming far-infrared FORUM mission, whose errors lie largely within the instrument noise at a fraction of the computational cost.

At a third level, ML reshapes the DA algorithm itself. An ensemble transform Kalman filter operating in the latent spaces of two variational autoencoders can respect the non-Gaussian, manifold-constrained statistics of sea-ice models, while transfer learning lets it adapt to non-autonomous conditions.

I will close with a perspective rooted in dynamical systems theory. To be trusted under a changing climate, AI emulators must be faithful not only to the mean state but to the chaotic properties of the system: Lyapunov spectra, power spectra, intermittency and bifurcations. These are precisely the properties that shape weather extremes, making them central to any use of AI for extreme-event prediction. Using the Lorenz-96 and Kuramoto–Sivashinsky models, I will argue that structural instability and rare regime shifts challenge extrapolation and transfer learning, and that dynamical precursors such as covariant Lyapunov vectors should inform how emulators are trained.
`
    },

    amfreitas: {
      name: "Ana Cristina Moreira Freitas",
      affiliation: "Faculdade de Economia and Centro de Matemática, Universidade do Porto, Portugal",
      title: "Multivariate Extremes in Dynamical Systems",
      abstract: `
We present a theory for multivariate extreme value analysis of dynamical systems. Namely, we provide conditions adapted to the dynamical setting that enable the study of dependence between extreme values of the components of d-dimensional observables evaluated along the orbits of the systems. We study this cross-sectional dependence, which results from the combination of spatial and temporal dependence structures. We give several illustrative applications, where concrete systems and sources of dependence are introduced and analysed.

Acknowledgements:
The author was partially supported by CMUP, member of LASI, which is financed by national funds through FCT - Fundação para a Ciência e a Tecnologia, I.P., under the projects with reference UID/00144/2025 and associated DOI given by https://doi.org/10.54499/UID/00144/2025.
`
    },

    bocquet: {
      name: "Marc Bocquet",
      affiliation: "CEREA, ENPC, EdF R&D, Institut Polytechnique de Paris, Champs-sur-Marne, France",
      title: "Machine learning–driven advances in geophysical data assimilation",
      abstract: `
Machine learning (ML), particularly deep learning (DL), is playing a growing role in geophysical data assimilation (DA),
a cornerstone of numerical weather prediction that combines observations with model predictions to estimate the state of
a system. ML can enhance existing methods, complement them, or potentially replace parts of the DA cycle. 

This talk reviews recent developments and promising directions for integrating ML into DA to improve forecasting in the
geosciences. ML can provide efficient approximations of complex physical processes, correct model errors, and help
combine information from models and observations. In ensemble DA, which uses multiple forecasts to represent
uncertainty, ML can improve how these forecasts are generated and how DA methods are tuned. It also opens the
possibility of learning how to update forecasts with observations, or even learning the entire DA and forecast cycle. 

I will illustrate these opportunities with two examples: using DL to discover new and efficient ways to combine
forecasts with observations, and embedding generative AI within classical DA methods. 
`
    },

    messori: {
      name: "Gabriele Messori",
      affiliation: "Uppsala University, Sweden",
      title: "TBC",
      abstract: `
TBC
`
    },

    chan: {
      name: "Ronald Chan",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    xiang: {
      name: "Xiang Shili",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    tan: {
      name: "Paul Tan",
      affiliation: "",
      title: "Predicting Convection, Protecting Capacity: AI-Enabled Weather Intelligence for Asia-Pacific Aviation",
      abstract: `
TBC
`
    },

    charo: {
      name: "Gisela D. Charó",
      affiliation: "",
      title: "TBC",
      abstract: `
TBC
`
    },

    maulik: {
      name: "Romit Maulik",
      affiliation: "Purdue University, USA",
      title: "Multimodal Spatiotemporal Atmospheric Data Assimilation with Latent Video Flow-matching",
      abstract: `
Data assimilation (DA) uses Bayesian inference to update the state of a numerical forecast model with observed data. In this study, we propose a fundamentally different, unified approach to atmospheric data assimilation. We use latent video flow-matching to sample temporally consistent trajectories from a prior trained using ERA5 reanalysis (69 variables over an 8-day window). We also use posterior sampling to assimilate real observation sources, such as those from the NOAA Integrated Global Radiosonde Archive and the Integrated Surface Database. Because the prior generates a continuous trajectory, it naturally propagates information between observed and unobserved frames. Therefore, we can perform various DA tasks, such as filtering and smoothing, simply by changing the observed frames. Moreover, we generate full-state ensemble forecasts directly from sparse observations, achieving performance competitive with state-of-the-art observation-to-forecast models.
`
    },

    faranda: {
      name: "Davide Faranda",
      affiliation: "Directeur de Recherche CNRS, Institut Pierre Simon Laplace et Université Paris-Saclay, France.",
      title: "Attribution Science in the AI Era",
      abstract: `
Every major storm, heatwave or flood now raises the same question: did climate change cause it, and by how much? Extreme-event attribution answers this by comparing the observed event in today's climate with how the same weather situation would have looked in a world without human-driven warming. This talk reviews how the field has developed and how artificial intelligence is reshaping it. We first introduce ClimaMeter, an observation-based rapid attribution framework developed at IPSL-CNRS. It builds factual and counterfactual worlds directly from ERA5 reanalysis by comparing circulation analogues from past and present periods, without a climate model in the loop. ClimaMeter produces reports within 12 to 48 hours of an event and has analysed more than 100 extremes worldwide. It also assesses the role of natural variability, changes in seasonality, the rarity of the event and population exposure. For the June 2026 western European heatwave, the analysis shows that human-driven climate change made similar conditions up to 2.5 °C warmer, with about 327 million people exposed. We then move from hazards to impacts, using the August 2023 heatwave in France as a case study. Climate change raised electricity demand and peak load while reducing wind and nuclear output, and solar gains were too small to compensate. The result was a compound stress on the power grid that the hazard alone would not reveal. Finally, we discuss where machine learning enters attribution: emulation, downscaling, generative counterfactuals and the diagnosis of hazards that physical models do not resolve. As an example, we show that a U-Net trained on ERA5 predictors and lightning observations outperforms simpler statistical models. We conclude that AI can bring speed, local relevance and new hazards into attribution, but only interpretable and physically consistent models should be part of an attribution chain that must remain transparent and trustworthy.
`
    },


    /* ---- Listed as a speaker but not yet in the schedule ---- */
    gentine: {
      name: "Pierre Gentine",
      affiliation: "Columbia University",
      title: "TBC",
      abstract: `
TBC
`
    },

  },

  schedule: [
    {
      label: "Week 1", dates: "Nov 2 – Nov 6",
      days: [
        {
          day: "Day 1", date: "Mon, Nov 2",
          sessions: [
            { time: "10:00–11:00", label: "Arrival and networking" },
            { time: "11:00–12:00", label: "Opening ceremony" },
            { time: "12:00–14:00", break: "Lunch break" },
            { time: "14:00–15:00", type: "Keynote",      speaker: "ghil" },
            { time: "15:00–15:15", break: "Tea break" },
            { time: "15:15–16:15", type: "Keynote",      speaker: "feudel" },
            { time: "16:15–16:30", break: "Tea break" },
            { time: "16:30–17:30", type: "Keynote",      speaker: "urbani" }
          ]
        },
        {
          day: "Day 2", date: "Tue, Nov 3",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "see" },
            { time: "10:30–10:40", social: "Group Photo" },
            { time: "10:40–11:10", break: "Tea break" },
            { time: "11:10–11:40", type: "Short talk",   speaker: "zanchi" },
            { time: "11:40–12:10", type: "Short talk",   speaker: "yang" },
            { time: "12:10–14:00", break: "Lunch break" },
            { time: "14:00–15:00", type: "Keynote",      speaker: "galfi" },
            { time: "15:00–15:15", break: "Tea break" },
            { time: "15:15–16:15", type: "Keynote",      speaker: "galatolo" },
            { time: "16:15–16:30", break: "Tea break" },
            { time: "16:30–17:30", type: "Keynote",      speaker: "ortega" }
          ]
        },
        {
          day: "Day 3", date: "Wed, Nov 4",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "barker" },
            { time: "10:30–11:00", break: "Tea break" },
            { time: "11:00–11:30", type: "Short talk",   speaker: "dong" },
            { time: "11:30–12:00", type: "Short talk",   speaker: "andrews" },
            //{ time: "12:00–14:00", break: "Lunch break" },
            { time: "12:00–14:00", social: "Catered Buffet Lunch" },
            { time: "14:00–15:00", type: "Keynote",      speaker: "fan" },
            { time: "15:00–15:15", break: "Tea break" },
            { time: "15:15–16:15", type: "Keynote",      speaker: "vaienti" },
            { time: "16:15–16:30", break: "Tea break" },
            { time: "16:30–17:30", type: "",             speaker: null }
          ]
        },
        {
          day: "Day 4", date: "Thu, Nov 5",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "brunet" },
            { time: "10:30–11:00", break: "Tea break" },
            { time: "11:00–12:00", type: "Invited talk", speaker: "gaybalmaz" },
            { time: "12:00–14:00", break: "Lunch break" },
            { time: "14:00–15:00", type: "Keynote",      speaker: "liu" },
            { time: "15:00–15:15", break: "Tea break" },
            { time: "15:15–16:15", type: "Keynote",      speaker: "li" },
            { time: "16:15–16:30", break: "Tea break" },
            { time: "16:30–17:30", type: "Keynote",      speaker: "palmer", virtual: true }
          ]
        },
        {
          day: "Day 5", date: "Fri, Nov 6",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "mengaldo" },
            { time: "10:30–11:00", break: "Tea break" },
            { time: "11:00–12:00", type: "Invited talk", speaker: null },
            { time: "12:00–14:00", break: "Lunch break" },
            { time: "14:00–15:00", type: "Invited talk", speaker: "qin" },
            { time: "15:00",       break: "Early finish" }
          ]
        }
      ]
    },
    {
      label: "Week 2", dates: "Nov 9 – Nov 13",
      days: [
        {
          day: "Day 6", date: "Mon, Nov 9",
          holiday: "Deepavali public holiday",
          sessions: [
            { time: "09:30–12:00", label: "Optional: walk around a nature reserve, followed by lunch" }
          ]
        },
        {
          day: "Day 7", date: "Tue, Nov 10",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "gottwald" },
            { time: "10:30–10:40", social: "Group Photo" },
            { time: "10:40–11:10", break: "Tea break" },
            { time: "11:10–12:00", type: "Invited talk", speaker: "falasca" },
            { time: "12:00–14:00", break: "Lunch break" },
            { time: "14:00–15:00", type: "Keynote",      speaker: "froyland" },
            { time: "15:00–15:15", break: "Tea break" },
            { time: "15:15–16:15", type: "Keynote",      speaker: "sciamarella" },
            { time: "16:15–16:30", break: "Tea break" },
            { time: "16:30–17:30", type: "Keynote",      speaker: "jfreitas" },
            { time: "19:00–21:00", social: "Workshop Dinner" }
          ]
        },
        {
          day: "Day 8", date: "Wed, Nov 11",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "yiou" },
            { time: "10:30–11:00", break: "Tea break" },
            { time: "11:00–12:00", type: "Invited talk", speaker: "zhou" },
            //{ time: "12:00–14:00", break: "Lunch break" },
            { time: "12:00–14:00", social: "Catered Buffet Lunch" },
            { time: "14:00–15:00", type: "Keynote",      speaker: "carrassi" },
            { time: "15:00–15:15", break: "Tea break" },
            { time: "15:15–16:15", type: "Keynote",      speaker: "amfreitas" },
            { time: "16:15–16:30", break: "Tea break" },
            { time: "16:30–17:30", type: "Keynote",      speaker: "bocquet" }
          ]
        },
        {
          day: "Day 9", date: "Thu, Nov 12",
          theme: "Impact on Infrastructure",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "messori" },
            { time: "10:30–11:00", break: "Tea break" },
            { time: "11:00–12:00", type: "Invited talk", speaker: "chan" },
            { time: "12:00–14:00", break: "Lunch break" },
            { time: "14:00–15:00", type: "Invited talk", speaker: "xiang" },
            { time: "15:00–15:15", break: "Tea break" },
            { time: "15:15–16:15", type: "Invited talk", speaker: "tan" },
            { time: "16:15–16:30", break: "Tea break" },
            { time: "16:30–17:00", type: "Short talk",   speaker: "charo" }
          ]
        },
        {
          day: "Day 10", date: "Fri, Nov 13",
          sessions: [
            { time: "09:30–10:30", type: "Keynote",      speaker: "maulik" },
            { time: "10:30–11:00", break: "Tea break" },
            { time: "11:00–12:00", type: "",             speaker: "faranda" },
            { time: "12:00–14:00", break: "Lunch break" },
            { time: "14:00",       break: "Early finish" }
          ]
        }
      ]
    }
  ]
};
