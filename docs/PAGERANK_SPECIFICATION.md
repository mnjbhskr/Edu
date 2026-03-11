# How Search Engines Find What You're Looking For
## Build Specification for mathsedu.org
### One Interactive Page — Draft for Review (March 2026)

---

## Document Status

| Field | Detail |
|---|---|
| Version | 1.0 — Initial Draft |
| Status | For SME review before build |
| Filename | `pagerank.html` |
| Proposed section | Computer Science, AI & Cryptography Appendix (ref: AI5 in expansion plan) |
| Difficulty | Level 2–3 |
| Accent colour | Cyan `#22d3ee` (CS / AI appendix palette) |

---

## Design System

> Follow exactly — identical to all existing site pages and the dating maths pages.

```css
background:   #0a0a1a
color:        #e0e0e0
font-family:  Georgia, 'Times New Roman', serif   /* body */
font-family:  'Courier New', monospace            /* maths */

accent-cyan:  #22d3ee    /* CS appendix primary accent */
accent-green: #10b981    /* interactive buttons */
accent-gold:  #fbbf24    /* callouts */
accent-pink:  #f472b6    /* additional accent */
muted:        #808098
panel-bg:     rgba(255,255,255,0.025)
panel-border: rgba(255,255,255,0.06)
```

Single-file HTML — all CSS and JS inline, zero external dependencies. Standard page skeleton, `.panel`, `.insight-box`, `.explain`, `.btn`, `.slider-row`, `.formula-block` classes as documented in `AI_CHAPTER_SPECIFICATION.md`. Standard footer required.

---

## Concept Overview

Every time you type a query into a search engine, you are asking a system
to rank billions of documents in a fraction of a second. The question of
*how* to rank them is not obvious — and the history of attempts to answer
it is a story of mathematics gradually winning over brute force.

This page tells that story in three acts, ending with the mathematical
insight that made Google possible: **PageRank**, an algorithm that
computes the importance of every page on the web simultaneously by
finding the stationary distribution of a random walk on a directed graph.

The mathematics draws on:
- **Graph theory** — the web as a directed graph of nodes and edges
- **Linear algebra** — importance as an eigenvector of a matrix
- **Markov chains** — a random surfer whose long-run behaviour reveals page importance
- **Probability** — the damping factor and the dangling node problem

All four of these topics either exist on the site already or are proposed
in the expansion plan. This page is therefore a natural *synthesis* page
— showing how ideas from across mathematics converge on a single problem.

### The Emotional Hook

> *Every time you search for something, a piece of mathematics invented
> by two PhD students in a Stanford garage decides what you see first.
> That mathematics is not complicated — it is elegant. And once you
> understand it, you will never look at a hyperlink the same way again.*

---

## Historical Arc — Three Acts

The page is structured around three historical moments. This is not
decoration — the history IS the pedagogy. Each era failed in a specific
mathematical way, and understanding the failure motivates the solution.

### Act I — The Keyword Era (1990–1997)

**The problem:** The web exists. How do you find things?

Early search engines (AltaVista, Excite, Lycos) ranked pages by keyword
frequency. A page about "tennis" that mentioned the word "tennis" one
hundred times ranked higher than one that mentioned it once.

**The mathematical failure:** The model treated every word occurrence as
an independent signal. It ignored the structure of the web entirely.

**The exploit:** Spammers discovered "keyword stuffing" — hiding hundreds
of repetitions of popular search terms in white text on white backgrounds.
The mathematics was gamed within months of being deployed.

*Present on-page:* A small interactive showing a simple keyword-frequency
ranker being fooled by a stuffed page. The visitor sees the problem
viscerally before any solution is offered.

---

### Act II — The Link Insight (1997–1998)

**The key observation:** Jon Kleinberg at Cornell and separately Larry
Page and Sergey Brin at Stanford noticed the same thing: **a hyperlink is
a vote**. When a page links to another page, it is implicitly saying
*"this page is worth reading."*

