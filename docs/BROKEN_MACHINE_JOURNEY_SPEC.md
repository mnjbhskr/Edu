# The Broken Machine — Journey Specification
## mathsedu.org · PWA Learning Experience

*Version 1.0 — March 2026*
*Authored by Manoj Bhaskar & Claude*
*Based on outline by Manoj Bhaskar*

---

> *"The most profound discovery of the twentieth century was not relativity,  
> not quantum mechanics, not DNA.  
> It was the discovery that mathematics itself has limits —  
> and that those limits are provably unreachable."*

---

## 1. Why This Journey Exists

Every other mathematics journey on this platform is about discovery —
finding patterns, proving theorems, building understanding. The Prime
Journey ends with RSA: mathematics protecting your secrets. The Infinity
journey ends with Cantor: the landscape of the infinite, mapped and named.

The Broken Machine is different.

It is a journey about what mathematics *cannot do*. About questions that
will never be answered — not because we haven't tried hard enough, but
because a young Austrian mathematician proved in 1931 that they are
unanswerable in principle. About computations that will never terminate —
not because the computer is too slow, but because a young English
mathematician proved in 1936 that no computer, however fast, could ever
solve them.

And yet — this is not a journey about failure. It is a journey about the
most surprising kind of success: the success of proving that something
is impossible. Of knowing, with absolute certainty, exactly where the
walls are.

The Broken Machine is for anyone who has ever felt the vertigo of
self-reference. For anyone who has wondered whether there are things
that simply cannot be known. For anyone who is ready for the idea that
sent shockwaves through the entire mathematical world — and that gave
birth, as a side effect, to the computer.

---

## 2. Journey Identity

| Field | Detail |
|---|---|
| **Title** | The Broken Machine |
| **Tagline** | *Some truths can never be proved. Some problems can never be solved. And one elegant argument explains why.* |
| **Accent colour** | Rose `#fb7185` — a warning light, something irreparably changed |
| **Background** | `#07071a` — the standard dark cosmos, slightly colder than the Prime Journey |
| **Acts** | 5 |
| **Estimated total time** | 50–70 minutes |
| **Prerequisite journeys** | Recommended: The Infinity Journey (Cantor's diagonal argument) |
| **Mathematical prerequisites** | None formal — but intellectual maturity required |
| **Audience** | The curious adult; the mathematically confident teenager; anyone who has sat with a paradox |
| **Emotional register** | Philosophical · suspenseful · building to awe |

---

## 3. The Colour Grammar

Colours carry meaning throughout the journey. Use consistently:

| Colour | Hex | Meaning in this journey |
|---|---|---|
| Rose / Warning | `#fb7185` | The limit, the unprovable, the undecidable — the break |
| Gold | `#fbbf24` | Provable statements, valid steps, the system working |
| Cyan | `#22d3ee` | Logical rules, inference steps, the mechanism of proof |
| Green | `#10b981` | Confirmed truths, completed proofs, the safe ground |
| Muted | `#7070a0` | Context, annotation, the background of the system |
| White | `#e0e0e0` | Primary text |

The **rose** accent is used sparingly — it appears when something breaks,
when the system encounters its limit, when the warning light flashes.
It should feel like something has genuinely gone wrong when it appears.

---

## 4. The Narrative Spine

The journey follows three real people across four decades, united by
one recurring mathematical move:

**The Diagonal Argument.**

Georg Cantor used it in 1891 to prove that some infinities are larger
than others. Kurt Gödel used it in 1931 to prove that formal systems
contain unprovable truths. Alan Turing used it in 1936 to prove that
no algorithm can solve the Halting Problem.

The same argument. Three times. Three revelations.

The student will not be told this at the start. They will discover
Cantor's diagonal in the prerequisite journey (or as a brief Act 0
recap). They will watch Gödel use it — and feel the déjà vu. They will
watch Turing use it — and feel the shock of recognition. By the end,
the diagonal argument will feel like an old friend who keeps appearing
in unexpected places, each time with more devastating consequences.

---

## 5. Act Structure Overview

| Act | Title | Character | Core idea | Emotional register |
|---|---|---|---|---|
| I | Hilbert's Dream | David Hilbert | Formal systems; the completeness programme | Hope, confidence, the satisfaction of certainty |
| II | The Liar's Shadow | Kurt Gödel (First Theorem) | Self-reference; the unprovable true statement | Unease, the feeling of the ground shifting |
| III | The Deeper Crack | Kurt Gödel (Second Theorem) | Consistency; the system cannot see itself | Vertigo, the turtles-all-the-way-down feeling |
| IV | The Machine That Cannot Decide | Alan Turing | Turing machines; the Halting Problem | Awe, and the unexpected birth of computing |
| V | The Open Door | Legacy | Undecidability map; P vs NP; why limits are gifts | Philosophical resolution, wonder |

---

---

# Act I — Hilbert's Dream

## The Promise

**Accent: Gold — everything is working**

---

### Opening Screen

**Character card:**

> *David Hilbert. Königsberg, 1900.*
>
> *The greatest mathematician of his age. Standing before the world's
> mathematicians in Paris. About to make a promise.*

**The question:**

> *"Every mathematical problem can be solved."*
>
> *Not might be. Not probably will be. Can be.*
>
> *He meant it. And for a moment — for a beautiful, optimistic moment —
> almost everyone believed him.*

**CTA:** *"Enter the dream →"*

---

### Discovery Screen 1 — The Proof Machine

**What the student sees:**

