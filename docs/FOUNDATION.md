# Foundation Document

**A Visual Discovery of Mathematics**

*Version 2.0 — March 2026*

*Version 2.0: Updated following independent benchmark analysis against research best practices in mathematics education. New sections added: Benchmark Review Learnings, Evolved Page Standards.*

---

## Mission

To make mathematics visible, interactive, and accessible to every curious mind — starting from the mathematics itself.

Most applied mathematics education begins with a real-world problem and pulls in mathematics to solve it. This project takes the opposite path: we start with the mathematical idea — its structure, its beauty, its internal logic — and then reveal where it appears in the natural world. This distinction matters pedagogically. It lets the mathematics speak for itself before showing its usefulness, building the kind of deep relational understanding that Skemp (1976) identified as the foundation for genuine mathematical fluency.

Too often, mathematics is taught as a collection of rules to memorise and procedures to follow. Students learn to compute without ever seeing why the mathematics works, what it means, or where its beauty lies. This project exists to change that.

Every visualisation in this collection is designed to help the learner *see* the theorem before they prove it, *touch* the parameters before they analyse them, and *discover* the pattern before they are told the formula. We believe that genuine mathematical intuition — the kind that lets you solve problems you have never seen before — comes from understanding, not memorisation.

## Vision

A comprehensive, freely accessible library of interactive mathematical visualisations that spans the entire journey from basic logic to the frontiers of modern mathematics. A resource that a curious 14-year-old can use to fall in love with mathematics, and that a university student can use to deepen intuition they never built in lectures.

We aspire to cover the great arc of mathematical thought:

- **Foundation** — logic, proof, and the rules of reasoning
- **Structure** — numbers, algebra, and the patterns within
- **Shape** — geometry, topology, and the mathematics of space
- **Change** — calculus, differential equations, and dynamics
- **Uncertainty** — probability, statistics, and inference
- **Beauty** — the crown jewels that connect it all
- **Markets** — quantitative finance, where mathematics meets the real world

## Principles

### 1. Visual First
Every topic begins with something you can see and interact with. Formulas come after intuition, not before.

### 2. Self-Contained
Each visualisation is a single HTML file with no external dependencies. Open it in any browser on any device and it works. No installation, no login, no paywall.

### 3. Progressive Difficulty
Topics are rated from 1 to 4 dots of difficulty. The collection is designed so that a student can begin anywhere that matches their level and build upward through increasingly challenging material.

### 4. No Frameworks
Pure HTML, CSS, and JavaScript. Canvas for graphics. No React, no D3, no build tools. This is a deliberate choice: the technology should be as transparent and long-lived as possible. These files will work in a browser twenty years from now.

### 5. Honest Mathematics
Visualisations are tools for building intuition, but they do not replace rigour. Where proofs matter, we show them. Where approximations are made, we say so. The goal is to complement formal study, not to substitute for it.

### 6. Freely Accessible
Licensed under Creative Commons BY-NC-SA 4.0. Anyone can use, share, and adapt this work for non-commercial purposes with attribution.

## Benchmark Review Learnings

In March 2026, the site was independently benchmarked against ten convergent principles drawn from the academic literature on mathematics education (Dehaene, Boaler, Skemp, Freeman et al., NCTM *Principles to Actions*, National Academies *Adding It Up*) and compared to exemplary digital resources (3Blue1Brown, Desmos, GeoGebra, Khan Academy, NRICH, PhET). Full findings are in `Research/benchmark_analysis.md` and `docs/BENCHMARK_RECOMMENDATIONS.md`.

### What the review affirmed

- **Visual-first design is neurologically validated.** Dehaene (1999) demonstrated that mathematical thinking recruits visual-spatial processing areas even for purely numerical tasks. Boaler's work on visual brain pathways directly supports our founding approach. This is the site's core strength.
- **No timed elements, no login, no friction** — fully aligned with research on maths anxiety (Boaler, 2015) and intrinsic motivation (Freeman et al., 2014). The site has zero performance metrics, zero time pressure. This must never change.
- **Narrative journeys are a genuine differentiator.** No comparable resource offers multi-act mathematical storytelling. The journey format aligns with constructionist learning (Papert, 1980) and the RME principle that mathematics is a human activity.
- **The site's philosophy — mathematics first, then its appearances in the world** — is a meaningful and rare differentiator worth making explicit. Most digital resources start from applications; we start from the mathematics itself.

