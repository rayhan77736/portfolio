---
name: a11y
description: Run an accessibility audit on Svelte components checking WCAG 2.1 AA compliance, semantic HTML, ARIA, keyboard navigation, and screen reader support.
allowed-tools: Read Grep Glob
---

# Accessibility Audit

Perform a thorough accessibility audit on the specified component(s) or page(s).

## Semantic HTML
- Use proper heading hierarchy (h1 > h2 > h3, no skipped levels)
- Each page should have exactly ONE `<h1>`
- Use `<main>`, `<nav>`, `<section>`, `<footer>` landmarks appropriately
- Use `<button>` for actions, `<a>` for navigation — never `<div>` with click handlers
- Lists of items should use `<ul>`/`<ol>` + `<li>`

## ARIA
- Images must have `alt` text (decorative images use `alt=""`)
- Form inputs must have associated `<label>` elements
- Navigation landmarks should have `aria-label` when there are multiple navs
- Interactive elements need `aria-expanded`, `aria-controls` where applicable (e.g., mobile menu)
- Use `aria-current="page"` for active navigation items

## Keyboard Navigation
- All interactive elements must be reachable via Tab key
- Focus order follows visual reading order
- Focus indicators are visible (`focus:ring-2 focus:ring-blue-500 focus:outline-none`)
- Modal/dropdown elements trap focus appropriately
- Escape key closes overlays/menus

## Color & Contrast
- Text contrast ratio: minimum 4.5:1 (normal text), 3:1 (large text 18px+ or 14px+ bold)
- Don't rely solely on color to convey information
- Check `slate-600` on white (#475569 on #ffffff = 5.9:1 — passes AA)
- Check `slate-400` on white (#94a3b8 on #ffffff = 3.3:1 — only passes for large text)

## Motion & Preferences
- Animations should respect `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) { /* disable or reduce animations */ }
  ```
- No auto-playing content without user control

## Screen Reader
- Decorative icons use `aria-hidden="true"`
- Skip-to-content link at the top of each page
- Section headings provide clear document outline
- Timeline entries should be in a list structure for logical reading order

Report findings with severity (Critical / Warning / Suggestion) and specific fix recommendations.