A beautiful mechanical machine — gears, levers, a conveyor belt.
At the top: **Axioms** fed in as glowing gold cards.
In the middle: **Inference rules** — gears that turn one statement into
another.
At the bottom: A **theorem tray** where proved results appear.

**The task — no instruction given:**

Three axiom cards sit waiting:
- "All men are mortal"
- "Socrates is a man"
- One empty slot — "Therefore, Socrates is ___"

The student drags "mortal" from a word bank. The gears turn. The theorem
slides into the tray. The machine stamps it: **PROVED ✓** in gold.

No explanation. Just the satisfaction of the machine working.

**Escalation:**

Five more logical chains, each slightly more complex:
- Simple arithmetic: 2 + 3 = ?
- Commutativity: if A = B, does B = A?
- A short three-step chain requiring the student to choose the right
  inference rule at each step

Each one works. The machine hums. Gold stamps cascade.

**Emotional target:** The visitor should feel the *pleasure* of formal
reasoning — the satisfaction of certainty, the beauty of a system that
always gives a definite answer.

**Narrative whisper** (appears after three correct proofs):

> *This is what Hilbert saw. A machine of pure logic. Feed in true
> axioms, apply correct rules, and the truth comes out the other end.
> Every time. No ambiguity. No doubt.*
>
> *It was, he believed, just a matter of finding the right axioms
> and being patient enough.*

---

### Discovery Screen 2 — The Completeness Question

**What the student sees:**

The machine is still running. A new panel appears: **The Queue** —
a list of mathematical statements waiting to be decided:

- "7 is prime" → PROVED ✓ (machine solves it immediately, satisfyingly)
- "Every even number > 2 is the sum of two primes" → machine begins
  working... spinning gears... still working... a progress bar...
- "There are infinitely many twin primes" → machine begins working...

Both the last two keep spinning. The student watches. The gears never stop.

**The task:**

A toggle appears: *"Is this because the machine needs more time — or
because it can never find the answer?"*

The student must choose. There's no wrong answer yet — this is a genuine
question, and the app acknowledges both responses as reasonable:

- If they say "more time": *"Hilbert believed exactly that. With a big
  enough machine and enough patience, every problem would eventually yield."*
- If they say "can never find it": *"You have the instinct that Gödel
  would confirm — thirty years later."*

**Narrative reveal** (after the toggle):

> *Hilbert's programme had three parts. First: prove that mathematics
> is **complete** — every true statement is provable. Second: prove
> it is **consistent** — it never proves a contradiction. Third: prove
> it is **decidable** — there is a mechanical procedure to determine
> whether any statement is true.*
>
> *He called the decidability question "the main problem of mathematical logic."*
>
> *He was right about its importance. He was wrong about the answer.*

---

### Pattern Screen

**What the student names:**

Three vocabulary cards appear, each with a simple definition:

- **Complete:** Every true statement can be proved
- **Consistent:** The system never proves a contradiction (A and not-A)
- **Decidable:** There is a procedure to determine truth for any statement

The student drags each word to its definition. The machine stamps each
one UNDERSTOOD ✓.

**Connecting observation:**

> *Notice something. These three hopes — completeness, consistency,
> decidability — are not independent. If you had all three, mathematics
> would be a machine. You would never need intuition, creativity, or
> genius. You would just follow the procedure.*
>
> *Hilbert thought that was a good thing. Not everyone agreed.*

---

### Proof / Explanation Screen — Inside a Formal System

**What the student builds:**

A simplified formal system — "Peano arithmetic lite" — with three axioms:

1. 0 is a natural number
2. If n is a natural number, then S(n) (the successor of n) is a natural number
3. For any natural number n: S(n) ≠ 0

And two inference rules (draggable):
- **Substitution:** Replace a variable with any natural number
- **Modus Ponens:** From "If A then B" and "A", conclude "B"

**The student proves:**
- S(0) is a natural number (one step)
- S(S(0)) is a natural number (two steps)
- S(0) ≠ 0 (one application of Axiom 3)

Each proof is a chain of steps. The student drags the correct rule
at each step. When the chain is complete, the theorem glows gold
and descends into the theorem tray.

**The key insight, stated after the proof:**

> *You just proved a theorem from scratch. You never needed to "think"
> — only to follow rules. This is what a formal system is. The axioms
> are the starting assumptions. The rules are the only moves allowed.
> Every theorem is just a path from axioms to conclusion, following rules.*
>
> *The machine can, in principle, explore all possible paths. Try all
> possible rule applications. Check every sequence. This is what Hilbert
> imagined: a systematic, exhaustive, mechanical proof of everything.*

---

### Connection Screen — The Stakes

**Historical moment:**

> *Hilbert published his programme in 1900. For thirty years, it
> dominated mathematics. The greatest minds in the world worked to
> fulfil it. Consistency proofs were constructed for simpler systems.
> Progress was made.*
>
> *Then, in September 1930, Hilbert gave a famous speech.*
>
> *"We must know," he declared. "We will know."*
>
> *The next day, at a conference in the same city, a quiet 24-year-old
> presented a paper that made "we will know" permanently impossible.*

**Emotional beat:** The gold machine is still running in the background.
A single rose warning light blinks on — once — then goes dark.
The machine keeps running. But something has changed.

**CTA:** *"Meet the man who broke it →"*

---

---

# Act II — The Liar's Shadow

## Gödel's First Incompleteness Theorem

**Accent: Rose begins to appear**

---

### Opening Screen

**Character card:**

> *Kurt Gödel. Vienna, 1931. Age 25.*
>
> *Shy. Precise. Terrifyingly careful.*
>
> *He had found something. Something that nobody — not Hilbert, not
> Russell, not anyone — had expected to find. He had found a true
> statement that could never be proved.*

