---
name: design-check
description: Validate Tailwind classes and design tokens for consistency across the portfolio. Use when checking visual consistency or after modifying styles.
allowed-tools: Read Grep Glob
---

# Design System Consistency Check

Validate that components and pages follow the portfolio's design system consistently.

## Design Tokens

### Colors
- **Headings**: `text-slate-800` (#1e293b)
- **Body text**: `text-slate-600` (#475569)
- **Muted text**: `text-slate-400` (#94a3b8)
- **Accent/links**: `text-blue-500` (#3b82f6)
- **Accent hover**: `text-blue-600` (#2563eb)
- **Backgrounds**: `bg-white`, `bg-slate-50` (alternating sections)
- **Borders**: `border-slate-200`
- **Skill pills**: `bg-slate-100 text-slate-700`

### Typography
- **Font family**: Inter (via Google Fonts), fallback to `font-sans`
- **Hero name**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **Hero tagline**: `text-xl md:text-2xl text-slate-600 font-light`
- **Section headings**: `text-2xl md:text-3xl font-semibold tracking-tight`
- **Body text**: `text-base leading-relaxed`
- **Small/meta**: `text-sm text-slate-400`

### Spacing
- **Container**: `max-w-4xl mx-auto px-6`
- **Section padding**: `py-20 md:py-24`
- **Between elements**: Use Tailwind scale (4, 6, 8, 12, 16)
- **Section scroll margin**: `scroll-mt-20` (to clear sticky nav)

### Components
- **Skill pills**: `px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm`
- **Cards**: `p-6 bg-white border border-slate-200 rounded-lg`
- **Buttons (primary)**: `px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors`
- **Timeline dot**: `w-3 h-3 bg-blue-500 rounded-full`
- **Timeline line**: `border-l-2 border-slate-200`

## Checks to Perform
1. Grep for color classes that don't match the palette (e.g., `text-gray-*` instead of `text-slate-*`)
2. Verify all sections use consistent padding
3. Check that container width is consistent (`max-w-4xl`)
4. Ensure no inline styles or arbitrary Tailwind values where tokens exist
5. Verify Inter font is applied globally
