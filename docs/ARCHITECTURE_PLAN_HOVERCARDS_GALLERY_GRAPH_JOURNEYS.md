# Architectural Plan — Hover Cards, Gallery, Knowledge Map & New Journeys
## mathsedu.org — March 2026

---

## Document Status

| Field | Detail |
|---|---|
| Version | 1.0 — For review before implementation |
| Status | Awaiting SME approval |
| Scope | 5 deliverables across 3 workstreams |
| Estimated pages | ~60 new files (2 shared JS, 1 JSON, 1 gallery page, 1 concept map, ~55 journey act pages if 5 acts each) |

---

## 1. Overview

This plan covers five interconnected deliverables, organised into three workstreams:

| # | Deliverable | Workstream | Dependencies |
|---|---|---|---|
| A | Mathematician hover-card system | Cross-Linking | None (foundational) |
| B | Mathematicians gallery/timeline page | Cross-Linking | Depends on A |
| C | Interactive Concept Graph / Knowledge Map | Cross-Linking | Depends on A, benefits from B |
| D | Journey: The Mathematics of Propulsion | Journeys | None |
| E | Journey: The Mathematics of Flight | Journeys | None |

**Build order recommendation:** A → B → C (sequential), D + E (parallel, independent of A–C).

---

## 2. Workstream 1: Mathematician Hover-Card System

### 2.1 Purpose

Every time a mathematician's name appears on any of the site's 190+ pages, visitors should be able to hover (or tap on mobile) to see a compact biography card with dates, a one-line summary, and a link to the full gallery entry — without leaving the page.

### 2.2 Architecture

```
Site root
├── data/
│   └── mathematicians.json          ← Single source of truth (new)
├── js/
│   └── mathematician-cards.js       ← Hover-card renderer (new, ~5–8 KB)
├── mathematicians.html              ← Gallery/timeline page (Deliverable B)
└── [existing pages]                 ← Updated with <span> tags + script include
```

**Design decision:** A single shared JS file (`mathematician-cards.js`) rather than inlining data in each page. This is the lightest-touch approach that avoids duplicating a growing dataset across 190+ files. The file self-initialises on load — no per-page configuration required.

### 2.3 Data Schema — `data/mathematicians.json`

```json
{
  "euler": {
    "displayName": "Leonhard Euler",
    "dates": "1707–1783",
    "nationality": "Swiss",
    "fields": ["analysis", "number theory", "graph theory", "mechanics"],
    "summary": "The most prolific mathematician in history, whose work touched virtually every branch of the discipline.",
    "era": "enlightenment",
    "born": 1707,
    "died": 1783,
    "pages": [
      "eulers_identity.html",
      "eulers_polyhedron.html",
      "fermats_theorem.html",
      "differential_equations.html",
      "complex_numbers.html",
      "dating_optimal_stopping.html"
    ],
    "connections": ["gauss", "lagrange", "bernoulli_daniel"],
    "remarkableFact": "Euler continued producing mathematics even after going blind, dictating to a scribe. He averaged 800 pages of published work per year."
  }
}
```

**Estimated scope:** 85–100 entries. Priority entries (appear on 3+ pages): Euler, Cantor, Gauss, Riemann, Turing, Newton, Einstein, Hilbert, Gödel, Mandelbrot, Boltzmann, Maxwell, Fourier, Bayes, Shannon, Dijkstra, Nash, Vickrey, Nakamoto.

**Era categories** (for gallery grouping):
- `ancient` (before 500 AD)
- `medieval` (500–1500)
- `renaissance` (1500–1650)
- `enlightenment` (1650–1800)
- `nineteenth` (1800–1900)
- `modern` (1900–1970)
- `contemporary` (1970–present)

**Living mathematician policy:** Include with factual biographical data only. No personal opinions or speculative content. Mark with `"living": true` flag.

### 2.4 Hover-Card Component — `js/mathematician-cards.js`

**Behaviour:**
1. On `DOMContentLoaded`, the script scans for all `<span class="m" data-id="euler">Euler</span>` elements
2. Attaches `mouseenter`/`mouseleave` (desktop) and `click` (mobile) handlers
3. On trigger, renders a floating card positioned near the name, avoiding viewport edges