**The question:**

> *Before we follow him — there's something you already know that
> will prepare you.*
>
> *Have you ever heard someone say: "This sentence is false"?*

**CTA:** *"Let's start there →"*

---

### Discovery Screen 1 — The Liar's Paradox

**What the student sees:**

A single sentence in a glowing box:

> **"This sentence is false."**

Two buttons: **TRUE** and **FALSE**

**If the student presses TRUE:**
The box flickers rose. A chain lights up:
- If it's TRUE, then it IS false (that's what it says)
- But if it's false, it's not true
- → CONTRADICTION. Try FALSE.

**If the student presses FALSE:**
The box flickers rose. A chain lights up:
- If it's FALSE, then its claim (that it's false) is wrong
- Which means it IS true
- → CONTRADICTION. Try TRUE.

An arrow loops back. The student can click TRUE and FALSE repeatedly,
watching the loop cycle. A counter appears: "Contradictions found: n"

**After a few clicks:**

> *You've discovered something ancient. This paradox — the Liar's
> Paradox — has troubled philosophers since at least 600 BCE.*
>
> *The Greek philosopher Epimenides, who was Cretan, reportedly said:
> "All Cretans are liars."*
>
> *Is that true?*
>
> *Gödel saw something in this paradox that nobody else had seen.
> Not a philosophical curiosity. A mathematical weapon.*

---

### Discovery Screen 2 — Self-Reference

**What the student sees:**

Three statements. Each one refers to itself in some way.

The student is asked: "Which of these creates a paradox when you try
to assign it a truth value?"

- "This sentence has five words." (TRUE — no paradox)
- "This sentence is false." (PARADOX — rose flash)
- "This sentence is true." (odd, but not paradoxical — just circular)

**Reveal:**

> *The dangerous ingredient is not self-reference itself.
> It is self-reference combined with negation.*
>
> *"This sentence is true" is just confident. It doesn't break anything.*
>
> *"This sentence is false" breaks the machine because it uses itself
> to deny itself.*
>
> *Gödel thought: what if I could write a mathematical statement that
> says "I cannot be proved"?*

---

### Discovery Screen 3 — Gödel Numbering

**What the student does:**

This is the technical heart of Act II, and the most important pedagogical
challenge. Gödel's insight was that mathematical statements *about*
formal systems can be encoded AS numbers within those formal systems.
Mathematics can talk about itself.

**Stage 1 — Symbol to number:**

A simple encoding table:

| Symbol | Number |
|---|---|
| 0 | 1 |
| S (successor) | 2 |
| + | 3 |
| = | 4 |
| ¬ (not) | 5 |
| ( | 6 |
| ) | 7 |

The statement "S(0) = S(0)" appears. The student encodes it:
2, 6, 1, 7, 4, 2, 6, 1, 7

A number appears: **the Gödel number of this statement** (computed from
the sequence via a simple product-of-primes encoding, shown as an animation).

**Stage 2 — Statement about numbers:**

> *Now here is the trick. This Gödel number is itself a number. And
> our formal system talks about numbers. So our formal system can
> make statements about its own statements — by making statements
> about numbers.*

A second panel: "The statement with Gödel number 47 is provable."
This is a statement ABOUT the formal system, written IN the formal system.
Mathematics turned inward.

**Stage 3 — The critical step:**

> *Gödel then asked: can I write a statement G such that:*
>
> *G says: "The statement with Gödel number [G's own number] is not provable."*
>
> *G says, in mathematical language: "I cannot be proved."*

The student watches as G is constructed step by step — each step
a legal move within the formal system. The statement assembles itself.
At the end: **G glows rose.**

> *This statement is legal. It is grammatically correct mathematics.
> It plays by all of Hilbert's rules.*
>
> *What happens if we try to prove it?*

---

### Proof / Explanation Screen — The Two-Horned Dilemma

**What the student works through:**

An interactive two-branch diagram. At the top: **G = "I cannot be proved."**

**Branch Left — Suppose G is provable:**

The student clicks through:
1. G is provable → G is true (we assume the system is consistent — it only proves true things)
2. But G says "I cannot be proved"
3. → If G is provable, then G is false
4. → CONTRADICTION with (1)
5. → Rose warning light flashes. Branch collapses. **G cannot be provable.**

**Branch Right — Suppose G is not provable:**

1. G says "I cannot be proved"
2. That claim is... correct
3. → G is TRUE
4. → G is a true statement that cannot be proved

**The landing:**

> *Both branches lead somewhere definitive.*
>
> *If G is provable: the system proves a false statement.
> That means the system is inconsistent — it proves contradictions.*
>
> *If G is not provable: G is true but unprovable.
> The system is incomplete — it has true statements it can never reach.*
>
> *Gödel's First Incompleteness Theorem:*
>
> **Any consistent formal system powerful enough to describe basic
> arithmetic contains true statements that cannot be proved within
> that system.**
>
> *Hilbert's machine cannot prove everything. Not because it's slow.
> Because it is mathematically impossible.*

The rose warning light on the gold machine from Act I now stays on.
It does not go out.

---

### Pattern Screen

**Two concepts, crystallised:**

- **Complete system:** Can prove every true statement about numbers
- **Gödel's result:** No consistent system of sufficient power can be complete

The student drags: "Hilbert hoped for ___" and "Gödel proved ___" to
the correct descriptions.

**The visual:**

Two overlapping circles, Venn diagram style:
- **True statements** (large circle, white border)
- **Provable statements** (smaller circle, gold, inside the first)
- The gap between them: **rose-coloured region** — "True but unprovable"

