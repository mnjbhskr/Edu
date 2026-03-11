# The Prime Journey — Design Manifest
## mathsedu.org · PWA Learning Experience

*Version 1.0 — March 2026*
*Authored by Manoj Bhaskar & Claude*

---

> *"The best teachers don't teach mathematics. They create the conditions  
> in which students discover it for themselves."*

---

## 1. Why This Exists

Mathematical intuition — the ability to *see* why something is true before you can prove it — has historically been the preserve of the fortunate few. The students who develop it are those lucky enough to have a brilliant teacher, a patient tutor, or a parent who sits with them and asks *"what do you notice?"*

This platform exists to be that voice, at scale, for free, on every child's phone.

The goal is not to teach mathematics. It is to create the experience of **mathematical discovery** — that specific feeling of *"I found it myself"* that makes a concept permanently yours.

---

## 2. The Core Philosophy

### 2.1 Discovery Before Definition

**The rule:** A student must encounter the concept before they are told its name.

They find the pattern. They feel the surprise. *Then* we give it a label.

A child who has spent five minutes trying to arrange 7 tiles into rectangles — and failed — owns the word "prime" in a way that no definition can provide. The label becomes a name for something they already know, not a new fact to memorise.

**In practice:** Every act begins with a puzzle or a task. The vocabulary arrives later, as a reward for the exploration, not a prerequisite for it.

### 2.2 The Emotional Arc Comes First

Before writing a single line of code, design the **emotional journey**:

- What does the child *feel* at each stage?
- Where is the moment of surprise?
- Where is the moment of satisfying confirmation?
- Where is the productive confusion that generates curiosity?
- Where is the "I need to know what happens next" pull?

The mathematics follows the emotional arc. Not the other way around.

### 2.3 Failure Is a Redirect, Not a Dead End

The language around incorrect answers must never feel like failure. Instead:

- *"That's not quite right — but look at what happened when you tried it. That's actually interesting."*
- *"Even Gauss found this tricky at first."*
- *"You're one step away. What if you tried the smallest possible case?"*

An incorrect answer triggers a visual explanation of *why*, then a simpler variant of the same idea, then another attempt. The child never reaches a dead end — only a different path to the same destination.

### 2.4 The Narrative Spine

Every concept lives inside a story. Not a forced or didactic story — a genuine one.

*Why did this problem exist? Who was frustrated by it? What broke when we didn't understand it? What became possible when we did?*

The story is not decoration. It is the emotional scaffolding that makes mathematical facts memorable. A student who knows that Eratosthenes worked in the greatest library in the ancient world, with nothing but patience and papyrus, remembers the Sieve differently from one who simply executed an algorithm.

**Each act has:**
- A named character or historical context (where real)
- A genuine human problem that motivated the mathematics
- A moment of surprise or revelation
- An unexpected real-world application

### 2.5 The Child in Everyone

Great mathematics education does not target children. It targets the **child in everyone**.

Content must be designed so that an adult picking up the app is drawn in just as naturally as a 9-year-old. The sense of wonder, the pleasure of discovery, the satisfaction of a proof — these are not age-specific. They are human.

The voice should speak to that universal curiosity. Never condescending. Never performing enthusiasm. Genuinely interested.

---

## 3. The Pedagogical Architecture

### 3.1 The Five-Layer Model

Every learning journey is built on five layers:

```
┌─────────────────────────────────────────────┐
│  5. CONNECTION                               │
│     Links to other concepts, real-world      │
│     applications, open questions             │
├─────────────────────────────────────────────┤
│  4. PROOF / EXPLANATION                      │
│     Why is it true? Guided logical steps     │
├─────────────────────────────────────────────┤
│  3. PATTERN RECOGNITION                      │
│     Student notices the rule themselves      │
├─────────────────────────────────────────────┤
│  2. GUIDED EXPLORATION                       │
│     Structured puzzles that surface the idea │
├─────────────────────────────────────────────┤
│  1. OPEN DISCOVERY                           │
│     Unstructured play — no right answers yet │
└─────────────────────────────────────────────┘
```

Move upward through the layers. Never skip a layer. Return to lower layers when a student struggles — the foundation is always the open discovery.

### 3.2 The Adaptive Branching Logic

```
Student answers correctly, quickly
    → Harder variant: fewer hints, larger numbers,
      asks "why" not just "what"

Student answers correctly but slowly
    → Consolidate at same level before advancing
      Add a reinforcing question from a different angle

Student answers incorrectly (first time)
    → Visualisation shows WHY
    → Gentler variant of the same idea
    → Encouraging reframe ("You're close — look at this...")
    → Try again

Student answers incorrectly (second time)
    → Step back one full layer
    → Rebuild the foundation
    → Narrative absorbs the setback gracefully
    → Different approach to the same concept
```

