# Expansion Build Log
**Started:** 4 March 2026
**Plan:** mathsedu_expansion_plan.docx (Version 2)

---

## Decisions Log

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| 1 | Drop AI2 (Gradient Descent), AI3 (Information Theory), AI8 (Monte Carlo) | DROP — already fully built | Pages `gradient_descent.html`, `entropy_information.html`, `monte_carlo.html` exist |
| 2 | D3 Scaling Laws — new page or upgrade existing? | NEW page `scaling_laws_nature.html` | Existing `scaling_laws.html` is AI-specific (Chinchilla); biological/physical scaling (Kleiber's law) is fundamentally different content |
| 3 | Chapter structure for new appendices | Add as Chapters 14–18 in index.html | Consistent with site evolution from appendices to full chapters (Finance went from App A to Ch 11, Physics from App B to Ch 12) |
| 4 | Chapter numbering and colours | Ch14=Dynamical Systems (#ef4444), Ch15=Biology (#22c55e), Ch16=Chemistry (#f59e0b), Ch17=Solid State Physics (#06b6d4), Ch18=Economics & Game Theory (#8b5cf6) | Colours chosen to be distinct from existing chapters |
| 5 | Phase 1 build order | D1, D2, B2, AI4, then Map of Science | Per expansion plan recommendation — maximum visual impact |
| 6 | Net modules to build | 33 new pages (39 proposed minus 3 existing minus 3 upgrades deferred to later phases) | Upgrades (AI6 Cryptography, C4 Atomic Orbitals, C5 Spectroscopy) deferred to Phase 4 |
| 7 | B1 and B3 — standalone or upgrade? | Standalone new pages | The existing differential_equations.html presets are too brief; standalone pages with full interactivity are more valuable |
| 8 | Accent colour per appendix | Use chapter accent colour consistently across all pages in that appendix | Matches site convention — Ch12 Physics uses #14b8a6, Ch13 AI uses #a78bfa |

## Build Progress

### Phase 1 — Maximum Impact Launch
| Module | File | Status | Notes |
|--------|------|--------|-------|
| D1 — Logistic Map & Chaos | `logistic_map.html` | DONE | Added to Ch14 |
| D2 — Strange Attractors | `strange_attractors.html` | DONE | Added to Ch14 |
| B2 — SIR Epidemic Model | `sir_model.html` | DONE | Added to Ch15 |
| AI4 — Graph Theory & Networks | `graph_theory.html` | DONE | Added to Ch13 |
| Map of Science | `science_map.html` | PENDING | Build after Phase 2 |

### Phase 2 — Biology & CS Core
| Module | File | Status | Notes |
|--------|------|--------|-------|
| B1 — Population Dynamics | `population_dynamics.html` | DONE | Added to Ch15 |
| B3 — Predator-Prey | `predator_prey.html` | DONE | Added to Ch15 |
| B4 — Turing Patterns | `turing_patterns.html` | DONE | Added to Ch15 |
| B7 — Evolutionary Game Theory | `evolutionary_game_theory.html` | DONE | Added to Ch15 |
| B8 — Random Walks & Diffusion | `random_walks_diffusion.html` | DONE | Added to Ch15 |
| AI5 — Markov Chains | `markov_chains.html` | DONE | Added to Ch13 |
| AI7 — Algorithmic Complexity | `algorithmic_complexity.html` | DONE | Added to Ch13 |
| D3 — Scaling Laws in Nature | `scaling_laws_nature.html` | DONE | Added to Ch14 |

### Phase 3 — Chemistry & Accessible Physics
| Module | File | Status | Notes |
|--------|------|--------|-------|
| C1 — Molecular Symmetry | `molecular_symmetry.html` | DONE | Added to Ch16 |
| C2 — Chemical Kinetics | `chemical_kinetics.html` | DONE | Added to Ch16 |
| C6 — Chemical Oscillations | `chemical_oscillations.html` | DONE | Added to Ch16 |
| P1 — Crystal Lattices | `crystal_lattices.html` | DONE | Added to Ch17 |
| P3 — Fourier in Diffraction | `fourier_diffraction.html` | DONE | Added to Ch17 |
| P7 — Fermi-Dirac Statistics | `fermi_dirac.html` | DONE | Added to Ch17 |

### Phase 4 — Advanced Completions
| Module | File | Status | Notes |
|--------|------|--------|-------|
| B5 — Hardy-Weinberg | `hardy_weinberg.html` | DONE | Added to Ch15 |
| B6 — Hodgkin-Huxley Neuron | `hodgkin_huxley.html` | DONE | Added to Ch15 |
| C7 — Molecular Orbital Theory | `molecular_orbitals.html` | DONE | Added to Ch16 |
| P4 — Band Theory | `band_theory.html` | DONE | Added to Ch17 |
| P5 — Phonons | `phonons.html` | DONE | Added to Ch17 |
| P6 — Statistical Mechanics | `statistical_mechanics.html` | DONE | Added to Ch17 |
| E1 — Supply & Demand | `supply_demand.html` | DONE | Added to Ch18 |
| E2 — Game Theory & Nash | `game_theory.html` | DONE | Added to Ch18 |
| E3 — Network Effects | `network_effects.html` | DONE | Added to Ch18 |
| E5 — Repeated Games | `repeated_games.html` | DONE | Added to Ch18 |
| P8 — Superconductivity | `superconductivity.html` | DONE | Added to Ch17 |
| E4 — Auction Theory | `auction_theory.html` | DONE | Added to Ch18 |
| C3 — Thermodynamics upgrade | `chemical_thermodynamics.html` | DONE | Added to Ch16 |
| C4 — Atomic Orbitals | `atomic_orbitals.html` | DONE | Added to Ch16 |
| C5 — Spectroscopy | `spectroscopy.html` | DONE | Added to Ch16 |
