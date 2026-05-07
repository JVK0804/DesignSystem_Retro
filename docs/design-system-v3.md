# Design System v3 — Deep Ink x Teal Phosphor

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion  
**Token file:** `styles/tokens.v3.css`

## Overview

v3 is the dark inversion. Canvas flips to Deep Ink (`#1C1A14`). Accent shifts to Teal Phosphor (`#A5F3FC`) — the brightest point of the teal ramp, achieving WCAG AA on dark. Includes a CRT terminal component exclusive to this version.

## Color Tokens

| Token | Value | Role |
|-------|-------|------|
| `--v3-color-bg` | `#1C1A14` | Deep Ink canvas |
| `--v3-color-surface` | `#252118` | Raised card surface |
| `--v3-color-surface-raised` | `#2E2B22` | Further elevated |
| `--v3-color-primary` | `#A5F3FC` | Teal Phosphor — accent |
| `--v3-color-primary-dim` | `#22B8CF` | Teal Volt — dimmed |
| `--v3-color-text` | `#E8E4D9` | Heritage Cream on dark |
| `--v3-color-text-muted` | `#9A9488` | Secondary text |

## Glass Tokens (Dark)

| Token | Value |
|-------|-------|
| `--v3-glass-bg` | `rgba(28, 26, 20, 0.65)` |
| `--v3-glass-specular-from` | `rgba(255, 255, 255, 0.08)` |
| `--v3-glass-specular-to` | `rgba(255, 255, 255, 0.01)` |
| `--v3-glass-glint` | `rgba(255, 255, 255, 0.06)` |
| `--v3-border-glass` | `1px solid rgba(255, 255, 255, 0.10)` |

## CRT Terminal Tokens

| Token | Value |
|-------|-------|
| `--v3-font-terminal` | `'Anonymous Pro', monospace` |
| `--v3-color-crt-text` | `#A5F3FC` |
| `--v3-color-crt-dim` | `rgba(165,243,252,0.45)` |
| `--v3-color-crt-bg` | `#0A0F0C` |

## Components

### GlassCardV3
```tsx
import { GlassCardV3 } from '@/components/v3/GlassCard.v3'

<GlassCardV3>
  <p>Dark glass content</p>
</GlassCardV3>
```
No `withGrain` prop — grain is redundant on dark surfaces.

### HapticButtonV3
```tsx
import { HapticButtonV3 } from '@/components/v3/HapticButton.v3'

<HapticButtonV3 variant="primary">Launch</HapticButtonV3>
<HapticButtonV3 variant="secondary">Cancel</HapticButtonV3>
```

| Variant | Background | Text |
|---------|-----------|------|
| `primary` | `#A5F3FC` (Phosphor) | `#1C1A14` (Ink) |
| `secondary` | Transparent | `#A5F3FC` + border |
| `ghost` | Transparent | `#A5F3FC` |
| `disabled` | `#2E2B22` | `#5A5648` |

### TerminalBlockV3
```tsx
import { TerminalBlockV3 } from '@/components/v3/TerminalBlock.v3'

const lines = [
  { type: 'comment', text: '# design system v3' },
  { type: 'command', text: 'npm run build' },
  { type: 'output',  text: 'compiled in 240ms' },
  { type: 'command', text: 'git push origin main' },
  { type: 'output',  text: 'pushed 12 files' },
]

<TerminalBlockV3 lines={lines} typewriter prompt="❯" />
```

| Prop | Type | Default |
|------|------|---------|
| `lines` | `TerminalLine[]` | — |
| `prompt` | `string` | `'❯'` |
| `typewriter` | `boolean` | `false` |

**Scanline effect:** CSS `repeating-linear-gradient` at 4px intervals — no canvas, no JS.

## Setup

```tsx
import '@/styles/tokens.v3.css'
```

```css
body {
  background-color: var(--v3-color-bg);
  color: var(--v3-color-text);
}
```

Load Anonymous Pro via Google Fonts:
```tsx
import { Anonymous_Pro } from 'next/font/google'
const mono = Anonymous_Pro({ weight: '400', subsets: ['latin'] })
```
