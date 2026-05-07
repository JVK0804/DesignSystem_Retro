# JVK Design System — Retro

A three-version design system built from Figma to production-ready code.

Every component started as a frame in Figma — designed with colour tokens, spacing grids, and glass morphism layers — then translated 1:1 into TypeScript.

---

## Versions

| | Theme | Canvas | Accent |
|--|-------|--------|--------|
| **v1** | Base | Heritage Cream `#E8E4D9` | Cerulean Teal `#0E7490` |
| **v2** | Refined | Cream Bright `#F5F2EB` | Cerulean Teal `#0E7490` |
| **v3** | Dark mode | Deep Ink `#1C1A14` | Teal Phosphor `#A5F3FC` |

---

## Components

**All versions**
- `GlassCard` — 5-layer glass morphism: grain overlay, cream/ink base, backdrop blur, 135° specular gradient, 1px glint edge
- `HapticButton` — Framer Motion spring animation: press 30ms → return at stiffness 520 / damping 22 / mass 0.6
- `Tag` — md (28px, 13px) and sm (22px, 11px uppercase) sizes
- `GrainOverlay` — SVG feTurbulence noise via data URI, no HTTP requests

**v3 only**
- `TerminalBlock` — CRT terminal with Anonymous Pro typeface, CSS scanline overlay, typewriter streaming mode, blinking cursor

---

## Stack

| | |
|--|--|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Custom Properties |
| Animation | Framer Motion |
| Tokens | W3C Design Tokens (`tokens.json`) |

---

## Structure

```
components/
├── v1/                    # Heritage Cream
│   ├── GlassCard.v1.tsx
│   ├── HapticButton.v1.tsx
│   └── Tag.v1.tsx
├── v3/                    # Dark mode
│   ├── GlassCard.v3.tsx
│   ├── HapticButton.v3.tsx
│   ├── Tag.v3.tsx
│   └── TerminalBlock.v3.tsx
├── GlassCard.tsx          # v2 base
├── HapticButton.tsx       # v2 base
├── Tag.tsx                # v2 base
└── GrainOverlay.tsx       # shared across all versions
hooks/
└── useHapticPress.ts      # Framer Motion spring hook
styles/
├── tokens.css             # v2 CSS custom properties
├── tokens.v1.css          # v1 CSS custom properties
└── tokens.v3.css          # v3 CSS custom properties
tokens/
└── tokens.json            # W3C Design Tokens format
tailwind.config.ts
docs/
├── design-system-v1.md
└── design-system-v3.md
```

---

## How tokens connect design to code

Every CSS custom property in `tokens.css` maps to a named token in `tokens.json` and a Tailwind key in `tailwind.config.ts`. The Figma component and the TypeScript component share the same token name — that's the contract.

```
Figma frame  →  tokens.json  →  tokens.css  →  React component
```

---

## Workflow

Designed in Figma via Claude MCP (direct canvas write access), then coded 1:1 in TypeScript. Each version was built and pushed in a single session.

---

Built by **Kaushik JV** — Designer × Front-end engineer  
[GitHub](https://github.com/JVK0804)
