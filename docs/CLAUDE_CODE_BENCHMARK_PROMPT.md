# Claude Code — mathsedu.org Benchmark Improvement Programme
## Session Prompt: Documentation, Architecture & Enhancement Plan

*Prepared: March 2026*

---

## Context & Background

We have completed an independent benchmark analysis of mathsedu.org against
research best practices in mathematics education. The analysis evaluated the
site against ten convergent pedagogical principles drawn from the academic
literature (Dehaene, Boaler, Skemp, Freeman et al., NCTM), compared it to
exemplary digital resources (3Blue1Brown, Desmos, GeoGebra, Khan Academy,
NRICH, PhET), and produced a prioritised set of improvements.

Overall finding: **strongly aligned on 6 of the 10 research principles,
moderately aligned on 3, and one significant gap** (spaced practice /
interleaving — acknowledged as a conscious design choice rather than a flaw).

The benchmark analysis is in `benchmark_analysis.md` at the project root.
The existing foundation and status documents are in `docs/FOUNDATION.md` and
`docs/STATUS.md`.

This session will work through the findings systematically — updating
documentation, capturing the recommendations as a structured checklist,
and producing an implementation plan and a reusable audit prompt. **No HTML
pages are to be modified in this session.** All work is documentation only.


## Preliminary Step: Read the Source Documents

Before writing anything, read these files in full:

1. `benchmark_analysis.md` — the benchmark findings (source of all
   recommendations in this session)
2. `docs/FOUNDATION.md` — mission, vision, principles and design system. The calaogue included is not accurate as this is a legacy document. We can update this at the end of our current work. 
4. `README.md` — project overview

---

## Task 1 — Produce a Structured Recommendations Checklist

**Output file:** `docs/BENCHMARK_RECOMMENDATIONS.md`

This is a complete, actionable reference document derived from the benchmark
analysis. It will be the master reference for all enhancement work.

### 1.1 Ten Principles Scorecard Summary

A table with four columns: Principle | Rating | One-line finding | Key action.

Ratings from the analysis:
- Principle 1 (Visual-first design): STRONG ALIGNMENT
- Principle 2 (Active exploration): STRONG ALIGNMENT
- Principle 3 (Conceptual understanding first): STRONG ALIGNMENT
- Principle 4 (Multiple representations): MODERATE ALIGNMENT
- Principle 5 (Low floor, high ceiling): MODERATE ALIGNMENT
- Principle 6 (Productive struggle with scaffolding): PARTIAL ALIGNMENT
- Principle 7 (Spaced practice and interleaving): LOW ALIGNMENT (intentional design choice)
- Principle 8 (No timed pressure): STRONG ALIGNMENT
- Principle 9 (Digital tools as supplements with guidance): MODERATE ALIGNMENT
- Principle 10 (Context and real-world connections): MODERATE ALIGNMENT

### 1.2 Master Recommendations Checklist

Organise all recommendations as checkboxes under four priority tiers.

**Tier 1 — High Impact, High Feasibility**
(Immediate wins — low development cost, high pedagogical value. Target for
the first enhancement pass across all live pages.)

- [ ] **"Where You'll See This" box** — Add to all pure mathematics pages
  lacking explicit real-world context. One paragraph (3–5 sentences)
  connecting the topic to a specific application in science, engineering,
  finance, or computing. Style: panel with left border `3px solid #22d3ee`.
  Scope: assess each page individually; the Quantitative Finance and Physics
  chapters are inherently contextual and may not need this addition.

- [ ] **"Try This" hint upgrade** — Extend the existing learn-box pattern
  so that every "Try This" prompt has at least one progressive hint,
  collapsed by default and revealed on click. This scaffolds productive
  struggle without giving the answer immediately. Applies to all pages
  that have a learn-box; pages without one need the full pattern added.

- [ ] **"Explore Next" footer strip** — Add to every live page: a row of
  2–3 related topic links drawn from topic relationships, placed before the
  footer. Each link shows topic name and chapter. This enables organic
  navigation and partially addresses the spaced-revisiting gap.

- [ ] **Difficulty badge on page** — Add the difficulty rating (1–4 filled
  dots) visibly in the page header, not only on the index card.

**Tier 2 — High Impact, Medium Feasibility**
(Requires more effort or content creation; target for a second pass.)

- [ ] **"Start Here" guided entry prompts** — On all difficulty 3 and 4
  pages, add a collapsible introductory panel for learners arriving without
  prerequisites. Should include: what to have explored first, the core
  intuition in plain language, and one grounding prompt.

