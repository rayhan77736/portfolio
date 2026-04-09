<script lang="ts">
	import { onMount } from 'svelte';
	import type { SkillCategory } from '$lib/types';

	let { categories }: { categories: SkillCategory[] } = $props();
	let cardRefs: HTMLElement[] = [];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					entry.target.classList.toggle('visible', entry.isIntersecting);
				}
			},
			{ threshold: 0.1 }
		);
		for (const ref of cardRefs) {
			if (ref) observer.observe(ref);
		}
		return () => observer.disconnect();
	});
</script>

<section class="py-10 md:py-14 scroll-mt-16" id="skills" style="background: #F2F5F2;">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-xs font-medium tracking-[0.2em] uppercase mb-2" style="color: #2D6A4F;">Expertise</p>
		<h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-8" style="color: #1A2E1A;">
			Skills & Tools
		</h2>

		<div class="grid sm:grid-cols-2 gap-4">
			{#each categories as category, i}
				<div
					bind:this={cardRefs[i]}
					class="reveal p-5 rounded-lg"
					style="transition-delay: {i * 80}ms; background: #FFFFFF; border: 1px solid #E8F0E8;"
				>
					<h3 class="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style="color: #2D6A4F;">
						{category.name}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each category.skills as skill}
							{@const isLearning = category.name === 'Currently Learning'}
							<span
								class="pill-hover px-3 py-1 text-sm rounded-full cursor-default"
								style="color: #3D5A3D; background: {isLearning ? 'transparent' : '#F2F5F2'}; border: 1px {isLearning ? 'dashed' : 'solid'} {isLearning ? '#9BA89B' : '#D4DDD4'};"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