> *The provable is a proper subset of the true.*
>
> *There are mathematical facts that exist — they are real, they are
> true — that no formal proof will ever reach.*

---

### Connection Screen — What Does This Mean?

**Three responses, the student chooses the one they find most striking:**

1. *"Does this mean mathematics is broken?"*
   → *No. It means mathematics is richer than any formal system can capture.
   Truth is bigger than proof. That is humbling — but also beautiful.*

2. *"Is the Gödel statement actually true?"*
   → *Yes — in any consistent system. We can see this from outside the system.
   But the system itself can never confirm it from within.*

3. *"Can we just add G as a new axiom?"*
   → *Yes. Then you have a stronger system. But that system will have its OWN
   Gödel sentence — its own unprovable truth. You cannot escape. The gap
   always reappears.*

**Historical echo:**

> *Hilbert heard about Gödel's result at that same conference in 1930.
> He was, by all accounts, furious.*
>
> *He spent years trying to find an error in the proof.*
>
> *There wasn't one.*

**CTA:** *"But Gödel wasn't finished →"*

---

---

# Act III — The Deeper Crack

## Gödel's Second Incompleteness Theorem

**Accent: Rose deepens**

---

### Opening Screen

**Character card:**

> *Gödel. Still 1931. Still 25.*
>
> *His first theorem was devastating. His second was worse.*

**The question:**

> *Hilbert's programme had a fallback position.*
>
> *Even if the system can't prove everything — surely it can at least
> prove that it doesn't prove contradictions? Surely the machine can
> verify that the machine works?*
>
> *Gödel answered that question too.*

**CTA:** *"Watch the machine inspect itself →"*

---

### Discovery Screen 1 — The Consistency Question

**What the student sees:**

The gold proof machine from Act I, with the rose warning light glowing.
A new panel on the machine: **SELF-DIAGNOSTIC MODE**

A button: *"Run consistency check."*

The student presses it. The machine begins checking... spinning...
inspecting its own gears... A status bar fills... then resets... then
fills again... loops.

**After 10 seconds:**

A message appears in rose:

> *The consistency checker requires a proof. To construct that proof,
> it must use the rules of the system it is trying to check.*
>
> *But if the system already has a problem — if it already proves
> contradictions — those same rules will be used in the consistency
> proof. A broken ruler cannot measure its own brokenness.*

**The student's task:**

An analogy puzzle. Match the following:

| Attempt to self-verify | Why it fails |
|---|---|
| A ruler measuring its own length | The instrument IS the thing being measured |
| A judge presiding over their own trial | The authority IS what's on trial |
| An eye trying to see itself | The seeing organ cannot be its own object |
| A formal system proving its own consistency | ??? |

The student drags the fourth explanation: *"The rules used to construct
the proof ARE what we're trying to verify."*

---

### Discovery Screen 2 — What Would a Consistency Proof Require?

**Walk-through, step by step:**

> *Suppose the system COULD prove "I contain no contradictions."*
> *Call this statement CON.*

Step 1: CON is provable → CON is true (the system only proves truths)

Step 2: Recall Gödel's first theorem. The system contains a statement G
that says "G is not provable." We showed: if the system is consistent, G
is not provable.

Step 3: This argument — "if consistent, then G is unprovable" — is itself
a valid proof within the system. We can write it as:
**CON → G is unprovable**

Step 4: But we assumed CON is provable. So the system can prove:
**G is unprovable**

Step 5: But G SAYS "G is unprovable." So the system just proved G.

Step 6: The system proved G... but G says it can't be proved...

Rose warning light. Full alarm. The machine shudders.

> *If the system can prove its own consistency (CON), it can also
> prove G — and that leads straight to the contradiction we found
> in Act II.*
>
> *Therefore: a consistent system CANNOT prove its own consistency.*

**Gödel's Second Incompleteness Theorem:**

> **No consistent formal system powerful enough to describe basic
> arithmetic can prove its own consistency.**

---

### Discovery Screen 3 — Turtles All the Way Down

**What the student sees:**

A visual tower of formal systems:

- System S₁ at the base
- System S₂ above it (stronger — can prove S₁ is consistent)
- System S₃ above that (can prove S₂ is consistent)
- The tower extending upward...

The student clicks the top system. An arrow appears pointing upward
to a question mark: **"Who verifies this one?"**

**The student chooses:**
- "A yet stronger system" → The tower extends. Another question mark appears.
- "We just have to trust it" → *"This is, in fact, what working mathematicians do.
  They adopt axiom systems they find intuitively compelling and work within them.
  It is pragmatic. It is not logically circular. But it is also not the
  certainty Hilbert hoped for."*

**Narrative reflection:**

> *This is not a flaw in mathematics. It is a theorem about mathematics.*
>
> *Hilbert wanted a foundation that verified itself — a bedrock that
> needed no further support. Gödel proved that no such bedrock exists.
> Every system rests on something it cannot justify from within.*
>
> *Mathematicians did not abandon mathematics. They continued — as
> they had always done — with systems they found convincing.
> Only now they knew, with mathematical precision, what they were doing.*

---

### Proof / Explanation Screen — The Second Theorem, Stated Precisely

**Two-track presentation:**

**Track A — Intuitive:**

> *The first theorem said: there are true statements the system can't prove.*
>
> *The second theorem said: one of those unprovable truths is the
> statement "I am consistent."*
>
> *The machine cannot certify its own health. You always need a
> doctor from outside.*

**Track B — Precise:**

