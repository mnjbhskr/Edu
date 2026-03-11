# The Mathematics of Dating Sites
## Build Specification for mathsedu.org
### Two Interactive Pages — Revised after SME Review (March 2026)

---

## Document Status

| Field | Detail |
|---|---|
| Version | 2.0 — Post-SME Review |
| SME verdict | Approve with changes |
| Pages covered | `dating_stable_matching.html` · `dating_optimal_stopping.html` |
| Proposed section | Economics & Game Theory Appendix |
| Accent colour | Amber/Gold `#f59e0b` (Economics appendix palette) |
| Build order | Page 2 first (optimal stopping), then Page 1 (stable matching) |

### Changes from v1.0

All changes below incorporate the SME review received March 2026.

**Required (mathematical accuracy)**
- Page 1: Add strict-preference assumption to stable matching definition
- Page 1: State both proposer-optimal AND receiver-pessimal properties explicitly
- Page 2: Correct "exactly 1/e" to "approaches 1/e as n → ∞ (slightly higher for finite n)"

**Required (pedagogical)**
- Both pages: Add "Common Misconceptions" panel
- Page 1: Add hover tooltips showing preference comparisons in instability detector
- Page 1: Add proposal history log in step-through interactive
- Page 2: Add probability of top-3 / top-5 selection to simulator output
- Page 2: Overlay theoretical curve `(k/n)·ln(n/k)` on convergence plot
- Page 2: Animate convergence of optimal k/n → 1/e explicitly

**Optional — included**
- Page 1: Add "For the Curious" panel on lattice structure of stable matchings
- Page 1: Distribution plots across many random matrices in proposer-advantage visualiser
- Both pages: Cross-link to Monte Carlo Simulation page

---

## Design System

> **Follow exactly.** Both pages must be indistinguishable in style from existing site pages.

```css
/* Palette */
background:   #0a0a1a
color:        #e0e0e0
font-family:  Georgia, 'Times New Roman', serif   /* body */
font-family:  'Courier New', monospace            /* maths */

accent-green: #10b981    /* buttons, interactive highlights */
accent-amber: #f59e0b    /* Economics appendix accent — use where other pages use chapter colour */
accent-cyan:  #22d3ee    /* secondary highlights */
accent-gold:  #fbbf24    /* callout boxes */
accent-pink:  #f472b6    /* additional accent */
muted:        #808098    /* labels, secondary text */
panel-bg:     rgba(255,255,255,0.025)
panel-border: rgba(255,255,255,0.06)
```

```html
<!-- Page skeleton — all CSS and JS inline, zero external dependencies -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[TOPIC]</title>
    <style>/* full inline CSS */</style>
</head>
<body>
<div class="container">
    <a class="back" href="index.html">← Back to Index</a>
    <h1>[Topic Name]</h1>
    <p class="subtitle">[One memorable sentence — use em dashes]</p>
    <!-- sections -->
    <div class="explain">
        <div class="explain-name">Why This Matters</div>
        <div class="explain-text">...</div>
    </div>
</div>
<script>/* full inline JS */</script>
</body>
</html>
```

### Component Classes

| Class | Purpose |
|---|---|
| `.panel` | Section wrapper with background and border |
| `.formula-block` | Monospace formula display |
| `.math-line` | Single line of mathematics |
| `.insight-box` | Green left-bordered key insight |
| `.btn` / `.btn.active` | Toggle buttons |
| `.slider-row` | Label + range input + value display |
| `.result-box` | Highlighted output values |
| `.explain` | Bottom explanatory panel |
| `.stats-row` / `.stat-box` | Live statistics |

### Canvas Standards

- Width 700px, height 300–500px
- Background `#0a0a1a`
- Grid lines `rgba(255,255,255,0.04)`
- Primary colour `#10b981`, secondary `#22d3ee` / `#f59e0b` / `#f472b6`
- Canvas labels: `#808098`, Georgia or Courier New

### Footer

Every page must include the standard site footer:

```html
<footer style="text-align:center;padding:28px 20px 18px;color:#505068;font-size:0.72em;
line-height:1.7;border-top:1px solid rgba(255,255,255,0.04);margin-top:30px">
  <div>&copy; 2025&ndash;2026 Manoj Bhaskar &middot; Built in collaboration with
  <a href="https://claude.ai/claude-code" style="color:#606078;text-decoration:none"
  target="_blank" rel="noopener">Claude Code</a> &middot;
  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
  style="color:#606078;text-decoration:none" target="_blank" rel="noopener">
  CC BY-NC-SA 4.0</a></div>
</footer>
```

