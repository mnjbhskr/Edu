# Cross-Linking and Navigation Enhancement
## Outline for SME Review — Draft (March 2026)

---

## Document Status

| Field | Detail |
|---|---|
| Version | 0.1 — Outline for discussion |
| Status | Draft — needs SME and stakeholder review before spec |
| Purpose | Improve discoverability and navigation across 142+ pages and 12 journeys |

---

## Problem Statement

mathsedu.org now has 142+ interactive visualisation pages across 10 chapters,
12 multi-act narrative journeys, and (soon) 85+ referenced mathematicians.
Currently, navigation is primarily through the index page. A visitor exploring
eigenvalues has no easy way to discover that the same mathematics powers
PageRank, or that Euler — who appears on that page — also appears in 5 other
contexts across the site.

The site's content forms a rich mathematical graph. The navigation does not
yet reflect that graph.

---

## Proposed Enhancements — Three Layers

### Layer 1: In-Page Cross-Links (Low effort, high impact)

**What:** Add contextual links within existing pages wherever one topic
connects to another topic already on the site.

**Examples:**
- `eigenvalues.html` → link to `pagerank.html` ("Eigenvectors power Google's search algorithm")
- `probability_distributions.html` → link to `social_networks.html` ("Power laws appear in social network degrees")
- `eulers_identity.html` → link to `dating_optimal_stopping.html` ("The same e appears in optimal stopping")
- `differential_equations.html` → link to `predator_prey.html` and `social_networks.html` (SIR model)

**Implementation:** A "See Also" or "This connects to..." box at natural
points in the narrative — not a wall of links at the bottom, but contextual
links placed where the connection is mathematically relevant.

**Design pattern:**
```html
<div class="connection-link">
  <span class="connection-icon">↗</span>
  <a href="pagerank.html">See this in action: How Search Engines Find What You're Looking For</a>
</div>
```

**Scope:** Each of the three new specs (PageRank, Social Networks, Dating Maths)
already includes a cross-links section listing outbound and inbound links.
These should be the starting point. A full audit of all 142 pages for
cross-linking opportunities would follow.

---

### Layer 2: Mathematician Biography Pages (Medium effort, high value)

**What:** A biography page for each mathematician referenced on the site,
with links back to every page where their work appears.

**Structure per biography:**
- Portrait or period illustration (public domain)
- Birth/death dates and location
- 2–3 paragraph biography focused on mathematical contributions
- "Their mathematics on this site" — links to every page featuring their work
- One "remarkable fact" or human story
- Timeline of key publications/discoveries

**Navigation:**
- A new "Mathematicians" page accessible from the index — a visual gallery
  or timeline view of all 85+ figures
- Each biography page links to related biographies (contemporaries,
  collaborators, intellectual successors)
- Every existing page that references a mathematician gets a subtle link
  to their biography (e.g., hoverable name that shows a mini-card)

**Grouping options for the gallery (to be decided):**
1. Chronological timeline (2500 BC → present)
2. By field (algebra, analysis, geometry, probability, physics, CS)
3. By era (ancient, enlightenment, 19th century, 20th century, living)
4. Interactive graph showing connections between mathematicians

**Priority biographies (appear on 3+ pages):**
- Euler (6+ pages) — most referenced mathematician on the site
- Cantor (5+ pages)
- Gauss (3+ pages)
- Riemann (4+ pages)
- Turing (5+ pages)
- Newton (4+ pages)
- Einstein (5+ pages)
- Hilbert (3+ pages)
- Gödel (3+ pages)
- Euler, Mandelbrot, Boltzmann, Maxwell, Fourier (3+ pages each)

---

### Layer 3: Concept Graph / Knowledge Map (Higher effort, transformative)

**What:** An interactive visual map showing how mathematical concepts connect
across the site. This would be a new standalone page — a "map of mathematics"
that visitors can explore.

**Two possible implementations:**

#### Option A: Static Curated Map
A hand-designed map (similar to a metro/tube map) showing the major
mathematical territories and how topics connect. Each node links to a page.

- **Pros:** Beautiful, deliberate, can tell a story about mathematical structure
- **Cons:** Manual maintenance, doesn't scale automatically

#### Option B: Interactive Force-Directed Graph
An auto-generated graph where:
- Each page is a node
- Cross-links between pages are edges
- Chapters define colour clusters
- Node size reflects page engagement or link density
- Clicking a node navigates to that page

- **Pros:** Scales automatically, visually striking, reveals structure
- **Cons:** Can look chaotic, needs careful tuning, performance on mobile

