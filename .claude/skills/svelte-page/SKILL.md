---
name: svelte-page
description: Generate a new portfolio skill page following the project's composition pattern. Use when creating a new skill page or need to understand the page structure.
allowed-tools: Read Write Edit Grep Glob
---

# Svelte Page Generator

Generate a new skill page for the portfolio following the established composition pattern.

## Page Structure
Every skill page must follow this exact structure:

```svelte
<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
  import SkillsGrid from '$lib/components/SkillsGrid.svelte';
  import Certifications from '$lib/components/Certifications.svelte';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { data } from '$lib/data/PAGE_SLUG';
</script>

<svelte:head>
  <title>{data.title} — Rayhan Ahmed</title>
  <meta name="description" content={data.tagline} />
</svelte:head>

<Navbar sections={data.sections} pageTitle={data.title} />

<main>
  <section id="hero">
    <Hero name="Rayhan Ahmed" tagline={data.tagline} />
  </section>
  <section id="experience">
    <ExperienceTimeline entries={data.experience} />
  </section>
  <section id="skills">
    <SkillsGrid categories={data.skills} />
  </section>
  <section id="certifications">
    <Certifications items={data.certifications} />
  </section>
  <section id="contact-cta">
    <CallToAction heading={data.cta.heading} message={data.cta.message} />
  </section>
</main>

<Footer />
```

## Isolation Rules (CRITICAL)
- Each page ONLY links to its own sections (scroll anchors) and `/contact`
- NEVER add links to other skill pages (web-development, business-intelligence, project-management, consulting)
- The Navbar receives only THIS page's sections, not global navigation

## Data File
Each page needs a corresponding data file at `src/lib/data/PAGE_SLUG.ts` exporting a `PortfolioPageData` object. See `$lib/types.ts` for the interface.

## File Location
Pages go in `src/routes/PAGE_SLUG/+page.svelte`