---

---

# Page 1 — The Art of the Perfect Match

## File: `dating_stable_matching.html`

**Subtitle:** *How a 1962 thought experiment about marriage became the algorithm that places 40,000 doctors every year — and why the side that proposes always wins.*

**Difficulty:** Level 2

**Estimated engagement:** 25–35 minutes

**Mathematical core:** Stable matching · Gale-Shapley algorithm · bipartite graphs · game theory

---

## Concept Overview

The **stable matching problem** asks: given two equally-sized groups, each member of which has ranked every member of the other group in strict order of preference (no ties), can we always find a pairing where no two unmatched individuals would both prefer each other over their current partners?

The answer — yes, always — was proved by David Gale and Lloyd Shapley in 1962. Their algorithm is efficient, elegant, and deeply asymmetric. Alvin Roth later demonstrated its real-world applications and shared the 2012 Nobel Prize in Economics.

### Definitions to present on-page

| Term | Definition |
|---|---|
| **Blocking pair** | A pair (A, B) not matched to each other where A prefers B over their current partner AND B prefers A over their current partner |
| **Stable matching** | A matching with no blocking pairs |
| **Strict preferences** | Each participant ranks all members of the opposite group with no ties — required for the existence guarantee |
| **Proposer-optimal** | Every proposer receives their best possible partner across all stable matchings |
| **Receiver-pessimal** | Every receiver receives their worst possible partner across all stable matchings |
| **Algorithm complexity** | O(n²) — each proposer proposes to each receiver at most once |

> **SME note incorporated:** The existence guarantee requires strict preferences and equal group sizes. This must be stated clearly on the page. Without this assumption, mathematically trained readers will correctly object.

---

## Pedagogical Arc

### Layer 1 — Open Discovery

The page opens with no mention of mathematics:

> *Imagine four people at a party — Alice, Bob, Clara, Dan. Each has secretly ranked the others. We want to pair them up. But some pairings are unstable: both Alice and Dan might prefer each other over their current partners, leading to chaos. Can you find a pairing where nobody has a reason to switch?*

The visitor drags names to create pairings. The visualisation responds immediately:
- Current pairings shown as **green lines**
- Any blocking pair shown as a **red dashed arrow**
- Tooltip on hover over the red arrow: *"Alice ranks Dan #1. Dan ranks Alice #2. Neither is with their preferred partner — this matching is unstable."*
- Stability badge: **✓ Stable** or **✗ Unstable (n blocking pairs)**

> **SME improvement incorporated:** Hover tooltips must show the specific preference ranks driving the instability, not just flag that one exists.

---

### Layer 2 — Guided Exploration

The full 4×4 preference matrix for both groups is revealed. The visitor attempts to find a stable matching manually. The simulator records their attempt count.

Questions posed on-page:
- *Does a stable matching always exist, or can there be none?*
- *If multiple stable matchings exist, which is fairest?*
- *What happens if both sides propose simultaneously?*

A note appears after two failed attempts: *"It turns out a stable matching always exists — as long as everyone ranks the others in strict order. Shall we find it together?"*

---

### Layer 3 — Pattern Recognition

A **Show me the algorithm** button activates the step-through visualiser.

The Gale-Shapley algorithm runs with animation. Each step displays:
- The current proposal being made
- The receiver's decision (free → tentatively accept; already matched but proposer is better → upgrade; already matched and current is better → reject)
- A **proposal history log** on the side — e.g.:
  ```
  Alice → Bob     accepted (tentative)
  Clara → Bob     Bob upgrades to Clara, Alice freed
  Alice → Dan     accepted (tentative)
  ...
  ```

> **SME improvement incorporated:** Proposal history log is essential for students to understand why the algorithm terminates. Without it, the convergence feels mysterious.

After the algorithm completes, the visitor runs it again with the other group as proposers and observes that the result differs. The asymmetry is now visible before it is explained.

---

### Layer 4 — Explanation

**"Why does this always work?"** — a collapsible section with three guided steps:

**Step 1 — Termination**
Each proposer proposes to each receiver at most once. With n proposers and n receivers, there are at most n² proposals. The algorithm must end.