This was a fundamental shift in thinking — from the *content* of a page
to its *position in the graph* of the web.

**But immediately a problem:** Not all votes should be equal. A link from
the BBC is more valuable than a link from an obscure personal blog. But
how do we know the BBC is important? Because important pages link to it.
But how do we know those pages are important? Because...

This is circular reasoning. It is also, as Brin and Page recognised, an
eigenvector problem.

*Present on-page:* An interactive small web graph (6–8 nodes). The
visitor assigns "importance" to pages manually by following links, and
discovers they keep going in circles. The circularity is the insight.

---

### Act III — The Mathematics (1998–present)

**The PageRank algorithm** resolves the circularity by asking a
different question:

> *Imagine a bored web surfer who clicks links at random, forever. Which
> pages do they spend the most time on?*

This is a **random walk on a directed graph**. The long-run fraction of
time the surfer spends on each page is that page's **PageRank score**.
Finding this distribution is equivalent to finding the **dominant
eigenvector** of the web's link matrix.

The mathematics that makes this work:
1. Model the web as a **transition matrix** *M* where M_ij = 1/(out-degree of j) if j links to i, else 0
2. The PageRank vector **r** satisfies: **r** = M**r** (an eigenvector equation with eigenvalue 1)
3. By the **Perron-Frobenius theorem**, this eigenvector exists, is unique, and has all positive entries — provided the graph is suitably connected
4. It can be computed by **power iteration**: start with any distribution, repeatedly multiply by M, and the result converges to **r**

Two mathematical complications require the **damping factor**:
- **Dangling nodes:** pages with no outgoing links absorb probability and the walk gets stuck
- **Disconnected components:** the random surfer may never reach some parts of the web

The fix: with probability *d* (typically 0.85), the surfer follows a link. With probability (1−d), they teleport to a random page. This gives the full PageRank formula:

```
r(i) = (1 - d) / N  +  d × Σ [ r(j) / out-degree(j) ]
                              j → i
```

This modified matrix is now **irreducible** and **aperiodic** — the
conditions required by the Perron-Frobenius theorem for a unique
stationary distribution to exist.

---

## Pedagogical Arc (Five Layers)

### Layer 1 — Open Discovery

The page opens with a challenge, not an explanation:

> *There are 8 pages below, connected by links. Your job: rank them by
> importance. You cannot read their content — only see how they connect.
> Which page is most important? Why?*

The visitor is shown a small web graph with 8 nodes and directed edges.
They drag a ranking bar to order the pages. There is no right answer
given yet — the point is to make them feel the difficulty of the problem
and notice that they naturally follow link structure to judge importance.

---

### Layer 2 — Guided Exploration

**Stage 1: Keyword failure**

The visitor is shown two pages about a topic. Page A mentions the keyword
three times; Page B mentions it forty times. A simple keyword ranker
ranks B higher. The visitor clicks through to "read" the pages — Page B
is clearly spam. *This is the problem.*

**Stage 2: Links as votes**

The visitor is shown the same 8-node graph with the ability to "cast
votes" by following links. They discover the circularity: important pages
seem important because important pages link to them.

**Stage 3: The surfer**

The visitor is invited to *become* the random surfer. A small graph
animates: a dot moves from page to page at random, following links. A
counter beside each node records how many times the surfer visited.
After 1,000 steps, a clear pattern has emerged — some pages are visited
much more than others. *This pattern is PageRank.*

---

### Layer 3 — Pattern Recognition

The visitor runs the random surfer simulation on several different graph
configurations and observes:

- A page with many inbound links accumulates high PageRank
- A page linked to by high-PageRank pages accumulates more PageRank than
  one linked to by many low-PageRank pages
- A page with no inbound links has near-zero PageRank regardless of its content
- Removing one high-PageRank inbound link can dramatically change a page's score

A table builds up showing the simulated PageRank distribution for each
graph configuration. The visitor is then invited to predict the outcome
for a new configuration before running it.

---

### Layer 4 — Explanation

**"Why does the surfer converge?"** — presented in two tracks.

