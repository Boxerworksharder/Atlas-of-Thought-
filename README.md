# ATLAS OF THOUGHT (विचार-मञ्जूषा / Atlas Cogitationis)

> **A visual map of human thought.**  
> An interactive, production-grade exploratory knowledge atlas navigating thousands of years of philosophical inquiry through synchronized chronological timelines, relational knowledge graphs, concept lineage tracing, dialectical comparison, and authoritative scholarship grounded in the **Stanford Encyclopedia of Philosophy (SEP)**.

---

## Key Capabilities & Modules

### 1. Chronological Timeline & Collision-Free Canvas
- Spans **2,626 years** of human intellectual history (624 BCE – Present).
- **6-Lane Collision Avoidance Engine**: Greedy lane allocator with empty-lane preference and maximum-gap heuristics that distributes thinkers across the vertical canvas with zero visual overlaps.
- **Dynamic Arc Recalculation**: Smooth SVG cubic bezier curves connect intellectual lineages, master-disciple links, and sharp critiques with directional arrowheads.
- **Instant Century Jump & Pan/Drag Controls**: Smooth scrolling with century ticks and zoom scaling from 50% to 200%.

### 2. D3 Force-Directed Knowledge Graph
- Celestial Observatory aesthetic mapping thinkers, schools, and conceptual discoveries.
- **1-Hop Interactive Focus**: Selecting or hovering over any philosopher isolates their immediate intellectual web while gently dimming unrelated nodes.
- **Semantic Color Coding**: Color-coded by tradition (Classical Greek & Roman, Eastern & Asian, Medieval Abrahamic, Modern European & Global).

### 3. Dedicated Indian Philosophy Knowledge System (*Bhāratīya Darśana-Kośa*)
An autonomous, deeply researched top-level domain treating Indian philosophy according to its indigenous epistemic and commentarial structures:
- **12 Darśanas (Āstika & Nāstika)**: Strict classification based on *Veda-prāmāṇya* (acceptance of Vedic epistemic authority) rather than theological belief.
- **Multi-System Vedānta Matrix**: 10 foundational doctrines compared across Advaita, Viśiṣṭādvaita, Dvaita, Śuddhādvaita, Dvaitādvaita, and Bhedābheda.
- **Logic & Pramāṇa Engine**: Interactive breakdown of the 6 Epistemic Instruments (*pratyakṣa*, *anumāna*, *upamāna*, *śabda*, *arthāpatti*, *anupalabdhi*), the Nyāya 5-step syllogism (*pañcāvayava*), and formal fallacies (*hetvābhāsa*).
- **Core Problems ("Explore by Question")**: 6 foundational dilemmas (Ātman vs Anātman, World vs Māyā, Creator God, Nature of Mokṣa, Epistemic Validity, Karma) with side-by-side school stances.
- **Cross-School Concept Network**: Traces the multi-century evolution of core concepts (*Śūnyatā*, *Anekāntavāda*, *Pratītyasamutpāda*, *Brahman*).
- **Primary Text Commentarial Trees**: Hierarchical descent (Mūla Sūtra → Bhāṣya → Vārttika → Ṭīkā → Ṭippaṇī).
- **Controlled Comparative World Philosophy**: Strict comparisons (Nāgārjuna ↔ Derrida, Anātman ↔ Hume/Parfit) paired with anti-anachronism safeguards.
- **Multi-Script & Multi-Depth Switches**: Toggle between English, IAST transliteration, and Sanskrit (Devanāgarī), across L1 Quick, L2 Understand, and L3 Scholar depths.

### 4. 2D Hybrid Timeline
- Maps Historical Time (X-axis) against Philosophical Tradition Tracks (Y-axis).
- **3-Tier Sublane System**: Guarantees zero text collision even during densely concurrent epochs (e.g. Laozi, Siddhartha Gautama, and Confucius in the 6th–5th centuries BCE).

### 5. Dialectical Thinker Comparison Mode
- Structured, domain-by-domain comparison across Metaphysics, Epistemology, Ethics, and Politics.
- One-click presets for classical dialectics (Plato × Aristotle, Descartes × Spinoza, Locke × Hume, Hume × Kant, Hegel × Marx, Sartre × Camus, Confucius × Laozi).

### 6. "Follow the Idea" Concept Journeys
- Trace how pivotal philosophical dilemmas evolved through distinct historical epochs (e.g., Free Will & Determinism from ancient fate to modern neuroscience).

### 7. Dual Aesthetic Engine: Daytime Scholar & Obsidian Scriptorium
- **Daytime Scholar (Light Mode)**: Editorial archival palette with parchment cream `#F4EFEA`, warm card `#FAF8F5`, and deep ink typography.
- **Obsidian Scriptorium (Dark Mode)**: Abyssal slate `#0C0E12`, charcoal card surface `#151821`, architectural borders `#2E3547`, crisp `#F8FAFC` typography, and tactile `#06080C` hard brutalist shadows.

---

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS (custom Neo-Brutalist design tokens, custom brutal shadows)
- **Data Visualization**: D3.js (d3-force, d3-zoom, d3-selection)
- **Icons**: Lucide React
- **Build Tool**: Vite 6

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd philosophy-timeline

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Compile TypeScript and bundle assets
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── indian/              # 11 Indian Philosophy sub-modules & matrices
│   │   ├── TopNav.tsx           # Global navigation & theme toggle
│   │   ├── TimelineTrack.tsx    # 6-lane chronological timeline canvas
│   │   ├── TimelineControls.tsx # Zoom, jump to year, and view switches
│   │   ├── KnowledgeGraphView.tsx# D3 force-directed network graph
│   │   ├── TimelineHybridView.tsx# 2D tradition tracks hybrid view
│   │   ├── CompareView.tsx      # Side-by-side dialectical comparison
│   │   ├── IdeaJourneyView.tsx  # Concept evolution through time
│   │   ├── BigQuestionsView.tsx # Foundational philosophical questions
│   │   ├── ExploreCatalogView.tsx# Comprehensive entity directory
│   │   └── PhilosopherDossierPanel.tsx # Archival slide-over panel
│   ├── data/
│   │   ├── philosophyData.ts    # Western & World philosophy datasets
│   │   └── indianPhilosophyData.ts # Deep Indian philosophy dataset & matrices
│   ├── App.tsx                  # Main application router and state coordinator
│   └── index.css                # Neo-brutalist theme tokens and dark mode
├── tailwind.config.js           # Obsidian Scriptorium palette and shadow definitions
└── package.json
```

---

## License

MIT License. Grounded in scholarship from the Stanford Encyclopedia of Philosophy (SEP) and traditional classical commentaries.