**Critical principle:** The branching must be invisible to the student. They should never feel they are being assessed or sorted. They are simply exploring, and the app is responding to what they find interesting.

### 3.3 Spaced Repetition Integration

Concepts from earlier acts should resurface naturally in later acts — not as revision tests, but as tools needed to solve the new problem.

A student who encountered prime factorisation in Act I will use it naturally in Act V when building RSA encryption. This creates the web of connections that transforms isolated knowledge into genuine understanding.

---

## 4. The Voice and Tone

### 4.1 The Register

The app speaks like the **best teacher you ever had**: warm, curious, genuinely enthusiastic without performing enthusiasm. Never patronising. Never over-explaining. Trusting the student to keep up.

### 4.2 Sentence Principles

- **Short sentences for tension.** *"7 tiles. Try every rectangle you can think of."*
- **Longer sentences for context and story.** These can breathe.
- **Questions before answers.** Always.
- **Em dashes for rhythm.** Used liberally — they create the cadence of thought.
- **"You" not "students."** Address the person directly.
- **Present tense for immediacy.** Mathematics happens *now*, not in the abstract past.

### 4.3 Sample Voice Guide

| Context | Wrong | Right |
|---------|-------|-------|
| Introducing a concept | "A prime number is defined as..." | "Some numbers refuse every rectangle. Can you find them?" |
| After an incorrect answer | "Incorrect. The answer is 7." | "Not quite — but look at what happened when you tried that." |
| Historical context | "Eratosthenes invented the sieve in 240 BCE." | "He had no computer. No calculator. Just patience and one remarkably clever idea." |
| Real-world connection | "Primes are used in encryption." | "Every time you buy something online, prime numbers are keeping your secret." |
| After a discovery | "You have found a prime number." | "You found it. Nobody told you — you *saw* it." |

### 4.4 Things We Never Say

- "Well done!" (empty praise)
- "That's wrong, try again." (without explanation)
- "As you can see..." (condescending)
- "Obviously..." (never)
- "Don't worry if this is confusing." (plants doubt)
- "This is an easy one." (sets up embarrassment)

---

## 5. The Visual and Interaction Design

### 5.1 The Aesthetic Direction

**Dark cosmos with warm mathematical light.**

The universe of mathematics is vast and dark — but within it, certain ideas glow with extraordinary brightness. The visual language reflects this: a deep indigo-black space, with warm gold for discovered primes, cyan for Eratosthenes' systematic logic, green for proved truths, pink for errors that are interesting rather than shameful.

This is not arbitrary. The colours carry meaning consistently across every act:

| Colour | Meaning | Use |
|--------|---------|-----|
| Gold `#fbbf24` | Discovery, primes, "found it" | Prime numbers, correct discoveries |
| Cyan `#22d3ee` | Logic, method, systematic thinking | Algorithms, proof steps, navigation |
| Green `#10b981` | Proved, confirmed, complete | Completed proofs, verified facts |
| Pink `#f472b6` | Error as observation | Wrong attempts (not failures — interesting data) |
| Muted `#7070a0` | Context, annotation | Secondary text, labels |

### 5.2 The Interaction Principles

**Touch-first, always.** Every interaction is designed for a finger on a phone before it is designed for a cursor on a desktop. Tap targets minimum 44×44px. No hover states as primary interactions.

**Immediate visual feedback.** Every tap produces an instant response. The world changes the moment you touch it.

**Progressive revelation.** Never show the complete picture immediately. Build it. The sieve crosses out numbers one by one for a reason — watching it happen is the experience.

**Celebration is specific.** Confetti fires when a prime is discovered — not when any button is pressed. The celebration is earned and meaningful, tied to the mathematical event.

**Failure is gentle and visual.** Wrong answers trigger a brief visual explanation of *why*, not just a red X. The student sees what would have happened if they were right. This is more valuable than simply knowing they were wrong.

### 5.3 The PWA Manifest Standards

Every screen must:

- Work completely offline (service worker caching)
- Load in under 2 seconds on a 4G connection
- Function identically on iOS Safari and Android Chrome
- Have no external dependencies loaded at runtime
- Include proper `<meta>` viewport and theme-colour tags

```json
{
  "name": "The Prime Journey",
  "short_name": "Primes",
  "description": "Discover the most fascinating objects in mathematics",
  "start_url": "/prime_journey_act1.html",
  "display": "standalone",
  "background_color": "#07071a",
  "theme_color": "#07071a",
  "icons": [...]
}
```

