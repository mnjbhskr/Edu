# The Mathematics of Social Networks
## Build Specification for mathsedu.org
### One Interactive Page — Draft for Review (March 2026)

---

## Document Status

| Field | Detail |
|---|---|
| Version | 1.0 — Initial Draft |
| Status | For SME review before build |
| Filename | `social_networks.html` |
| Proposed section | Computer Science, AI & Cryptography Appendix (companion to `pagerank.html`) |
| Difficulty | Level 2–3 |
| Accent colour | Cyan `#22d3ee` (CS / AI appendix palette) |
| Estimated engagement | 35–45 minutes |

---

## Design System

Follow exactly — identical to all existing site pages.

```css
background:   #0a0a1a
color:        #e0e0e0
font-family:  Georgia, 'Times New Roman', serif
font-family:  'Courier New', monospace   /* maths */

accent-cyan:  #22d3ee
accent-green: #10b981
accent-gold:  #fbbf24
accent-pink:  #f472b6
muted:        #808098
panel-bg:     rgba(255,255,255,0.025)
panel-border: rgba(255,255,255,0.06)
```

Single-file HTML — all CSS and JS inline, zero external dependencies.
Standard skeleton, component classes, and footer as per `AI_CHAPTER_SPECIFICATION.md`.

---

## Why This Page Exists

Social networks are something every visitor has direct, personal experience
of. They have been inside one for most of their lives. What they almost
certainly do not know is that their experience — who they see, what goes
viral, why they feel oddly connected to strangers, why opinions seem to
cluster, why a video can reach a billion people in a week — is governed
by mathematics that was worked out long before Facebook existed.

This page tells that story chronologically. Each platform era introduced
new social behaviour that demanded new mathematics to understand it. The
history of social networks is, beneath the surface, a history of applied
graph theory.

### The Emotional Hook

> *You have probably spent thousands of hours inside a social network.
> You know what it feels like. What you may not know is that the network
> has a shape — and that mathematicians have been studying that shape,
> and what it does to the people inside it, since long before Myspace
> existed.*

---

## Mathematical Spine

The page moves through six distinct mathematical ideas, one per era.
Each idea is more sophisticated than the last, and each is *required*
by the new social behaviour of that era — not retrofitted.

| Era | Platform(s) | New Social Behaviour | Mathematical Idea Introduced |
|---|---|---|---|
| 1 | Bulletin boards, SixDegrees (1997) | "Do I know you?" | Graph theory: nodes, edges, degree |
| 2 | Myspace (2003–2008) | "We're all connected" | Small-world networks, six degrees, clustering |
| 3 | Facebook (2004–2012) | "News Feed — who matters most?" | Weighted graphs, the Friendship Paradox |
| 4 | Twitter / Tumblr (2006–2014) | "This is spreading everywhere" | Branching processes, virality, R₀ |
| 5 | Instagram / Reddit (2010–2018) | "We think alike — everyone does" | Community detection, modularity, echo chambers |
| 6 | TikTok / YouTube (2016–present) | "I didn't choose this — it chose me" | Optimised recommendation graphs, feedback loops |
| 7 | What's next? (2025–?) | Decentralisation, AI agents | Open problems: protocol graphs, synthetic social graphs |

---

## Pedagogical Arc (Five Layers)

### Layer 1 — Open Discovery

The page opens with a personal puzzle. No mention of mathematics:

> *Think of five people you know well. Now think of five people they
> know, who you don't. How many people do you think you could reach
> in six steps — through chains of mutual acquaintances?*
>
> *Most people guess a few thousand. The actual answer, for a typical
> person in a connected society, is: almost everyone on Earth.*

An interactive lets the visitor build a small social graph by clicking
to add friends-of-friends. After three or four steps the graph has
exploded in size. The visitor sees exponential reach before they know
the mathematics behind it.

---

### Layer 2 — Guided Exploration

Six short interactive stations, one per era (Eras 1–6). Each takes
2–4 minutes and reveals one mathematical idea through play.

The visitor moves through them in sequence, but each is self-contained
— they can revisit any era independently.

---

### Layer 3 — Pattern Recognition

Each era ends with a "What just happened mathematically?" reveal —
a one-paragraph explanation that names the idea and places it in the
broader mathematical landscape. These reveals accumulate, building a
vocabulary that the visitor carries into each subsequent era.

