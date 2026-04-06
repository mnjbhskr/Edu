# Task 5 — Master Enhancement Execution Plan

**Benchmark Improvement Programme — Tier 1 Enhancements**

This document is the master execution plan for applying Tier 1 improvements across all 194 catalogued topic pages on mathsedu.org.

**Related documents:**
- `docs/BENCHMARK_RECOMMENDATIONS.md` — full recommendations checklist and priority tiers
- `docs/PAGE_AUDIT_PROMPT.md` — reusable audit prompt for verifying each page after enhancement
- `docs/FOUNDATION.md` — mission, principles, and v2.0 page standards

---

## 5.1 Live Page Inventory

The following 194 topic pages are organised by chapter. Navigation, legal, map, and infrastructure pages are excluded.

### Chapter 1 — Logic & Proof (accent `#c084fc`) — 6 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 1 | truth_tables.html | 1 |
| 2 | proof_by_contradiction.html | 1 |
| 3 | mathematical_induction.html | 2 |
| 4 | set_theory.html | 1 |
| 5 | theory_of_computation.html | 2 |
| 6 | godels_incompleteness.html | 3 |

### Chapter 2 — Numbers (accent `#fbbf24`) — 7 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 7 | number_line.html | 1 |
| 8 | prime_sieve.html | 1 |
| 9 | fundamental_theorem_arithmetic.html | 1 |
| 10 | cantors_diagonal.html | 2 |
| 11 | modular_arithmetic.html | 2 |
| 12 | fermats_theorem.html | 2 |
| 13 | partition_theory.html | 2 |

### Chapter 3 — Geometry (accent `#f472b6`) — 8 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 14 | euclids_axioms.html | 1 |
| 15 | pythagoras_proof.html | 1 |
| 16 | circle_theorems.html | 1 |
| 17 | conic_sections.html | 2 |
| 18 | non_euclidean_geometry.html | 3 |
| 19 | eulers_polyhedron.html | 2 |
| 20 | coordinate_geometry.html | 1 |
| 21 | transformations.html | 1 |

### Chapter 4 — Algebra (accent `#60a5fa`) — 7 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 22 | quadratic_formula.html | 1 |
| 23 | binomial_theorem.html | 1 |
| 24 | complex_numbers.html | 2 |
| 25 | fundamental_theorem_algebra.html | 3 |
| 26 | polynomial_roots.html | 2 |
| 27 | logarithms_exponentials.html | 1 |
| 28 | quaternions.html | 3 |

### Chapter 5 — Trigonometry & Waves (accent `#2dd4bf`) — 7 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 29 | unit_circle.html | 1 |
| 30 | circle_to_waves.html | 1 |
| 31 | trig_identities.html | 1 |
| 32 | law_of_sines_cosines.html | 1 |
| 33 | inverse_trig.html | 2 |
| 34 | parametric_curves.html | 2 |
| 35 | fourier_transform.html | 3 |

### Chapter 6 — Calculus (accent `#fb923c`) — 9 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 36 | limits_continuity.html | 2 |
| 37 | derivatives.html | 2 |
| 38 | integration.html | 2 |
| 39 | fundamental_theorem_calculus.html | 2 |
| 40 | taylor_series.html | 2 |
| 41 | mean_value_theorem.html | 2 |
| 42 | differential_equations.html | 2 |
| 43 | optimization.html | 2 |
| 44 | numerical_analysis.html | 2 |

### Chapter 7 — Linear Algebra (accent `#a78bfa`) — 5 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 45 | linear_algebra.html | 1 |
| 46 | vectors.html | 1 |
| 47 | linear_transformations.html | 2 |
| 48 | eigenvalues.html | 2 |
| 49 | svd.html | 3 |

### Chapter 8 — Probability & Statistics (accent `#f97316`) — 6 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 50 | combinatorics.html | 1 |
| 51 | probability_distributions.html | 2 |
| 52 | bayes_theorem.html | 2 |
| 53 | law_of_large_numbers.html | 2 |
| 54 | correlation_regression.html | 2 |
| 55 | central_limit_theorem.html | 2 |

### Chapter 9 — Analysis & Topology (accent `#818cf8`) — 10 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 56 | sequences_series.html | 2 |
| 57 | intermediate_value_theorem.html | 2 |
| 58 | bolzano_weierstrass.html | 3 |
| 59 | mobius_topology.html | 2 |
| 60 | gaussian_curvature.html | 3 |
| 61 | fixed_point_theorems.html | 3 |
| 62 | complex_analysis.html | 3 |
| 63 | order_theory.html | 3 |
| 64 | category_theory.html | 4 |
| 65 | measure_theory.html | 4 |

### Chapter 10 — Beautiful Results (accent `#e879f9`) — 6 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 66 | eulers_identity.html | 2 |
| 67 | golden_ratio.html | 1 |
| 68 | mandelbrot_set.html | 2 |
| 69 | group_theory.html | 3 |
| 70 | riemann_hypothesis.html | 4 |
| 71 | pi_through_ages.html | 1 |

### Chapter 11 — Quantitative Finance (accent `#34d399`) — 10 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 72 | compound_interest.html | 1 |
| 73 | brownian_motion.html | 2 |
| 74 | monte_carlo.html | 2 |
| 75 | bond_pricing.html | 2 |
| 76 | yield_curve.html | 3 |
| 77 | portfolio_theory.html | 2 |
| 78 | black_scholes.html | 3 |
| 79 | the_greeks.html | 3 |
| 80 | option_strategies.html | 2 |
| 81 | volatility_smiles.html | 3 |