- [ ] **"Daily Discovery" feature on index.html** — A rotating spotlight
  card on the homepage surfacing a different topic each day. Implementation:
  deterministic selection based on `Math.floor(Date.now() / 86400000) %
  topics.length`. No server required. No tracking.

- [ ] **Educator guide** — A new page `educator-guide.html` mapping
  visualisations to curriculum standards (UK GCSE, A-Level, IB, Common
  Core US). This is the highest-value missing audience segment.

**Tier 3 — High Impact, Lower Feasibility (Future Milestones)**

- [ ] **Conceptual questions per page** — Add 3–5 non-timed, non-drill
  conceptual questions to each page, aligned with NCTM principles.

- [ ] **Formal curriculum alignment mapping** — Detailed mapping to GCSE,
  A-Level, IB, AP, and Common Core standards.


### 1.3 Multiple Representations Gap

A specific sub-checklist for Principle 4. Scan the live pages and identify
those that currently show only graphical representations and would benefit
from also showing algebraic, numerical, or verbal forms. Create a table:

| Page | Currently shows | Missing representations | Priority |

---

## Task 2 — Update the Foundation Document

**File to update:** `docs/FOUNDATION.md`

Read the current FOUNDATION.md carefully before making any changes.
This is an evolution, not a replacement — preserve everything that holds.

### 2.1 Version bump and date

Change version from `Version 1.0 — February 2026` to
`Version 2.0 — March 2026`. Add a brief changelog note beneath:
*"Version 2.0: Updated following independent benchmark analysis against
research best practices in mathematics education. New sections added:
Benchmark Review Learnings, Evolved Page Standards."*

### 2.2 Add a "Benchmark Review Learnings" section

Insert this as a new section after the existing "Principles" section and
before "Architecture". Capture both what was affirmed and what was challenged:

**What the review affirmed:**
- Visual-first design (Principle 1) is neurologically validated —
  Dehaene (1999) and Boaler's work on visual brain pathways directly
  supports our founding approach
- No timed elements, no login, no friction — fully aligned with research
  on maths anxiety and intrinsic motivation (Boaler; Freeman et al. 2014)
- Narrative journeys are a genuine differentiator — no comparable
  resource offers multi-act mathematical storytelling
- The site's philosophy — mathematics first, then its appearances in the
  world — is a meaningful and rare differentiator worth making explicit

**What the review challenged or identified as gaps:**
- Multiple representations (Principle 4): strong on graphical, weaker on
  systematically connecting algebraic, numerical, verbal, and graphical
  forms simultaneously. Going forward, key pages should show the same
  concept through multiple lenses where the mathematics warrants it.
- Real-world context on pure mathematics pages: the site's strongest pages
  (Monte Carlo, Brownian Motion, Fourier Transform) are inherently contextual.
  Pure mathematics pages (group theory, measure theory, category theory)
  need explicit "Where You'll See This" bridges to applications.
- Educator pathway: there is currently no teacher guide, no curriculum
  mapping, no "use this in your classroom" prompts. Educators are the
  secondary audience most likely to drive sustained organic traffic.
- Spaced practice and interleaving (Principle 7): the most significant gap
  relative to the research evidence. This is a conscious design choice —
  the site is a visual discovery resource, not a practice platform — but
  we will partially address it through "Daily Discovery" and "Explore Next"
  features that encourage organic re-engagement.

### 2.3 Add "Evolved Page Standards" section to Architecture

After the existing "Design Language" subsection, add a subsection titled
"Standard Page Elements — Required from Version 2.0". These four elements
are now required on every page:

**Element 1 — "Where You'll See This" box**
Required on all pure mathematics pages. Optional on inherently applied pages
(Quantitative Finance, Physics) where the context is already obvious.

```
Style:    .panel with left border 3px solid #22D3EE (cyan)
Heading:  "Where You'll See This"
Content:  3–5 sentences. Must be concrete and specific —
          not "used in science" but "used in GPS satellite timing
          correction, where modular arithmetic keeps atomic clocks
          synchronised to within nanoseconds."
Position: After main interactive sections, before "Explore Next".
```

**Element 2 — Progressive hint in "Try This" challenges**
Every "Try This" prompt must include at least one hint, collapsed by default.

```
Pattern:
  [button: "💡 Show a hint" — on click: hide button, show hint div]
  [hint div: guides thinking without giving the answer]
```

