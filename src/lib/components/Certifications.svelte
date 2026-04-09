<script lang="ts">
	import { onMount } from 'svelte';
	import type { Certification } from '$lib/types';

	let { items }: { items: Certification[] } = $props();
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

<section class="py-10 md:py-14 scroll-mt-16" id="certifications" style="background: #FFFFFF;">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-xs font-medium tracking-[0.2em] uppercase mb-2" style="color: #2D6A4F;">Recognition</p>
		<h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-8" style="color: #1A2E1A;">
			Certifications
		</h2>

		<div class="space-y-3">
			{#each items as item, i}
				<div
					bind:this={cardRefs[i]}
					class="reveal"
					style="transition-delay: {i * 60}ms;"
				>
					<div
						class="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:shadow-sm"
						style="border-left: 3px solid #2D6A4F; background: #FAFAF8;"
					>
						<!-- Graduation cap icon -->
						<div class="shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style="background: #E8F0E8;">
							<svg class="w-4 h-4" style="color: #2D6A4F;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
							</svg>
						</div>

						<div class="flex-1 min-w-0">
							{#if item.link}
								<a href={item.link} target="_blank" rel="noopener noreferrer" class="animated-link text-sm font-semibold" style="color: #1A2E1A;">{item.title}</a>
							{:else}
								<p class="text-sm font-semibold" style="color: #1A2E1A;">{item.title}</p>
							{/if}
							<p class="text-xs mt-0.5" style="color: #7A8D7A;">{item.issuer}</p>
						</div>

						{#if item.year}
							<span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full shrink-0" style="background: #E8F0E8; color: #2D6A4F;">
								{item.year}
							</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