> *If system S is consistent and sufficiently powerful, then:*
>
> **S ⊬ CON(S)**
>
> *Where CON(S) is the formal statement "S does not derive a contradiction."*
>
> *This follows from the first theorem via the argument above:*
> *CON(S) → G is not provable in S*
> *If S could prove CON(S), it could prove G.*
> *But if S proves G, S is inconsistent — contradicting CON(S).*
> *Therefore S cannot prove CON(S).*

---

### Connection Screen — The Human Response

> *The mathematical community's reaction to Gödel's theorems was, at
> first, disbelief. Then, slowly, acceptance.*
>
> *John von Neumann — one of the greatest mathematicians of the century —
> understood the implications immediately when Gödel presented his result.
> He reportedly approached Gödel after the lecture and said that his
> own ongoing work on Hilbert's programme was now pointless.*
>
> *Von Neumann then extended Gödel's result himself, independently
> deriving the Second Theorem from the First.*
>
> *Hilbert never fully accepted it.*
>
> *Russell, whose Principia Mathematica was one of the systems Gödel
> had specifically targeted, said late in his life that the discovery
> had made him feel that his most important work had been rendered
> irrelevant.*

**Pause for reflection:**

> *Two theorems. Both proved by a 25-year-old.*
> *Both using the same technique: making mathematics talk about itself.*
>
> *Five years later, a 24-year-old in England would use the same
> technique — and invent the computer.*

**CTA:** *"Meet Alan Turing →"*

---

---

# Act IV — The Machine That Cannot Decide

## Turing's Halting Problem

**Accent: Rose and gold in tension — awe, not despair**

---

### Opening Screen

**Character card:**

> *Alan Turing. Cambridge, 1936. Age 24.*
>
> *He had read Gödel. He understood, perhaps better than anyone,
> what the theorems meant.*
>
> *He asked a different question. Not "what can't mathematics prove?"
> but "what can't a machine compute?"*
>
> *To answer it, he had to invent, precisely and for the first time,
> what a machine IS.*

**CTA:** *"Build a machine →"*

---

### Discovery Screen 1 — The Turing Machine

**What the student does:**

They build a Turing machine from scratch — not by writing code, but by
placing rules on a grid.

**The machine:**

- An infinite tape of cells, each containing a symbol (0, 1, or blank)
- A read/write head that can move left or right, one cell at a time
- A state register — the machine's "current mood"
- A table of rules: IF (state, symbol) THEN (write symbol, move, new state)

**Stage 1 — A rule:**

The student sees a blank rule table with two rows. They fill in:

| State | Read | Write | Move | New State |
|---|---|---|---|---|
| START | 0 | 1 | RIGHT | START |
| START | blank | blank | STOP | HALT |

They press play. The machine runs on a tape of zeros. It flips each 0
to 1, moves right, until it hits a blank — then stops.

**Stage 2 — Three machines to observe:**

Three pre-built machines run in sequence. The student watches:

1. **The Counter** — counts in unary, ticking forever (loops)
2. **The Reverser** — reverses a string of symbols, then halts (terminates)
3. **The Searcher** — searches for a 1 on an all-zero tape (loops forever, never finds it)

**The question that emerges:**

> *You just watched three programs. One halted. Two didn't.*
>
> *Before running each one, could you have predicted which would halt
> and which would run forever?*

Student answer buttons: YES / NO / MAYBE

> *For these simple cases — perhaps. But programs can be arbitrarily
> complex. Which leads to a question Turing asked:*
>
> *Is there a program — a single universal algorithm — that can examine
> ANY other program and its input, and decide: "this will halt" or
> "this will run forever"?*
>
> *Can the machine be its own judge?*

---

### Discovery Screen 2 — The "Will It Halt?" Game

**What the student plays:**

Six programs are presented, described in plain English:

1. "Count from 1 to 10, then stop." — **HALTS** (student guesses, then verifies)
2. "Count forever." — **LOOPS**
3. "Check if n is even; if not, try n+1; if yes, stop." — **HALTS** (for n=1)
4. "Search for the first odd perfect number." — **UNKNOWN** (open problem in mathematics — this is the reveal)
5. "Check Goldbach's conjecture for every even number in sequence." — **UNKNOWN** (open problem)
6. "Print the digits of π one at a time." — **LOOPS**

**The pedagogical move:**

Problems 4 and 5 expose that "will it halt?" can be equivalent to
deep unsolved mathematical questions. If you could decide halting,
you could resolve some of the greatest open problems in mathematics
by simply running the relevant program and seeing whether it stops.

> *This is not a party trick. It shows that the Halting Problem is
> genuinely hard — not because computers are slow, but because halting
> is connected to mathematical truth itself.*

---

### Discovery Screen 3 — The Diagonal Argument Returns

**Narrative introduction:**

> *Here it is again. The move Cantor used to prove some infinities are
> larger than others. The move Gödel used to construct his unprovable
> statement.*
>
> *Turing is about to use it too. Watch carefully — you've seen this before.*

**The construction, step by step:**

**Step 1 — Suppose a Halt-Checker exists:**

> *Assume — for contradiction — that there IS a program H that can
> decide, for any program P and input I, whether P(I) halts.*
>
> *H(P, I) = HALTS if P terminates on input I*
> *H(P, I) = LOOPS if P runs forever on input I*

**Step 2 — Build a new program D:**

> *Using H, we build a new program D that takes any program P as input:*
>
> *D(P): Run H(P, P)*
> *  If H says P(P) halts → D loops forever*
> *  If H says P(P) loops → D halts immediately*

The student watches D being assembled from H — a legal program,
constructed from a legal component.

