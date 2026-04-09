---
name: ui-review
description: Review Svelte components for UI/UX best practices, accessibility, responsive design, and visual consistency. Use when building or modifying UI components.
allowed-tools: Read Grep Glob
---

# UI/UX Review

Review the specified Svelte component(s) for UI/UX quality. Check each of the following areas and provide actionable feedback:

## Visual Design
- **Spacing & alignment**: Consistent use of Tailwind spacing scale (4, 8, 12, 16, 20, 24px)
- **Typography hierarchy**: Proper heading levels, readable font sizes (min 16px body), adequate line-height
- **Color contrast**: Text must have sufficient contrast against backgrounds (WCAG AA: 4.5:1 for normal text, 3:1 for large text)
- **Visual weight**: Elements should have clear visual hierarchy — primary actions stand out, secondary elements recede

## Responsive Design
- **Mobile-first**: Check that layouts work at 320px, 768px, and 1024px+ breakpoints
- **Touch targets**: Interactive elements should be at least 44x44px on mobile
- **Text readability**: No text smaller than 14px on mobile, adequate line lengths (45-75 characters)
- **Overflow**: No horizontal scrolling, images and containers handle narrow viewports

## Interaction Design
- **Hover/focus states**: All interactive elements have visible hover and focus indicators
- **Loading states**: Async content has loading indicators
- **Empty states**: Lists and grids handle zero-item case gracefully
- **Transitions**: Animations are subtle (150-300ms), respect prefers-reduced-motion

## Clean & Minimal Aesthetic (Project-specific)
This portfolio uses a clean & minimal design. Verify:
- White/light backgrounds with generous whitespace
- Slate color palette (slate-800 for headings, slate-600 for body text)
- Inter font family
- No unnecessary decorative elements
- Content-focused layout with clear breathing room between sections

Provide specific Tailwind class suggestions for any issues found.