---

### Layer 4 — Explanation

A "Go deeper" collapsible section at the end of each era, for visitors
who want the mathematics beyond the interactive. Two tracks:

- **Intuitive track** — the idea in plain language and analogies
- **Mathematical track** — the formal definition, key theorem, or formula

---

### Layer 5 — Connection

A closing section: "The shape of the network shapes the people in it."
This connects all six mathematical ideas to:

- Why misinformation spreads faster than corrections (branching processes)
- Why your friends seem more popular than you (Friendship Paradox)
- Why political opinions cluster (modularity and echo chambers)
- Why recommendation algorithms can change what you believe (feedback loops)
- What mathematically healthy social networks might look like (open problem)

---

---

## Era 1 — The First Networks (1985–2002)
### Mathematical Idea: Graph Theory — Nodes, Edges, Degree

**Historical context:**

Before social networking existed as a product, sociologists were already
building mathematical models of human connection. Stanley Milgram's
1967 "small-world experiment" — the origin of "six degrees of separation"
— found that the average chain length between two random Americans was
approximately 5.5. In 1998, Duncan Watts and Steven Strogatz gave this
a mathematical foundation. In 2001, SixDegrees.com became the first
website explicitly built around social graph connections.

The web bulletin board systems of the 1980s–1990s (Usenet, BBS networks,
early internet forums) were the actual first online social graphs — though
nobody called them that.

**The mathematics:**

A social network is a **graph** G = (V, E) where:
- V = set of people (vertices / nodes)
- E = set of connections between them (edges)

Key measurements on any graph:

| Measure | Definition | Social meaning |
|---|---|---|
| **Degree** of a node | Number of edges connected to it | Number of friends |
| **Average degree** | Sum of all degrees / number of nodes | Average friend count |
| **Diameter** | Longest shortest path between any two nodes | "How far apart" are the most distant people? |
| **Average path length** | Mean of all shortest paths | The "degrees of separation" number |
| **Clustering coefficient** | Fraction of a node's neighbours who are also connected to each other | "Do my friends know each other?" |

**The small-world property:**

A graph is "small-world" if:
- Average path length is **small** — roughly O(log N)
- Clustering coefficient is **high** — much higher than a random graph

Real social networks are small-world networks. Random graphs (where
edges are placed at random) have short path lengths but low clustering.
Regular lattices (where everyone connects to their neighbours) have high
clustering but long path lengths. Real social networks somehow achieve
both — this was the insight of Watts and Strogatz.

**Interactive 1A — The Six Degrees Explorer**

A graph of 20 nodes. The visitor selects any two nodes and sees the
shortest path highlighted. A counter shows path length. Three graph
types are togglable:
- Random graph (short paths, low clustering)
- Regular lattice (long paths, high clustering)
- Small-world graph (short paths, high clustering)

The visitor discovers that only the small-world graph captures both
properties simultaneously.

**Interactive 1B — Degree Distribution**

The visitor clicks to add edges to a small graph. A live histogram shows
the degree distribution. Key insight: real social networks have
**power-law degree distributions** — most people have few connections,
but a small number of "hubs" have enormous numbers of connections.
This is not what a random graph looks like.

---

## Era 2 — Myspace and the Friendship Paradox (2003–2008)
### Mathematical Idea: The Friendship Paradox

**Historical context:**

Myspace launched in August 2003 and reached 100 million users by 2006.
It was the first platform where ordinary people built public social
profiles and accumulated friends at scale. The observable phenomenon:
everyone seemed to have fewer friends than their friends did. This
feeling was not imaginary — it has a mathematical explanation that is
both precise and counterintuitive.

**The mathematics:**

**The Friendship Paradox** (Scott Feld, 1991):

> *On average, your friends have more friends than you do.*

This sounds impossible. It is, in fact, a theorem — a consequence of
how networks are sampled.

**Why it's true:**

When you pick a random person, you are equally likely to pick anyone.
But when you pick a random friend of a random person, you are more
likely to pick someone with *many* friends — because highly-connected
people appear as a friend of many people.

Formally: if we sample a random edge (u, v) and look at the degree of v,
the expected degree of v is:

```
E[degree of v | sampled via random edge] = E[degree²] / E[degree]
```

By Jensen's inequality, since degree has positive variance:

```
E[degree²] / E[degree]  ≥  E[degree]
```

So the expected degree of a friend is *always at least as large as* the
average degree — with equality only if everyone has exactly the same
number of friends (a regular graph).

**Generalised Friendship Paradox:**

The same mechanism applies to almost any attribute correlated with
network degree. Your friends are, on average:
- More popular than you
- More productive than you
- More likely to have read this week's news story
- More likely to have been exposed to a disease

This last point makes the Friendship Paradox directly relevant to
epidemiology — and to how social platforms should seed information
or interventions.

**Interactive 2 — Feel the Paradox**

A social graph of 12 nodes, each with a visible friend count. The
visitor selects any node (representing themselves) and sees:
- Their friend count
- Their friends' average friend count
- A bar chart comparing these two numbers

The visitor then clicks through every node in turn. For almost all of
them, the friends' average exceeds their own count. A running tally
shows: "For X out of 12 people in this network, the paradox holds."

The visitor can randomise the graph to see that the paradox holds
across almost all configurations.

---

## Era 3 — Facebook News Feed (2006–2015)
### Mathematical Idea: Weighted Graphs and Edge Ranking

**Historical context:**

Facebook launched News Feed in September 2006. Before this, social
networks were graphs of equal edges — a connection was a connection.
News Feed introduced the concept of *weighted* connections: the
algorithm decided how much your relationship with each friend "mattered"
based on interactions, messages, profile views, mutual friends.
This transformed the social graph from an unweighted graph to a
**weighted directed graph**, and introduced the problem of edge ranking.

The original EdgeRank formula (2007) was Facebook's first explicit
mathematical model for this:

```
EdgeRank(e) = Σ  u_e × w_e × d_e
```

where for each edge e in a user's feed:
- u_e = affinity score between user and content creator
- w_e = weight of the edge type (comment > like > view)
- d_e = time decay factor (recent content scores higher)

**The mathematics:**

**Weighted graph:** G = (V, E, w) where w: E → ℝ⁺ assigns a weight
to each edge. In social networks, weights represent relationship strength.

**Directed graph:** Edges have direction. A follows B ≠ B follows A.
The adjacency matrix A is no longer symmetric: A_ij ≠ A_ji in general.

**Time decay:** The factor d_e = e^(−λt) is exponential decay — the
same mathematics as radioactive decay and compound interest.

**Edge weight estimation:** Affinity score u_e is typically estimated
using logistic regression or similar ML models — a connection to the
AI chapter.

**Interactive 3 — Build Your Own News Feed Algorithm**

A small social graph of 8 people. Each person has made posts with
different interaction levels (likes, comments, shares, time since posting).

The visitor controls three sliders:
- Weight on interaction count (0 to 1)
- Weight on relationship strength (0 to 1)
- Time decay rate λ (slow to fast)

As sliders change, the News Feed ranking updates in real time — posts
rise and fall. The visitor discovers that small changes in weights
produce dramatically different feeds. A toggle reveals the same feed
with all weights equal (chronological order) for comparison.

**Insight box:** *"The numbers in those sliders are what Facebook
decides for you — invisibly, and at scale. The mathematics of
your feed is a set of weights you never chose."*

---

## Era 4 — Twitter and the Mathematics of Going Viral (2006–2014)
### Mathematical Idea: Branching Processes and Reproductive Number R₀

**Historical context:**

Twitter launched in 2006. The retweet mechanic (formalised in 2009)
created something new: a mathematically tractable model of information
contagion. Each user who receives a tweet decides independently whether
to retweet it. If on average each carrier passes it to more than one
new person, the spread is exponential. If fewer than one, it dies out.
This is precisely the mathematics of epidemic spread — and the
parameter that determines the fate of an outbreak is R₀.

The Arab Spring (2010–2012), the Ice Bucket Challenge (2014), and
countless viral moments are, mathematically, instances of a branching
process exceeding its critical threshold.

**The mathematics:**

**Branching process:** A random tree where each node independently
generates a random number of children. If Z_n is the population at
generation n and each individual independently produces offspring
with mean μ:

```
E[Z_n] = μⁿ × Z_0
```

- If μ < 1: population dies out almost surely (subcritical)
- If μ = 1: critical — population wanders, usually dies
- If μ > 1: population grows exponentially with positive probability (supercritical)

**The Reproductive Number R₀:**

