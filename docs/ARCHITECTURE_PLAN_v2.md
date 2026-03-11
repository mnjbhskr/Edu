# Architectural Plan v2.0 — Information Architecture, Legal Framework & Feature Roadmap
## mathsedu.org — March 2026

---

## Document Status

| Field | Detail |
|---|---|
| Version | 2.0 — Major revision incorporating IA overhaul, legal framework, and revised roadmap |
| Supersedes | v1.1 (Hover Cards, Gallery, Knowledge Map & Journeys) |
| Status | For SME review before implementation |
| Development repo | `GitHub/Edx` (private) — staging sandpit |
| Production repo | `GitHub/Edu` (public) — live site |

---

## 0. Strategic Context

### The core problem

The site has 190+ excellent pages but feels like a collection of interesting topics. A visitor arriving for the first time faces a wall of chapters with no guidance on where to start, what level they need, or what path to follow.

### The fix

Add structure above the variety. Three interventions, in order of impact:

1. **Information architecture** — three entry points (Level, Topic, Journey) with a metadata model
2. **Homepage redesign** — guided entry rather than a chapter dump
3. **Legal framework** — proper copyright, IP policy, and institutional credibility

These structural changes do more for usability than any animation, hover card, or gallery. The feature work (hover cards, concept map, new journeys) follows once the foundation is solid.

---

## 1. Development Workflow — Edx → Edu

*(Unchanged from v1.1 — see Section 0 of previous plan)*

All work happens in `GitHub/Edx` (private). Nothing reaches `GitHub/Edu` (public, serves mathsedu.org) without passing through the release procedure. Each phase produces a release manifest in `Doc/releases/`.

---

## 2. Phase 1: Information Architecture

### 2.1 Three Primary Entry Points

Every visitor should be able to enter the site through one of three doors:

**Learn by Level**
| Level | Approximate Age | Description |
|---|---|---|
| Ages 11–14 | KS3 / middle school | Foundations: number, shape, pattern |
| GCSE / equivalent | 14–16 | Core mathematics to examination level |
| A-level / equivalent | 16–18 | Calculus, statistics, mechanics |
| University undergraduate | 18–21 | Pure and applied degree-level mathematics |
| Advanced / postgraduate | 21+ | Research-level topics, proofs, frontiers |

**Learn by Topic**
| Topic Family | Covers |
|---|---|
| Number | Number line, primes, modular arithmetic, Cantor's diagonal |
| Geometry | Euclid, Pythagoras, conics, non-Euclidean, curvature |
| Algebra | Quadratics, complex numbers, group theory, fundamental theorem |
| Calculus | Limits, derivatives, integration, Taylor series, ODEs |
| Probability | Bayes, CLT, distributions, Markov chains, combinatorics |
| Linear Algebra | Vectors, eigenvalues, SVD, transformations |
| Applied Mathematics | Differential equations, optimisation, dynamical systems |
| AI / Physics / Finance / Internet | All applied chapters |

**Learn by Journey**
| Journey Type | Description |
|---|---|
| Narrative journeys | Multi-act interactive stories (Prime Conspiracy, Infinite Hotel, etc.) |
| Big ideas | Cross-cutting themes (infinity, symmetry, randomness) |
| Historical trails | Follow a mathematician or era through the site |
| Real-world mathematics | How mathematics powers the internet, markets, physics |

### 2.2 Page Metadata Model

Every page on the site gets a structured metadata block. This is the single most important structural change — once it exists, the static site becomes coherent and navigable.

**Schema (embedded in each page as a JSON-LD extension or as a JS object):**

```json
{
  "page": "eigenvalues.html",
  "title": "Eigenvalues and Eigenvectors",
  "type": "concept",
  "level": "university",
  "topicFamily": "linear-algebra",
  "difficulty": 3,
  "estimatedMinutes": 25,
  "prerequisites": ["linear_transformations.html", "determinants.html"],
  "youShouldKnowFirst": ["Matrix multiplication", "Determinants"],
  "goNext": ["svd.html", "pagerank.html", "markov_chains.html"],
  "relatedMathematicians": ["euler", "cayley", "hilbert"],
  "tags": ["concept", "proof", "application"],
  "chapterIndex": 7,
  "journeyAppearances": []
}
```

**Field definitions:**

