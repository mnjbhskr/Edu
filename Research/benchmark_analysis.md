# Benchmark Analysis: mathsedu.org vs Research Best Practices

*March 2026*

This document evaluates mathsedu.org against the ten convergent principles identified in our literature review, assesses alignment with exemplary digital resources, and identifies opportunities for improvement.

---

## Scorecard: The Ten Convergent Principles

### 1. Visual-first design is neurologically sound
**Rating: STRONG ALIGNMENT**

mathsedu.org's founding principle is "Visual First" — every topic begins with something you can see and interact with. All 194 pages use HTML5 Canvas for interactive graphics. This directly aligns with Dehaene's (1999) finding that mathematical thinking recruits visual-spatial processing areas, and Boaler's emphasis on visual brain pathways.

**Evidence:** Every page opens with an interactive canvas. Formulas come after intuition, not before (FOUNDATION.md Principle 1).

### 2. Active exploration beats passive consumption
**Rating: STRONG ALIGNMENT**

Every page is interactive — sliders, buttons, clickable elements, parameter exploration. Students don't watch; they manipulate. This aligns with Freeman et al. (2014) finding that active learning reduces failure rates by 1.5x, and with PhET/GeoGebra's demonstrated effectiveness.

**Evidence:** 194 interactive visualisations with direct manipulation. No passive video content.

### 3. Conceptual understanding first
**Rating: STRONG ALIGNMENT**

The site's explicit philosophy is "Show the beauty first, explain the formalism second" and "Mathematics is discovery, not memorisation." This maps directly to Skemp's relational understanding and NCTM's Practice 6 (build procedural fluency from conceptual understanding).

**Evidence:** Brand voice avoids "Memorise", "Drill", "Test". Insight boxes explain the *why*. Journey narratives build conceptual frameworks before formalism.

### 4. Multiple representations
**Rating: MODERATE ALIGNMENT**

Many pages show graphical and numerical representations simultaneously (e.g. Taylor Series shows the formula, the graph, and the error). However, the emphasis is heavily on graphical/visual representation. Fewer pages systematically connect algebraic, numerical, verbal, and graphical forms in the way Lesh's translation model recommends.

**Opportunity:** For key topics, explicitly show the same concept through 3–4 different representations side by side. Add "verbal" explanations that connect to everyday language (the Freudenthal/RME approach of starting from context).

### 5. Low floor, high ceiling
**Rating: MODERATE ALIGNMENT**

The difficulty system (1–4 dots) provides progressive difficulty, and the range from basic logic to category theory covers an enormous span. However, within individual pages, most visualisations have a fixed difficulty level. There isn't always a "low floor" entry point on harder pages (difficulty 3–4), nor always a "high ceiling" extension on easier ones.

**Opportunity:** Add "Start Here" prompts on complex pages that guide beginners. Add "Go Deeper" extensions on simpler pages. The learn-box pattern (Try This / What To Notice / Why It Matters) partially addresses this — extend it more broadly.

### 6. Productive struggle with scaffolding
**Rating: PARTIAL ALIGNMENT**

The interactive nature encourages exploration and some productive struggle. The journey narratives provide scaffolding through their step-by-step structure. However, the site currently lacks:
- Guided problem sequences that lead to discovery
- Hints systems that provide progressive support
- Explicit "try this challenge" prompts that create productive struggle

**Opportunity:** Add challenge problems to each visualisation with tiered hints. The learn-box "Try This" sections are a good start — make them more challenging and add hint reveals.

### 7. Spaced practice and interleaving
**Rating: LOW ALIGNMENT**

The site is designed for exploration, not structured practice. There is no mechanism for spaced retrieval, interleaving of topics, or revisiting material over time. This is the most significant gap relative to the research evidence.

**Opportunity:** This is a design choice rather than a flaw — the site is a visual discovery resource, not a practice platform. However, consider:
- A "Daily Discovery" feature that surfaces a different topic each day
- The Map of Mathematics could suggest "related topics to revisit"
- A simple "topics you've explored" tracker (localStorage already used for this)
- Suggested learning paths that interleave related topics

### 8. No timed pressure; cultivate mathematical identity
**Rating: STRONG ALIGNMENT**

The site has zero timed elements. No quizzes, no scores, no time pressure. The brand voice explicitly avoids "Test", "Exam", "Grade". This perfectly aligns with Boaler's research on maths anxiety and timed testing.

**Evidence:** "No login, no ads, no tracking." No performance metrics. The experience is purely exploratory.

### 9. Digital tools as supplements with guidance
**Rating: MODERATE ALIGNMENT**

The site works excellently as a supplement to classroom teaching — educators can link students to specific visualisations. However, guidance within the site itself is limited. There's no teacher guide, no suggested lesson plans, no "how to use this in your classroom" section.

**Opportunity:** Create an educator section with:
- Suggested lesson plans linking visualisations to curriculum standards
- "Use this when teaching..." prompts on each page
- Alignment to national curricula (UK National Curriculum, GCSE/A-Level, IB, Common Core)

### 10. Context and real-world connections
**Rating: MODERATE ALIGNMENT**

Some pages connect well to real-world contexts (Monte Carlo simulation, Brownian motion, orbital mechanics). The Physics and Quantitative Finance chapters are inherently contextual. However, pure mathematics pages (group theory, measure theory, category theory) don't always show why the maths matters in the real world.

**Opportunity:** Add "Where You'll See This" boxes to pure maths pages, connecting to applications. The Map of Mathematics partially addresses this by showing connections, but explicit real-world context on individual pages would strengthen this.

---

## Benchmark vs Exemplary Digital Resources

