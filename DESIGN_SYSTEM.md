# ATLAS OF THOUGHT — Design System & Style Guide
### *The Neo-Brutalist Academic Atlas*

---

## 1. Design Philosophy & Aesthetic Identity

**Atlas of Thought** is built on the design ethos of the **Neo-Brutalist Academic Atlas**: an intersection of classical European archival cartography, Indian *Śāstrīya* scholastic codices, and modern functional Neo-Brutalism.

### Core Aesthetic Axioms:
1. **Physicality & Tactility**: Clean 2px solid structural borders and razor-sharp, zero-blur drop shadows evoke printed encyclopedias, bound folios, and parchment cards.
2. **Archival Authority**: Scholarly typefaces (*Cinzel*, *Cormorant Garamond*) lend gravity and historical depth, balanced by ultra-clean monospace metadata (*JetBrains Mono*) and high-legibility UI sans (*Inter*).
3. **Information Density with Zero Clutter**: Generous spatial grids, mathematical lane allocation, and strict semantic color tokens allow thousands of years of dense philosophical data to feel breathable and navigable.
4. **Subtle Archival Grid**: Both themes feature a faint archival dot-matrix pattern (`radial-gradient 24px × 24px`) reminiscent of draftsmens' ledger paper.

---

## 2. Color Architecture & Dual Theme Tokens

The application provides two deeply calibrated color modes:
* **Daytime Scholar** (Light Mode): Classical library reading room with aged cream parchment, rich charcoal inks, and warm archival card surfaces.
* **Midnight Scriptorium** (Dark Mode): The prestigious Obsidian Scriptorium palette. Deep slate-black canvas with elevated charcoal cards, architectural borders, and zero-blur dark shadows.

### Complete Theme Token Matrix

| Semantic Token | Daytime Scholar (Light) | Midnight Scriptorium (Dark) | Role & Usage |
|---|---|---|---|
| **Canvas / Base** | `#FAF8F5` (`paper-100`) | `#0C0E12` (`darkpaper-base`) | The infinite background canvas |
| **Grid Dots** | `#111111` (0.75px at 24px) | `rgba(255,255,255,0.09)` | Draftsman archival dot matrix |
| **Card Surface** | `#FAF8F5` | `#151821` (`darkpaper-surface`) | Main cards, timeline nodes, panels |
| **Elevated / Hover** | `#F5F2EB` (`paper-200`) | `#1D222F` (`darkpaper-elevated`) | Hover states, modals, search inputs |
| **Active / Focus** | `#EFECE3` (`paper-300`) | `#252C3D` | Active pills, pressed buttons |
| **Border (Structural)** | `#111111` (`ink-900`) | `#2E3547` (`darkpaper-border`) | Card outlines, dividers, axes |
| **Border (Highlight)** | `#B93828` / `#111111` | `#3B445B` / `#F8FAFC` | Active selections, hover rings |
| **Primary Text** | `#111111` (`ink-900`) | `#F8FAFC` (`darkpaper-textPrimary`) | Main titles, philosopher names |
| **Secondary Text** | `#3D3D3D` (`ink-700`) | `#CBD5E1` (`darkpaper-textSecondary`) | Descriptions, core arguments, overviews |
| **Muted Metadata** | `#777777` (`ink-500`) | `#94A3B8` (`darkpaper-textMuted`) | Dates, tradition tags, citations |
| **Brutalist Shadow** | `3px 3px 0 0 #111111` | `3px 3px 0 0 #06080C` | Physical elevation for cards & buttons |

---

## 3. Entity Domain & Semantic Palette

To orient users instantly through complex intellectual traditions, every conceptual entity is assigned an authoritative accent color:

```css
/* Entity Tokens */
--entity-philosopher: #B93828;  /* Terracotta Red - Thinkers, Lineages */
--entity-idea:        #1E3A8A;  /* Academic Navy   - Concepts, Theories */
--entity-school:      #B45309;  /* Ochre / Amber   - Traditions, Movements */
--entity-argument:    #15803D;  /* Forest Green    - Dialectics, Syllogisms */
--entity-question:    #6B21A8;  /* Royal Plum      - Foundational Inquiries */
--entity-era:         #9A3412;  /* Rust Orange     - Chronological Epochs */
```

### Indian Philosophy (*Śāstrīya Darśana*) Accents:
* **Sacred Flame / Darśana**: `#D97706` / `#F59E0B` (Amber Gold)
* **Āstika Tradition Badge**: Emerald Green tint (`#059669`)
* **Nāstika Tradition Badge**: Plum/Violet tint (`#7C3AED`)
* **Pramāṇa (Epistemic Validity)**: Sapphire Blue (`#2563EB`)
* **Vedānta Comparison Matrix**: Crimson Red (`#DC2626`)

---

## 4. Typography Hierarchy & Font Stacks

Atlas of Thought utilizes a four-tiered font strategy to deliver both classical aesthetic authority and modern digital precision:

```css
/* 1. Classical Display / Monumental Serif */
font-serif: 'Cinzel', 'Cormorant Garamond', Georgia, serif;
/* Used for: Main Brand Title, Section Headers, Roman & Greek philosopher names */

/* 2. Scholarly Title / Editorial Serif */
font-display: 'Cormorant Garamond', Georgia, serif;
/* Used for: Philosopher Dossier Titles, Sanskrit treatise names, philosophical queries */

/* 3. Modern Functional UI Sans */
font-sans: 'Inter', system-ui, -apple-system, sans-serif;
/* Used for: Body text, scholarly synopses, argument descriptions, button labels */

/* 4. Archival & Chronological Monospace */
font-mono: 'JetBrains Mono', ui-monospace, monospace;
/* Used for: BCE/CE dates, century axis marks, syllogism steps, metadata tags, UI stats */
```

### Typographic Scale:
* **Display H1**: `2.25rem - 3rem` (36–48px) | `font-serif` | Tracking `tracking-tight`
* **Section Title H2**: `1.5rem - 1.875rem` (24–30px) | `font-serif` | Uppercase tracking
* **Card Header H3**: `1.125rem - 1.25rem` (18–20px) | `font-serif` | Weight `font-bold`
* **Body / Description**: `0.875rem` (14px) | `font-sans` | Leading `leading-relaxed`
* **Monospace Metadata**: `0.6875rem - 0.75rem` (11–12px) | `font-mono` | Uppercase

---

## 5. Neo-Brutalist Component Mechanics

### 1. Cards (`.brutal-card`)
Cards do not use soft blur gradients. They feature crisp geometric boundaries with tactile micro-interactions:

```css
/* Light Mode */
.brutal-card {
  background-color: #FAF8F5;
  border: 2px solid #111111;
  box-shadow: 3px 3px 0px 0px #111111;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.brutal-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px 0px #111111;
}
.brutal-card:active {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0px 0px #111111;
}

/* Dark Mode (Obsidian Scriptorium) */
.dark .brutal-card {
  background-color: #151821;
  color: #F8FAFC;
  border: 2px solid #2E3547;
  box-shadow: 3px 3px 0px 0px #06080C, 0 0 0 1px rgba(255, 255, 255, 0.04);
}
.dark .brutal-card:hover {
  border-color: #3B445B;
  box-shadow: 5px 5px 0px 0px #06080C, 0 0 0 1px rgba(255, 255, 255, 0.08);
}
```

### 2. Buttons (`.brutal-btn` & `.brutal-btn-primary`)
Tactile physical button press simulation with springy feedback:

```css
/* Default Button */
.brutal-btn {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid #111111;
  box-shadow: 3px 3px 0px 0px #111111;
  transition: all 0.12s ease;
}
.brutal-btn:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px 0px #111111;
}
.brutal-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px 0px #111111;
}

/* Primary Action Button */
.brutal-btn-primary {
  background-color: #111111;
  color: #FAF8F5;
  border: 2px solid #111111;
  box-shadow: 3px 3px 0px 0px #111111;
}
.dark .brutal-btn-primary {
  background-color: #F8FAFC;
  color: #0C0E12;
  border: 2px solid #F8FAFC;
  box-shadow: 3px 3px 0px 0px #06080C;
}
.brutal-btn-primary:hover {
  background-color: #B93828; /* Terracotta hover */
}
```

### 3. Archival Scrollbars
Custom non-intrusive brutalist scrollbars that fit the scholarly aesthetic:
* **Width/Height**: `8px`
* **Track (Light)**: `#F5F2EB` with `1px solid #111111`
* **Track (Dark)**: `#151821` with `1px solid #2E3547`
* **Thumb (Light)**: `#111111` with hover `#B93828`
* **Thumb (Dark)**: `#2E3547` with hover `#B93828`

---

## 6. Information Visualization & Physics Engine

### 1. Chronological Timeline (6-Lane Allocation Engine)
* **Canvas Dimension**: Base width `5600px * zoomLevel` across 2,626 years (~2.13px/year).
* **Greedy Gap Heuristic**: Prioritizes unvisited lanes first, then calculates `max(x - occupied[l])` to spread thinker cards evenly across all 6 lanes without vertical bunching.
* **SVG Influence Arcs**: Dynamic cubic bezier curves (`d="M x1 y1 C cx1 cy1, cx2 cy2, x2 y2"`) with directional arrowhead markers (`fill="#B93828"`).

### 2. D3 Force-Directed Network Graph
* **Center Force**: `d3.forceCenter(width / 2, height / 2)`
* **Charge Force**: `d3.forceManyBody().strength(-380)` (ample node separation)
* **Link Distance**: `d3.forceLink().distance(95)`
* **Collision Radius**: `d3.forceCollide().radius(48)`
* **Interactive 1-Hop Focus**: Hovering or clicking a node maintains `opacity: 1.0` on incident nodes and paths, while dimming background nodes to `opacity: 0.15`.

---

## 7. Accessibility & Performance Safeguards

* **WCAG AAA Contrast**: High contrast ratios (> 7:1) between body text (`#111111` / `#F8FAFC`) and card surfaces (`#FAF8F5` / `#151821`).
* **Motion Reduction**: Full `@media (prefers-reduced-motion: reduce)` support instantly disables card translations and bezier transitions.
* **Touch Target Sizing**: All interactive buttons, timeline nodes, and badge filters exceed `44px × 44px` on mobile viewports.