| Field | Type | Description |
|---|---|---|
| `type` | enum | `concept` · `proof` · `application` · `journey` · `map` · `simulation` |
| `level` | enum | `ages-11-14` · `gcse` · `a-level` · `university` · `advanced` |
| `topicFamily` | enum | `number` · `geometry` · `algebra` · `calculus` · `probability` · `linear-algebra` · `applied` · `internet` · `finance` · `physics` · `intelligence` |
| `difficulty` | 1–4 | Visual dots on cards |
| `estimatedMinutes` | number | Approximate study time |
| `prerequisites` | array | Pages that should be visited first |
| `youShouldKnowFirst` | array | Plain-English concept names (for display) |
| `goNext` | array | Recommended next pages (max 10) |
| `relatedMathematicians` | array | Keys into `mathematicians.json` |
| `tags` | array | Searchable descriptors |

**Implementation approach:** Embed as a `<script type="application/json" id="page-meta">` block in each page's `<head>`. This is invisible to users, parseable by the concept map, and doesn't require a build step.

### 2.3 Topic Hub Pages

Each topic family gets a lightweight hub page that serves as a landing for "Learn by Topic":

```
topic-number.html
topic-geometry.html
topic-algebra.html
topic-calculus.html
topic-probability.html
topic-linear-algebra.html
topic-applied.html
topic-internet.html
topic-finance.html
topic-physics.html
topic-intelligence.html
```

**Hub page structure:**
- Title and 2–3 sentence overview of the topic family
- "Start here" recommendation (the most foundational page in the family)
- Cards for all pages in this family, sorted by difficulty/level
- Prerequisite arrows showing suggested order
- Breadcrumb: Home → Learn by Topic → [Topic]

### 2.4 Level Landing Pages

Each level gets a landing page:

```
level-ages-11-14.html
level-gcse.html
level-a-level.html
level-university.html
level-advanced.html
```

**Level page structure:**
- Title and description of what's available at this level
- Topic families represented at this level
- Recommended starting points
- Journeys appropriate for this level
- Breadcrumb: Home → Learn by Level → [Level]

### 2.5 Journey Categorisation

Journeys gain age/level metadata:

| Journey | Level |
|---|---|
| The Prime Conspiracy | Ages 11–14, GCSE |
| Hilbert's Infinite Hotel | GCSE, A-level |
| The Symmetry Code | A-level |
| The Shape of Change | A-level, University |
| The Shape of Space | University |
| The Broken Machine | University, Advanced |
| The Mathematics of Propulsion | A-level, University |
| The Mathematics of Flight | A-level, University |
| ... | ... |

Visible distinction on the journey cards: a small level badge so visitors can self-select.

### 2.6 Breadcrumbs

Every page gains a breadcrumb trail:

```
Home → Linear Algebra → Eigenvalues and Eigenvectors
Home → Learn by Level → University → Eigenvalues and Eigenvectors
```

The breadcrumb reflects the entry path (from the referring URL or a default based on chapter). Implemented as a simple `<nav class="breadcrumb">` element.

---

## 3. Phase 2: Homepage Redesign

### 3.1 New Page Composition

The homepage retains its visual style (dark theme, gold accents, Georgia serif) but recomposes the content in this order:

**1. Hero**
Same brand statement. Three primary call-to-action buttons:
- Start by level
- Explore topics
- Follow a journey

**2. Start Here panel**
A simple guided strip with four options:
- New to the site? → Guided tour page
- Looking for school maths? → Level landing (Ages 11–14 or GCSE)
- Looking for university maths? → Level landing (University)
- Want the most beautiful pages first? → Curated "highlights" selection

**3. Featured Pathways**
Thematic trails that cut across chapters:
- If you like patterns → primes, modular arithmetic, cryptography
- If you like shapes → Euclid, conics, topology
- If you like motion → calculus, differential equations, orbital mechanics
- If you like markets → probability, stochastic processes, Black-Scholes

**4. Full Chapter Index**
The current chapter grid — preserved but now secondary, below the guided entry points.

**5. Journeys Section**
Existing journey cards, now with level badges.

**6. Footer**
New legal footer (see Phase 3).

### 3.2 Implementation Notes

- The current `chapters` and `journeys` arrays in `index.html` are retained
- New sections (hero CTAs, Start Here, Pathways) are added above the existing chapter grid
- The chapter grid's visual weight is reduced slightly (smaller cards or collapsed by default with "Show all chapters" toggle)
- No new dependencies — pure HTML/CSS/JS

---

## 4. Phase 3: Legal Framework & Footer

### 4.1 Three Legal Pages

| Page | File | Content |
|---|---|---|
| Terms of Use | `terms.html` | Permitted/restricted use, liability, governing law |
| Intellectual Property Policy | `intellectual-property.html` | Ownership, permitted educational use, licensing, AI training prohibition |
| Privacy Policy | `privacy.html` | Analytics, cookies, GDPR rights, children's privacy |