**Step 2 — Stability**
Suppose X and Y are not matched but both prefer each other. For this to happen, Y must have rejected X at some point — which means Y had received a better offer. Y's current partner is therefore at least as good as X from Y's perspective. So X and Y do not form a blocking pair. Contradiction.

**Step 3 — Proposer-optimal and receiver-pessimal**

> **SME requirement:** Both properties must be stated together. State the full theorem:

*The Gale-Shapley algorithm produces the unique stable matching that is simultaneously **best possible for every proposer** and **worst possible for every receiver**, across all stable matchings that exist.*

This symmetry is counterintuitive and socially significant. Present it as a reveal, not a footnote.

Each step is click-through, not a wall of text.

---

### Layer 5 — Connection

**"The same algorithm runs in the real world"**

Three application panels:

1. **Hospital-resident matching (NRMP)** — over 40,000 junior doctors matched to hospitals annually in the United States. Residents are the proposers; hospitals are the receivers. The system was redesigned using Gale-Shapley in 1952 (before the formal proof) and formalised thereafter.

2. **NYC school admissions** — New York City's high school placement system was redesigned using Gale-Shapley in 2003, eliminating the gaming and instability of the previous system.

3. **Kidney exchange programmes** — patients without compatible living donors are matched to donors in a chain, using variants of stable matching to maximise viable transplants.

---

## Common Misconceptions Panel

> **SME requirement:** Include this panel explicitly.

```
⚠️  Common Misconceptions

Misconception: Stable = happiest overall
Reality: "Stable" means only that no blocking pair exists.
A stable matching can leave everyone moderately unhappy
while a different (unstable) matching might make everyone
much happier — but that instability would cause it to unravel.

Misconception: The algorithm finds the unique best matching
Reality: Multiple stable matchings usually exist. Gale-Shapley
finds one specific extreme: the best for proposers, worst for
receivers. Other stable matchings lie in between.
```

---

## Interactive Elements

### Interactive 1 — Instability Detector

**Purpose:** Let the visitor feel the problem before any solution is offered.

**Behaviour:**
- Group size: 4 by default, expandable to 6
- Drag-and-drop pairing
- Immediate visual feedback: green lines (stable pairs), red dashed arrows (blocking pairs)
- **Hover tooltip on each red arrow** showing specific preference ranks: *"Alice ranks Dan #1 (currently with Bob, her #3). Dan ranks Alice #2 (currently with Clara, his #1). Dan is happy — Alice is not. This is not a blocking pair."* — or the reverse if both prefer each other
- Stability badge updates in real time
- "New scenario" button randomises preference matrix

**Technical note:** The preference matrix is generated on page load using Fisher-Yates shuffle for each participant's ranking. Store as a 2D array; blocking pair detection is O(n²) and instant for n ≤ 6.

---

### Interactive 2 — Step-Through Algorithm

**Layout:** Two columns.

- **Left:** Preference matrix (both groups), with the current proposal highlighted
- **Right:** Current matching state — who is tentatively matched, who is free
- **Bottom:** Plain-English narration of each step
- **Side panel:** Scrollable proposal history log (all proposals made so far)

**Controls:**
- Previous / Next step
- Run to end
- Reset
- Speed slider (for auto-run mode): 0.5× to 4×

**Narration examples:**
- *"Alice proposes to Bob (her first choice). Bob is free — he tentatively accepts."*
- *"Clara proposes to Bob (her first choice). Bob prefers Clara over Alice — he upgrades. Alice is now free."*
- *"Alice proposes to Dan (her second choice). Dan is free — he tentatively accepts."*
- *"All proposers are matched. The algorithm terminates. The matching is stable."*

---

### Interactive 3 — Proposer Advantage Visualiser

**Purpose:** Let the visitor verify the proposer-optimal property empirically across many scenarios.

**Behaviour:**
- Toggle: which group proposes
- Side-by-side display of both stable matchings for the current preference matrix
- **Bar chart:** For each participant, their final match's rank (1 = top choice). Proposers' bars are green; receivers' bars are amber.
- **Distribution mode:** Run 200 random preference matrices. Show histogram of average proposer rank vs average receiver rank across all scenarios. The proposer advantage is always visible.
- Summary line: *"Across 200 random scenarios, proposers received their Xth choice on average; receivers received their Yth."*

> **SME improvement incorporated:** Statistical distribution across many matrices, not just one example.

---