### Chapter 12 — Physics (accent `#14b8a6`) — 20 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 82 | projectile_motion.html | 1 |
| 83 | newtons_laws.html | 2 |
| 84 | conservation_momentum.html | 2 |
| 85 | conservation_energy.html | 2 |
| 86 | simple_harmonic_motion.html | 1 |
| 87 | orbital_mechanics.html | 2 |
| 88 | wave_interference.html | 2 |
| 89 | wave_equation.html | 2 |
| 90 | thermodynamics.html | 2 |
| 91 | electric_field_lines.html | 2 |
| 92 | magnetic_fields.html | 2 |
| 93 | maxwells_equations.html | 3 |
| 94 | physics_of_light.html | 2 |
| 95 | electromagnetic_spectrum.html | 2 |
| 96 | special_relativity.html | 3 |
| 97 | wave_particle_duality.html | 2 |
| 98 | atomic_energy_levels.html | 2 |
| 99 | schrodinger_equation.html | 3 |
| 100 | entropy_information.html | 2 |
| 101 | control_theory.html | 3 |

### Chapter 13 — AI/Intelligence (accent `#38bdf8`) — 15 pages
| # | Filename | Difficulty |
|---|----------|-----------|
| 102 | vectors_and_embeddings.html | 1 |
| 103 | probability_and_softmax.html | 1 |
| 104 | neuron_and_activation.html | 1 |
| 105 | gradient_descent.html | 2 |
| 106 | backpropagation.html | 2 |
| 107 | overfitting_generalisation.html | 2 |
| 108 | attention_mechanism.html | 3 |
| 109 | positional_encoding.html | 2 |
| 110 | transformer_architecture.html | 3 |
| 111 | next_token_prediction.html | 2 |
| 112 | toy_language_model.html | 2 |
| 113 | scaling_laws.html | 2 |
| 114 | chain_of_thought.html | 2 |
| 115 | retrieval_augmented_generation.html | 2 |
| 116 | agentic_systems.html | 2 |

**Total: 194 pages across 13 chapters**

> **Note:** The site has grown beyond this original catalogue to include additional chapters (Chemistry, Biology, Economics, Internet, Game Theory, etc.). Those pages will be assessed and planned separately after the core 194 are complete.

---

## 5.2 Page-by-page Assessment Table

### Legend

- **WYSTI** = "Where You'll See This" panel needed
  - **Y** = pure maths topic — needs applied-context panel
  - **N/A** = inherently applied topic (Finance, Physics, AI) — panel not required
- **Hint** = progressive hint upgrade needed (Y for all)
- **Explore** = "Explore Next" footer needed (Y for all)
- **Badge** = difficulty badge needed (Y for all)

### Chapter 1 — Logic & Proof

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| truth_tables.html | 1 | 1 | Y | Y | Y | Y | proof_by_contradiction.html (Ch1), set_theory.html (Ch1), combinatorics.html (Ch8) | Foundation page — keep language accessible |
| proof_by_contradiction.html | 1 | 1 | Y | Y | Y | Y | mathematical_induction.html (Ch1), truth_tables.html (Ch1), cantors_diagonal.html (Ch2) | Link to Cantor's diagonal as a famous contradiction proof |
| mathematical_induction.html | 1 | 2 | Y | Y | Y | Y | proof_by_contradiction.html (Ch1), sequences_series.html (Ch9), binomial_theorem.html (Ch4) | Natural bridge to sequences |
| set_theory.html | 1 | 1 | Y | Y | Y | Y | truth_tables.html (Ch1), cantors_diagonal.html (Ch2), probability_distributions.html (Ch8) | Probability uses set theory heavily |
| theory_of_computation.html | 1 | 2 | Y | Y | Y | Y | godels_incompleteness.html (Ch1), truth_tables.html (Ch1), category_theory.html (Ch9) | Connects logic to CS |
| godels_incompleteness.html | 1 | 3 | Y | Y | Y | Y | theory_of_computation.html (Ch1), cantors_diagonal.html (Ch2), riemann_hypothesis.html (Ch10) | Capstone page — link to other deep results |

### Chapter 2 — Numbers

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| number_line.html | 2 | 1 | Y | Y | Y | Y | prime_sieve.html (Ch2), coordinate_geometry.html (Ch3), sequences_series.html (Ch9) | Entry-level page |
| prime_sieve.html | 2 | 1 | Y | Y | Y | Y | fundamental_theorem_arithmetic.html (Ch2), fermats_theorem.html (Ch2), modular_arithmetic.html (Ch2) | All-primes cluster |
| fundamental_theorem_arithmetic.html | 2 | 1 | Y | Y | Y | Y | prime_sieve.html (Ch2), modular_arithmetic.html (Ch2), group_theory.html (Ch10) | Bridge to abstract algebra |
| cantors_diagonal.html | 2 | 2 | Y | Y | Y | Y | set_theory.html (Ch1), godels_incompleteness.html (Ch1), sequences_series.html (Ch9) | Link back to logic chapter |
| modular_arithmetic.html | 2 | 2 | Y | Y | Y | Y | fermats_theorem.html (Ch2), prime_sieve.html (Ch2), group_theory.html (Ch10) | Cryptography application for WYSTI |
| fermats_theorem.html | 2 | 2 | Y | Y | Y | Y | modular_arithmetic.html (Ch2), prime_sieve.html (Ch2), proof_by_contradiction.html (Ch1) | Little theorem, not Last |
| partition_theory.html | 2 | 2 | Y | Y | Y | Y | combinatorics.html (Ch8), binomial_theorem.html (Ch4), fundamental_theorem_arithmetic.html (Ch2) | Combinatorial flavour |