In epidemiology and information spread, R₀ (the basic reproductive number)
is the expected number of secondary "infections" caused by one case in
a fully susceptible population. It is exactly the mean offspring μ of
the branching process.

```
R₀ < 1  →  outbreak dies out
R₀ = 1  →  critical threshold — unstable equilibrium
R₀ > 1  →  exponential spread (until susceptibles are exhausted)
```

**The SIR connection:**

For information spread on a network, the SIR model applies:
- **S** (Susceptible): hasn't seen the content yet
- **I** (Infected): actively sharing
- **R** (Recovered): has seen it, no longer sharing

```
dS/dt = -βSI/N
dI/dt =  βSI/N - γI
dR/dt =  γI

R₀ = β/γ
```

Where β is the transmission rate and γ is the recovery rate.
The final fraction of the population that sees the content depends
critically on whether R₀ exceeds 1.

**Interactive 4 — The Virality Simulator**

A network of 50 nodes. One node is seeded with a piece of content.
Two sliders:
- **β** (sharing probability per contact per time step)
- **γ** (stopping-sharing rate)

A play button starts the spread. Nodes colour from grey (unseen) to
cyan (currently sharing) to muted (saw it, stopped sharing).
A live R₀ = β/γ display shows whether the content is in subcritical,
critical, or supercritical regime.

The visitor experiments:
- *"What R₀ does it take to reach 50% of the network?"*
- *"How does the structure of the network affect spread?" (toggle: random vs small-world vs hub-and-spoke)*
- *"What happens if you immunise the 5 highest-degree nodes first?"*

The last experiment introduces **network vaccination strategy** — one
of the most beautiful applications of graph theory in public health.

---

## Era 5 — Instagram, Reddit, and the Echo Chamber (2010–2018)
### Mathematical Idea: Community Detection and Modularity

**Historical context:**

As social platforms matured, users self-organised into communities —
interest groups, political tribes, subcultures. Reddit's subreddit
structure made this explicit. Facebook groups and Instagram's interest
graph made it implicit. Researchers began asking: can we mathematically
detect these communities? And when detected, are they healthy (diverse
bridges between groups) or unhealthy (echo chambers with no inter-group
connections)?

**The mathematics:**

**Community detection:** Given a graph G, find a partition of vertices
into groups C₁, C₂, ..., Cₖ such that there are many edges within
groups and few edges between groups.

**Modularity Q** (Newman & Girvan, 2004):

```
Q = (1/2m) × Σᵢⱼ [ A_ij - kᵢkⱼ/2m ] × δ(cᵢ, cⱼ)
```

Where:
- A_ij = 1 if nodes i and j are connected
- kᵢ = degree of node i
- m = total number of edges
- δ(cᵢ, cⱼ) = 1 if i and j are in the same community, 0 otherwise

Modularity Q compares the actual number of within-community edges to the
expected number if edges were placed randomly (preserving degree distribution).

- Q near 0: community structure no better than random
- Q near 1: very strong community structure

**Echo chamber mathematics:**

An echo chamber is a subgraph with high internal modularity and few
external connections. Mathematically it is a **near-clique** that is
weakly connected to the rest of the graph.

The **filter bubble** is a personalised version: the recommendation
algorithm effectively removes inter-community edges from the graph
each individual experiences, even if those edges exist in the
underlying network.

**Bridging nodes** — nodes with connections across communities — are
mathematically identifiable by high **betweenness centrality**: the
fraction of all shortest paths between all pairs of nodes that pass
through a given node.

```
C_B(v) = Σ_{s≠v≠t} σ(s,t|v) / σ(s,t)
```

High betweenness centrality = bridge between communities.
Low betweenness + high degree within one community = echo chamber hub.

**Interactive 5 — Community Detection**

A graph of 30 nodes with visible community structure (three clusters
of 10, connected by a few bridge edges).

Controls:
- "Colour by community" — runs a simple greedy modularity algorithm
  and colours nodes by detected community
- "Remove bridges" toggle — removes the inter-community edges, simulating
  a filter bubble. The modularity Q score visibly increases (communities
  become more isolated) and average path length between the groups
  diverges to infinity
- "Add bridge" — click two nodes in different communities to add a bridge
  edge. Q decreases; path length between communities shrinks