**Card layout:**

```
┌──────────────────────────────────┐
│  Leonhard Euler                  │
│  1707–1783 · Swiss               │
│                                  │
│  The most prolific mathematician │
│  in history, whose work touched  │
│  virtually every branch of the   │
│  discipline.                     │
│                                  │
│  On this site: 6 pages           │
│  View full biography →           │
└──────────────────────────────────┘
```

**Styling:** Dark card (`#12122a`) with cyan left border, matching the site's existing `.explain` box pattern. Fade-in animation (200ms). Max-width 320px. Z-index 5000 (below narrator's 90000).

**Mobile behaviour:** Tap to open, tap elsewhere to dismiss. No hover on touch devices.

**Fallback:** If the JSON fails to load (offline, error), the spans render as plain text — graceful degradation, no broken UI.

### 2.5 Integration with Existing Pages

Each page that references a mathematician will need two additions:

```html
<!-- In <head> or before </body> -->
<script src="js/mathematician-cards.js" defer></script>

<!-- In body text, replacing plain name -->
<span class="m" data-id="euler">Euler</span>
```

**Rollout strategy:** Rather than updating all 190+ pages at once, integrate progressively:
- Phase 1: The 16 "Mathematics Behind the Internet" pages (already reference many mathematicians)
- Phase 2: Top 30 most-visited pages (based on analytics if available, otherwise highest cross-link density)
- Phase 3: All remaining pages

**CSS for the `.m` span** (injected by the JS, but can also be included in page CSS):
```css
.m { color: #22d3ee; cursor: help; border-bottom: 1px dotted rgba(34,211,238,0.3); }
.m:hover { border-bottom-color: #22d3ee; }
```

---

## 3. Workstream 1 (cont.): Mathematicians Gallery/Timeline Page

### 3.1 Purpose

A dedicated page (`mathematicians.html`) serving as both a visual gallery and a timeline of the mathematicians referenced across the site. Accessible from the index page.

### 3.2 Page Structure

```
mathematicians.html
├── Header with back-link and title
├── Filter/sort controls
│   ├── View toggle: Grid | Timeline
│   ├── Era filter: All | Ancient | ... | Contemporary
│   └── Field filter: All | Algebra | Analysis | Geometry | Probability | CS | Physics
├── Grid View (default)
│   └── Cards for each mathematician (name, dates, 1-line summary, page count)
├── Timeline View
│   └── Horizontal scrolling timeline, 2500 BC → present
│       └── Mathematician nodes positioned by birth year
│       └── Era bands as background colour strips
│       └── Click to expand card
└── Footer
```

### 3.3 Grid View — Card Design

```
┌─────────────────────────────┐
│  ∑  Leonhard Euler           │
│     1707–1783 · Swiss        │
│                              │
│  Analysis · Number Theory    │
│  Graph Theory · Mechanics    │
│                              │
│  Referenced on 6 pages       │
│  "Euler continued producing  │
│   mathematics even after     │
│   going blind..."            │
└─────────────────────────────┘
```

- Cards arranged in a responsive CSS grid (`auto-fill, minmax(300px, 1fr)`)
- Left border colour coded by primary field
- Click expands to show full detail + list of pages where they appear + connections to other mathematicians
- Search box at top for filtering by name

### 3.4 Timeline View

- Canvas-based horizontal timeline (panning via drag/scroll)
- Era bands as coloured background strips with labels
- Each mathematician rendered as a dot/node at their birth year position
- Vertical stacking to avoid overlap within the same era
- Click/tap a node to see the hover-card (same component as the page hover cards)
- Zoom controls: fit-all, zoom to era
- Connection lines between mathematicians who are listed in each other's `connections` arrays

### 3.5 Data Source

Both views read from the same `data/mathematicians.json`. No additional data file needed. The gallery page includes `mathematician-cards.js` and adds its own rendering logic on top.

### 3.6 Index Page Integration