**Step 3 — Ask: what does D(D) do?**

The student clicks: **"Run D on itself."**

Two branches illuminate simultaneously, both in rose:

- "If D(D) halts → H told us D(D) loops → so D was supposed to loop → CONTRADICTION"
- "If D(D) loops → H told us D(D) halts → so D was supposed to halt → CONTRADICTION"

Both branches lead to contradiction.

**Step 4 — The only escape:**

> *The contradiction came from assuming H exists.*
>
> *H cannot exist. No program can decide halting for all programs.*
>
> *This is not a limitation of current technology. It is a theorem.*
> *No program — on any computer, past or future, however fast —
> can solve the Halting Problem.*

**The diagonal echo:**

> *You've seen this argument before, haven't you?*
>
> *Cantor assumed a list of all real numbers — and constructed a real
> number not on the list, by going diagonally and changing each digit.*
>
> *Gödel assumed a system that could prove its Gödel sentence — and
> derived a contradiction by making the system talk about itself.*
>
> *Turing assumed a program that could check halting — and built a
> program that contradicts itself when run on itself.*
>
> *One argument. Three revelations. All three using the same move:
> construct the thing that breaks the assumption.*

---

### Proof / Explanation Screen — Undecidability

**Two tracks:**

**Track A — Intuitive:**

> *A program that checks whether programs halt would need to simulate
> what those programs do. But some programs run forever — so the
> checker would have to run forever simulating them, which means the
> checker itself never gives an answer.*
>
> *But more than this: if you could check halting, you could resolve
> the great open conjectures of mathematics by building programs that
> search for counterexamples. The undecidability of halting is, in
> a precise sense, the reason mathematics still has unsolved problems.*

**Track B — Precise:**

> *The Halting Problem is undecidable: there is no Turing machine H
> such that for all machines P and inputs I,*
>
> *H(P, I) terminates and correctly answers "halts" or "loops".*
>
> *Proof: By diagonal contradiction, as above.*
>
> *Corollary: The class of undecidable problems is vast. Most problems
> about programs — "does this program produce output X?", "does this
> program ever enter state S?" — are undecidable by Rice's Theorem.*

---

### Connection Screen — The Computer Is Born

> *Turing published his proof in 1936.*
>
> *To prove something was undecidable, he had to precisely define what
> it would mean for something to be decidable in the first place.*
>
> *That precise definition — the Turing Machine — was the first
> rigorous mathematical model of computation.*
>
> *Every computer ever built — every phone, laptop, supercomputer,
> quantum computer — is, in terms of what it can and cannot compute,
> equivalent to a Turing Machine. They are faster. They have more
> memory. They cannot solve different problems.*
>
> *The computer was invented to prove what computers cannot do.*

**Real-world connection:**

> *The undecidable problems you cannot solve with any computer:*
>
> *— Whether an arbitrary program contains a virus (hence why antivirus
>    software is fundamentally limited — it cannot be perfect)*
> *— Whether two arbitrary programs compute the same function*
> *— Whether an arbitrary program will ever output a specific string*
> *— Whether a mathematical theorem is provable from given axioms*
>
> *These are not unsolved engineering problems. They are proven
> mathematical impossibilities.*

**CTA:** *"Through the broken door →"*

---

---

# Act V — The Open Door

## Legacy

**Accent: Rose and gold balance — something broken, something beautiful**

---

### Opening Screen

> *Three theorems. Thirty-six years apart. Three different men.
> One argument.*
>
> *The machine is broken. The question is: what does that mean?*

**The emotional pivot:**

> *It could mean defeat. It does not.*
>
> *Every wall Gödel and Turing found also revealed something on the
> other side of it. Every impossibility result opened a new landscape
> of questions. The broken machine turned out to be a gift.*

**CTA:** *"See what was left →"*

---

### Discovery Screen 1 — The Map of Decidability

**What the student builds:**

An interactive map — a plane with two axes:
- X-axis: **Solvability** (decidable ↔ undecidable)
- Y-axis: **Difficulty** (easy ↔ hard)

Problem cards are placed on the map by the student:

