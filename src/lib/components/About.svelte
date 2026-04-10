<script lang="ts">
	import { onMount } from 'svelte';

	let { text }: { text: string } = $props();
	let ref: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { ref.classList.toggle('visible', entry.isIntersecting); },
			{ threshold: 0.15 }
		);
		observer.observe(ref);
		return () => observer.disconnect();
	});
</script>

<section bind:this={ref} class="reveal py-10 md:py-14" style="background: #FAFAF8;">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-base md:text-lg leading-[1.8]" style="color: #4A5D4A;">
			{text}
		</p>
	</div>
</section>