### Chapter 3 — Geometry

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| euclids_axioms.html | 3 | 1 | Y | Y | Y | Y | pythagoras_proof.html (Ch3), non_euclidean_geometry.html (Ch3), proof_by_contradiction.html (Ch1) | Sets up the axiomatic approach |
| pythagoras_proof.html | 3 | 1 | Y | Y | Y | Y | euclids_axioms.html (Ch3), circle_theorems.html (Ch3), unit_circle.html (Ch5) | Bridge to trig via unit circle |
| circle_theorems.html | 3 | 1 | Y | Y | Y | Y | conic_sections.html (Ch3), pythagoras_proof.html (Ch3), unit_circle.html (Ch5) | Circles cluster |
| conic_sections.html | 3 | 2 | Y | Y | Y | Y | circle_theorems.html (Ch3), coordinate_geometry.html (Ch3), orbital_mechanics.html (Ch12) | Kepler orbits for WYSTI |
| non_euclidean_geometry.html | 3 | 3 | Y | Y | Y | Y | euclids_axioms.html (Ch3), gaussian_curvature.html (Ch9), special_relativity.html (Ch12) | Einstein connection |
| eulers_polyhedron.html | 3 | 2 | Y | Y | Y | Y | mobius_topology.html (Ch9), euclids_axioms.html (Ch3), group_theory.html (Ch10) | Topology bridge |
| coordinate_geometry.html | 3 | 1 | Y | Y | Y | Y | conic_sections.html (Ch3), transformations.html (Ch3), vectors.html (Ch7) | Leads into linear algebra |
| transformations.html | 3 | 1 | Y | Y | Y | Y | coordinate_geometry.html (Ch3), linear_transformations.html (Ch7), group_theory.html (Ch10) | Natural bridge to matrices |

### Chapter 4 — Algebra

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| quadratic_formula.html | 4 | 1 | Y | Y | Y | Y | polynomial_roots.html (Ch4), complex_numbers.html (Ch4), conic_sections.html (Ch3) | Parabola connection to conics |
| binomial_theorem.html | 4 | 1 | Y | Y | Y | Y | combinatorics.html (Ch8), polynomial_roots.html (Ch4), taylor_series.html (Ch6) | Combinatorics bridge |
| complex_numbers.html | 4 | 2 | Y | Y | Y | Y | quaternions.html (Ch4), eulers_identity.html (Ch10), complex_analysis.html (Ch9) | Rich cross-chapter links |
| fundamental_theorem_algebra.html | 4 | 3 | Y | Y | Y | Y | complex_numbers.html (Ch4), polynomial_roots.html (Ch4), complex_analysis.html (Ch9) | Capstone algebraic result |
| polynomial_roots.html | 4 | 2 | Y | Y | Y | Y | quadratic_formula.html (Ch4), fundamental_theorem_algebra.html (Ch4), eigenvalues.html (Ch7) | Characteristic polynomials |
| logarithms_exponentials.html | 4 | 1 | Y | Y | Y | Y | compound_interest.html (Ch11), derivatives.html (Ch6), binomial_theorem.html (Ch4) | Finance bridge |
| quaternions.html | 4 | 3 | Y | Y | Y | Y | complex_numbers.html (Ch4), group_theory.html (Ch10), transformations.html (Ch3) | 3D rotation application for WYSTI |

### Chapter 5 — Trigonometry & Waves

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| unit_circle.html | 5 | 1 | Y | Y | Y | Y | circle_to_waves.html (Ch5), trig_identities.html (Ch5), pythagoras_proof.html (Ch3) | Foundation for chapter |
| circle_to_waves.html | 5 | 1 | Y | Y | Y | Y | unit_circle.html (Ch5), fourier_transform.html (Ch5), simple_harmonic_motion.html (Ch12) | Physics bridge |
| trig_identities.html | 5 | 1 | Y | Y | Y | Y | unit_circle.html (Ch5), inverse_trig.html (Ch5), integration.html (Ch6) | Trig substitution in calculus |
| law_of_sines_cosines.html | 5 | 1 | Y | Y | Y | Y | pythagoras_proof.html (Ch3), trig_identities.html (Ch5), coordinate_geometry.html (Ch3) | Surveying/navigation for WYSTI |
| inverse_trig.html | 5 | 2 | Y | Y | Y | Y | trig_identities.html (Ch5), parametric_curves.html (Ch5), derivatives.html (Ch6) | Calculus of inverse trig |
| parametric_curves.html | 5 | 2 | Y | Y | Y | Y | inverse_trig.html (Ch5), conic_sections.html (Ch3), fourier_transform.html (Ch5) | Lissajous patterns for WYSTI |
| fourier_transform.html | 5 | 3 | N/A | Y | Y | Y | circle_to_waves.html (Ch5), wave_interference.html (Ch12), taylor_series.html (Ch6) | Inherently applied — signal processing |

### Chapter 6 — Calculus

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| limits_continuity.html | 6 | 2 | Y | Y | Y | Y | derivatives.html (Ch6), sequences_series.html (Ch9), intermediate_value_theorem.html (Ch9) | Analysis bridge |
| derivatives.html | 6 | 2 | Y | Y | Y | Y | integration.html (Ch6), limits_continuity.html (Ch6), optimization.html (Ch6) | Core calculus page |
| integration.html | 6 | 2 | Y | Y | Y | Y | fundamental_theorem_calculus.html (Ch6), derivatives.html (Ch6), probability_distributions.html (Ch8) | Probability density connection |
| fundamental_theorem_calculus.html | 6 | 2 | Y | Y | Y | Y | integration.html (Ch6), derivatives.html (Ch6), mean_value_theorem.html (Ch6) | Central result |
| taylor_series.html | 6 | 2 | Y | Y | Y | Y | fourier_transform.html (Ch5), sequences_series.html (Ch9), derivatives.html (Ch6) | Approximation theme |
| mean_value_theorem.html | 6 | 2 | Y | Y | Y | Y | fundamental_theorem_calculus.html (Ch6), intermediate_value_theorem.html (Ch9), derivatives.html (Ch6) | Theorem cluster |
| differential_equations.html | 6 | 2 | Y | Y | Y | Y | derivatives.html (Ch6), simple_harmonic_motion.html (Ch12), schrodinger_equation.html (Ch12) | Physics applications |
| optimization.html | 6 | 2 | Y | Y | Y | Y | derivatives.html (Ch6), gradient_descent.html (Ch13), portfolio_theory.html (Ch11) | ML and finance bridges |
| numerical_analysis.html | 6 | 2 | Y | Y | Y | Y | taylor_series.html (Ch6), monte_carlo.html (Ch11), optimization.html (Ch6) | Computational methods theme |