Add a new entry to the index page, either:
- **Option A:** A prominent link in the site header/hero area ("Explore 85+ Mathematicians →")
- **Option B:** A new "Resources" section below the chapters grid
- **Option C:** A card within each chapter showing the mathematicians referenced in that chapter

**Recommendation:** Option A — a single prominent link keeps the index clean.

---

## 4. Workstream 1 (cont.): Interactive Concept Graph / Knowledge Map

### 4.1 Purpose

A standalone page (`concept_map.html`) showing an interactive visual map of how mathematical concepts connect across the site. Visitors can explore the "landscape of mathematics" and discover connections they hadn't considered.

### 4.2 Recommended Approach: Hybrid (Option C from CROSS_LINKING_OUTLINE)

Two layers on one page:

**Layer 1 — Curated Chapter Map (default view):**
- 15–16 chapter nodes arranged in a deliberate layout (not force-directed)
- Hand-positioned to reflect conceptual proximity (e.g. Calculus near Analysis, Probability near Statistics)
- Styled as a "metro map" with coloured lines connecting related chapters
- Each chapter node shows: icon, name, topic count
- Click a chapter to zoom into its topics

**Layer 2 — Topic Graph (zoomed view):**
- When a chapter is selected, its topics expand into individual nodes
- Edges between topics represent cross-links (from `data/cross-links.json`)
- Force-directed layout within the chapter cluster, pinned positions for cross-chapter connections
- Node size reflects number of cross-links (more connected = larger)
- Clicking a topic node navigates to that page

### 4.3 Data Schema — `data/cross-links.json`

```json
{
  "pages": {
    "pagerank.html": {
      "title": "How Search Engines Find What You're Looking For",
      "chapter": "The Mathematics Behind the Internet",
      "chapterIndex": 11,
      "difficulty": 3,
      "concepts": ["eigenvectors", "random walks", "graph theory", "linear algebra"],
      "crossLinks": [
        { "target": "eigenvalues.html", "reason": "PageRank uses the dominant eigenvector" },
        { "target": "markov_chains.html", "reason": "PageRank is a Markov chain on the web graph" },
        { "target": "social_networks.html", "reason": "Both model networks as graphs" }
      ],
      "mathematicians": ["page_larry", "brin_sergey", "perron", "frobenius"]
    }
  },
  "chapters": [
    {
      "index": 0,
      "title": "Logic & Proof",
      "icon": "⇒",
      "color": "#c084fc",
      "x": 0.15,
      "y": 0.3
    }
  ]
}
```

**Note:** The `chapters` array includes hand-curated `x, y` positions (normalised 0–1) for the metro-map layout. Topic positions within chapters are computed by force-directed simulation.

### 4.4 Rendering Approach

- **Canvas-based** for performance (190+ nodes, potentially 500+ edges)
- Pan and zoom via mouse drag / scroll wheel / pinch on mobile
- Chapter-level view: simple positioned nodes with bezier curve connections
- Topic-level view: d3-style force simulation computed in vanilla JS (no d3 dependency)
- Colour coding: each chapter's accent colour from `chapter-config.md`
- Search box: type a concept name, matching nodes pulse and the view pans to them

### 4.5 Interaction Flow

```
1. Page loads → Chapter-level metro map displayed
2. User clicks "Probability & Statistics" chapter node
3. Smooth zoom into that cluster
4. Cluster expands: 6 topic nodes appear with cross-link edges
5. Edges to other chapters shown as faded lines extending outward
6. User clicks "Bayes' Theorem" node → navigates to bayes_theorem.html
   OR clicks an outbound edge → zooms to the connected chapter
7. "Zoom out" button returns to chapter view
```

### 4.6 Mobile Considerations

- On screens < 768px, the metro map renders in a simplified vertical layout
- Topic-level view uses a list with connection indicators rather than a force graph
- Performance budget: < 16ms per frame at 60fps on a mid-range phone

### 4.7 Build Dependencies

