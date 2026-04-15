# Development Status

**A Visual Discovery of Mathematics**

*Last updated: 15 April 2026*

---

## Current State

All content is **live and deployed** at [mathsedu.org](https://mathsedu.org).

| Metric | Value |
|--------|-------|
| Topic visualisations | 194+ |
| Chapters | 19 |
| Narrative journeys | 11 (60 acts) |
| Total interactive pages | 254+ |
| Map of Mathematics | 194 nodes, 340 connections |
| Hosting | GitHub Pages |
| Custom domain | mathsedu.org |
| Google Search Console | Verified, sitemap submitted |
| SEO | Complete (meta descriptions, JSON-LD, OG tags, canonical URLs) |
| Marketing bot | Deployed (Cloudflare Worker, autonomous X/Twitter posting) |

## Chapter Completion

| Chapter | Topics | Status |
|---------|--------|--------|
| 1. Logic & Proof | 6 | Complete |
| 2. Numbers | 7 | Complete |
| 3. Geometry | 8 | Complete |
| 4. Algebra | 7 | Complete |
| 5. Trigonometry & Waves | 7 | Complete |
| 6. Calculus | 9 | Complete |
| 7. Linear Algebra | 5 | Complete |
| 8. Probability & Statistics | 6 | Complete |
| 9. Analysis & Topology | 10 | Complete |
| 10. Beautiful Results | 6 | Complete |
| 11. Quantitative Finance | 10 | Complete |
| 12. Physics | 20 | Complete |
| 13. The Mathematics of Intelligence | 15 | Complete |
| 14–19. Additional chapters | 78+ | Complete |
| 20. The Geometry of Information | 11 | Complete (April 2026) |

Chapters 14–19 include Chemistry & Materials, Biology & Life Sciences, Economics & Social Sciences, Internet & Information, Game Theory, and additional applied topics. See `index.html` for the authoritative page list.

## Build History

**Phase 1** (25 Feb 2026) — Initial launch: 51 visualisations across 10 chapters.

**Phase 2** (25 Feb 2026) — 10 additional visualisations completing foundational expansion.

**Phase 3** (1 Mar 2026) — Chapter 11: Quantitative Finance — 10 new visualisations.

**Phase 4** (1 Mar 2026) — Complete SEO foundation across all pages: meta descriptions, JSON-LD structured data, Open Graph tags, Twitter Cards, canonical URLs, sitemap.xml, robots.txt.

**Phase 5** (2 Mar 2026) — Chapter 12: Physics — 6 new visualisations + appendix conversion.

**Phase 6** (2 Mar 2026) — Mathematics of Thermodynamics.

**Phase 7** (2 Mar 2026) — Physics of Light (Snell's Law, dispersion, double-slit, EM wave).

**Phase 8** (2 Mar 2026) — The Electromagnetic Spectrum.

**Phase 9** (2 Mar 2026) — Chapter 13: The Mathematics of Intelligence — 16 new visualisations.

**Phase 10** (4 Mar 2026) — Physics expansion — 9 new visualisations (Newton's Laws through Entropy & Information Theory).

**Phase 11** (4 Mar 2026) — Physics Conceptual Map + SME feedback applied to 8 physics pages.

**Phase 12** (15 Mar 2026) — Gap analysis against Walliman's Map of Mathematics: 12 new topic pages (Set Theory, Gödel's Incompleteness, Theory of Computation, Partition Theory, Quaternions, Optimisation, Numerical Analysis, Complex Analysis, Order Theory, Category Theory, Measure Theory, Control Theory). Map of Mathematics — interactive force-directed graph of all 194 topics with 340 connections. Marketing bot updated and redeployed.

## SEO & Discoverability

| Component | Status |
|-----------|--------|
| `sitemap.xml` | Deployed, submitted to Google Search Console |
| `robots.txt` | Deployed |
| Google Search Console | Verified (URL prefix method) |
| Meta descriptions | All pages — unique, 140–160 char |
| Schema.org JSON-LD | All pages — `LearningResource` with educationalLevel, teaches, chapter |
| Open Graph tags | All pages — og:title, og:description, og:url, og:type, og:site_name, og:locale |
| Twitter Card tags | All pages — twitter:card, twitter:title, twitter:description |
| Canonical URLs | All pages — `<link rel="canonical">` |

**Education directory listings:**

| Directory | Status |
|-----------|--------|
| MERLOT (merlot.org) | Registered, submission in progress |
| OER Commons (oercommons.org) | Emailed — site submission form had loading issues |
| STEM Learning (stem.org.uk) | Pending — email pitch to `enquiries@stem.org.uk` |

## Marketing

| Channel | Status |
|---------|--------|
| X/Twitter @mathseduorg | Active — autonomous bot posting Tue/Thu via Cloudflare Worker |
| LinkedIn | On hold until legal entity set up |
| Reddit | Manual posts recommended — authentic posts beat bot-driven ones |
| Hacker News | Reserved for single "Show HN" post |

Bot strategy: "Showcase & Feedback" — only discuss existing content, never promise new features, actively seek feedback. This week's focus: The Map of Mathematics.

## Benchmark Review — Enhancement Programme

| Field | Detail |
|-------|--------|
| Review date | March 2026 |
| Source | Independent benchmark against ten research principles in mathematics education |
| Overall finding | Strongly aligned on 6/10 principles; moderately aligned on 3; one intentional gap (spaced practice) |
| Full recommendations | `docs/BENCHMARK_RECOMMENDATIONS.md` |
| Implementation plan | `docs/ENHANCEMENT_PLAN.md` |
| Page audit prompt | `docs/PAGE_AUDIT_PROMPT.md` |

### Enhancement programme — three tiers

| Tier | Description | Status | Target |
|------|-------------|--------|--------|
| Tier 1 | "Where You'll See This" boxes, hint upgrades, "Explore Next" strips, difficulty badges — all 194+ pages | Planned | Phase 13 |
| Tier 2 | "Start Here" entry prompts on difficulty 3–4 pages, "Daily Discovery" on index.html, educator guide | Backlog | Phase 14 |
| Tier 3 | Conceptual questions per page, formal curriculum alignment mapping | Future milestone | TBD |

### Ruled out (misaligned with site philosophy)

- Timed quizzes (contradicts Boaler's research on maths anxiety)
- Gamification with points/badges (risks extrinsic motivation crowding out curiosity)
- Login/account systems (contradicts "no friction" principle)
- Adaptive learning algorithms (requires tracking, contradicts privacy principles)

See `docs/BENCHMARK_RECOMMENDATIONS.md` for full reasoning.

## Potential Next Steps

### Content Enhancements
- **Deeper interactivity** — more parameter controls, guided explorations, "what if" scenarios
- **Cross-references** — links between related topics (partially addressed by "Explore Next" in Tier 1)
- **New topics** — additional chapters in Chemistry, Biology, Economics continue to expand

### User Experience
- **Search and filter** — topic search from the index page
- **Progress dashboard** — visual summary of topics visited (localStorage)
- **Keyboard navigation** — full keyboard accessibility
- **Touch improvements** — better touch interaction for mobile

### Accessibility
- **Screen reader support** — ARIA labels for interactive canvas elements
- **Alt text descriptions** — text descriptions of visualisations
- **Reduced motion mode** — option to disable animations

### Infrastructure
- **Automated testing** — visual regression tests
- **Performance audit** — all pages under 1 second on slow connections
- **Multi-language support** — translations starting with most-requested languages

---

*This document will be updated as the project evolves.*