**Element 3 — "Explore Next" footer strip**
Required on every page. Two or three related topic links before the footer.

```
Style:    Flex row of cards; chapter accent colour left border per card
Content:  Topic name + chapter name per card
Position: Last element inside .container, immediately before </div>
```

**Element 4 — Difficulty badge in page header**
The difficulty rating (1–4 dots) must appear in the page header, not only
on the index card. Use filled ● for achieved difficulty, empty ○ for
remainder, in the chapter accent colour.

### 2.4 Sharpen the Mission Statement

The current mission opens: "To make mathematics visible, interactive, and
accessible to every curious mind." This is accurate but does not state the
site's distinctive philosophy.

Revise the first paragraph of the Mission section to make explicit what
the benchmark identified as a rare and valuable differentiator: this site
starts with mathematical ideas and reveals where they appear in the natural
world — rather than starting from a real-world problem and pulling in
mathematics to solve it. This is the inverse of most applied mathematics
education, and it matters pedagogically: it lets the mathematics speak for
itself before showing its usefulness.

Preserve the existing tone and spirit — just sharpen this distinction.

### 2.5 Catalogue reconciliation note

The FOUNDATION.md catalogue currently is inaccurate as it reflects a past position hene need to be updated. 


## Task 3 — Update the Status Document

**File to update:** `docs/STATUS.md`

Read the current STATUS.md (last updated 4 March 2026). The document is dated and needs to be redrafting ground up. 

### 3.1 Update the "Last updated" date to March 2026.

### 3.2 Add a new section: "Benchmark Review — Enhancement Programme"

Insert this after "Potential Next Steps". It should contain:

**Review summary:**

| Field | Detail |
|-------|--------|
| Review date | March 2026 |
| Source | Independent benchmark against ten research principles in mathematics education |
| Overall finding | Strongly aligned on 6/10 principles; moderately aligned on 3; one intentional gap (spaced practice) |
| Full recommendations | `docs/BENCHMARK_RECOMMENDATIONS.md` |
| Implementation plan | `docs/ENHANCEMENT_PLAN.md` |

**Enhancement programme — three tiers:**

| Tier | Description | Status | Phase target |
|------|-------------|--------|-------------|
| Tier 1 | "Where You'll See This" boxes, hint upgrades, "Explore Next" strips, difficulty badges — all ~106 live pages | Planned | Phase 12 |
| Tier 2 | "Start Here" entry prompts on difficulty 3–4 pages, "Daily Discovery" on index.html, educator guide | Backlog | Phase 13 |
| Tier 3 | Conceptual questions per page, formal curriculum alignment mapping | Future milestone | TBD |

**Ruled out (misaligned with site philosophy):**
Timed quizzes, gamification, login systems, adaptive algorithms.
See `docs/BENCHMARK_RECOMMENDATIONS.md` §1.2 Tier 4 for reasoning.

---

## Task 4 — Draft a Reusable Page Audit Prompt

**Output file:** `docs/PAGE_AUDIT_PROMPT.md`

This is a reusable prompt given to Claude Code after each page is enhanced,
to verify it meets the full v2.0 standard. It must be completely
self-contained — paste it into a Claude Code session with a filename
substituted and it returns a structured pass/fail report.

Write the file as follows: brief usage instructions at the top, then the
full prompt to paste (formatted so it is ready to copy).

The audit must check 22 items across six categories:

**A. Structure & Navigation (6 items)**
A1. Back link to index.html present near the top of the page
A2. `<title>` tag is clear and specific (not "Introduction to X")
A3. `<h1>` present with a compelling title using em dashes where appropriate
A4. Subtitle or introductory sentence present below the h1
A5. Difficulty badge (●/○ dots) visible in page header
A6. Standard site footer present

**B. Visual & Interactive Quality (5 items)**
B1. At least one HTML5 Canvas interactive element visible on page load
    (not hidden behind a tab or button)
B2. All interactive controls have clear text labels
B3. Interactive elements provide immediate visual feedback on change
B4. Layout responsive — no horizontal scrolling on 375px viewport
B5. No external CSS or JS files loaded (everything inline/self-contained)

**C. Pedagogical Structure (6 items)**
C1. Concept introduced visually/intuitively before formulas appear
C2. At least one insight box answering "why does this matter?"
C3. "Try This" challenge or equivalent exploratory prompt present
C4. "Try This" prompt has at least one progressive hint (collapsed by
    default, revealed on click)
