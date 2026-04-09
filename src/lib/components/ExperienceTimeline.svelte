<script lang="ts">
	import { onMount } from 'svelte';
	import type { TimelineEntry } from '$lib/types';

	let { entries }: { entries: TimelineEntry[] } = $props();
	let itemRefs: HTMLElement[] = [];

	onMount(() => {
		const observer = new IntersectionObserver(
			(observerEntries) => {
				for (const entry of observerEntries) {
					entry.target.classList.toggle('visible', entry.isIntersecting);
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
		);
		for (const ref of itemRefs) {
			if (ref) observer.observe(ref);
		}
		return () => observer.disconnect();
	});
</script>

<section class="py-10 md:py-14 scroll-mt-16" id="experience" style="background: #FFFFFF;">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-xs font-medium tracking-[0.2em] uppercase mb-2" style="color: #2D6A4F;">Background</p>
		<h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-8" style="color: #1A2E1A;">
			Experience
		</h2>

		<div class="space-y-4">
			{#each entries as entry, i}
				<div
					bind:this={itemRefs[i]}
					class="reveal"
					style="transition-delay: {i * 80}ms;"
				>
					<div
						class="p-5 rounded-lg transition-all duration-200 hover:shadow-sm"
						style="border-left: 3px solid #2D6A4F; background: #FAFAF8;"
					>
						<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
							<h3 class="text-base font-bold" style="color: #1A2E1A;">{entry.role}</h3>
							<span
								class="text-[11px] font-medium px-2.5 py-0.5 rounded-full w-fit"
								style="background: #E8F0E8; color: #2D6A4F;"
							>
								{entry.period}
							</span>
						</div>
						<p class="text-sm font-medium mb-2" style="color: #2D6A4F;">{entry.company}</p>
						<p class="text-sm leading-relaxed" style="color: #4A5D4A;">{entry.description}</p>

						{#if entry.highlights && entry.highlights.length > 0}
							<ul class="mt-3 space-y-1">
								{#each entry.highlights as highlight}
									<li class="flex items-start gap-2 text-sm" style="color: #6B7F6B;">
										<span class="mt-[7px] w-1 h-1 rounded-full shrink-0" style="background: #2D6A4F;"></span>
										{highlight}
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