#### Track A — Intuitive

The random surfer is a **Markov chain**: future behaviour depends only on
where the surfer is now, not how they got there. For any Markov chain on
a connected graph with no "traps," a unique long-run distribution exists.
The surfer's visits converge to this distribution regardless of where
they start.

The PageRank of a page is simply its share of the surfer's long-run time.

#### Track B — Linear algebra

Model the web as a matrix *M*. Entry M_ij = 1/(out-degree of j) if j
links to i; 0 otherwise. The surfer's position after one step is M times
their current distribution. After many steps:

```
r = M × r
```

This is an **eigenvector equation**. The PageRank vector **r** is the
eigenvector of *M* corresponding to eigenvalue 1. The **Perron-Frobenius
theorem** guarantees this eigenvector is unique and positive when M is
the Google Matrix (with damping factor applied).

**Power iteration** computes it: start with uniform distribution r₀ = [1/N, ..., 1/N],
then repeatedly apply:

```
r_{k+1} = M × r_k
```

This converges to the true PageRank vector. On the real web in 1998,
convergence took approximately 52 iterations.

**The Google Matrix** (incorporating the damping factor):

```
G = d × M  +  (1 - d) / N × J
```

where J is the N×N all-ones matrix and d ≈ 0.85.

The (1−d)/N term ensures every page has a non-zero chance of being
visited regardless of link structure — this solves both the dangling
node and disconnected component problems.

---

### Layer 5 — Connection

**"PageRank changed the world — and the mathematics didn't stop there"**

Four connections presented as expandable panels:

1. **From web to science** — citation ranking in academic papers uses
   identical mathematics. A paper cited by highly-cited papers ranks higher.
   Tools like Google Scholar and Semantic Scholar use PageRank variants.

2. **From web to biology** — protein interaction networks, neural connectivity
   graphs, and gene regulatory networks all use random-walk importance measures.
   The mathematics of PageRank has been applied to find the most "central"
   proteins in disease pathways.

3. **From web to finance** — systemic risk in banking networks can be modelled
   using PageRank-like measures. A bank that is "linked to" by many other banks
   (i.e., owes money to or is owed money by many counterparties) has higher
   systemic importance. This connects directly to the site's Quantitative Finance
   appendix.

4. **The algorithm today** — Google's current ranking algorithm has evolved
   far beyond PageRank (which has been a less dominant factor since the mid-2010s).
   Modern search combines PageRank with machine learning models, content quality
   signals, user behaviour data, and large language model-based relevance scoring.
   The mathematical foundations, however, remain graph theory, linear algebra,
   and probability. The tools changed; the mathematics didn't.

Cross-links to: `eigenvalues.html` · `linear_transformations.html` · `probability_distributions.html` · `markov_chains.html` *(proposed)* · `graph_theory.html` *(proposed)* · `svd.html`

---

## Common Misconceptions Panel

```
⚠️  Common Misconceptions

Misconception: PageRank ranks pages by content quality
Reality: PageRank knows nothing about content. It ranks pages
purely by their position in the link graph. A highly-linked
page about misinformation would score higher than a poorly-linked
page of accurate scientific research.

Misconception: More links always means higher PageRank
Reality: A link from a low-PageRank page contributes very little.
Ten links from high-PageRank pages outweigh a thousand links
from obscure ones. It is weighted influence, not vote count.

Misconception: PageRank is still Google's primary ranking signal
Reality: Google's algorithm now includes hundreds of signals.
PageRank was dominant in 1998–2010 but has become one factor
among many. The mathematical ideas, however, remain foundational
to how link structure is understood.

Misconception: The damping factor d = 0.85 is arbitrary
Reality: It represents a meaningful assumption: a real web surfer
follows a link with probability 0.85 and gets bored and jumps to
a random page with probability 0.15. Different values of d lead
to different rankings; 0.85 was found empirically to produce the
most useful results.
```

---

## Interactive Elements

### Interactive 1 — The Keyword Failure

