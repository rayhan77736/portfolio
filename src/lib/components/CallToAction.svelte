<script lang="ts">
	import { onMount } from 'svelte';

	let {
		heading = "Let's Work Together",
		message = "Interested in collaborating? Get in touch.",
		contactPath = '/contact'
	}: { heading?: string; message?: string; contactPath?: string } = $props();

	let sectionRef: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { sectionRef.classList.toggle('visible', entry.isIntersecting); },
			{ threshold: 0.2 }
		);
		observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section
	bind:this={sectionRef}
	class="reveal py-14 md:py-20 scroll-mt-16 relative overflow-hidden"
	id="contact-cta"
	style="background: #2D4A3E;"
>
	<!-- Subtle dot texture -->
	<div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(#FAFAF8 1px, transparent 1px); background-size: 20px 20px;"></div>

	<div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-xs font-medium tracking-[0.2em] uppercase mb-2" style="color: #8BBF8B;">
			Next step
		</p>
		<h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-3" style="color: #F0F4F0;">
			{heading}
		</h2>
		<p class="text-sm leading-relaxed mb-8 max-w-lg" style="color: #A3BBA3;">
			{message}
		</p>
		<a
			href={contactPath}
			class="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200"
			style="background: #F0F4F0; color: #2D4A3E;"
		>
			Get in Touch
			<svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