C5. Where topic warrants it, at least two representations present
    (graphical + one of: algebraic, numerical, verbal)
C6. No timed elements, countdown timers, scores, or performance metrics

**D. Real-World Connection (2 items)**
D1. "Where You'll See This" box present (required on pure maths pages;
    optional on inherently applied pages)
D2. Where present, the connection is specific and concrete — not vague

**E. Navigation & Discovery (2 items)**
E1. "Explore Next" section present before footer with at least 2 topic links
E2. At least one cross-link to a related page within the body content

**F. Code Quality (4 items)**
F1. No obvious console errors or uncaught exceptions in the JS
F2. CSS uses standard site palette (bg #0a0a1a, text #e0e0e0, panels
    rgba(255,255,255,0.025), borders rgba(255,255,255,0.06))
F3. No banned brand voice words in visible text: "Memorise", "Drill",
    "Test", "Exam", "Grade", "Score", "Quiz"
F4. Mathematical notation rendered clearly (e.g. a² + b² not a^2 + b^2)

Output format for the audit:
```
PAGE AUDIT REPORT
─────────────────
File: [FILENAME]
Date: [today's date]

PASS  A1  Back link present at top of page
FAIL  A5  Difficulty badge missing — add .difficulty-badge after <h1>
...

─────────────────
SUMMARY
Passed:  N / 22
Failed:  M
Failed items: [list codes]

RECOMMENDED ACTIONS (ordered by priority):
1. [Most critical — specific instruction]
2. ...
─────────────────
```

---

## Task 5 — Produce the Implementation Plan

**Output file:** `docs/ENHANCEMENT_PLAN.md`

This is the master execution plan for applying all Tier 1 improvements
across every currently live page.

### 5.1 Establish the live page inventory

Read the repository root directory. List every `.html` file that is a
topic or journey page. Exclude: `index.html`, `mathsedu_design_system.html`,
and any files that are specification or planning documents. Cross-reference
with STATUS.md to confirm these match the live page count.

### 5.2 Page-by-page assessment table

For each live page, produce a table:

| Filename | Chapter | Difficulty | Needs "Where You'll See This"? | Needs hint upgrade? | Needs "Explore Next"? | Needs difficulty badge? | Suggested "Explore Next" links (2–3) | Notes |

For "Where You'll See This": mark Y if pure mathematics without obvious
applied context. Mark N/A if inherently applied (Chapters 11, 12, 13).
Skim each file to make an accurate assessment — do not guess.

For "Explore Next" suggestions: use topic relationships to suggest natural
next steps. At least one suggestion should be from the same chapter and
one from an adjacent chapter.

### 5.3 Batching strategy

Group pages into batches of 6–8 for execution sessions, by chapter or as you deem appropriate.


### 5.4 HTML templates for the four standard additions ( As sample for you to amend as needed or deemed appropriate)

Provide complete, copy-paste-ready HTML templates for each addition.

**Template A — "Where You'll See This" panel**
```html
<!-- WHERE YOU'LL SEE THIS — insert after main interactive sections -->
<div class="panel" style="border-left:3px solid #22d3ee;margin-bottom:24px;">
  <h3 style="color:#22d3ee;font-size:0.85em;text-transform:uppercase;
             letter-spacing:1px;margin-bottom:10px;">
    Where You'll See This
  </h3>
  <p style="color:#a0a0b8;font-size:0.92em;line-height:1.7;margin:0;">
    [CONTENT — 3–5 sentences, specific real-world application]
  </p>
</div>
```

**Template B — Progressive hint reveal**
```html
<!-- HINT REVEAL — insert inside the "Try This" learn-box -->
<div style="margin-top:12px;">
  <button
    onclick="this.nextElementSibling.style.display='block';this.style.display='none';"
    style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
           color:#808098;padding:6px 14px;border-radius:6px;cursor:pointer;
           font-family:Georgia,serif;font-size:0.85em;">
    💡 Show a hint
  </button>
  <div style="display:none;margin-top:10px;padding:10px 14px;
              background:rgba(255,255,255,0.02);border-radius:6px;
              border-left:2px solid #fbbf24;">
    <p style="color:#a0a0b8;font-size:0.88em;margin:0;">
      [HINT TEXT — guides thinking without giving the answer]
    </p>
  </div>
</div>
```