**Purpose:** Make the visitor feel the problem before seeing the solution.

**Layout:** Two side-by-side "pages" with visible content.

- Page A: A thoughtful, well-written article about the search topic. Keyword appears 4 times.
- Page B: A keyword-stuffed page. The keyword appears 60 times, some in tiny grey text.

**Controls:**
- "Rank by keyword frequency" button → Page B wins, rises to the top
- "Rank by links" button → Page A wins (it has more inbound links in the mini-graph)
- The visitor can toggle between ranking methods and see results change

**Insight box:** *"Early search engines could only see the text. Spammers exploited this within months. Something was missing — the structure of the web itself."*

---

### Interactive 2 — The Random Surfer

**The core interactive. This is the centrepiece of the page.**

**Canvas (700×450):** A directed graph with 8 nodes arranged in a natural layout.

- Nodes: circles, labelled A–H, sized proportionally to current PageRank score
- Edges: directed arrows showing links
- A moving dot (the surfer) animates along edges

**Controls:**
- **Speed slider:** Slow (1 step/sec) to Fast (50 steps/sec)
- **Steps counter:** Total steps taken
- **Visit counter beside each node:** How many times visited
- **PageRank bar chart:** Updates live as the surfer walks, showing the evolving distribution
- **"Teleport" toggle:** With/without damping factor — visitor sees how it affects the distribution
- **Graph presets:** "Simple chain" / "Star network" / "Cyclic" / "Real-world-like" / "Dangling node trap"

**Behaviour:**
- At each step: with probability d=0.85, follow a random outbound link; with probability 0.15, jump to a random node
- If on a dangling node (no outbound links), always teleport
- Visit counts normalise to percentages and update the bar chart

**Reveal:** After 500+ steps, the bar chart stabilises. A button appears: *"This stable distribution is PageRank."*

---

### Interactive 3 — Power Iteration

**Purpose:** Show that matrix multiplication computes what the random surfer found empirically.

**Layout:**
- Left panel: The transition matrix M for the current graph (shown as a colour-coded grid, not raw numbers)
- Right panel: The current estimate of the PageRank vector r

**Controls:**
- "Start" — initialises r as uniform distribution [1/N, ..., 1/N]
- "One iteration" — computes r ← G × r (the Google Matrix multiplication)
- "Run to convergence" — iterates until ||r_{k+1} − r_k|| < 0.001

**Visualisation:**
- The PageRank vector r is shown as a bar chart that updates each iteration
- An iteration counter and convergence error display
- Overlay: the converged result from Interactive 2 (the surfer) — they match

**Insight box:** *"The surfer and the matrix arrive at the same answer. The random walk and the eigenvector are the same thing — just two different ways of seeing it."*

---

### Interactive 4 — Build Your Own Web

**Purpose:** Let the visitor experiment with graph structure and see PageRank respond.

**Canvas (700×400):** A blank canvas.

**Controls:**
- Click to add a node
- Click-drag between nodes to add a directed link
- Click a link to remove it
- "Clear" button
- "Run PageRank" button — runs power iteration on the visitor's graph

**Output:**
- Node sizes update to reflect PageRank
- A ranked list of nodes with scores appears beside the canvas
- Special cases flagged: *"This graph has a dangling node — PageRank will be applied with damping."*

**Suggested experiments (shown as prompts):**
- *"What happens if two pages link to each other and nobody else links to them?"*
- *"Can you build a graph where the page with the most inbound links is NOT the highest-ranked?"*
- *"What happens to a page's score when you remove its most important inbound link?"*

---

## Key Mathematics to Present On-Page

| Concept | Presentation |
|---|---|
| Web as directed graph | G = (V, E) where V = pages, E = links; visualised as the interactive graph |
| Transition matrix M | M_ij = 1 / out-degree(j) if j→i, else 0; shown as colour grid in Interactive 3 |
| PageRank as eigenvector | **r** = M**r**, eigenvalue = 1 |
| Power iteration | r_{k+1} = G × r_k, converges by Perron-Frobenius |
| Google Matrix | G = d·M + (1−d)/N · J, d ≈ 0.85 |
| PageRank formula | r(i) = (1−d)/N + d · Σ_{j→i} r(j)/out-degree(j) |
| Convergence criterion | Stop when max|r_{k+1} − r_k| < ε (typically 0.001) |