### Chapter 7 — Linear Algebra

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| linear_algebra.html | 7 | 1 | Y | Y | Y | Y | vectors.html (Ch7), linear_transformations.html (Ch7), coordinate_geometry.html (Ch3) | Chapter overview page |
| vectors.html | 7 | 1 | Y | Y | Y | Y | linear_algebra.html (Ch7), vectors_and_embeddings.html (Ch13), coordinate_geometry.html (Ch3) | AI embeddings bridge |
| linear_transformations.html | 7 | 2 | Y | Y | Y | Y | eigenvalues.html (Ch7), transformations.html (Ch3), vectors.html (Ch7) | Geometry connection |
| eigenvalues.html | 7 | 2 | Y | Y | Y | Y | svd.html (Ch7), linear_transformations.html (Ch7), differential_equations.html (Ch6) | Stability analysis for WYSTI |
| svd.html | 7 | 3 | Y | Y | Y | Y | eigenvalues.html (Ch7), portfolio_theory.html (Ch11), attention_mechanism.html (Ch13) | Data compression for WYSTI |

### Chapter 8 — Probability & Statistics

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| combinatorics.html | 8 | 1 | Y | Y | Y | Y | probability_distributions.html (Ch8), binomial_theorem.html (Ch4), partition_theory.html (Ch2) | Counting foundations |
| probability_distributions.html | 8 | 2 | Y | Y | Y | Y | bayes_theorem.html (Ch8), central_limit_theorem.html (Ch8), integration.html (Ch6) | Continuous distributions need integration |
| bayes_theorem.html | 8 | 2 | Y | Y | Y | Y | probability_distributions.html (Ch8), law_of_large_numbers.html (Ch8), probability_and_softmax.html (Ch13) | AI connection |
| law_of_large_numbers.html | 8 | 2 | Y | Y | Y | Y | central_limit_theorem.html (Ch8), monte_carlo.html (Ch11), sequences_series.html (Ch9) | Monte Carlo foundation |
| correlation_regression.html | 8 | 2 | Y | Y | Y | Y | central_limit_theorem.html (Ch8), probability_distributions.html (Ch8), gradient_descent.html (Ch13) | ML regression bridge |
| central_limit_theorem.html | 8 | 2 | Y | Y | Y | Y | law_of_large_numbers.html (Ch8), probability_distributions.html (Ch8), brownian_motion.html (Ch11) | Finance bridge |

### Chapter 9 — Analysis & Topology

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| sequences_series.html | 9 | 2 | Y | Y | Y | Y | limits_continuity.html (Ch6), taylor_series.html (Ch6), bolzano_weierstrass.html (Ch9) | Calculus bridge |
| intermediate_value_theorem.html | 9 | 2 | Y | Y | Y | Y | limits_continuity.html (Ch6), fixed_point_theorems.html (Ch9), mean_value_theorem.html (Ch6) | Theorem cluster |
| bolzano_weierstrass.html | 9 | 3 | Y | Y | Y | Y | sequences_series.html (Ch9), intermediate_value_theorem.html (Ch9), measure_theory.html (Ch9) | Deep analysis |
| mobius_topology.html | 9 | 2 | Y | Y | Y | Y | eulers_polyhedron.html (Ch3), gaussian_curvature.html (Ch9), non_euclidean_geometry.html (Ch3) | Topology cluster |
| gaussian_curvature.html | 9 | 3 | Y | Y | Y | Y | non_euclidean_geometry.html (Ch3), mobius_topology.html (Ch9), special_relativity.html (Ch12) | Relativity uses curvature |
| fixed_point_theorems.html | 9 | 3 | Y | Y | Y | Y | intermediate_value_theorem.html (Ch9), control_theory.html (Ch12), differential_equations.html (Ch6) | Existence proofs |
| complex_analysis.html | 9 | 3 | Y | Y | Y | Y | complex_numbers.html (Ch4), eulers_identity.html (Ch10), fourier_transform.html (Ch5) | Beautiful analysis |
| order_theory.html | 9 | 3 | Y | Y | Y | Y | set_theory.html (Ch1), category_theory.html (Ch9), boolean algebra connection via truth_tables.html (Ch1) | Abstract structures |
| category_theory.html | 9 | 4 | Y | Y | Y | Y | group_theory.html (Ch10), order_theory.html (Ch9), theory_of_computation.html (Ch1) | Highest abstraction |
| measure_theory.html | 9 | 4 | Y | Y | Y | Y | integration.html (Ch6), probability_distributions.html (Ch8), bolzano_weierstrass.html (Ch9) | Rigorous probability foundation |

### Chapter 10 — Beautiful Results

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| eulers_identity.html | 10 | 2 | Y | Y | Y | Y | complex_numbers.html (Ch4), taylor_series.html (Ch6), fourier_transform.html (Ch5) | The most beautiful equation |
| golden_ratio.html | 10 | 1 | Y | Y | Y | Y | sequences_series.html (Ch9), pi_through_ages.html (Ch10), conic_sections.html (Ch3) | Nature and art applications |
| mandelbrot_set.html | 10 | 2 | Y | Y | Y | Y | complex_numbers.html (Ch4), golden_ratio.html (Ch10), sequences_series.html (Ch9) | Iteration and complexity |
| group_theory.html | 10 | 3 | Y | Y | Y | Y | transformations.html (Ch3), modular_arithmetic.html (Ch2), category_theory.html (Ch9) | Symmetry theme |
| riemann_hypothesis.html | 10 | 4 | Y | Y | Y | Y | prime_sieve.html (Ch2), complex_analysis.html (Ch9), godels_incompleteness.html (Ch1) | Unsolved problem — capstone |
| pi_through_ages.html | 10 | 1 | Y | Y | Y | Y | circle_theorems.html (Ch3), golden_ratio.html (Ch10), taylor_series.html (Ch6) | Historical narrative |