This deliverable benefits enormously from having the cross-link data already compiled. The `data/cross-links.json` file should be populated as part of the hover-card rollout (each page's mathematician and concept references feed directly into the graph).

**Minimal viable version:** Even without complete cross-link data, the chapter-level metro map can be built immediately from the existing `chapters` array in `index.html`. Topic-level graphs can be added progressively as cross-link data matures.

---

## 5. Workstream 2: New Journeys

### 5.1 Journey Architecture (Existing Pattern)

Each journey follows the established pattern:

```
journeys/
├── propulsion_act1.html    ← Self-contained, ~800–1200 lines each
├── propulsion_act2.html
├── propulsion_act3.html
├── propulsion_act4.html
└── propulsion_act5.html
```

**Per-act file structure:**
- Embedded CSS with `:root` design tokens (unique colour palette per journey)
- Sticky header with progress dots (one per act, active/done states)
- Multiple `<section class="screen">` elements (3–5 screens per act)
- Screen transitions via `fadeUp` animation, one screen `.active` at a time
- Interactive canvas elements for visualisations
- Narrator blocks (`.narrator` divs with border-left accent)
- Forward/back navigation buttons
- Inter-act links: "Continue to Act N →"
- Back link to `../index.html`
- Confetti canvas for celebration moments
- Fonts: Nunito (sans) + Crimson Pro (serif italic for narrator)

**Design tokens per journey (examples):**

| Token | Propulsion (suggested) | Flight (suggested) |
|---|---|---|
| `--bg` | `#070a1a` | `#07101a` |
| `--accent` | `#fb923c` (orange) | `#60a5fa` (sky blue) |
| `--accent-dim` | `rgba(251,146,60,0.15)` | `rgba(96,165,250,0.15)` |
| `--secondary` | `#f472b6` (pink) | `#34d399` (green) |

### 5.2 Journey D: The Mathematics of Propulsion

**Narrative arc:** From Tsiolkovsky's rocket equation to orbital mechanics — how humanity escaped Earth's gravity using mathematics.

**Colour palette:** Warm orange (`#fb923c`) with pink secondary (`#f472b6`) — evoking rocket exhaust and fire.

**Act structure (5 acts):**

| Act | Title | Screens | Key Concepts | Key Interactives |
|---|---|---|---|---|
| 1 | The Tyranny of the Rocket Equation | 4 | Tsiolkovsky's equation, exponential mass ratio, why rockets are mostly fuel | Slider: payload mass vs fuel mass. Canvas: animated rocket losing mass as it burns fuel. Bar chart: fuel-to-payload ratios for real rockets (Saturn V, Falcon 9, Space Shuttle) |
| 2 | Newton's Third Law in a Vacuum | 4 | Conservation of momentum, thrust equation, specific impulse, nozzle design | Canvas: momentum exchange animation (exhaust goes left, rocket goes right). Slider: exhaust velocity vs thrust. Comparison: chemical vs ion vs nuclear propulsion |
| 3 | Escaping Earth | 4 | Gravitational potential energy, escape velocity derivation (v = √(2GM/r)), orbital velocity, the vis-viva equation | Canvas: interactive orbit simulator. User adjusts velocity at perigee — see how orbit shape changes from circular → elliptical → parabolic → hyperbolic. Energy bar showing kinetic + potential = total |
| 4 | The Hohmann Transfer | 4 | Orbital transfers, delta-v budgets, gravity assists, the Oberth effect | Canvas: animated Hohmann transfer between two circular orbits. User selects start and target orbit. Show delta-v cost. Gravity assist demo: spacecraft trajectory bending around a planet |
| 5 | To the Stars | 3 | Relativistic rocket equation, time dilation, the tyranny of the light barrier, Breakthrough Starshot | Canvas: relativistic mass-ratio plot. At what fraction of c does it become absurd? Timeline of actual and proposed missions. Final reflection on mathematics enabling space exploration |

**Mathematicians referenced:** Tsiolkovsky, Newton, Kepler, Hohmann, Oberth, Einstein

**SME feedback flag:** The TODO notes this was an SME feedback request. The plan includes a review checkpoint after Act 1 is built but before proceeding to Acts 2–5.

### 5.3 Journey E: The Mathematics of Flight

**Narrative arc:** From Bernoulli's principle to modern fly-by-wire — how mathematics keeps aircraft in the sky.

**Colour palette:** Sky blue (`#60a5fa`) with green secondary (`#34d399`) — evoking sky and instrument panels.

**Act structure (5 acts):**

| Act | Title | Screens | Key Concepts | Key Interactives |
|---|---|---|---|---|
| 1 | Why Do Wings Work? | 4 | Bernoulli's equation (P + ½ρv² + ρgh = const), pressure difference above/below wing, angle of attack, lift coefficient | Canvas: animated airflow over a wing cross-section (streamlines). Slider: angle of attack (0°–20°). Show lift increasing then stalling. Pressure colour map on wing surface |
| 2 | The Lift Equation | 4 | L = ½ρv²SCₗ, dimensional analysis, Reynolds number, why small models don't fly like big planes | Interactive: drag sliders for air density, velocity, wing area, lift coefficient — see resulting lift force vs aircraft weight. Canvas: Reynolds number regimes (laminar → turbulent). Scale comparison |
| 3 | Stability and the Centre of Gravity | 4 | Static stability, centre of gravity vs centre of pressure, pitch/roll/yaw, moments and torques | Canvas: side-view of aircraft with adjustable CG position. Show how CG forward of CP = stable (nose drops, speed increases, lift restores). CG behind CP = unstable. Slider for CG position |
| 4 | Control Theory and Feedback | 4 | PID controllers, transfer functions, feedback loops, the mathematics of fly-by-wire | Canvas: step-response plot. Three sliders (P, I, D gains). Show overshoot, oscillation, settling time. Challenge: tune the PID to land smoothly. Comparison: manual vs fly-by-wire stability |
| 5 | The Envelope | 3 | Flight envelope (speed vs altitude), Mach number, compressibility, the sound barrier, coffin corner | Canvas: flight envelope diagram. Stall speed curve (low speed boundary) and Mach limit curve (high speed boundary). They converge at high altitude — "coffin corner". Interactive: pick an altitude, see the available speed range narrow. Final reflection on mathematics making flight safe |

**Mathematicians referenced:** Bernoulli, Euler (fluid dynamics), Navier, Stokes, Reynolds, Nyquist, Bode

**SME feedback flag:** Same as Propulsion — review checkpoint after Act 1.

### 5.4 Index Page Integration for Journeys

Add two new entries to the `journeys` array in `index.html`:

```javascript
{
    title: "The Mathematics of Propulsion",
    desc: "From Tsiolkovsky's rocket equation to orbital mechanics — how mathematics took humanity to the stars",
    icon: "🚀",
    color: "#fb923c",
    acts: 5,
    folder: "journeys/",
    prefix: "propulsion_act",
    badge: "Journey",
    tag: "New"
},
{
    title: "The Mathematics of Flight",
    desc: "From Bernoulli's principle to fly-by-wire — the mathematics that keeps aircraft in the sky",
    icon: "✈️",
    color: "#60a5fa",
    acts: 5,
    folder: "journeys/",
    prefix: "flight_act",
    badge: "Journey",
    tag: "New"
}
```

---

## 6. File Inventory — What Gets Created

### New directories:

```
data/                          ← New directory for shared data files
js/                            ← New directory for shared JavaScript
```

### New files:

| File | Type | Est. Lines | Deliverable |
|---|---|---|---|
| `data/mathematicians.json` | Data | ~2,000 | A |
| `data/cross-links.json` | Data | ~3,000 | C |
| `js/mathematician-cards.js` | Script | ~300 | A |
| `mathematicians.html` | Page | ~1,500 | B |
| `concept_map.html` | Page | ~2,000 | C |
| `journeys/propulsion_act1.html` | Journey | ~1,200 | D |
| `journeys/propulsion_act2.html` | Journey | ~1,200 | D |
| `journeys/propulsion_act3.html` | Journey | ~1,200 | D |
| `journeys/propulsion_act4.html` | Journey | ~1,200 | D |
| `journeys/propulsion_act5.html` | Journey | ~1,000 | D |
| `journeys/flight_act1.html` | Journey | ~1,200 | E |
| `journeys/flight_act2.html` | Journey | ~1,200 | E |
| `journeys/flight_act3.html` | Journey | ~1,200 | E |
| `journeys/flight_act4.html` | Journey | ~1,200 | E |
| `journeys/flight_act5.html` | Journey | ~1,000 | E |

### Modified files:

| File | Change | Deliverable |
|---|---|---|
| `index.html` | Add mathematicians link + 2 journey entries | B, D, E |
| Existing pages (progressive) | Add `<script>` tag + `<span class="m">` tags | A |

**Total new code:** ~20,000–22,000 lines across ~16 new files.

---

## 7. Implementation Sequence

```
Phase 1: Foundation (Deliverable A)
├── Create data/ and js/ directories
├── Build mathematicians.json (85–100 entries)
├── Build mathematician-cards.js
├── Test on 3–4 existing pages
└── Review checkpoint

Phase 2: Gallery (Deliverable B)
├── Build mathematicians.html (grid + timeline views)
├── Add link to index.html
└── Review checkpoint

Phase 3: Journeys (Deliverables D + E, parallel)
├── Build propulsion_act1.html
├── Build flight_act1.html
├── ── SME review checkpoint for both Act 1s ──
├── Build propulsion_act2–5.html
├── Build flight_act2–5.html
├── Add journey entries to index.html
└── Review checkpoint

Phase 4: Knowledge Map (Deliverable C)
├── Build cross-links.json (compile from existing page content)
├── Build concept_map.html (chapter-level metro map first)
├── Add topic-level force graph
├── Add link to index.html
└── Final review

Phase 5: Progressive Rollout (Deliverable A integration)
├── Add hover-card spans to Internet chapter pages (16 pages)
├── Add hover-card spans to next 30 highest-value pages
├── Add hover-card spans to all remaining pages
└── Final consistency check
```

---

## 8. Design Principles & Constraints

1. **Self-contained pages remain self-contained.** The `mathematician-cards.js` is the only new shared dependency. Pages must still work if it fails to load.

2. **No build tools.** Everything stays vanilla HTML/CSS/JS. No bundlers, no frameworks, no npm.

3. **Progressive enhancement.** Hover cards, concept map, and gallery are additive — they enhance the experience but existing pages lose nothing if they're not yet integrated.

4. **British English throughout.** All new content uses British spelling (colour, organisation, centre, defence, etc.).

5. **Mobile-first interactives.** All canvas visualisations must work on touch devices. Journey screens must be swipeable.

6. **Performance budget.** The `mathematician-cards.js` file must stay under 10 KB. The JSON data files are loaded asynchronously and cached by the browser.

7. **Archive policy.** Before modifying any existing file, copy to `Archive/` with `_YYYYMMDD_HHMM` suffix.

---

## 9. Open Questions for Review

1. **Gallery grouping default:** Should the gallery open in Grid view (alphabetical) or Timeline view? Grid is more familiar; Timeline is more distinctive.

2. **Journey act count:** The plan proposes 5 acts each for Propulsion and Flight. Should these be shorter (3 acts) given they're SME feedback requests rather than core curriculum?

3. **Hover-card depth:** Should the hover card show the "remarkable fact" field, or keep it minimal (name, dates, summary, link)?

4. **Living mathematicians:** Include Larry Page, Sergey Brin, Satoshi Nakamoto (pseudonymous), Yann LeCun, etc. — or restrict to historical figures only?

5. **Concept map scope:** Should the metro map include ALL chapters (15+), or focus on the 10 original mathematical chapters and treat Internet/Finance/Physics/Intelligence as "applied" branches?

6. **Cross-link density:** How many outbound cross-links per page is ideal? The outline suggests 2–3 to avoid overwhelming visitors. Agree?

7. **Search integration:** Should the concept map and gallery have a unified search, or separate search boxes?

---

*Architectural Plan v1.0 — mathsedu.org — March 2026*
*For SME review before implementation begins*
