# Design System v1 — Heritage Cream x Cerulean Teal

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion  
**Token file:** `styles/tokens.v1.css`

## Overview

v1 is the warmest version — using Heritage Cream (`#E8E4D9`) as the canvas. v2 lightens this to Cream Bright (`#F5F2EB`). The teal accent is identical across both.

## Color Tokens

| Token | Value | Role |
|-------|-------|------|
| `--v1-color-bg` | `#E8E4D9` | Canvas |
| `--v1-color-cream-bright` | `#F5F2EB` | Surface / card bg |
| `--v1-color-cream-shadow` | `#D4CFBF` | Pressed / border |
| `--v1-color-primary` | `#0E7490` | Cerulean Teal |
| `--v1-color-primary-hover` | `#22B8CF` | Teal Volt |
| `--v1-color-primary-phosphor` | `#A5F3FC` | Teal Phosphor |
| `--v1-color-ink` | `#1C1A14` | Text primary |
| `--v1-color-ink-muted` | `#5A5648` | Text secondary |
| `--v1-color-ink-disabled` | `#9A9488` | Disabled / placeholder |

## Glass Tokens

| Token | Value |
|-------|-------|
| `--v1-glass-bg` | `rgba(232, 228, 217, 0.45)` |
| `--v1-glass-specular-from` | `rgba(255, 255, 255, 0.32)` |
| `--v1-glass-specular-to` | `rgba(255, 255, 255, 0.06)` |
| `--v1-glass-glint` | `rgba(255, 255, 255, 0.80)` |
| `--v1-border-glass` | `1px solid rgba(255, 255, 255, 0.55)` |

## Components

### GlassCardV1
```tsx
import { GlassCardV1 } from '@/components/v1/GlassCard.v1'

<GlassCardV1 withGrain>
  <p>Content</p>
</GlassCardV1>
```

### HapticButtonV1
```tsx
import { HapticButtonV1 } from '@/components/v1/HapticButton.v1'

<HapticButtonV1 variant="primary" onClick={fn}>Get started</HapticButtonV1>
<HapticButtonV1 variant="secondary">Cancel</HapticButtonV1>
<HapticButtonV1 variant="pill">Pill shape</HapticButtonV1>
```

**Variants:** `primary` · `pill` · `secondary` · `ghost` · `disabled`

**Spring:** press `scale(0.955)` over 30ms → return spring stiffness 520 / damping 22 / mass 0.6

### TagV1
```tsx
import { TagV1 } from '@/components/v1/Tag.v1'

<TagV1 size="md">Figma</TagV1>
<TagV1 size="sm">v1</TagV1>
```

## Setup

```tsx
// app/layout.tsx
import '@/styles/tokens.v1.css'
```

```css
body {
  background-color: var(--v1-color-bg);
  color: var(--v1-color-ink);
}
```