### Chapter 11 — Quantitative Finance

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| compound_interest.html | 11 | 1 | N/A | Y | Y | Y | logarithms_exponentials.html (Ch4), bond_pricing.html (Ch11), brownian_motion.html (Ch11) | Inherently applied |
| brownian_motion.html | 11 | 2 | N/A | Y | Y | Y | probability_distributions.html (Ch8), monte_carlo.html (Ch11), black_scholes.html (Ch11) | Inherently applied |
| monte_carlo.html | 11 | 2 | N/A | Y | Y | Y | brownian_motion.html (Ch11), probability_distributions.html (Ch8), numerical_analysis.html (Ch6) | Inherently applied |
| bond_pricing.html | 11 | 2 | N/A | Y | Y | Y | compound_interest.html (Ch11), yield_curve.html (Ch11), integration.html (Ch6) | Inherently applied |
| yield_curve.html | 11 | 3 | N/A | Y | Y | Y | bond_pricing.html (Ch11), taylor_series.html (Ch6), differential_equations.html (Ch6) | Inherently applied |
| portfolio_theory.html | 11 | 2 | N/A | Y | Y | Y | eigenvalues.html (Ch7), correlation_regression.html (Ch8), optimization.html (Ch6) | Inherently applied |
| black_scholes.html | 11 | 3 | N/A | Y | Y | Y | brownian_motion.html (Ch11), differential_equations.html (Ch6), the_greeks.html (Ch11) | Inherently applied |
| the_greeks.html | 11 | 3 | N/A | Y | Y | Y | black_scholes.html (Ch11), derivatives.html (Ch6), option_strategies.html (Ch11) | Inherently applied |
| option_strategies.html | 11 | 2 | N/A | Y | Y | Y | the_greeks.html (Ch11), black_scholes.html (Ch11), probability_distributions.html (Ch8) | Inherently applied |
| volatility_smiles.html | 11 | 3 | N/A | Y | Y | Y | black_scholes.html (Ch11), probability_distributions.html (Ch8), taylor_series.html (Ch6) | Inherently applied |

### Chapter 12 — Physics

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| projectile_motion.html | 12 | 1 | N/A | Y | Y | Y | newtons_laws.html (Ch12), quadratic_formula.html (Ch4), derivatives.html (Ch6) | Inherently applied |
| newtons_laws.html | 12 | 2 | N/A | Y | Y | Y | conservation_momentum.html (Ch12), projectile_motion.html (Ch12), differential_equations.html (Ch6) | Inherently applied |
| conservation_momentum.html | 12 | 2 | N/A | Y | Y | Y | newtons_laws.html (Ch12), conservation_energy.html (Ch12), vectors.html (Ch7) | Inherently applied |
| conservation_energy.html | 12 | 2 | N/A | Y | Y | Y | conservation_momentum.html (Ch12), thermodynamics.html (Ch12), integration.html (Ch6) | Inherently applied |
| simple_harmonic_motion.html | 12 | 1 | N/A | Y | Y | Y | circle_to_waves.html (Ch5), differential_equations.html (Ch6), wave_interference.html (Ch12) | Inherently applied |
| orbital_mechanics.html | 12 | 2 | N/A | Y | Y | Y | conic_sections.html (Ch3), conservation_energy.html (Ch12), newtons_laws.html (Ch12) | Inherently applied |
| wave_interference.html | 12 | 2 | N/A | Y | Y | Y | fourier_transform.html (Ch5), wave_equation.html (Ch12), simple_harmonic_motion.html (Ch12) | Inherently applied |
| wave_equation.html | 12 | 2 | N/A | Y | Y | Y | differential_equations.html (Ch6), wave_interference.html (Ch12), fourier_transform.html (Ch5) | Inherently applied |
| thermodynamics.html | 12 | 2 | N/A | Y | Y | Y | conservation_energy.html (Ch12), entropy_information.html (Ch12), integration.html (Ch6) | Inherently applied |
| electric_field_lines.html | 12 | 2 | N/A | Y | Y | Y | magnetic_fields.html (Ch12), vectors.html (Ch7), maxwells_equations.html (Ch12) | Inherently applied |
| magnetic_fields.html | 12 | 2 | N/A | Y | Y | Y | electric_field_lines.html (Ch12), maxwells_equations.html (Ch12), vectors.html (Ch7) | Inherently applied |
| maxwells_equations.html | 12 | 3 | N/A | Y | Y | Y | magnetic_fields.html (Ch12), electric_field_lines.html (Ch12), differential_equations.html (Ch6) | Inherently applied |
| physics_of_light.html | 12 | 2 | N/A | Y | Y | Y | electromagnetic_spectrum.html (Ch12), wave_particle_duality.html (Ch12), wave_interference.html (Ch12) | Inherently applied |
| electromagnetic_spectrum.html | 12 | 2 | N/A | Y | Y | Y | physics_of_light.html (Ch12), maxwells_equations.html (Ch12), fourier_transform.html (Ch5) | Inherently applied |
| special_relativity.html | 12 | 3 | N/A | Y | Y | Y | non_euclidean_geometry.html (Ch3), gaussian_curvature.html (Ch9), conservation_energy.html (Ch12) | Inherently applied |
| wave_particle_duality.html | 12 | 2 | N/A | Y | Y | Y | physics_of_light.html (Ch12), schrodinger_equation.html (Ch12), probability_distributions.html (Ch8) | Inherently applied |
| atomic_energy_levels.html | 12 | 2 | N/A | Y | Y | Y | schrodinger_equation.html (Ch12), electromagnetic_spectrum.html (Ch12), quantum connection via wave_particle_duality.html (Ch12) | Inherently applied |
| schrodinger_equation.html | 12 | 3 | N/A | Y | Y | Y | wave_particle_duality.html (Ch12), differential_equations.html (Ch6), complex_numbers.html (Ch4) | Inherently applied |
| entropy_information.html | 12 | 2 | N/A | Y | Y | Y | thermodynamics.html (Ch12), probability_distributions.html (Ch8), bayes_theorem.html (Ch8) | Inherently applied |
| control_theory.html | 12 | 3 | N/A | Y | Y | Y | differential_equations.html (Ch6), fixed_point_theorems.html (Ch9), eigenvalues.html (Ch7) | Inherently applied |