### What the review challenged or identified as gaps

- **Multiple representations (Principle 4):** Strong on graphical, weaker on systematically connecting algebraic, numerical, verbal, and graphical forms simultaneously. Going forward, key pages should show the same concept through multiple lenses where the mathematics warrants it.
- **Real-world context on pure mathematics pages:** The site's strongest pages (Monte Carlo, Brownian Motion, Fourier Transform) are inherently contextual. Pure mathematics pages (group theory, measure theory, category theory) need explicit "Where You'll See This" bridges to applications.
- **Educator pathway:** There is currently no teacher guide, no curriculum mapping, no "use this in your classroom" prompts. Educators are the secondary audience most likely to drive sustained organic traffic.
- **Spaced practice and interleaving (Principle 7):** The most significant gap relative to the research evidence. This is a conscious design choice — the site is a visual discovery resource, not a practice platform — but we will partially address it through "Daily Discovery" and "Explore Next" features that encourage organic re-engagement.

## Architecture

### Technology
- **HTML5 Canvas** for all interactive graphics
- **Vanilla JavaScript** for logic and animation
- **Embedded CSS** for styling (dark theme, responsive)
- **localStorage** for tracking which topics a user has visited
- **GitHub Pages** for hosting at [mathsedu.org](https://mathsedu.org)

### Design Language

The site follows a unified **Design System v2.0** documented in `docs/mathsedu_design_system.html`. Key principles:

- **Dark canvas** (`#0a0a1a`) — not pure black; the blue undertone gives depth like a night sky, making coloured mathematical objects luminous
- **Brand colours**: Navy (`#1B365D`) for structure, Gold (`#B8860B`) for discovery moments
- **Semantic colour vocabulary** (fixed site-wide, never reassigned):
  - Cyan (`#22D3EE`) = logic, algorithms, proof steps
  - Emerald (`#10B981`) = proved, complete, confirmed
  - Amber (`#FBBF24`) = discovery, found primes, callouts
  - Pink (`#F472B6`) = interesting error (not failure — observation)
  - Red (`#C62828`) = RESERVED for true safety issues only
- **Chapter accent colours** — each chapter has one primary accent (see design system for full map)
- **Typography**: Georgia for narrative (the human voice), Courier New for mathematics (precise, monospaced)
- **Components**: panels (`rgba(255,255,255,0.025)` background), insight boxes (left-border accent), result cards (navy-tinted), sliders with chapter accent
- **Seven Design Principles**: colour carries meaning, the dark canvas, touch first, immediate visual feedback, two typefaces, progressive revelation, no empty praise
- Floating mathematical symbols as ambient background animation
- Consistent navigation: every topic page links back to the index
- Journey acts must always provide back-navigation (see `docs/TECHNICAL_BLUEPRINT.md` §7.2)
- Difficulty indicators (1–4 filled dots) on every card

### Standard Page Elements — Required from Version 2.0

Four elements are now required on every topic page, introduced following the benchmark review:

**Element 1 — "Where You'll See This" box**
Required on all pure mathematics pages (Chapters 1–10). Optional on inherently applied pages (Chapters 11–13) where the context is already obvious.

- Style: `.panel` with left border `3px solid #22D3EE` (cyan)
- Heading: "Where You'll See This"
- Content: 3–5 sentences. Must be concrete and specific — not "used in science" but "used in GPS satellite timing correction, where modular arithmetic keeps atomic clocks synchronised to within nanoseconds."
- Position: After main interactive sections, before "Explore Next"

**Element 2 — Progressive hint in "Try This" challenges**
Every "Try This" prompt must include at least one hint, collapsed by default, revealed on click. This scaffolds productive struggle (Vygotsky's ZPD) without giving the answer immediately.

**Element 3 — "Explore Next" footer strip**
Required on every page. Two or three related topic links placed before the standard footer. Each link shows topic name and chapter name. At least one link should be from the same chapter and one from an adjacent chapter. This partially addresses the spaced-revisiting gap by encouraging organic navigation across topics.

**Element 4 — Difficulty badge in page header**
The difficulty rating (1–4 dots) must appear visibly in the page header, not only on the index card. Use filled ● for achieved difficulty, empty ○ for remainder, rendered in the chapter accent colour.

### Structure
All topic files sit at the repository root — a flat structure that maps directly to URLs on the live site. Project documentation lives in `docs/`. This simplicity is intentional: no routing layer, no build step, no server. A student with a browser is all that is needed.

### Research
The `Research/` folder contains pedagogy papers, reference material, and attribution records that inform the site's educational approach. This includes best practices in mathematics education (Boaler, Skemp, Bruner, Hattie, NCTM), source material for visualisations, and exemplary resources from other projects. All content on the site should be grounded in evidence-based pedagogy, and any third-party ideas or materials must be properly attributed. See `docs/TECHNICAL_BLUEPRINT.md` §3.3 for guidelines.

## Complete Catalogue

> **Note:** This catalogue reflects the original 194 topics across 19 chapters as at March 2026. The site has since expanded with additional chapters (Chemistry, Biology, Economics, Internet, Game Theory, etc.). The authoritative source for the current page count is `index.html`. This catalogue will be updated periodically to reflect the full scope.

### Chapter 1 — Logic & Proof
*The grammar of mathematics*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Truth Tables & Logical Connectives | `truth_tables.html` | 1 |
| 2 | Proof by Contradiction | `proof_by_contradiction.html` | 1 |
| 3 | Mathematical Induction | `mathematical_induction.html` | 2 |
| 4 | Set Theory | `set_theory.html` | 1 |
| 5 | Theory of Computation | `theory_of_computation.html` | 2 |
| 6 | Gödel's Incompleteness Theorems | `godels_incompleteness.html` | 3 |

### Chapter 2 — Numbers
*From counting to infinity*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | The Number Line | `number_line.html` | 1 |
| 2 | Prime Numbers & the Sieve of Eratosthenes | `prime_sieve.html` | 1 |
| 3 | Fundamental Theorem of Arithmetic | `fundamental_theorem_arithmetic.html` | 1 |
| 4 | Infinity & Cantor's Diagonal | `cantors_diagonal.html` | 2 |
| 5 | Modular Arithmetic | `modular_arithmetic.html` | 2 |
| 6 | Fermat's Little Theorem & Primality | `fermats_theorem.html` | 2 |
| 7 | Partition Theory | `partition_theory.html` | 2 |

### Chapter 3 — Geometry
*Euclid's gift to the world*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Euclid's Axioms & Constructions | `euclids_axioms.html` | 1 |
| 2 | Pythagorean Theorem | `pythagoras_proof.html` | 1 |
| 3 | Thales' Theorem & Circle Theorems | `circle_theorems.html` | 1 |
| 4 | Conic Sections | `conic_sections.html` | 2 |
| 5 | Non-Euclidean Geometry | `non_euclidean_geometry.html` | 3 |
| 6 | Euler's Polyhedron Formula | `eulers_polyhedron.html` | 2 |
| 7 | Coordinate Geometry | `coordinate_geometry.html` | 1 |
| 8 | Geometric Transformations | `transformations.html` | 1 |

### Chapter 4 — Algebra
*The art of the unknown*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Quadratic Formula | `quadratic_formula.html` | 1 |
| 2 | Binomial Theorem & Pascal's Triangle | `binomial_theorem.html` | 1 |
| 3 | Complex Numbers | `complex_numbers.html` | 2 |
| 4 | Fundamental Theorem of Algebra | `fundamental_theorem_algebra.html` | 3 |
| 5 | Polynomial Roots & Factoring | `polynomial_roots.html` | 2 |
| 6 | Logarithms & Exponentials | `logarithms_exponentials.html` | 1 |
| 7 | Quaternions & Hypercomplex Numbers | `quaternions.html` | 3 |

### Chapter 5 — Trigonometry & Waves
*The mathematics of oscillation*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | The Unit Circle | `unit_circle.html` | 1 |
| 2 | Circles to Waves | `circle_to_waves.html` | 1 |
| 3 | Trigonometric Identities | `trig_identities.html` | 1 |
| 4 | Law of Sines & Cosines | `law_of_sines_cosines.html` | 1 |
| 5 | Inverse Trigonometric Functions | `inverse_trig.html` | 2 |
| 6 | Parametric Curves & Polar Coordinates | `parametric_curves.html` | 2 |
| 7 | Fourier Transform | `fourier_transform.html` | 3 |

### Chapter 6 — Calculus
*The mathematics of change*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Limits & Continuity | `limits_continuity.html` | 2 |
| 2 | Derivatives | `derivatives.html` | 2 |
| 3 | Integration | `integration.html` | 2 |
| 4 | Fundamental Theorem of Calculus | `fundamental_theorem_calculus.html` | 2 |
| 5 | Taylor Series | `taylor_series.html` | 2 |
| 6 | Mean Value Theorem | `mean_value_theorem.html` | 2 |
| 7 | Differential Equations | `differential_equations.html` | 2 |
| 8 | Optimisation | `optimization.html` | 2 |
| 9 | Numerical Analysis | `numerical_analysis.html` | 2 |

### Chapter 7 — Linear Algebra
*The mathematics of space and transformation*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Systems of Linear Equations | `linear_algebra.html` | 1 |
| 2 | Vectors & Vector Spaces | `vectors.html` | 1 |
| 3 | Linear Transformations | `linear_transformations.html` | 2 |
| 4 | Eigenvalues & Eigenvectors | `eigenvalues.html` | 2 |
| 5 | Singular Value Decomposition | `svd.html` | 3 |

### Chapter 8 — Probability & Statistics
*The mathematics of uncertainty*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Combinatorics | `combinatorics.html` | 1 |
| 2 | Probability Distributions | `probability_distributions.html` | 2 |
| 3 | Bayes' Theorem | `bayes_theorem.html` | 2 |
| 4 | Law of Large Numbers | `law_of_large_numbers.html` | 2 |
| 5 | Correlation & Regression | `correlation_regression.html` | 2 |
| 6 | Central Limit Theorem | `central_limit_theorem.html` | 2 |

### Chapter 9 — Analysis & Topology
*The mathematics of rigour and shape*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Sequences & Series | `sequences_series.html` | 2 |
| 2 | Intermediate Value Theorem | `intermediate_value_theorem.html` | 2 |
| 3 | Bolzano-Weierstrass Theorem | `bolzano_weierstrass.html` | 3 |
| 4 | Mobius Strip & Topology | `mobius_topology.html` | 2 |
| 5 | Gaussian Curvature | `gaussian_curvature.html` | 3 |
| 6 | Fixed Point Theorems | `fixed_point_theorems.html` | 3 |
| 7 | Complex Analysis | `complex_analysis.html` | 3 |
| 8 | Order Theory | `order_theory.html` | 3 |
| 9 | Category Theory | `category_theory.html` | 4 |
| 10 | Measure Theory | `measure_theory.html` | 4 |

### Chapter 10 — Beautiful Results
*The crown jewels of mathematics*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Euler's Identity | `eulers_identity.html` | 2 |
| 2 | Golden Ratio & Fibonacci | `golden_ratio.html` | 1 |
| 3 | The Mandelbrot Set | `mandelbrot_set.html` | 2 |
| 4 | Group Theory & Symmetry | `group_theory.html` | 3 |
| 5 | The Riemann Hypothesis | `riemann_hypothesis.html` | 4 |
| 6 | Pi Through the Ages | `pi_through_ages.html` | 1 |

### Chapter 11 — Quantitative Finance
*Where mathematics meets the markets*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Compound Interest & Time Value of Money | `compound_interest.html` | 1 |
| 2 | Random Walks & Brownian Motion | `brownian_motion.html` | 2 |
| 3 | Monte Carlo Simulation in Finance | `monte_carlo.html` | 2 |
| 4 | Bond Pricing & Risk | `bond_pricing.html` | 2 |
| 5 | Yield Curve Construction & Bootstrapping | `yield_curve.html` | 3 |
| 6 | Portfolio Theory & the Efficient Frontier | `portfolio_theory.html` | 2 |
| 7 | The Black-Scholes Model | `black_scholes.html` | 3 |
| 8 | The Greeks | `the_greeks.html` | 3 |
| 9 | Option Payoffs & Strategies | `option_strategies.html` | 2 |
| 10 | Volatility Smiles & Surfaces | `volatility_smiles.html` | 3 |

### Chapter 12 — Physics
*The universe in motion*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 0 | Physics — A Conceptual Map | `quantum_physics_map.html` | 1 |
| 1 | Projectile Motion | `projectile_motion.html` | 1 |
| 2 | Newton's Laws of Motion | `newtons_laws.html` | 2 |
| 3 | Conservation of Momentum | `conservation_momentum.html` | 2 |
| 4 | Conservation of Energy | `conservation_energy.html` | 2 |
| 5 | Simple Harmonic Motion | `simple_harmonic_motion.html` | 1 |
| 6 | Orbital Mechanics & Kepler's Laws | `orbital_mechanics.html` | 2 |
| 7 | Wave Interference | `wave_interference.html` | 2 |
| 8 | The Wave Equation | `wave_equation.html` | 2 |
| 9 | Mathematics of Thermodynamics | `thermodynamics.html` | 2 |
| 10 | Electric Field Lines | `electric_field_lines.html` | 2 |
| 11 | Magnetic Fields | `magnetic_fields.html` | 2 |
| 12 | Maxwell's Equations | `maxwells_equations.html` | 3 |
| 13 | Physics of Light | `physics_of_light.html` | 2 |
| 14 | The Electromagnetic Spectrum | `electromagnetic_spectrum.html` | 2 |
| 15 | Special Relativity | `special_relativity.html` | 3 |
| 16 | Wave-Particle Duality | `wave_particle_duality.html` | 2 |
| 17 | Atomic Energy Levels | `atomic_energy_levels.html` | 2 |
| 18 | The Schrödinger Equation | `schrodinger_equation.html` | 3 |
| 19 | Entropy and Information Theory | `entropy_information.html` | 2 |
| 20 | Control Theory | `control_theory.html` | 3 |

### Chapter 13 — The Mathematics of Intelligence
*How neural networks and language models actually work*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 0 | The Mathematics of Intelligence — A Map | `ai_mathematics_map.html` | 1 |
| 1 | Vectors & Embeddings | `vectors_and_embeddings.html` | 1 |
| 2 | Probability & Softmax | `probability_and_softmax.html` | 1 |
| 3 | The Single Neuron | `neuron_and_activation.html` | 1 |
| 4 | Gradient Descent | `gradient_descent.html` | 2 |
| 5 | Backpropagation | `backpropagation.html` | 2 |
| 6 | Overfitting & Generalisation | `overfitting_generalisation.html` | 2 |
| 7 | The Attention Mechanism | `attention_mechanism.html` | 3 |
| 8 | Positional Encoding | `positional_encoding.html` | 2 |
| 9 | The Transformer Architecture | `transformer_architecture.html` | 3 |
| 10 | Next-Token Prediction | `next_token_prediction.html` | 2 |
| 11 | Train Your Own Language Model | `toy_language_model.html` | 2 |
| 12 | Scaling Laws | `scaling_laws.html` | 2 |
| 13 | Chain-of-Thought Reasoning | `chain_of_thought.html` | 2 |
| 14 | Retrieval-Augmented Generation | `retrieval_augmented_generation.html` | 2 |
| 15 | Agentic AI Systems | `agentic_systems.html` | 2 |

**Total: 194 interactive visualisations across 19 chapters**

## Credits

Created by **Manoj Bhaskar**. Coded by [Claude](https://claude.ai/claude-code).

Licensed under [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Copyright 2025–2026 Manoj Bhaskar. All rights reserved.

---

*"The book of nature is written in the language of mathematics." — Galileo Galilei*