All three pages follow the site's dark theme and standard layout. Content as provided by legal counsel.

### 4.2 New Footer (All Pages)

**Old footer (to be replaced):**
```
© 2025–2026 Manoj Bhaskar · Coded by Claude · CC BY-NC-SA 4.0
```

**New footer:**
```html
<footer style="text-align:center;padding:28px 20px 18px;color:#505068;font-size:0.72em;line-height:1.7;border-top:1px solid rgba(255,255,255,0.04);margin-top:30px">
    <div>&copy; 2025&ndash;2026 MathsEdu.org &mdash; All rights reserved</div>
    <div style="margin-top:6px">
        <a href="terms.html" style="color:#606078;text-decoration:none">Terms of Use</a>
        &nbsp;&middot;&nbsp;
        <a href="intellectual-property.html" style="color:#606078;text-decoration:none">Intellectual Property</a>
        &nbsp;&middot;&nbsp;
        <a href="privacy.html" style="color:#606078;text-decoration:none">Privacy Policy</a>
    </div>
</footer>
```

**Changes:**
- Copyright holder changed from "Manoj Bhaskar" to "MathsEdu.org"
- "Coded by Claude" removed (transparency moved to an About page if desired)
- CC BY-NC-SA 4.0 replaced with "All rights reserved" + link to IP policy
- Three legal page links added

### 4.3 About Page Transparency (Optional)

If desired, a discreet mention on a future About page:

> This site is developed using modern web technologies and AI-assisted tools to support rapid educational content creation.

This preserves honesty without undermining academic authority.

### 4.4 Robots.txt / AI Crawling

Update `robots.txt` to include:

```
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: *
Allow: /
```

This blocks known AI training crawlers while allowing normal search engine indexing.

---

## 5. Phase 4: Internal Linking & Hover Cards

*(Content from v1.1 Deliverables A, B retained with one amendment)*

### 5.1 Hover-Card System
- `data/mathematicians.json` — 85–100 entries
- `js/mathematician-cards.js` — minimal card (name, dates, summary, gallery link)
- Progressive rollout across pages

### 5.2 Mathematicians Gallery (`mathematicians.html`)
- **Default view:** Grid (per decision)
- **Toggle views:** Timeline, Group by Subject
- **Filters:** Era, Field, Difficulty, School/university relevance (amendment accepted)
- Unified search (shared with concept map)

---

## 6. Phase 5: Signature Features

### 6.1 Concept Map (`concept_map.html`)
- Single tree: Pure Mathematics as trunk, applied areas as branches
- **Amendment accepted:** Not the main navigation for younger users. Optional/secondary for ages 11–14. Signature feature for advanced students.
- Accessible from homepage but not a required navigation path
- Unified search with gallery

### 6.2 New Journeys
- The Mathematics of Propulsion (5 acts) — `journeys/propulsion_act1-5.html`
- The Mathematics of Flight (5 acts) — `journeys/flight_act1-5.html`
- Both gain level badges per the journey categorisation model
- SME review checkpoint after Act 1 of each

### 6.3 Journey Level Distinction
Visible on journey cards:
- Ages 11–14 (green badge)
- Ages 15–18 (blue badge)
- University+ (purple badge)

---

## 7. Phase 6: SEO Hygiene

- Sitemap.xml regeneration (include new pages, legal pages, hub pages)
- Schema.org improvements (add `educationalLevel`, `prerequisites` to JSON-LD)
- Canonical URL audit across all pages
- Google Search Console review
- Title/description audit by page family (ensure consistency)
- Meta robots tags on legal pages (index but nofollow external links)

---

## 8. Complete File Inventory

### New directories (in Edx):

```
data/                          ← Shared data files
js/                            ← Shared JavaScript
Doc/releases/                  ← Release manifests
```

### New files by phase:

**Phase 1 — Information Architecture:**

| File | Type | Est. Lines |
|---|---|---|
| `level-ages-11-14.html` | Landing | ~400 |
| `level-gcse.html` | Landing | ~400 |
| `level-a-level.html` | Landing | ~400 |
| `level-university.html` | Landing | ~400 |
| `level-advanced.html` | Landing | ~400 |
| `topic-number.html` | Hub | ~500 |
| `topic-geometry.html` | Hub | ~500 |
| `topic-algebra.html` | Hub | ~500 |
| `topic-calculus.html` | Hub | ~500 |
| `topic-probability.html` | Hub | ~500 |
| `topic-linear-algebra.html` | Hub | ~500 |
| `topic-applied.html` | Hub | ~500 |
| `topic-internet.html` | Hub | ~500 |
| `topic-finance.html` | Hub | ~500 |
| `topic-physics.html` | Hub | ~500 |
| `topic-intelligence.html` | Hub | ~500 |