### Chapter 13 — AI/Intelligence

| Filename | Ch | Diff | WYSTI | Hint | Explore | Badge | Suggested "Explore Next" Links | Notes |
|----------|-----|------|-------|------|---------|-------|-------------------------------|-------|
| vectors_and_embeddings.html | 13 | 1 | N/A | Y | Y | Y | vectors.html (Ch7), probability_and_softmax.html (Ch13), neuron_and_activation.html (Ch13) | Inherently applied |
| probability_and_softmax.html | 13 | 1 | N/A | Y | Y | Y | bayes_theorem.html (Ch8), vectors_and_embeddings.html (Ch13), neuron_and_activation.html (Ch13) | Inherently applied |
| neuron_and_activation.html | 13 | 1 | N/A | Y | Y | Y | gradient_descent.html (Ch13), probability_and_softmax.html (Ch13), derivatives.html (Ch6) | Inherently applied |
| gradient_descent.html | 13 | 2 | N/A | Y | Y | Y | backpropagation.html (Ch13), optimization.html (Ch6), derivatives.html (Ch6) | Inherently applied |
| backpropagation.html | 13 | 2 | N/A | Y | Y | Y | gradient_descent.html (Ch13), neuron_and_activation.html (Ch13), derivatives.html (Ch6) | Inherently applied |
| overfitting_generalisation.html | 13 | 2 | N/A | Y | Y | Y | backpropagation.html (Ch13), probability_distributions.html (Ch8), correlation_regression.html (Ch8) | Inherently applied |
| attention_mechanism.html | 13 | 3 | N/A | Y | Y | Y | svd.html (Ch7), positional_encoding.html (Ch13), transformer_architecture.html (Ch13) | Inherently applied |
| positional_encoding.html | 13 | 2 | N/A | Y | Y | Y | fourier_transform.html (Ch5), attention_mechanism.html (Ch13), transformer_architecture.html (Ch13) | Inherently applied |
| transformer_architecture.html | 13 | 3 | N/A | Y | Y | Y | attention_mechanism.html (Ch13), positional_encoding.html (Ch13), linear_transformations.html (Ch7) | Inherently applied |
| next_token_prediction.html | 13 | 2 | N/A | Y | Y | Y | probability_and_softmax.html (Ch13), toy_language_model.html (Ch13), bayes_theorem.html (Ch8) | Inherently applied |
| toy_language_model.html | 13 | 2 | N/A | Y | Y | Y | next_token_prediction.html (Ch13), transformer_architecture.html (Ch13), scaling_laws.html (Ch13) | Inherently applied |
| scaling_laws.html | 13 | 2 | N/A | Y | Y | Y | logarithms_exponentials.html (Ch4), toy_language_model.html (Ch13), chain_of_thought.html (Ch13) | Inherently applied |
| chain_of_thought.html | 13 | 2 | N/A | Y | Y | Y | scaling_laws.html (Ch13), agentic_systems.html (Ch13), theory_of_computation.html (Ch1) | Inherently applied |
| retrieval_augmented_generation.html | 13 | 2 | N/A | Y | Y | Y | vectors_and_embeddings.html (Ch13), agentic_systems.html (Ch13), bayes_theorem.html (Ch8) | Inherently applied |
| agentic_systems.html | 13 | 2 | N/A | Y | Y | Y | chain_of_thought.html (Ch13), retrieval_augmented_generation.html (Ch13), control_theory.html (Ch12) | Inherently applied |

### Summary Counts

| Enhancement | Needed | Not Needed |
|-------------|--------|------------|
| "Where You'll See This" panel | 107 (Ch 1-10 pure maths) | 87 (Ch 11-13 inherently applied) |
| Progressive hint upgrade | 194 | 0 |
| "Explore Next" footer | 194 | 0 |
| Difficulty badge | 194 | 0 |

> **Note on fourier_transform.html:** Marked N/A for WYSTI despite being in Chapter 5 (pure maths). Fourier analysis is inherently applied — its real-world context is self-evident from the content itself.

---

## 5.3 Batching Strategy

Pages are grouped by chapter to maintain context and allow consistent cross-linking. Larger chapters are split into sub-batches of 6-8 pages.