All formulae displayed in Courier New in `.formula-block` panels, consistent with site style.

---

## Historical Timeline Panel

Present a compact horizontal timeline as a visual element (canvas-drawn or CSS):

```
1990        1994        1996        1998        2000        2010        2024
 |           |           |           |           |           |           |
 ▼           ▼           ▼           ▼           ▼           ▼           ▼
Archie     Yahoo!     AltaVista   PageRank    Google      Social     LLM-based
(FTP       (human     (keyword    invented    goes        signals    ranking
index)     curation)  matching)   (Brin &     public      added      emerges
                                  Page)
```

Each milestone is clickable, revealing a two-sentence explanation of what
changed mathematically at each step.

---

## Narrative Sections

### Opening (before any interactive)

> *In 1994, the World Wide Web had about 3,000 websites. By 1998, it had
> 2.4 million. By 2024, approximately 2 billion.*
>
> *The question was never "can we build a search engine?" The question
> was "how do you decide which result matters most?" It turns out this is
> a deep mathematical question — and the answer involves random walks,
> eigenvectors, and a constant called the damping factor.*

### The Surfer Metaphor (introducing Interactive 2)

> *Forget algorithms for a moment. Imagine instead a person — infinitely
> patient, infinitely bored — sitting at a computer in 1998, clicking
> links at random. They never get tired. They never search for anything.
> They just click. When a page has no outgoing links, they pick any
> page on the web at random and start again.*
>
> *Where do they spend most of their time? The answer to that question
> is PageRank.*

### The Eigenvector Reveal (introducing Interactive 3)

> *The random surfer and the matrix arrive at the same answer. This is
> not a coincidence — it is a theorem. A Markov chain on a graph
> converges to its stationary distribution, and that distribution is
> the dominant eigenvector of the transition matrix. The surfer's
> patient wandering is power iteration in disguise.*

---

## "For the Curious" Panels

### The Perron-Frobenius Theorem

```
📐  For the Curious: Perron-Frobenius

The Google Matrix G is a positive stochastic matrix:
  • All entries are positive (guaranteed by the damping factor)
  • Each column sums to 1 (it's a probability distribution)

The Perron-Frobenius theorem states that any such matrix has a
unique eigenvector with eigenvalue 1, and all its entries are positive.

This is why PageRank is well-defined. Without the damping factor,
the web's link matrix may not satisfy these conditions — and the
eigenvector may not be unique or may have zero entries.

The theorem was proved in 1907–1912, nearly 90 years before the web existed.
```

### HITS — The Road Not Taken

```
💡  For the Curious: HITS (Hyperlink-Induced Topic Search)

Jon Kleinberg at Cornell developed a competing algorithm in 1997:
HITS (Hyperlink-Induced Topic Search).

HITS assigns two scores to each page:
  • Authority score — how often high-quality hubs link to this page
  • Hub score — how many high-authority pages this page links to

HITS and PageRank both use eigenvectors of link matrices, but HITS
computes two eigenvectors (authorities and hubs) while PageRank
computes one. HITS is query-dependent; PageRank is query-independent.

PageRank's query-independence made it faster at web scale — and Google
won the search engine wars partly on this basis.
```

---

## Cross-Links

**Outbound from this page:**
- `eigenvalues.html` — eigenvectors as the mathematical core of PageRank
- `svd.html` — related matrix decomposition ideas
- `linear_transformations.html` — matrix multiplication as transformation
- `probability_distributions.html` — the random walk's probability foundations
- `markov_chains.html` *(proposed — AI5)* — the Markov chain connection
- `graph_theory.html` *(proposed — AI4)* — the web as a directed graph
- `portfolio_theory.html` — network importance in financial systems (stretch link)

