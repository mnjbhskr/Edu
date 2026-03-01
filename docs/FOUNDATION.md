# Foundation Document

**A Visual Discovery of Mathematics**

*Version 1.0 — February 2026*

---

## Mission

To make mathematics visible, interactive, and accessible to every curious mind.

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

## Architecture

### Technology
- **HTML5 Canvas** for all interactive graphics
- **Vanilla JavaScript** for logic and animation
- **Embedded CSS** for styling (dark theme, responsive)
- **localStorage** for tracking which topics a user has visited
- **GitHub Pages** for hosting at [mathsedu.org](https://mathsedu.org)

### Design Language
- Dark background (#0a0a1a) with light text for reduced eye strain
- Chapter-specific accent colours for visual organisation
- Floating mathematical symbols as ambient background animation
- Consistent navigation: every topic page links back to the index
- Difficulty indicators (1–4 filled dots) on every card

### Structure
All topic files sit at the repository root — a flat structure that maps directly to URLs on the live site. Project documentation lives in `docs/`. This simplicity is intentional: no routing layer, no build step, no server. A student with a browser is all that is needed.

## Complete Catalogue

### Chapter 1 — Logic & Proof
*The grammar of mathematics*

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Truth Tables & Logical Connectives | `truth_tables.html` | 1 |
| 2 | Proof by Contradiction | `proof_by_contradiction.html` | 1 |
| 3 | Mathematical Induction | `mathematical_induction.html` | 2 |

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

### Appendix — Physics

| # | Topic | File | Difficulty |
|---|-------|------|------------|
| 1 | Atomic Energy Levels | `atomic_energy_levels.html` | 2 |

**Total: 71 interactive visualisations across 11 chapters + 1 appendix**

## Credits

Created by **Manoj Bhaskar**. Coded by [Claude](https://claude.ai/claude-code).

Licensed under [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Copyright 2025–2026 Manoj Bhaskar. All rights reserved.

---

*"The book of nature is written in the language of mathematics." — Galileo Galilei*