| Batch | Chapter | Pages | Sub-batch | Page List |
|-------|---------|-------|-----------|-----------|
| 1 | Ch 1 — Logic & Proof | 6 | — | truth_tables, proof_by_contradiction, mathematical_induction, set_theory, theory_of_computation, godels_incompleteness |
| 2 | Ch 2 — Numbers | 7 | — | number_line, prime_sieve, fundamental_theorem_arithmetic, cantors_diagonal, modular_arithmetic, fermats_theorem, partition_theory |
| 3 | Ch 3 — Geometry | 8 | — | euclids_axioms, pythagoras_proof, circle_theorems, conic_sections, non_euclidean_geometry, eulers_polyhedron, coordinate_geometry, transformations |
| 4 | Ch 4 — Algebra | 7 | — | quadratic_formula, binomial_theorem, complex_numbers, fundamental_theorem_algebra, polynomial_roots, logarithms_exponentials, quaternions |
| 5 | Ch 5 — Trigonometry & Waves | 7 | — | unit_circle, circle_to_waves, trig_identities, law_of_sines_cosines, inverse_trig, parametric_curves, fourier_transform |
| 6a | Ch 6 — Calculus | 5 | A | limits_continuity, derivatives, integration, fundamental_theorem_calculus, taylor_series |
| 6b | Ch 6 — Calculus | 4 | B | mean_value_theorem, differential_equations, optimization, numerical_analysis |
| 7 | Ch 7 — Linear Algebra | 5 | — | linear_algebra, vectors, linear_transformations, eigenvalues, svd |
| 8 | Ch 8 — Probability & Statistics | 6 | — | combinatorics, probability_distributions, bayes_theorem, law_of_large_numbers, correlation_regression, central_limit_theorem |
| 9a | Ch 9 — Analysis & Topology | 5 | A | sequences_series, intermediate_value_theorem, bolzano_weierstrass, mobius_topology, gaussian_curvature |
| 9b | Ch 9 — Analysis & Topology | 5 | B | fixed_point_theorems, complex_analysis, order_theory, category_theory, measure_theory |
| 10 | Ch 10 — Beautiful Results | 6 | — | eulers_identity, golden_ratio, mandelbrot_set, group_theory, riemann_hypothesis, pi_through_ages |
| 11 | Ch 11 — Quantitative Finance | 10 | — | compound_interest, brownian_motion, monte_carlo, bond_pricing, yield_curve, portfolio_theory, black_scholes, the_greeks, option_strategies, volatility_smiles |
| 12a | Ch 12 — Physics | 7 | A (Mechanics) | projectile_motion, newtons_laws, conservation_momentum, conservation_energy, simple_harmonic_motion, orbital_mechanics, wave_interference |
| 12b | Ch 12 — Physics | 7 | B (Waves & EM) | wave_equation, thermodynamics, electric_field_lines, magnetic_fields, maxwells_equations, physics_of_light, electromagnetic_spectrum |
| 12c | Ch 12 — Physics | 6 | C (Modern) | special_relativity, wave_particle_duality, atomic_energy_levels, schrodinger_equation, entropy_information, control_theory |
| 13a | Ch 13 — AI/Intelligence | 8 | A (Foundations) | vectors_and_embeddings, probability_and_softmax, neuron_and_activation, gradient_descent, backpropagation, overfitting_generalisation, attention_mechanism, positional_encoding |
| 13b | Ch 13 — AI/Intelligence | 7 | B (Architectures) | transformer_architecture, next_token_prediction, toy_language_model, scaling_laws, chain_of_thought, retrieval_augmented_generation, agentic_systems |

**Total: 20 batches covering 194 pages**

### Estimated Effort

- Average time per page: 15-20 minutes (read, assess, apply templates, write WYSTI content, select links)
- Average batch: 6-8 pages = 1.5-2.5 hours
- Full programme: approximately 50-65 hours of agent work

---

## 5.4 HTML Templates

The following four templates are the standard components to be added to every page during Tier 1 enhancement.

### Template A — "Where You'll See This" Panel

Applied to Chapters 1-10 only (pure mathematics topics). Not applied to inherently applied chapters (11, 12, 13).

```html
<!-- WHERE YOU'LL SEE THIS -->
<div class="panel" style="border-left:3px solid #22d3ee;margin-bottom:24px;">
  <h3 style="color:#22d3ee;font-size:0.85em;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Where You'll See This</h3>
  <p style="color:#a0a0b8;font-size:0.92em;line-height:1.7;margin:0;">[CONTENT — 3-5 sentences, specific real-world application]</p>
</div>
```

**Placement:** After the final interactive section, before "Explore Next". Should feel like a natural conclusion — "you've learned the maths, here's where it lives in the world."

### Template B — Progressive Hint

Applied to all 194 pages. Replaces any existing static hints.

```html
<!-- HINT REVEAL -->
<div style="margin-top:12px;">
  <button onclick="this.nextElementSibling.style.display='block';this.style.display='none';" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#808098;padding:6px 14px;border-radius:6px;cursor:pointer;font-family:Georgia,serif;font-size:0.85em;">Show a hint</button>
  <div style="display:none;margin-top:10px;padding:10px 14px;background:rgba(255,255,255,0.02);border-radius:6px;border-left:2px solid #fbbf24;">
    <p style="color:#a0a0b8;font-size:0.88em;margin:0;">[HINT TEXT]</p>
  </div>
</div>
```

**Placement:** Beneath each interactive challenge or question. Multiple hints per page are expected.

### Template C — "Explore Next" Footer Strip

Applied to all 194 pages. Provides 2-3 navigation cards linking to related topics.

```html
<!-- EXPLORE NEXT -->
<div style="margin-top:48px;padding-top:32px;border-top:1px solid rgba(255,255,255,0.06);">
  <h3 style="color:#808098;font-size:0.8em;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;font-weight:400;">Explore Next</h3>
  <div style="display:flex;gap:12px;flex-wrap:wrap;">
    <a href="[PAGE].html" style="flex:1;min-width:180px;padding:14px 16px;text-decoration:none;background:rgba(255,255,255,0.025);border-radius:8px;border:1px solid rgba(255,255,255,0.06);border-left:3px solid [ACCENT];transition:background 0.2s;">
      <div style="color:#e0e0e0;font-size:0.92em;margin-bottom:4px;">[Topic Name]</div>
      <div style="color:#606078;font-size:0.78em;">[Chapter Name]</div>
    </a>
  </div>
</div>
```

**Placement:** At the bottom of the page content, above the standard footer. The `[ACCENT]` colour should match the target page's chapter accent, not the current page.

### Template D — Difficulty Badge

Applied to all 194 pages. Uses filled (●) and empty (○) circles to indicate difficulty on a 1-4 scale.

```html
<!-- DIFFICULTY BADGE -->
<div style="display:flex;gap:4px;margin:6px 0 20px 0;" title="Difficulty [N] of 4">
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:#404058;font-size:0.9em;">○</span>
</div>
```

**Placement:** Directly below the page title (`<h1>`). Use the current page's chapter accent colour for filled circles.

**Examples by difficulty level:**