**Inbound to this page (pages that should link here):**
- `eigenvalues.html` — add: "Eigenvalues power Google's search algorithm"
- `svd.html` — add: "Related: how PageRank finds the web's most important pages"
- `markov_chains.html` *(when built)* — canonical application
- `graph_theory.html` *(when built)* — directed graphs → PageRank

---

## Index Entry

```javascript
{
  title: "How Search Engines Find What You're Looking For",
  desc: "From keyword stuffing to eigenvectors — the mathematics that made Google possible",
  file: "pagerank.html",
  difficulty: 3
}
```

---

## Implementation Notes

### Technical requirements

| Requirement | Detail |
|---|---|
| Dependencies | Zero — pure vanilla HTML/CSS/JS |
| Random surfer simulation | Runs at up to 50 steps/sec; 8-node graph, instant in JS |
| Power iteration | Converges in < 100 iterations for any 8-node graph; < 10ms |
| Build-your-own graph | Touch events required alongside mouse; max ~15 nodes for usability |
| Canvas | Two canvases (graph + bar chart), both 700px wide |
| Mobile | All interactives functional at 375px; graph canvas scrollable if needed |

### Graph layout

For the fixed 8-node graph in Interactives 1–3, use a pre-computed layout
(not a force-directed algorithm, which would add complexity and be non-deterministic).
Suggested positions:

```
Node A: (150, 100)   Node E: (550, 100)
Node B: (350, 80)    Node F: (350, 280)
Node C: (100, 260)   Node G: (550, 300)
Node D: (280, 200)   Node H: (400, 420)
```

For Interactive 4 (build your own), nodes are placed where the visitor clicks.
Enforce a minimum distance of 60px between nodes for readability.

### Suggested graph presets for Interactive 2

**"Simple chain":** A → B → C → D → E → A (ring). Equal PageRank for all nodes.

**"Star network":** B, C, D, E, F all link to A. A links back to B only.
A has very high PageRank; others are low.

**"Real-world-like":** Mixed in/out degrees. A few high-PageRank hubs;
many low-PageRank peripheral pages. Resembles actual web distribution.

**"Dangling node trap":** Node H has no outgoing links. Without damping,
PageRank leaks into H and gets stuck. With damping, the teleportation
rescues the distribution. Toggle to show the difference.

---

## Difficulty Calibration

**Level 2** content (accessible to late secondary):
- The historical story
- The random surfer metaphor
- Interactives 1 and 2
- The PageRank formula as a sum

**Level 3** content (first/second year university):
- The eigenvector formulation
- Perron-Frobenius theorem (in the "For the Curious" panel)
- Power iteration as matrix multiplication
- Interactive 3

The page is designed so a visitor can engage deeply with Layers 1–3 and
feel satisfied without touching the Level 3 material. The Level 3 content
is present for those who want it, never forced.

---

## SME Review Focus Areas

1. **Mathematical accuracy** — Is the treatment of the Google Matrix, damping factor, and Perron-Frobenius condition correct and not over-simplified?
2. **HITS description** — Is the "For the Curious" panel on HITS accurate? Is there anything important omitted about why PageRank prevailed?
3. **Historical claims** — The timeline is intentionally simplified. Are any of the historical claims inaccurate in ways that would mislead visitors?
4. **The "real web" claim** — The spec states convergence took ~52 iterations on the 1998 web. Is this approximately correct? (It appears in Brin & Page's original paper.)
5. **Modern search** — The spec states PageRank became less dominant after ~2010. Is this characterisation accurate, or is the picture more nuanced?
6. **Level calibration** — Is Level 2–3 appropriate, or should this be pitched differently?
7. **Missing mathematics** — The spec does not cover personalised PageRank, topic-sensitive PageRank, or TrustRank. Should any of these appear in a "For the Curious" panel?

---

*Specification v1.0 — mathsedu.org — March 2026*
*Authored by Manoj Bhaskar & Claude*
