<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid.svelte';
	import Certifications from '$lib/components/Certifications.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { data } from '$lib/data/web-development';
</script>

<svelte:head>
	<title>{data.title} — Rayhan Ahmed</title>
	<meta name="description" content={data.tagline} />
</svelte:head>

<Navbar sections={data.sections} pageTitle={data.title} />

<main>
	<Hero name="Rayhan Ahmed" tagline={data.tagline} subtitle={data.subtitle} image="/1F0A2279.JPG" />
	<ExperienceTimeline entries={data.experience} />
	<SkillsGrid categories={data.skills} />
	<Certifications items={data.certifications} />
	<CallToAction heading={data.cta.heading} message={data.cta.message} />
</main>

<Footer />