| Problem | Where it belongs |
|---|---|
| "Is 17 prime?" | Decidable, easy |
| "Sort this list of numbers" | Decidable, easy |
| "Does this program halt?" | Undecidable |
| "Is this logical formula satisfiable?" (SAT) | Decidable, hard (NP-complete) |
| "Find the shortest route visiting every city" | Decidable, hard (NP-hard) |
| "Does this system of equations have a solution over integers?" | Undecidable (Hilbert's 10th problem — proved by Matiyasevich, 1970) |
| "Is this mathematical statement provable from ZFC axioms?" | Undecidable |

Each placement is confirmed or gently corrected with a one-sentence explanation.

**The reveal:**

> *The undecidable problems are not rare edge cases. They are everywhere.
> Most problems about programs are undecidable. Most sufficiently complex
> mathematical questions are undecidable.*
>
> *The decidable problems — the ones we can solve — are the special cases.*

---

### Discovery Screen 2 — The P vs NP Question

**What the student sees:**

The map from Screen 1, zoomed into the decidable-but-hard region.

> *Within the solvable problems, there is a further frontier.*
>
> *Some problems are easy to solve. Some are easy to CHECK but hard
> to solve. And the question of whether these two classes are the
> same — whether every problem you can check quickly can also be
> solved quickly — is the greatest unsolved question in computer science.*

**The million-dollar question, made concrete:**

Three examples the student works through:

1. **Multiplication** — Easy to solve AND easy to check (Level 1)
2. **Sudoku** — Hard to solve, easy to check: given a filled grid,
   you can verify it in seconds (Level 2)
3. **Factoring** — Hard to solve, easy to check: given a factorisation,
   you can verify by multiplying (Level 3)

> *The question P = NP asks: is Sudoku actually easy? Is there a fast
> algorithm we just haven't found?*
>
> *Most mathematicians believe P ≠ NP — that checking and solving are
> genuinely different. But nobody has proved it.*
>
> *If P = NP: all encryption breaks. Every secret becomes transparent.
> Every NP-hard problem becomes easy.*
>
> *One of Hilbert's descendants — an unsolved decision problem — with
> a million-dollar prize attached.*

---

### Discovery Screen 3 — The Diagonal Thread

**The unifying visual:**

A timeline of four uses of the diagonal argument, shown as a single
glowing thread connecting them:

```
1891 — Cantor
       Assume a list of all real numbers.
       Construct a number differing from the nth number in the nth digit.
       → The number is not on the list.
       → Some infinities are larger than others.

       ↓  same move

1931 — Gödel (First Theorem)
       Assume a complete formal system.
       Construct a statement that encodes "I am not provable."
       → The statement is true but unprovable.
       → No consistent system is complete.

       ↓  same move

1931 — Gödel (Second Theorem)
       Assume a system that proves its own consistency.
       Show this leads to proving the Gödel sentence.
       → Contradiction.
       → No consistent system proves its own consistency.

       ↓  same move

1936 — Turing
       Assume a halt-checking program H.
       Construct program D that contradicts H's output when run on itself.
       → Contradiction.
       → No program can decide halting.
```

The student clicks each node. The thread glows. A brief animation
shows the structural similarity of each argument.

**The culminating insight:**

> *This is not a coincidence. These results are genuinely related.*
>
> *Gödel proved that his undecidable statements can be translated into
> halting problems. Turing proved that the Halting Problem is equivalent
> to Gödel's First Theorem in a precise mathematical sense.*
>
> *Cantor, Gödel, Turing — one argument, three faces, one mathematical truth:*
>
> *Self-reference, when combined with negation, always breaks the assumption
> of completeness.*
>
> *The diagonal argument is the mathematics of impossibility.*

---

### Proof / Explanation Screen — Why Limits Are Gifts

**Three reflections — the student chooses the one that resonates:**

**Option 1 — The philosophical:**

> *Gödel's theorems did not diminish mathematics. They revealed that
> mathematical truth is larger than any formal system can capture.*
>
> *Truth transcends proof. There are mathematical facts that are real
> and definite — but that no mechanical procedure will ever confirm.*
>
> *This is humbling. It is also, if you sit with it, extraordinary.*

**Option 2 — The practical:**

> *Turing's undecidability results, in proving what computers cannot do,
> precisely defined what computers CAN do. They gave birth to the theory
> of computation — the mathematical foundation of every program ever written.*
>
> *Without the question "what is computable?", there is no computer science.
> Without the Halting Problem, there is no precise definition of an algorithm.*
>
> *The broken machine built the working ones.*

**Option 3 — The mathematical:**

> *Incompleteness opened new fields. Model theory — the study of
> different mathematical universes in which different statements are true —
> grew directly from Gödel's methods. Independence results in set theory
> (Cohen, 1963) showed that the Continuum Hypothesis is undecidable from
> the standard axioms — neither provably true nor provably false.*
>
> *The unprovable became its own subject of study.*
>
> *The broken machine revealed a richer landscape than the unbroken
> one would have.*

---

### Connection Screen — The Living Legacy

**"The broken machine, today":**

Four real consequences, shown as interactive cards:

1. **Your antivirus software** — Cannot be perfect, by Rice's Theorem.
   It is necessarily heuristic. The Halting Problem guarantees this.

2. **Encryption** — Relies on NP-hard problems. If P = NP were proved,
   all current encryption would break overnight.

3. **Artificial intelligence** — The question of whether a given AI
   system will behave safely is, in the general case, undecidable.
   Not hard. Undecidable.

4. **Mathematics itself** — There are statements in normal mathematics
   (about infinite sets, about certain combinatorial structures) that
   are known to be independent of the standard axioms. They are true
   in some mathematical universes and false in others.

---

### Completion Screen

**What was learned — three points:**

> 1. **Gödel's First Theorem:** Any consistent, sufficiently powerful formal
>    system contains true statements that cannot be proved within it.
>    Mathematics is incomplete — necessarily and provably.
>
> 2. **Gödel's Second Theorem:** No such system can prove its own consistency.
>    You always need a stronger system to verify a weaker one.
>
> 3. **Turing's Halting Problem:** No algorithm can determine whether
>    an arbitrary program will halt. Some problems are not merely hard —
>    they are undecidable. And the computer was invented to prove this.

**The closing reflection:**

> *The machine is broken.*
>
> *It was always broken. We just didn't know it.*
>
> *And knowing it — proving it, with mathematical precision — is one
> of the most extraordinary things human beings have ever done.*
>
> *Hilbert wanted to know everything. Gödel proved he never could.
> Turing built the machine that would change the world anyway.*
>
> *The dream didn't die. It grew up.*

**Celebration:** Not confetti — a slow, quiet animation. The rose
warning light on Hilbert's machine dims. Not to darkness. To a warm,
steady glow. Something acknowledged. Something understood.

**CTA:** *"Return to the start — it looks different now."*
*(Links back to Act I — the proof machine now has a small rose warning
light visible that wasn't there on the first visit. A reward for those
who replay.)*

---

---

## 6. Voice and Tone — This Journey Specifically

The Prime Journey voice is warm and playful. The Broken Machine is
the same underlying voice — but quieter. More philosophical. It pauses
more. It lets silences exist.

### Specific Guidance

**In Act I:** The voice is confident, almost buoyant. The machine works.
Lean into the pleasure of valid proofs. Make the student feel what
Hilbert felt.

**In Acts II and III:** The voice slows. Sentences shorten. The student
should feel the ground shifting, not be lectured at about the ground shifting.
Use white space. Let each revelation sit for a moment before explaining it.

**In Act IV:** The voice becomes precise and almost terse — Turing's
style infects the narration. Short, exact, inevitable. The diagonal
argument is presented without flourish because it doesn't need any.

**In Act V:** The voice opens up again — but differently from Act I.
Not buoyant. Spacious. The kind of openness that comes after something
has been understood, not before.

### Things We Especially Never Say Here

- "Surprisingly..." (the surprise should be felt, not announced)
- "It turns out..." (telegraphs the reveal before the reveal)
- "This is mind-blowing." (the student's mind should be blown by the
  mathematics, not by our commentary on the mathematics)
- Any framing that suggests Gödel or Turing "defeated" mathematics.
  They didn't defeat it. They described it more precisely.

---

## 7. Technical Specification

### Canvases and Simulations

| Act | Canvas | What it shows | Key interaction |
|---|---|---|---|
| I | Proof machine | Axioms → inference rules → theorems | Drag-and-drop proof construction |
| I | Completeness queue | Statements awaiting proof | Toggle: time vs impossibility |
| II | Liar's loop | TRUE/FALSE cycling paradox | Click to toggle, watch the loop |
| II | Gödel numbering | Symbol → number encoding | Interactive encoding table |
| II | G construction | Self-referential statement assembling | Step-through animation |
| II | Two-horned diagram | Provable vs unprovable branches | Click-through branching |
| II | Venn diagram | True vs provable circles | Static, rose gap region |
| III | Self-diagnostic | Machine trying to check itself | Button → looping animation |
| III | System tower | S₁ verified by S₂ verified by S₃... | Click top → question mark |
| IV | Turing machine | Tape, head, state, rules | Build rules, press play |
| IV | Halt game | Six programs, halt/loop prediction | Guess → verify |
| IV | Diagonal construction | H → D → D(D) contradiction | Step-through, branching |
| V | Decidability map | Problems placed on 2D plane | Drag-and-drop placement |
| V | P vs NP region | Easy/hard decidable space | Three worked examples |
| V | Diagonal thread | Cantor → Gödel → Turing timeline | Click each node |

### PWA Requirements

- Fully offline (service worker)
- All simulations: < 16ms frame time
- Zero network requests after initial load
- iOS Safari + Android Chrome parity
- Touch targets minimum 44×44px
- Load time < 2 seconds on 4G

### Adaptive Branching — This Journey

The branching is gentler here than in the Prime Journey. The concepts
are harder to grade objectively. The key branching moments are:

- Act I Completeness question: the student's answer doesn't determine
  branching — both are affirmed, but different narrative paths follow
- Act II Gödel numbering: if the student struggles with the encoding
  (mismatches on two attempts), the app offers a simplified two-symbol
  version before retrying the full version
- Act IV Halt game: if a student gets three of six wrong, a hint system
  activates — not giving answers, but asking "is there a number this
  could run forever on?"

---

## 8. Quality Tests — Applied to This Journey

**The Max Test:**
*Would a curious 9-year-old follow the Liar's Paradox and the Turing
Machine simulator?* Yes — these are designed for exactly that level of
entry. The deeper theorems are presented with enough scaffolding that
the structure is clear even if the formal proof is not fully absorbed.

**The Adult Test:**
*Would an intelligent adult who "was never good at maths" be engaged?*
Yes — the historical narrative, the genuine philosophical stakes, and
the real-world consequences (encryption, antivirus, AI safety) are
designed for this audience.

**The Discovery Test:**
*Does each act begin with exploration before definition?*
Yes — the Liar's Paradox precedes the Incompleteness Theorem.
The Turing Machine is built before the Halting Problem is stated.
The diagonal thread is felt before it is named.

**The Failure Test:**
*When a student gets something wrong, do they feel stupid or curious?*
The framing throughout treats confusion as appropriate and productive.
The Liar's Paradox is designed to confuse — that is its mathematical
content. The app should celebrate the confusion, not apologise for it.

---

## 9. Cross-Journey Connections

| Concept in this journey | Connects to |
|---|---|
| Formal systems and axioms | Logic & Proof chapter |
| Cantor's diagonal argument | The Infinity Journey (prerequisite) |
| The natural numbers and Peano arithmetic | Numbers chapter |
| Turing machines as computation models | AI chapter (Chapter 11) |
| P vs NP | Cryptography module (AI6) |
| Independence results in set theory | Analysis & Topology chapter |
| Halting and antivirus limitations | CS / AI appendix |

---

## 10. The Arc in One Sentence per Act

- **Act I:** The machine works beautifully — and Hilbert believed it could work for everything.
- **Act II:** Gödel showed the machine contains a statement it can never decide.
- **Act III:** Gödel showed the machine cannot even verify that it works.
- **Act IV:** Turing showed no machine can decide whether machines stop.
- **Act V:** The broken machine was a gift — it built the working ones.

---

*Specification v1.0 — mathsedu.org — March 2026*
*Authored by Manoj Bhaskar & Claude*
*"We must know. We will know." — David Hilbert, 1930*
*"We cannot know. And we can prove it." — implied by Gödel, 1931*
