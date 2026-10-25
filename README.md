# BRUTALIST DESIGN OFFICE

> **Good Design. No Quiet Voices.**

An independent creative practice building sharp identities, expressive campaigns, and digital experiences with a distinct point of view.

---

## Overview

This is a bold, brutalist creative studio website built with React, TypeScript, Vite, and Tailwind CSS. The design embraces oversized typography, hard geometric edges, thick borders, high-contrast color blocking, and unconventional layouts — while remaining fully functional, responsive, and accessible.

## Features

- **Bold Brutalist Design System** — Custom color palette, oversized display typography, thick borders, and hard geometry
- **Editorial Hero** — Asymmetric composition with CSS-generated geometric artwork and animated reveals
- **Moving Editorial Ticker** — Full-width scrolling typographic strip with reduced-motion fallback
- **Filterable Portfolio** — Six concept projects with category filtering, live count updates, and empty states
- **Case Study Modals** — Detailed project views with challenge, direction, deliverables, and color system
- **Studio Manifesto** — Three core design principles presented in editorial layout
- **Services Accordion** — Accessible expandable service listings with deliverables
- **Feature Band** — High-impact color interruption section
- **Process Section** — Four-step creative workflow
- **Project Brief Builder** — Interactive 5-step form with validation, state persistence, copy-to-clipboard, and honest submission handling
- **Contact Section** — Direct CTA with clear studio information
- **Full Mobile Navigation** — Oversized typographic full-screen menu with keyboard support
- **Accessibility** — Skip link, ARIA attributes, focus indicators, keyboard navigation, reduced-motion support
- **Responsive Design** — Optimized from 320px to large desktop widths

## Design Tokens

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Paper White | `#F5F4EC` | Main canvas background |
| Pitch Black | `#111111` | Contrast, typography, borders |
| Electric Lime | `#D7FF00` | Signature accent |
| Signal Red | `#FF3B30` | Secondary accent |
| Cobalt Blue | `#244CFF` | Secondary accent, focus states |
| Concrete Grey | `#C8C8C0` | Neutral panels |
| Graphite | `#343434` | Supporting text |
| Pure White | `#FFFFFF` | High-contrast surfaces |

### Typography

- **Display:** Inter (Black/900) — Oversized headlines, tight tracking
- **Body:** Inter (400–700) — Readable paragraphs and UI text
- **Mono:** Space Mono (400/700) — Labels, metadata, annotations

### Design Principles

1. **Make It Mean Something** — Every visual decision serves an idea
2. **Say It Clearly** — Strong design makes the message easier to understand
3. **Break the Pattern** — Experiment when there's a meaningful reason

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling with custom theme tokens
- **Framer Motion** — Purposeful animation and transitions
- **Lucide React** — Consistent icon set

## Project Structure

```
src/
├── App.tsx              # Main application with all sections
├── main.tsx             # Entry point
├── index.css            # Design system, tokens, animations
└── data/
    └── projects.ts      # Project data, categories, services
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

## Accessibility

- Semantic HTML with proper heading hierarchy
- Skip-to-content link
- Keyboard-navigable throughout
- Visible focus indicators (3px cobalt blue outline)
- ARIA attributes on all interactive elements
- `prefers-reduced-motion` respected for all animations
- Sufficient color contrast ratios
- Screen reader announcements for form interactions
- Escape key dismissal for modals and menus
- Background scroll locking when modals are open

## Performance

- CSS-based animations where possible
- Minimal dependencies
- Lazy animation with viewport detection
- Optimized font loading via Google Fonts preconnect
- No unnecessary re-renders
- Clean build output (~24 kB CSS, ~309 kB JS gzipped)

## Browser Support

Tested across modern browsers at viewports from 320px to 1440px+:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome (Android)

## License

This is a concept project. All project names and descriptions are fictional sample work created for demonstration purposes.

---

**BRUTALIST DESIGN OFFICE** — Independent Creative Practice