### "For the Curious" Panel — Lattice Structure

> **SME recommendation incorporated:** Include as a non-main-content expandable panel.

```
📐  For the Curious: The Lattice of Stable Matchings

All stable matchings for a given preference matrix form a
mathematical structure called a distributive lattice.

This means:
  • There is always a unique best matching for proposers (Gale-Shapley)
  • There is always a unique best matching for receivers (reverse Gale-Shapley)
  • Every stable matching lies "between" these two extremes in a
    precisely defined mathematical sense

The number of stable matchings can range from 1 to exponential in n.
For large n, the structure can be extraordinarily rich.

This is Level 3+ mathematics — but worth knowing it exists.
```

---

## Cross-Links

**Outbound from this page:**
- Combinatorics — counting the number of possible matchings
- Graph Theory & Networks *(proposed)* — matching as a bipartite graph problem
- Game Theory *(proposed)* — strategic reasoning, Nash equilibria
- Monte Carlo Simulation — for the proposer advantage distribution experiment

**Inbound to this page (pages that should link here):**
- `combinatorics.html` — add link in "applications of counting" section
- `group_theory.html` — symmetry and structure connections

---

## Index Entry

```javascript
{
  title: "The Art of the Perfect Match",
  desc: "How the Gale-Shapley algorithm finds stable matchings — and why it earned a Nobel Prize",
  file: "dating_stable_matching.html",
  difficulty: 2
}
```

---

---

# Page 2 — When Should You Stop Looking?

## File: `dating_optimal_stopping.html`

**Subtitle:** *The same number that governs compound interest and the spiral of a nautilus tells you exactly when to stop looking — and the answer might surprise you.*

**Difficulty:** Level 2–3

**Estimated engagement:** 20–30 minutes

**Mathematical core:** Optimal stopping · probability · the number e · expected value · limits

---

## Concept Overview

The **Secretary Problem** — also called the Optimal Stopping Problem or the Marriage Problem — asks:

> You will evaluate n candidates in random order, one at a time. After each, you must decide immediately: accept (ending the search) or reject permanently. You want to maximise the probability of selecting the single best candidate. What strategy gives you the best odds?

The answer is the **37% Rule**: reject (observe only) the first ⌊n/e⌋ ≈ 37% of candidates, then accept the next candidate who is better than everyone seen so far.

This strategy achieves a success probability that approaches **1/e ≈ 36.79%** as n grows large.

> **SME correction incorporated:** The optimal probability is NOT exactly 1/e. For finite n it is slightly above 1/e. The correct statement is: *the optimal probability approaches 1/e as n → ∞, and is slightly higher for any finite n*. The page must state this carefully.

### Key facts to present

| Concept | Statement |
|---|---|
| Optimal cutoff | `k* = ⌊n/e⌋` — observe this many, then commit to the next best |
| Success probability | Approaches 1/e ≈ 36.79% as n → ∞; slightly higher for finite n |
| Independence of n | The limiting probability is the same regardless of pool size |
| The number e | `e = lim(1 + 1/n)^n ≈ 2.71828...` |
| Exact formula | `P(k,n) = (k/n) × Σ 1/(j−1)` for j = k+1 to n |
| Continuous approximation | `P(k/n) ≈ (k/n) × ln(n/k)` for large n |

---

## Pedagogical Arc

### Layer 1 — Open Discovery

The page opens with no mention of mathematics:

> *At some point, most of us face a version of the same impossible problem. You're looking for something — a partner, a flat, a job. Each option arrives one at a time. If you pass, it's gone. If you settle too early, you'll always wonder. Too late, and the best ones have moved on.*
>
> *You're going on 10 dates, in random order. After each one you must decide: is this the one? You can never go back. What's your strategy?*

The visitor picks a strategy (a cutoff — how many dates to observe before committing) and runs 1,000 simulated trials. They see immediately how often they end up with the best possible match.

---

### Layer 2 — Guided Exploration

Questions posed on-page:
- *What happens if you always commit to the first person you meet?* (cutoff = 0, success ≈ 10% for n=10)
- *What if you wait until you've seen everyone?* (You always end up with the last person — often not the best)
- *Where is the sweet spot?* — use the slider

The visitor discovers through experimentation that the optimal cutoff is around 3–4 out of 10 (roughly 37%). The simulation makes this concrete before any formula is introduced.

---

### Layer 3 — Pattern Recognition