---

## 6. The Act Structure Template

Every act — regardless of topic — follows this structure:

```
ACT TEMPLATE
─────────────────────────────────────

Opening Screen
  ├── Act number & title
  ├── Historical or narrative hook (character card if applicable)
  ├── The question we're going to answer
  └── CTA: "Begin" (never "Start Lesson" or "Learn about X")

Discovery Screen(s)
  ├── Open exploration task — no right/wrong yet
  ├── Immediate visual feedback on every interaction
  ├── The student finds the pattern (we don't name it yet)
  └── Discovery moment: celebration when the idea clicks

Pattern Screen
  ├── "Do you see it?" — reflection on what was just discovered
  ├── Name and define the concept (NOW — not before)
  └── Connect to what the student observed

Proof / Explanation Screen
  ├── "Why is this true?" — guided logical steps
  ├── Student makes each step (not passive reading)
  ├── Visual at each step showing the consequence
  └── Interactive Q&A — multiple choice or drag

Connection Screen
  ├── Historical significance
  ├── Real-world application (concrete and surprising)
  ├── Connection to next act
  └── Open question for the curious: "What if...?"

Completion Screen
  ├── What was learned (3 points maximum)
  ├── Preview of next act (create the pull)
  └── Celebration
```

---

## 7. The Concept Curriculum

The Prime Journey covers five acts. Each act is self-contained but builds on the previous.

| Act | Title | Core Concept | Emotional Register |
|-----|-------|-------------|-------------------|
| I | The Lonely Numbers | What is a prime? | Curiosity, discovery |
| II | The Ancient Sieve | Eratosthenes' algorithm | Systematic satisfaction |
| III | The Pattern That Isn't | Prime distribution, PNT | Awe at structure in chaos |
| IV | The Proof of Infinity | Euclid's proof | The specific pleasure of proof |
| V | Your Secret and Mine | RSA encryption | Relevance, empowerment |

Future journeys will follow the same five-act structure for other concepts. The curriculum builds from:

```
Primes → Modular Arithmetic → Groups → Cryptography
   └──→ Infinity → Cantor's Diagonal → Set Theory
   └──→ Probability → Bayes → Uncertainty
   └──→ Calculus → Rates of Change → Physics
```

---

## 8. Quality Standards

Before any act ships, it must pass these tests:

### 8.1 The Max Test
*Would a curious 9-year-old, working alone on a phone, understand and enjoy this without any adult help?*

If not — simplify the language, add a step, make the visual more immediate.

### 8.2 The Adult Test
*Would an intelligent adult who "was never good at maths" be drawn in and genuinely interested?*

If not — the narrative isn't doing its job. The story needs strengthening.

### 8.3 The Discovery Test
*Does the student find the core idea before being told what it is?*

If the first substantive screen contains a definition, the act is structured wrong.

### 8.4 The Failure Test
*What happens when a student gets something wrong twice in a row? Do they feel stupid, or do they feel curious?*

If the answer is "stupid" — revise the error handling.

### 8.5 The Offline Test
*Does the act work with no network connection?*

If not — it is not PWA-compliant.

---

## 9. What We Are Building Against

It is worth being explicit about what this platform is *not* trying to be.

**Not Duolingo.** Duolingo optimises for daily active users and streak maintenance. We optimise for genuine understanding. These are not the same thing. A student who completes our Prime Journey and never returns has still learned something that will stay with them. That is a success.

**Not Khan Academy.** Khan Academy is a reference resource — excellent for finding an explanation of a specific topic. We are building a *journey*, not a library. The sequence matters. The narrative matters. You cannot skip to Act IV.

**Not a textbook on a screen.** A textbook presents knowledge. We present the experience of discovering knowledge. The difference is everything.

**Not gamification for its own sake.** Points, badges, and leaderboards are not in this platform. The intrinsic reward of understanding is the only reward we offer — and it is the most durable reward that exists.

---

## 10. The Commitment

Every act we build carries an implicit promise to the student:

*If you engage honestly — if you try the puzzles, if you resist the urge to skip — you will come away owning something. Not having read about something. Not having been told something. Owning it.*

*You will have the intuition that, until now, only the lucky few had.*

*And nobody can take that from you.*

---

*This document is the foundation. When in doubt — return to Section 2.*

*When something feels wrong — run the tests in Section 8.*

*When the mathematics is clear but the soul is missing — re-read the voice guide in Section 4.*

---

**mathsedu.org — A Visual Discovery of Mathematics**
*Built for every child who was told they "weren't a maths person."*