**Phase 2 — Homepage:**

| File | Change |
|---|---|
| `index.html` | Major restructure (hero CTAs, Start Here, Pathways, then chapters) |

**Phase 3 — Legal:**

| File | Type | Est. Lines |
|---|---|---|
| `terms.html` | Legal page | ~300 |
| `intellectual-property.html` | Legal page | ~350 |
| `privacy.html` | Legal page | ~300 |
| `robots.txt` | Config update | ~15 |
| All 190+ existing pages | Footer replacement | — |

**Phase 4 — Internal Linking:**

| File | Type | Est. Lines |
|---|---|---|
| `data/mathematicians.json` | Data | ~2,000 |
| `js/mathematician-cards.js` | Script | ~300 |
| `mathematicians.html` | Gallery | ~1,500 |

**Phase 5 — Signature Features:**

| File | Type | Est. Lines |
|---|---|---|
| `data/cross-links.json` | Data | ~3,000 |
| `concept_map.html` | Map | ~2,000 |
| `journeys/propulsion_act1-5.html` | Journey | ~6,000 |
| `journeys/flight_act1-5.html` | Journey | ~6,000 |

### Modified files:

| File | Phase | Change |
|---|---|---|
| `index.html` | 1, 2, 4, 5 | IA restructure, new sections, gallery/map links, journey entries |
| All 190+ pages | 1, 3 | Metadata block added, footer replaced |
| `sitemap.xml` | 6 | Regenerated |
| `robots.txt` | 3 | AI crawler blocks |

---

## 9. Implementation Sequence (All Work in Edx)

```
Phase 1: Information Architecture                       ── Release 1 ──
├── Define page metadata schema
├── Apply metadata to all 190+ pages (JSON block in <head>)
├── Build 5 level landing pages
├── Build 11 topic hub pages
├── Add breadcrumbs to all pages
├── Add level badges to journey cards
└── Review checkpoint → Release to Edu

Phase 2: Homepage Redesign                              ── Release 2 ──
├── Restructure index.html
│   ├── Hero with 3 CTA buttons
│   ├── Start Here guided panel
│   ├── Featured Pathways
│   ├── Chapter grid (secondary)
│   └── Journeys with level badges
└── Review checkpoint → Release to Edu

Phase 3: Legal Framework                                ── Release 3 ──
├── Build terms.html
├── Build intellectual-property.html
├── Build privacy.html
├── Update robots.txt (AI crawler blocks)
├── Replace footer across ALL pages in Edx
│   ├── Remove "Coded by Claude"
│   ├── Remove CC BY-NC-SA 4.0
│   ├── Add "© MathsEdu.org — All rights reserved"
│   ├── Add legal page links
└── Review checkpoint → Release to Edu

Phase 4: Internal Linking                               ── Release 4 ──
├── Build mathematicians.json
├── Build mathematician-cards.js
├── Build mathematicians.html (grid/timeline/subject views)
├── Progressive hover-card rollout across pages
└── Review checkpoint → Release to Edu

Phase 5: Signature Features                             ── Release 5 ──
├── Build concept_map.html (tree, pure maths trunk)
├── Build cross-links.json
├── Build propulsion journey (5 acts, SME checkpoint after Act 1)
├── Build flight journey (5 acts, SME checkpoint after Act 1)
├── Add journey entries to index.html
└── Review checkpoint → Release to Edu

Phase 6: SEO Hygiene                                    ── Release 6 ──
├── Regenerate sitemap.xml
├── Audit Schema.org markup
├── Audit canonicals
├── Audit titles/descriptions
└── Google Search Console review
```

---

## 10. Design Principles

1. **Structure above variety.** The information architecture comes before feature work.
2. **Three doors in.** Every visitor finds their path: Level, Topic, or Journey.
3. **Metadata-driven.** The page metadata model is the foundation for navigation, search, prerequisites, and the concept map.
4. **Self-contained pages.** Each HTML file works standalone. Shared JS is optional enhancement.
5. **Progressive disclosure.** Younger users see guided paths. Advanced users discover the concept map.
6. **No build tools.** Vanilla HTML/CSS/JS. No bundlers, no frameworks.
7. **British English throughout.**
8. **All development in Edx.** Nothing reaches Edu without the release procedure.
9. **Proper IP protection.** Proprietary copyright, not Creative Commons.
10. **Institutional tone.** The site should feel like it belongs to a serious educational organisation.

---

*Architectural Plan v2.0 — mathsedu.org — March 2026*
*For SME review before implementation begins*