Difficulty 1:
```html
<div style="display:flex;gap:4px;margin:6px 0 20px 0;" title="Difficulty 1 of 4">
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:#404058;font-size:0.9em;">○</span>
  <span style="color:#404058;font-size:0.9em;">○</span>
  <span style="color:#404058;font-size:0.9em;">○</span>
</div>
```

Difficulty 2:
```html
<div style="display:flex;gap:4px;margin:6px 0 20px 0;" title="Difficulty 2 of 4">
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:#404058;font-size:0.9em;">○</span>
  <span style="color:#404058;font-size:0.9em;">○</span>
</div>
```

Difficulty 3:
```html
<div style="display:flex;gap:4px;margin:6px 0 20px 0;" title="Difficulty 3 of 4">
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:#404058;font-size:0.9em;">○</span>
</div>
```

Difficulty 4:
```html
<div style="display:flex;gap:4px;margin:6px 0 20px 0;" title="Difficulty 4 of 4">
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
  <span style="color:[ACCENT];font-size:0.9em;">●</span>
</div>
```

---

## 5.5 Tone Guide — "Where You'll See This" Content

### Principles

1. **Pick ONE concrete, surprising application** — not a list of fields
2. **Be specific:** name the technology, the field, the effect
3. **Short sentences. Em dashes for rhythm. No filler.**
4. **Write for a curious 16-year-old** — no jargon without context
5. **End with a sense of wonder** — the reader should feel the maths is alive

### Good Examples

> "Every time a streaming service recommends a film, eigenvalue decomposition is running beneath the surface — factoring a matrix of millions of viewing histories to find the hidden dimensions of taste."

> "When a GPS satellite triangulates your position, it solves a system of equations that would have made Euclid proud — three spheres intersecting in space, resolved to a point on Earth's surface within a few metres."

> "The Fourier transform is the reason your phone call sounds clear. Every voice signal is decomposed into thousands of frequency components — noise is stripped away, and what reaches the other end is a cleaned-up reconstruction of your words."

### Bad Examples

> "Eigenvalues have many applications in data science and engineering."

> "This topic is used in physics, computer science, and economics."

> "There are many real-world applications of this mathematical concept in various fields."

### Writing Checklist

- [ ] Is there exactly ONE application, not a list?
- [ ] Is a specific technology, system, or phenomenon named?
- [ ] Would a curious teenager find this surprising or interesting?
- [ ] Is it 3-5 sentences, no more?
- [ ] Does it avoid generic phrases like "many applications" or "various fields"?

---

## 5.6 Execution Protocol

### Per-batch Workflow

For each batch:

1. **Announce batch** — state batch number, chapter, and page count
2. **For each page in the batch:**
   a. Read the file to understand current structure and content
   b. Add **difficulty badge** (Template D) below the `<h1>` title
   c. Add **progressive hints** (Template B) to any interactive challenges
   d. Write **"Where You'll See This"** content (Template A) — only for Ch 1-10 pages
   e. Add **"Explore Next"** footer (Template C) with the links specified in Section 5.2
   f. Run the page audit checklist from `docs/REVIEW_PROMPT.md`
3. **After full batch:**
   a. Report summary — pages modified, issues found, any deviations from plan
   b. List any pages that needed structural changes beyond template insertion
4. **Do not commit or push** — all changes remain unstaged for manual review

### Quality Gates

Before marking a batch complete:

- [ ] Every page in the batch has all four Tier 1 enhancements
- [ ] All "Explore Next" links point to real pages that exist in the repository
- [ ] All accent colours match the chapter specification
- [ ] All difficulty badges match the difficulty rating in Section 5.2
- [ ] "Where You'll See This" content follows the tone guide in Section 5.5
- [ ] No existing functionality has been broken (interactive elements, canvas, navigation)

### Error Handling

- If a page has an unusual structure that prevents clean template insertion, note it in the batch report and skip — do not force-fit
- If a page already has one of the Tier 1 features, verify it matches the template and upgrade if needed
- If a page is missing from the repository, log it and continue

---

## 5.7 New Pages Required

These pages are **not** part of the Tier 1 batch work. They are separate deliverables planned for Tier 2.

| Page | Purpose | Tier | Dependencies |
|------|---------|------|-------------|
| educator-guide.html | Curriculum alignment guide for teachers — maps topics to GCSE/A-Level/IB syllabi | Tier 2 | Requires all Tier 1 difficulty badges to be in place |
| index.html enhancement | "Daily Discovery" feature — rotates a highlighted topic each day | Tier 2 | Requires "Where You'll See This" content to exist for featured topics |

### educator-guide.html Specification

- Audience: secondary school teachers and university lecturers
- Content: table mapping each of the 194 topics to curriculum standards (UK GCSE, A-Level, IB, AP)
- Design: follows site design system, uses chapter accent colours for visual grouping
- Navigation: searchable/filterable by curriculum, chapter, and difficulty level

### index.html "Daily Discovery" Enhancement

- Adds a prominent card on the homepage that cycles daily through topics
- Displays: topic name, chapter, difficulty badge, and the "Where You'll See This" excerpt
- Implementation: deterministic rotation based on day-of-year modulo topic count
- No server-side logic — pure JS date calculation

---

## Appendix — Chapter Accent Colour Reference

| Chapter | Name | Accent |
|---------|------|--------|
| 1 | Logic & Proof | `#c084fc` |
| 2 | Numbers | `#fbbf24` |
| 3 | Geometry | `#f472b6` |
| 4 | Algebra | `#60a5fa` |
| 5 | Trigonometry & Waves | `#2dd4bf` |
| 6 | Calculus | `#fb923c` |
| 7 | Linear Algebra | `#a78bfa` |
| 8 | Probability & Statistics | `#f97316` |
| 9 | Analysis & Topology | `#818cf8` |
| 10 | Beautiful Results | `#e879f9` |
| 11 | Quantitative Finance | `#34d399` |
| 12 | Physics | `#14b8a6` |
| 13 | AI/Intelligence | `#38bdf8` |
