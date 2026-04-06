# Benchmark Recommendations

**Task 1 — Structured Recommendations Checklist**

*Derived from the Ten Principles benchmark analysis of mathsedu.org*

*Date: 15 March 2026*

---

## 1.1 — Ten Principles Scorecard Summary

| Principle | Rating | One-line finding | Key action |
|-----------|--------|------------------|------------|
| 1. Visual-first design | STRONG | Every page opens with interactive canvas; neurologically validated by Dehaene (1999) | Maintain — this is the core strength |
| 2. Active exploration | STRONG | 194 interactive visualisations with direct manipulation; no passive content | Maintain — every new page must be interactive |
| 3. Conceptual understanding first | STRONG | "Show the beauty first, explain the formalism second" maps to Skemp's relational understanding | Maintain — formulas come after intuition |
| 4. Multiple representations | MODERATE | Strong on graphical; weaker on systematically connecting algebraic, numerical, verbal forms | Add side-by-side algebraic/numerical views on key pages |
| 5. Low floor, high ceiling | MODERATE | Difficulty 1–4 system exists but individual pages have fixed difficulty | Add "Start Here" on hard pages; "Go Deeper" on easy pages |
| 6. Productive struggle with scaffolding | PARTIAL | Interactive exploration exists but no guided hints or progressive challenges | Add progressive hints to all "Try This" prompts |
| 7. Spaced practice and interleaving | LOW (intentional) | Site is for discovery, not practice — conscious design choice | Partially address via "Daily Discovery" and "Explore Next" |
| 8. No timed pressure | STRONG | Zero timed elements, no quizzes, no scores; brand voice avoids "Test", "Exam", "Grade" | Maintain — never add timed elements |
| 9. Digital tools with guidance | MODERATE | Works as classroom supplement but no teacher guide or curriculum mapping | Create educator guide with curriculum alignment |
| 10. Real-world connections | MODERATE | Physics/Finance inherently contextual; pure maths pages lack explicit applications | Add "Where You'll See This" boxes to pure maths pages |

---

## 1.2 — Master Recommendations Checklist

### Tier 1 — High Impact, High Feasibility (immediate wins)

- [ ] **"Where You'll See This" box** — Add to all pure mathematics pages lacking real-world context. 3–5 sentences, specific application. Style: panel with left border `3px solid #22d3ee`. Chapters 11 (Finance), 12 (Physics), 13 (AI) are inherently applied and may not need this.
- [ ] **"Try This" hint upgrade** — Every "Try This" prompt gets at least one progressive hint, collapsed by default, revealed on click. Scaffolds productive struggle.
- [ ] **"Explore Next" footer strip** — On every page: 2–3 related topic links before the footer. Topic name + chapter name. Enables organic navigation and partial spaced-revisiting.
- [ ] **Difficulty badge on page** — Add difficulty rating (1–4 filled dots) in page header, not only on index card.

### Tier 2 — High Impact, Medium Feasibility (second pass)

- [ ] **"Start Here" guided entry** — On difficulty 3 and 4 pages: collapsible intro panel for learners without prerequisites. What to explore first, core intuition in plain language, one grounding prompt.
- [ ] **"Daily Discovery" on index.html** — Rotating spotlight card, deterministic selection based on `Math.floor(Date.now() / 86400000) % topics.length`. No server, no tracking.
- [ ] **Educator guide** — New page `educator-guide.html` mapping visualisations to UK GCSE, A-Level, IB, Common Core US.

### Tier 3 — High Impact, Lower Feasibility (future)

- [ ] **Conceptual questions per page** — 3–5 non-timed, non-drill conceptual questions aligned with NCTM principles.
- [ ] **Formal curriculum alignment** — Detailed mapping to GCSE, A-Level, IB, AP, Common Core.

### Not Recommended (misaligned with site philosophy)

- **Timed quizzes** — contradicts Boaler's research on maths anxiety
- **Login/account systems** — contradicts "no friction" principle
- **Gamification with points/badges** — risks extrinsic motivation crowding out intrinsic curiosity
- **Adaptive learning algorithms** — requires tracking, contradicts privacy principles

---

## 1.3 — Multiple Representations Gap

Pages in Chapters 1–10 that currently show only graphical representations and would benefit from additional algebraic, numerical, or verbal forms.

| Page | Currently shows | Missing representations | Priority |
|------|----------------|------------------------|----------|
| `derivatives.html` | Graphical tangent line on curve | Algebraic differentiation rules side by side; numerical difference quotient table | High |
| `integration.html` | Graphical area under curve (Riemann sums) | Algebraic antiderivative rules; numerical approximation table | High |
| `quadratic_formula.html` | Graphical parabola with roots | Algebraic completing-the-square steps; numerical coefficient-to-root table | High |
| `limits_continuity.html` | Graphical epsilon-delta approach | Algebraic limit laws; numerical convergence table showing values approaching limit | High |
| `unit_circle.html` | Graphical circle with angle sweep | Algebraic exact values table (30°, 45°, 60°); numerical sin/cos readout | High |
| `logarithms_exponentials.html` | Graphical curves for log and exp | Algebraic log laws and identities; numerical base-conversion table | High |
| `fundamental_theorem_calculus.html` | Graphical area function connection | Algebraic statement of FTC I and II; numerical running-sum table | High |
| `taylor_series.html` | Graphical successive polynomial approximations | Algebraic general term formula; numerical error table at each order | High |
| `complex_numbers.html` | Graphical Argand diagram | Algebraic polar/rectangular conversion; numerical modulus/argument readout | Medium |
| `eigenvalues.html` | Graphical geometric transformation of vectors | Algebraic characteristic polynomial computation; numerical matrix entries | Medium |
| `binomial_theorem.html` | Graphical Pascal's triangle | Algebraic expansion formula; numerical coefficient computation steps | Medium |
| `fourier_transform.html` | Graphical frequency decomposition | Algebraic integral formula; numerical coefficient table for harmonics | Medium |
| `group_theory.html` | Graphical symmetry rotations/reflections | Algebraic Cayley (multiplication) table; verbal description of group axioms | Medium |
| `probability_distributions.html` | Graphical distribution curves | Algebraic PDF/CDF formulas; numerical parameter-to-statistic table | Medium |
| `sequences_series.html` | Graphical convergence/divergence plots | Algebraic closed-form and recurrence relations; numerical partial-sum table | Medium |
| `conic_sections.html` | Graphical cone slicing and curves | Algebraic standard-form equations; numerical eccentricity and focus values | Medium |
| `mean_value_theorem.html` | Graphical secant and tangent line | Algebraic formal statement; numerical example with computed c value | Medium |
| `differential_equations.html` | Graphical slope field and solution curves | Algebraic separation of variables steps; numerical Euler method table | Medium |
| `polynomial_roots.html` | Graphical root-finding on curve | Algebraic factorisation steps; numerical Newton-Raphson iteration table | Low |
| `svd.html` | Graphical matrix decomposition geometry | Algebraic SVD formula and computation; numerical singular value table | Low |

---

*This checklist is a living document. Items should be ticked off as they are implemented and verified against the QA review checklist in `docs/REVIEW_PROMPT.md`.*