A second interactive extends across different values of n. The visitor finds the optimal cutoff for each:

| Candidates (n) | Optimal cutoff (k) | k/n | Success probability |
|---|---|---|---|
| 5 | 2 | 40% | 43.3% |
| 10 | 4 | 40% | 39.9% |
| 20 | 7 | 35% | 38.4% |
| 50 | 18 | 36% | 37.4% |
| 100 | 37 | 37% | 37.1% |

The pattern is visible: k/n converges toward approximately 37%, and the success probability also converges toward approximately 37%. Something familiar is appearing — but what?

> **Note:** The table above should be generated live by the simulation, not hard-coded. The visitor builds it row by row.

---

### Layer 4 — Explanation

**"Where does 37% come from?"** — two tracks, both available:

#### Track A — Intuitive (no calculus required)

For large n, if we observe the first k candidates and then pick the next best-so-far, the probability of success is approximately:

```
P(k) ≈ (k/n) × ln(n/k)
```

To find the best k: this expression is maximised when its derivative equals zero. Setting `d/dk [(k/n)·ln(n/k)] = 0` gives `k/n = 1/e`.

The natural logarithm — and therefore e — emerges inevitably from the structure of the problem.

Present this as a guided argument with clickable steps, not a derivation to stare at.

#### Track B — For the mathematically confident

The exact probability for n candidates with cutoff k is:

```
P(k, n) = (k/n) × Σ [1/(j−1)]   for j = k+1 to n
```

This is a partial harmonic sum. As n → ∞ with k = ⌊n/e⌋, this converges to 1/e from above.

> **SME note incorporated:** Track B students should see that the convergence is from above — the finite-n probability is always slightly better than 1/e.

Both tracks are clearly labelled. A toggle lets the visitor switch between them.

---

### Layer 5 — Connection

**"Your 37% problems"**

A panel with four real-world applications:

1. **Renting a flat** — should you take this one, or keep looking?
2. **Job offers** — when should you stop interviewing and accept?
3. **Selling a house** — when is the current offer good enough?
4. **Parking** — how far should you drive looking for a closer space?

Closing reflection on-page:
> *The mathematics says: observe, don't commit. Then commit to the first option that beats everything you've seen. The exact fraction to observe — always about 37% — is the same whether you're choosing from 10 options or 10,000. The same number appears in your savings account, in the spiral of a shell, and in the mathematics of love.*

Cross-links to: Probability Distributions · Bayes' Theorem · Sequences & Series · Euler's Identity · Monte Carlo Simulation.

---

## Common Misconceptions Panel

> **SME requirement:** Include this panel explicitly.

```
⚠️  Common Misconceptions

Misconception: The 37% rule guarantees you find the best
Reality: It maximises your probability of finding the best,
but that probability is still only about 37%. In roughly
2 out of 3 cases, you will not select the best candidate —
the strategy just means no other strategy does better.

Misconception: You should apply this to real life literally
Reality: The Secretary Problem assumes you cannot recall
previous candidates, you can perfectly rank each new arrival
against all past ones, and you know n in advance. Real
decisions rarely satisfy all these conditions. The rule
offers insight, not a formula.

Misconception: Observing 37% means rejecting 37% of your life
Reality: You apply the rule to a defined search window.
The mathematics says nothing about how long that window
should be — only how to behave within it.
```

---

## Interactive Elements

### Interactive 1 — The Optimal Stopping Simulator

**The core simulation.**

**Controls:**
- **n slider:** 5 to 100 candidates (default: 10)
- **Cutoff slider:** 0 to n−1 (number to observe before committing)
- **Trials:** 1,000 Monte Carlo runs (instant in-browser)
- **Run** button / auto-updates on slider change

**Output:**

| Metric | Description |
|---|---|
| Success rate | % of trials where strategy selected the best candidate |
| Avg rank of selection | Mean rank of chosen candidate (1 = best, n = worst) |
| **Top-3 rate** | % of trials where strategy selected a top-3 candidate |
| **Top-5 rate** | % of trials where strategy selected a top-5 candidate |
| Distribution chart | Bell curve / histogram of ranks selected across all trials |

> **SME improvement incorporated:** Top-3 and top-5 rates are often more meaningful than strict "best or nothing" — include both.

**Canvas visualisation:** Show one sample trial animating in real time — candidates appearing one by one, the observation phase (grey), the selection phase (green), the chosen candidate highlighted, and whether they were the best (gold star) or not.