**Betweenness display:** Node size scales with betweenness centrality.
The bridge nodes are visibly the largest. Removing them is the graph
equivalent of destroying the bridges between communities.

**Insight box:** *"An echo chamber is not a metaphor. It is a precise
mathematical condition: a subgraph with high modularity and low
betweenness on its boundary. It can be measured, compared, and — in
principle — designed against."*

---

## Era 6 — TikTok and the Algorithmic Graph (2016–present)
### Mathematical Idea: Reinforcement Learning and Feedback Loops

**Historical context:**

TikTok's For You Page (launched at scale 2018–2019) represented a
qualitative shift in social network architecture. Previous platforms
served your social graph: content from people you chose to follow.
TikTok's algorithm served a **latent interest graph** that it
inferred about you — a graph you never saw and never chose.

The mathematics underlying this is not just graph theory — it is
reinforcement learning applied to a dynamical system. The algorithm
observes your behaviour, updates its model, serves new content,
observes again. The social network is now a feedback loop, and the
mathematics of that loop has consequences for what beliefs you
encounter, reinforce, and ultimately hold.

**The mathematics:**

**Recommendation as a Markov Decision Process:**

The recommendation system models content delivery as an MDP:
- **State** s: current estimate of user's interests (a vector in ℝⁿ)
- **Action** a: which content to show next
- **Reward** r: engagement signal (watch time, like, share, comment)
- **Transition** T(s, a, s'): how the user's state updates after seeing content a

The algorithm learns a **policy** π(a|s) — a mapping from user state
to content choice — that maximises expected cumulative reward.

**The feedback loop problem:**

In a static environment, reinforcement learning finds an optimal policy.
But user preferences are **not static** — they are shaped by the
content shown. This creates a **coupled dynamical system**:

```
user state s_{t+1} = f(s_t, content_t, noise)
content_t ~ π(· | s_t)
```

Where f is the function describing how exposure to content changes
preferences. If f has the property that exposure to content increases
appetite for similar content (plausible for emotionally engaging
content), the system can enter a **preference drift spiral**:
an attractor state far from the user's initial preferences.

This is mathematically analogous to a dynamical system with a
non-trivial attractor — and the tools for analysing it are
differential equations and stability analysis.

**The optimisation objective:**

```
max_π  E[ Σ_t γᵗ r(s_t, a_t) ]
```

Maximising engagement (reward r) subject to a discount factor γ.
Crucially: **this objective contains no term for user wellbeing,
accuracy of beliefs, or diversity of exposure**. The mathematics
is indifferent to these — it optimises what it is told to optimise.

**Interactive 6 — The Feedback Spiral**

A simplified simulation of a recommendation algorithm.

The visitor starts with a neutral preference vector (shown as a bar
chart across 8 content categories: politics, sport, science, music,
comedy, news, food, travel).

The algorithm serves content. Each piece of content is represented
as a category vector. After each "view" (click), preferences shift
slightly toward the viewed category. After 20 rounds:

**Controls:**
- **Objective slider:** "Engagement only" ↔ "Engagement + Diversity"
- **Drift rate slider:** How quickly preferences shift per exposure (slow to fast)

With engagement-only objective: preferences collapse to 1–2 categories.
With diversity objective: a richer preference distribution is maintained.

A toggle shows the user's preference vector at t=0 vs t=20, making the
drift visible. **This is not a social commentary — it is a mathematical
demonstration that objective function design has measurable consequences
on the dynamical system it governs.**

**Insight box:** *"TikTok's algorithm is not malicious. It is
mathematically rational — it optimises what it is asked to optimise.
The question of what it should be asked to optimise is not a
mathematics question. But measuring the consequences of different
choices? That is pure mathematics."*

---

## Era 7 — Where Is This Heading? (Open Questions)
### Mathematical Frontiers

This final section is presented differently from the previous six —
not as settled mathematics, but as open problems and emerging ideas.
It is explicitly speculative, and labelled as such.

**Three mathematical frontiers presented as "Questions we don't yet
fully know how to answer":**

---

### Frontier 1 — Protocol Graphs and Decentralisation

Platforms like Mastodon, Bluesky, and Nostr are built on open protocols
rather than centralised servers. The social graph is distributed across
many independent servers that federate with each other.

**The mathematical question:** What are the equilibrium properties of
a federated graph? If individual servers can choose which other servers
to federate with (or block), what graph structures emerge? Can a
decentralised network achieve the beneficial properties of a small-world
network without the harmful properties of centralised amplification?

This is an active research area involving game theory, distributed
systems, and graph theory. There is no settled answer.

---

### Frontier 2 — Synthetic Social Graphs

AI agents are beginning to participate in social networks — generating
content, responding to posts, building follower counts, forming apparent
communities. If a significant fraction of nodes in a social graph are
not humans, the mathematical properties of that graph may change
fundamentally.

**The mathematical question:** What happens to the small-world property,
the Friendship Paradox, virality dynamics, and community structure when
a fraction α of nodes are synthetic agents with designed behaviour?
How does the answer depend on α and on the design of the agents?

This is largely an open problem. Some partial results exist from
multi-agent systems research, but the specific context of social
networks with mixed human/AI populations is new.

---

### Frontier 3 — Mathematics of Healthy Networks

Given that we can mathematically define echo chambers (high modularity,
low betweenness), preference drift (feedback loop attractors), and
virality (supercritical branching processes), can we define and design
for mathematical conditions that correspond to healthy information
ecosystems?

**The mathematical question:** What graph topology, edge-weighting
scheme, and recommendation objective function would jointly satisfy:
- Short average path length (information spreads)
- High clustering (community formation is possible)
- Low modularity (echo chambers don't form)
- Subcritical or gently supercritical virality (misinformation doesn't explode)
- Stable preference distributions (no feedback drift)

These are potentially contradictory conditions. The tension between them
is a real mathematical problem, not just a policy question.

**Closing thought for the page:**

> *Six decades of graph theory, a century of probability, fifty years
> of dynamical systems theory — all of it turns out to be relevant to
> something three billion people interact with every day. The mathematics
> existed before the platforms. The platforms just made the mathematics
> urgent.*

---

## Interactive Elements — Summary

| # | Name | Era | Core mathematics | Canvas size |
|---|---|---|---|---|
| 1A | Six Degrees Explorer | 1 | Graph diameter, path length | 700×350 |
| 1B | Degree Distribution | 1 | Power law, degree histogram | 700×250 |
| 2 | The Friendship Paradox | 2 | E[degree²]/E[degree] | 700×350 |
| 3 | Build Your News Feed | 3 | Weighted graph, edge ranking | 700×400 |
| 4 | Virality Simulator | 4 | Branching process, SIR, R₀ | 700×400 |
| 5 | Community Detection | 5 | Modularity Q, betweenness | 700×400 |
| 6 | The Feedback Spiral | 6 | RL objective, preference drift | 700×300 |

**Total: 7 interactives.** This is the most interactive-dense page on
the site. The implementation should treat each era as a self-contained
module that loads lazily — only initialising its canvas and simulation
when the visitor scrolls to it. This prevents performance issues on
mobile devices.

---

## Historical Timeline

A horizontal scrollable timeline runs across the top of the page
(or as a fixed navigation bar). Each era is a clickable marker that
scrolls the visitor to that section.

```
1967         1997         2003         2006         2006         2010         2016        2025
  |            |            |            |            |            |            |            |
  ▼            ▼            ▼            ▼            ▼            ▼            ▼            ▼
Milgram's   SixDegrees   Myspace      Facebook     Twitter      Instagram    TikTok      What's
small-world  .com         Friendship   News Feed    Virality     Communities  Algorithmic  next?
experiment   (graphs)     Paradox      (weights)    (R₀)         (modularity) graph
```

Each marker shows: platform name, year, mathematical idea introduced.
Clicking a marker scrolls to that era's section.

---

## Common Misconceptions Panel

```
⚠️  Common Misconceptions

Misconception: Social networks are just the online version of real
social life
Reality: Real social networks have specific mathematical properties
(small-world, power-law degree distribution, high clustering) that
online platforms both reflect and distort. The platform's design
choices change the mathematical structure of the network — and
therefore the social dynamics within it.

Misconception: Going viral is unpredictable
Reality: Virality is a phase transition. Below R₀ = 1, content
almost certainly dies out. Above R₀ = 1, it has a positive
probability of exponential spread. The threshold is mathematically
precise, even if the outcome of any individual post is uncertain.

Misconception: Filter bubbles are caused by platforms showing you
what you like
Reality: More precisely, a filter bubble is a graph-theoretic
phenomenon: the effective graph a user experiences has low
betweenness centrality on its boundary — inter-community edges
are absent or suppressed. Showing you what you like is the
mechanism; the echo chamber is the mathematical consequence.

Misconception: TikTok's algorithm "knows" what you want
Reality: It knows what maximises engagement in the short term.
These are not the same thing. The mathematics optimises an
objective function. Whether that objective function aligns with
user wellbeing is a separate question that the mathematics alone
cannot answer.
```

---

## Key Mathematics Reference

All formulae displayed in `.formula-block` panels in Courier New.

```
Graph G = (V, E)                       nodes and edges

Degree of node v: deg(v) = |{u : (u,v) ∈ E}|

Clustering coefficient: C(v) = (edges among v's neighbours) / (deg(v) choose 2)

Average path length: L = (1/n(n-1)) × Σ_{u≠v} d(u,v)

Friendship Paradox: E[deg of friend] = E[deg²] / E[deg] ≥ E[deg]

EdgeRank: EdgeRank(e) = Σ u_e × w_e × d_e

Branching process mean: E[Z_n] = μⁿ × Z_0

SIR reproductive number: R₀ = β/γ

Modularity: Q = (1/2m) Σᵢⱼ [A_ij - kᵢkⱼ/2m] δ(cᵢ,cⱼ)

Betweenness centrality: C_B(v) = Σ_{s≠v≠t} σ(s,t|v)/σ(s,t)

RL objective: max_π E[Σ_t γᵗ r(s_t, a_t)]
```

---

## "For the Curious" Panels

### Metcalfe's Law

```
📐  For the Curious: Metcalfe's Law

Robert Metcalfe (inventor of Ethernet) proposed in 1980 that
the value of a network is proportional to the square of its
number of users: V ∝ n².

The reasoning: n users can form n(n-1)/2 ≈ n²/2 unique connections.

This "law" explains the winner-take-all dynamics of social platforms:
a network with twice as many users is roughly four times as valuable,
so early growth advantages compound rapidly.

Metcalfe's Law has been criticised as an overestimate — not all
connections are equally valuable. More nuanced models suggest
V ∝ n·log(n) may be more accurate. But the superlinear scaling
is real, and it is the mathematical reason why social networks
tend toward monopoly rather than fragmentation.
```

### The Power Law Degree Distribution

```
📐  For the Curious: Why Hubs Exist

Random graphs have degree distributions that follow a Poisson
distribution — bell-shaped around the average degree.

Real social networks have degree distributions that follow a
power law: P(k) ∝ k^(-γ) for some exponent γ, typically 2–3.

A power law has a "heavy tail" — there is no characteristic scale,
and extreme values (hubs with millions of followers) appear with
much higher probability than a Poisson distribution would predict.

Power law networks arise through "preferential attachment":
new nodes are more likely to connect to already-highly-connected
nodes ("the rich get richer"). This was formalised by Barabási and
Albert in 1999 and explains why every social platform, given time,
produces a small number of enormous hubs.
```

### The Watts-Strogatz Model

```
📐  For the Curious: Building a Small World

How do you construct a graph that has both high clustering AND
short path lengths?

Watts and Strogatz (1998) showed one way:

1. Start with a regular ring lattice (everyone connects to
   their k nearest neighbours). High clustering, long paths.

2. Randomly "rewire" a fraction p of edges to random targets.

For small p (say p = 0.01), almost nothing changes visually —
but path lengths drop dramatically because a few "shortcuts"
now span the whole network. Clustering barely changes.

The transition from lattice to small-world happens sharply at
a critical value of p. This is a mathematical phase transition —
the same phenomenon that governs the onset of virality,
the magnetisation of iron, and the percolation of water through
a network of pipes.
```

---

## Cross-Links

**Outbound from this page:**
- `differential_equations.html` — SIR model (dS/dt, dI/dt, dR/dt)
- `probability_distributions.html` — power law, degree distributions
- `eigenvalues.html` — spectral graph theory, community detection
- `pagerank.html` — random walks and importance in directed graphs
- `markov_chains.html` *(proposed)* — recommendation system as MDP
- `graph_theory.html` *(proposed)* — foundational graph mathematics
- `correlation_regression.html` — edge weight estimation, affinity models
- `portfolio_theory.html` — network systemic risk (stretch connection)

**Inbound to this page (pages that should link here):**
- `differential_equations.html` — "SIR model applies to social networks too"
- `eigenvalues.html` — "Eigenvectors detect communities in social graphs"
- `pagerank.html` — "Social networks shaped the problem PageRank solved"
- `probability_distributions.html` — "Power laws appear in social network degrees"
- `graph_theory.html` *(when built)* — canonical application

---

## Index Entry

```javascript
{
  title: "The Mathematics of Social Networks",
  desc: "From six degrees of separation to TikTok's feedback loops — how graph theory shapes your online world",
  file: "social_networks.html",
  difficulty: 3
}
```

---

## Implementation Notes

### Architecture recommendation

This page is significantly longer than a typical site page. To ensure
performance — especially on mobile — implement lazy initialisation:

```javascript
// Use IntersectionObserver to initialise each era's canvas
// only when it enters the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      initEra(entry.target.dataset.era);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.era-canvas').forEach(c => observer.observe(c));
```

Each era's simulation is self-contained and can be initialised
independently. Only the timeline navigation needs to be active on load.

### Performance targets

| Interactive | Max nodes | Target frame time | Notes |
|---|---|---|---|
| 1A (Six Degrees) | 20 | < 16ms | BFS shortest path, precomputed |
| 1B (Degree dist.) | 30 | < 16ms | Histogram only, no animation |
| 2 (Paradox) | 12 | < 16ms | Static graph, no simulation |
| 3 (News Feed) | 8 posts | < 16ms | Sorting algorithm, instant |
| 4 (Virality) | 50 | < 16ms | SIR step function, O(n) per step |
| 5 (Community) | 30 | < 16ms | Pre-run Louvain, animate result |
| 6 (Feedback) | 8 categories | < 16ms | Preference vector update, instant |

### Mobile considerations

- Timeline navigation: horizontal scroll on mobile, fixed nav on desktop
- All canvases: 700px wide on desktop, full-width (with scroll) on mobile
- Touch events required for all interactive graphs
- Era sections stack vertically; the timeline becomes a compact
  "jump to era" dropdown on narrow viewports

### Build order

Given the complexity, build eras in this order:

1. Era 1 (graph basics) — establishes the graph canvas component used by all others
2. Era 4 (SIR virality) — the most mathematically self-contained simulation
3. Era 2 (Friendship Paradox) — static graph, simplest interaction
4. Era 5 (Community detection) — re-uses the graph canvas from Era 1
5. Era 3 (News Feed) — the ranking interaction is UI-heavy but mathematically light
6. Era 6 (Feedback spiral) — the preference vector visualisation
7. Timeline, transitions, and lazy loading last

---

## SME Review Focus Areas

1. **Friendship Paradox proof** — Is the derivation E[degree²]/E[degree] ≥ E[degree] stated correctly and at the right level of rigour for a Level 2 audience?

2. **EdgeRank formula** — Facebook has never officially published EdgeRank's exact formula; the version presented is the widely-cited reverse-engineered approximation from 2010. Is it appropriate to present this as fact, or should it be labelled more carefully as an approximation?

3. **SIR model for information spread** — The SIR model was developed for biological epidemics. Its application to information spread is an active and somewhat contested research area. Are the conditions under which this analogy holds (and fails) captured adequately in the Common Misconceptions panel?

4. **Modularity and community detection** — The page uses Newman-Girvan modularity Q. Is this still the standard reference formulation, or has the field moved to alternative measures? Is the Louvain algorithm appropriate to cite for the interactive?

5. **Reinforcement learning framing for TikTok** — This is a mathematical idealisation; TikTok's actual system is far more complex. Is the MDP framing mathematically accurate as presented, or does it misrepresent the actual architecture in ways that would mislead?

6. **The "open questions" section** — Are the three frontier problems described accurately as open? Have any of them seen significant progress that should be incorporated?

7. **Metcalfe's Law** — The "For the Curious" panel presents the n·log(n) correction. Is this the current consensus view, or is the picture more complex?

8. **Level calibration** — Given the breadth, should this be Level 3 throughout, or is a split (Eras 1–3 at Level 2, Eras 4–6 at Level 3) more appropriate?

---

*Specification v1.0 — mathsedu.org — March 2026*
*Authored by Manoj Bhaskar & Claude*