#### Option C: Both
A curated high-level map (10–12 chapter clusters with key connections)
that can be "zoomed into" to reveal the full auto-generated graph within
each cluster.

**This layer is the most ambitious and should be built last, after Layers 1
and 2 are complete and the cross-link data exists to populate it.**

---

## Mathematician Name Integration

**Current state:** Mathematician names appear in body text with no special
treatment.

**Proposed enhancement:** A lightweight hoverable tooltip system:

```
When a mathematician's name appears on any page:
1. The name is wrapped in a <span class="mathematician" data-id="euler">
2. On hover/tap, a mini-card appears showing:
   - Name and dates
   - One-sentence description
   - "Read biography →" link
3. The card is generated from a shared JSON data file
```

**The shared data file** (`mathematicians.json`) would contain:
```json
{
  "euler": {
    "name": "Leonhard Euler",
    "dates": "1707–1783",
    "summary": "Swiss mathematician who made foundational contributions to virtually every branch of mathematics.",
    "bio_page": "mathematicians/euler.html",
    "pages": ["eulers_identity.html", "eulers_polyhedron.html", "fermats_theorem.html", ...]
  }
}
```

**Trade-off:** This adds a shared dependency (the JSON file) to what are
currently fully self-contained pages. Options:
1. Inline the data in each page (larger file size, harder to maintain)
2. Load via `<script src="mathematicians.json">` (one shared file, small)
3. Build a tiny `<script src="mathematician-cards.js">` that handles
   both data and rendering (one 5KB dependency)

**Recommendation:** Option 3 — a single small JS file is the lightest touch
that avoids duplicating data across 142 pages.

---

## "Related Topics" Component

A reusable component for the bottom of each page:

```
┌─────────────────────────────────────────────────┐
│  Explore Related Topics                          │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ PageRank │  │ Markov   │  │ Eigen-   │      │
│  │          │  │ Chains   │  │ values   │      │
│  │ How the  │  │ Random   │  │ The math │      │
│  │ web gets │  │ walks    │  │ of trans-│      │
│  │ ranked   │  │ with     │  │ formation│      │
│  │          │  │ memory   │  │          │      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                  │
│  Mathematicians on this page:                    │
│  Euler · Markov · Perron · Frobenius             │
└─────────────────────────────────────────────────┘
```

Each card links to the related page. The mathematicians row links to
biography pages. This component would be generated from a central
registry of page metadata and cross-links.

---

## Implementation Roadmap

| Phase | Work | Dependencies |
|---|---|---|
| **Phase 1** | Build `mathematicians.json` with all 85+ entries | Mathematician list (done) |
| **Phase 2** | Build 10–15 priority biography pages (most-referenced mathematicians) | Phase 1 |
| **Phase 3** | Add in-page cross-links to all existing pages using the specs' cross-link sections as starting point | Existing specs |
| **Phase 4** | Build the "Related Topics" component and deploy to all pages | Phase 3 |
| **Phase 5** | Build `mathematician-cards.js` hover system | Phase 1, Phase 2 |
| **Phase 6** | Build the Mathematicians gallery/timeline page | Phase 2 |
| **Phase 7** | Build the Concept Graph / Knowledge Map | Phase 3, Phase 4 |

---

## Questions for SME Review

1. **Biography depth:** Should biographies be mathematical only, or include
   personal/historical context (e.g., Galois's duel, Noether's exclusion
   from universities, Ramanujan's journey to Cambridge)?

2. **Living mathematicians:** Several referenced figures are alive (Bengio,
   Hochreiter, Page, Brin). Should we include biographies for living people,
   or only historical figures?

3. **Hover cards vs inline links:** Is the hoverable mini-card system
   (Layer 2) worth the added complexity, or are simple hyperlinked names
   sufficient?

4. **Knowledge map priority:** Should the concept graph (Layer 3) be
   prioritised, or is it better to focus on Layers 1–2 first and build
   the map once the cross-link data is mature?

5. **Grouping preference:** For the Mathematicians gallery, which primary
   grouping works best pedagogically — chronological, by field, or by era?

6. **One page or many?** Should biographies be individual pages
   (`mathematicians/euler.html`) or a single scrollable page with anchor
   links? Individual pages are more SEO-friendly and linkable; a single
   page is simpler to maintain.

7. **Scope of cross-linking audit:** Should every possible mathematical
   connection be linked, or should links be curated to avoid overwhelming
   visitors? What's the right density — 2–3 outbound links per page,
   or more?

---

*Outline v0.1 — mathsedu.org — March 2026*
*For review before full specification is drafted*