---

### Interactive 2 — The Convergence Plot

**Purpose:** Show the success probability curve and reveal the peak.

**Canvas (700×350):**
- X-axis: cutoff fraction k/n (0 to 1)
- Y-axis: success probability (0% to 60%)
- **Simulated curve:** Success rate for each cutoff (from simulation data)
- **Theoretical overlay** (toggleable): `(k/n) × ln(n/k)` drawn as a dashed line

> **SME improvement incorporated:** The theoretical curve overlay is essential — it bridges simulation and mathematics visually.

**Interactions:**
- Drag a vertical line to any cutoff fraction → see success probability
- Toggle between n values (10, 20, 50, 100) to observe convergence
- Toggle theoretical overlay on/off
- A marker pin locks at the peak: *"Optimal cutoff: k/n = 0.37 — success probability: 38.9%"*

---

### Interactive 3 — The Emergence of e

**Purpose:** Make the appearance of e feel inevitable, not magical.

**Animation sequence** (triggered by a "Watch e appear" button after the visitor has explored the first two interactives):

1. The optimal k/n value from Interactive 1 is shown for n = 10: approximately 0.40
2. The n slider increments automatically: 20 → 50 → 100 → 200
3. Each step plots the optimal k/n on a number line, converging visibly
4. The number line zooms in: *"The fraction is converging to... 0.3678..."*
5. The decimal expansion of 1/e writes out one digit at a time: `0.3678794411...`
6. A callout: *"This is 1/e — the reciprocal of Euler's number, the same e that governs compound interest."* → link to `eulers_identity.html`

> **SME improvement incorporated:** The animation shows convergence explicitly, making e feel earned rather than announced.

---

## Cross-Links

**Outbound from this page:**
- `probability_distributions.html` — the mathematical foundation
- `bayes_theorem.html` — sequential updating of beliefs
- `sequences_series.html` — harmonic series connection in Track B
- `eulers_identity.html` — the same e appears here
- `monte_carlo.html` — the simulation itself is a Monte Carlo method

**Inbound to this page (pages that should link here):**
- `probability_distributions.html` — add note on optimal stopping
- `sequences_series.html` — harmonic series → Secretary Problem
- `eulers_identity.html` — "e appears in optimal stopping too" link
- `bayes_theorem.html` — sequential decision-making link

---

## Index Entry

```javascript
{
  title: "When Should You Stop Looking?",
  desc: "The 37% rule — optimal stopping theory and the surprising appearance of e",
  file: "dating_optimal_stopping.html",
  difficulty: 3
}
```

---

---

# Implementation Notes

## Technical Requirements

| Requirement | Detail |
|---|---|
| Dependencies | Zero — pure vanilla HTML/CSS/JS |
| Monte Carlo (n=100, 1000 trials) | Must complete < 50ms on mid-range mobile |
| Canvas animations | 60fps via `requestAnimationFrame` |
| Page load | < 200KB total |
| Mobile | Fully functional at 375px viewport width |
| Drag and drop (Page 1) | Touch events required alongside mouse events |

## Build Order

Build Page 2 (`dating_optimal_stopping.html`) first. It is more self-contained mathematically and the Monte Carlo engine is the most technically demanding element. Test thoroughly across desktop and mobile before starting Page 1.

Page 1 (`dating_stable_matching.html`) has more complex UI requirements: drag-and-drop pairing, step-through animation with history log, and the distribution visualiser. Build after Page 2 is stable.

## Index Update

Add a new section to `index.html`:

```javascript
{
  title: "Economics & Game Theory",
  subtitle: "When mathematics meets human decisions",
  icon: "⚖",
  color: "#f59e0b",
  topics: [
    {
      title: "The Art of the Perfect Match",
      desc: "How the Gale-Shapley algorithm finds stable matchings — and why it earned a Nobel Prize",
      file: "dating_stable_matching.html",
      difficulty: 2
    },
    {
      title: "When Should You Stop Looking?",
      desc: "The 37% rule — optimal stopping theory and the surprising appearance of e",
      file: "dating_optimal_stopping.html",
      difficulty: 3
    }
  ]
}
```

---

*Specification v2.0 — mathsedu.org — March 2026*
*Authored by Manoj Bhaskar · Reviewed by SME · Revised by Claude*