| Feature | mathsedu.org | 3Blue1Brown | Desmos | GeoGebra | Khan Academy | NRICH | PhET |
|---------|-------------|-------------|--------|----------|-------------|-------|------|
| **Free** | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Interactive** | Yes (all pages) | No (video) | Yes | Yes | Partial | Partial | Yes |
| **Visual-first** | Yes | Yes | Yes | Yes | Partial | No | Yes |
| **No login required** | Yes | Yes | Yes | Partial | No | Yes | Yes |
| **Works offline** | Yes | No | No | Partial | No | No | No |
| **Narrative/story** | Yes (journeys) | Yes | No | No | Partial | Partial | No |
| **Topic breadth** | 194 topics | ~224 videos | N/A (tool) | N/A (tool) | 1000s | 100s | ~150 |
| **Practice problems** | No | No | Yes | Yes | Yes | Yes | No |
| **Curriculum alignment** | No | No | Partial | Yes | Yes | Yes | Partial |
| **Teacher resources** | No | No | Yes | Yes | Yes | Yes | Yes |
| **Progress tracking** | Basic | No | Yes | Yes | Yes | No | No |
| **Mobile-friendly** | Yes | Yes | Yes | Yes | Yes | Yes | Partial |
| **Open source** | CC BY-NC-SA | Manim (MIT) | No | Yes | No | No | CC BY |
| **Difficulty levels** | 4 levels | Implicit | N/A | N/A | Yes | Yes | N/A |
| **Connected topics** | Map (340 links) | Playlists | N/A | N/A | Knowledge map | Some | No |

### What mathsedu.org does uniquely well:
1. **Self-contained HTML** — works offline, no dependencies, will work in 20 years
2. **Narrative journeys** — 11 multi-act stories that no other resource offers
3. **Map of Mathematics** — force-directed graph showing 340 connections
4. **No login/tracking** — truly zero friction
5. **Visual coverage of advanced topics** — category theory, measure theory, Gödel's incompleteness visualised interactively is extremely rare
6. **Single-author coherence** — consistent design language across all 194 pages

### What others do that mathsedu.org doesn't (yet):
1. **Practice problems** (Khan, Desmos, NRICH) — structured exercises for reinforcement
2. **Teacher resources** (Desmos, GeoGebra, NRICH, PhET) — lesson plans, activity builders
3. **Curriculum alignment** (Khan, GeoGebra, NRICH) — mapped to national standards
4. **Community features** (Khan, GeoGebra) — sharing, discussion, teacher networks
5. **Adaptive learning** (Khan, Brilliant) — personalised paths based on performance

---

## Priority Opportunities

Based on the gap analysis, ranked by impact and feasibility:

### High Impact, High Feasibility
1. **Add "Where You'll See This" boxes** — one paragraph per page connecting to real-world applications. Low development effort, high pedagogical value.
2. **Extend learn-box pattern** — add "Try This" challenges with progressive hints to more pages. Pattern already exists, just needs broader adoption.
3. **Suggested learning paths** — use the Map of Mathematics connections to suggest "explore next" links at the bottom of each page. Data already exists in the map.

### High Impact, Medium Feasibility
4. **Educator guide** — a single page mapping visualisations to curriculum standards (UK, US, IB). Significant research effort but enormous value for the secondary audience.
5. **"Low floor" entry prompts on hard pages** — add a "Start Here" guided introduction on difficulty 3–4 pages for learners who arrive without prerequisites.
6. **Daily Discovery feature** — a rotating spotlight on the homepage that surfaces a different topic each day, encouraging spaced revisiting.

### High Impact, Lower Feasibility
7. **Lightweight practice problems** — adding 3–5 conceptual questions per page (not drill, not timed — aligned with NCTM principles). Significant content creation effort.
8. **Curriculum alignment mapping** — formal mapping to GCSE, A-Level, IB, AP, Common Core standards. Requires subject matter expertise for each curriculum.

### Not Recommended (misaligned with site philosophy)
- Timed quizzes or speed-based exercises (contradicts Boaler's research)
- Login/account systems (contradicts "no friction" principle)
- Gamification with points/badges (risks extrinsic motivation crowding out intrinsic curiosity)
- Adaptive learning algorithms (requires tracking, contradicts privacy principles)

---

## Alignment with Adding It Up's Five Strands

| Strand | Current Coverage | Notes |
|--------|-----------------|-------|
| **Conceptual understanding** | STRONG | Core strength — every visualisation builds conceptual understanding |
| **Procedural fluency** | LOW | Site deliberately avoids drill; some journey acts walk through procedures |
| **Strategic competence** | MODERATE | Journeys develop problem-solving; individual pages less so |
| **Adaptive reasoning** | MODERATE | Proof pages (contradiction, induction) address this; most pages don't explicitly |
| **Productive disposition** | STRONG | The entire site cultivates wonder and shows mathematics as beautiful and accessible |

---

## Conclusion

mathsedu.org is strongly aligned with the research evidence on 6 of the 10 convergent principles, moderately aligned on 3, and has one significant gap (spaced practice/interleaving). The site's unique strengths — self-contained HTML, narrative journeys, visual-first design, zero friction, advanced topic coverage — position it as genuinely distinctive in the landscape of digital mathematics resources.

The most impactful improvements would be:
1. **Real-world connection boxes** on pure maths pages
2. **Broader adoption of the learn-box challenge pattern** with hints
3. **"Explore next" suggestions** using Map of Mathematics data
4. **An educator guide** mapping to curriculum standards

These improvements would strengthen alignment with NCTM's eight teaching practices, leverage the site's existing infrastructure (learn-boxes, topic connections), and address the needs of the educator audience — all without compromising the site's core philosophy of free, frictionless, visual mathematical discovery.