**Template C — "Explore Next" footer strip**
```html
<!-- EXPLORE NEXT — last element inside .container, before closing </div> -->
<div style="margin-top:48px;padding-top:32px;
            border-top:1px solid rgba(255,255,255,0.06);">
  <h3 style="color:#808098;font-size:0.8em;text-transform:uppercase;
             letter-spacing:1px;margin-bottom:16px;font-weight:400;">
    Explore Next
  </h3>
  <div style="display:flex;gap:12px;flex-wrap:wrap;">
    <a href="[PAGE-1].html"
       style="flex:1;min-width:180px;padding:14px 16px;text-decoration:none;
              background:rgba(255,255,255,0.025);border-radius:8px;
              border:1px solid rgba(255,255,255,0.06);
              border-left:3px solid [CHAPTER-ACCENT];transition:background 0.2s;">
      <div style="color:#e0e0e0;font-size:0.92em;margin-bottom:4px;">[Topic Name]</div>
      <div style="color:#606078;font-size:0.78em;">[Chapter Name]</div>
    </a>
    <!-- Repeat for 2nd and 3rd links -->
  </div>
</div>
```

C

**Template D — Difficulty badge**
```html
<!-- DIFFICULTY BADGE — immediately after </h1> -->
<div style="display:flex;gap:4px;margin:6px 0 20px 0;" title="Difficulty [N] of 4">
  <span style="color:[CHAPTER-ACCENT];font-size:0.9em;">●</span>  <!-- repeat N times -->
  <span style="color:#404058;font-size:0.9em;">○</span>           <!-- repeat (4-N) times -->
</div>
```

### 5.5 Tone guide for "Where You'll See This" content

When writing this content in execution sessions, follow the site voice:
- Pick **one** concrete, surprising application — not a list
- Be specific: name the technology, the field, the effect
- Short sentences. Em dashes for rhythm. No filler phrases.

✓ *"Every time a streaming service recommends a film, eigenvalue
   decomposition is running beneath the surface — factoring a matrix of
   millions of viewing histories to find the hidden dimensions of taste."*

✗ *"Eigenvalues have many applications in data science and engineering."*

### 5.6 Execution protocol for enhancement sessions

For each batch session:
1. State which batch is being worked (e.g. "Batch 3 — Geometry, 8 pages")
2. For each page in the batch:
   a. Read the current file in full
   b. Apply all applicable Tier 1 additions using the templates above
   c. Write the "Where You'll See This" content (mathematically accurate
      and specifically useful — flag any page where you are uncertain about
      the application accuracy for SME review)
   d. Choose "Explore Next" links from related topics
   e. Run the Page Audit Prompt from `docs/PAGE_AUDIT_PROMPT.md` on the
      result to verify all checks pass
3. After the full batch is complete and audited, report a batch summary
4. **Do not commit or push to GitHub until instructed**

### 5.7 New pages required (future sessions, not this one)

| Page | Purpose | Tier |
|------|---------|------|
| `educator-guide.html` | Curriculum alignment for teachers | Tier 2 |
| `index.html` enhancement | "Daily Discovery" feature | Tier 2 |

Specifications for both to be drafted separately before build commences.

---

## Task 6 — Final Consistency Check

Once Tasks 1–5 are complete:

1. Re-read all output files for internal consistency:
   - `docs/BENCHMARK_RECOMMENDATIONS.md`
   - `docs/FOUNDATION.md` (updated)
   - `docs/STATUS.md` (updated)
   - `docs/PAGE_AUDIT_PROMPT.md`
   - `docs/ENHANCEMENT_PLAN.md`

2. Verify the Enhancement Plan's page inventory matches the files actually
   present in the repository root directory.

3. Check that HTML templates in Enhancement Plan are consistent with the
   design standards described in Foundation Document v2.0.

4. Produce a brief session summary:
   - Files created or updated (with one-line description of changes)
   - Key decisions made during the session
   - Any pages flagged for SME review of "Where You'll See This" content
   - Any open questions before execution begins
   - Recommended starting batch for the first enhancement session

---

## A Final Note on Tone

The voice of mathsedu.org is that of a knowledgeable friend who finds
mathematics genuinely beautiful — not a textbook, not a tutor performing
enthusiasm. When writing any new content (mission updates, "Where You'll
See This" boxes, hint text), apply this test: would a curious 14-year-old
find this surprising? Would a university student find it precise?

If the answer to both is yes, the tone is right.

---

*End of session prompt.*
*Begin with the Preliminary Step.*
*Confirm completion of each task before proceeding to the next.*
*Under no circumstances commit or push to GitHub.*
