<script lang="ts">
	import { onMount } from 'svelte';

	let { name, tagline, subtitle = '', image = '' }: { name: string; tagline: string; subtitle?: string; image?: string } =
		$props();

	let visible = $state(false);
	let sectionRef: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { visible = entry.isIntersecting; },
			{ threshold: 0.2 }
		);
		observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionRef} class="pt-20 pb-10 md:pt-28 md:pb-14" style="background: #FAFAF8;">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
			<div class="flex-1">
				<p
					class="text-xs font-medium tracking-[0.2em] uppercase mb-4 transition-all duration-500"
					style="color: #2D6A4F; opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '10px'});"
				>
					{tagline}
				</p>

				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight"
					style="color: #1A2E1A; clip-path: inset(0 {visible ? '0%' : '100%'} 0 0); transition: clip-path 0.8s cubic-bezier(0.77, 0, 0.18, 1) 0.1s;"
				>
					{name}
				</h1>

				{#if subtitle}
					<p
						class="mt-4 text-base md:text-lg leading-relaxed max-w-md transition-all duration-500"
						style="color: #6B7F6B; opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '10px'}); transition-delay: 0.25s; font-size: 1.05rem;"
					>
						{subtitle}
					</p>
				{/if}

				<div
					class="mt-6 w-16 h-px transition-transform duration-500"
					style="background: #2D6A4F; transform-origin: left; transform: scaleX({visible ? 1 : 0}); transition-delay: 0.4s;"
				></div>
			</div>

			{#if image}
				<div class="shrink-0 photo-wrap" class:photo-in={visible}>
					<!-- Accent corner lines -->
					<div class="corner corner-tl"></div>
					<div class="corner corner-br"></div>

					<div class="photo-mask">
						<img src={image} alt={name} class="photo-img" />
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.photo-wrap {
		position: relative;
		padding: 8px;
	}

	/* Corner accent lines — small L-shapes */
	.corner {
		position: absolute;
		width: 24px;
		height: 24px;
		opacity: 0;
		transition: opacity 0.4s ease 0.6s;
	}
	.corner-tl {
		top: 0; left: 0;
		border-top: 2px solid #2D6A4F;
		border-left: 2px solid #2D6A4F;
	}
	.corner-br {
		bottom: 0; right: 0;
		border-bottom: 2px solid #2D6A4F;
		border-right: 2px solid #2D6A4F;
	}
	.photo-in .corner { opacity: 1; }

	/* Image mask — wipes open from center */
	.photo-mask {
		width: 11rem;
		height: 11rem;
		border-radius: 12px;
		overflow: hidden;
		clip-path: circle(0% at 50% 50%);
		transition: clip-path 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
	}
	.photo-in .photo-mask {
		clip-path: circle(75% at 50% 50%);
	}

	@media (min-width: 768px) {
		.photo-mask { width: 13rem; height: 13rem; }
	}

	.photo-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		filter: saturate(0.85);
		transition: filter 0.4s ease, transform 0.4s ease;
	}
	.photo-wrap:hover .photo-img {
		filter: saturate(1);
		transform: scale(1.03);
	}

	@media (prefers-reduced-motion: reduce) {
		.photo-mask { clip-path: circle(75% at 50% 50%); transition: none; }
		.corner { opacity: 1; transition: none; }
		.photo-img { filter: none; transition: none; }
	}
</style>
