<script lang="ts">
	import { onMount } from 'svelte';
	let visible = $state(false);
	onMount(() => { visible = true; });
</script>

<svelte:head>
	<title>Rayhan Ahmed</title>
	<meta name="description" content="Rayhan Ahmed — Developer, Analyst, Project Manager, Consultant" />
</svelte:head>

<main class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style="background: #FAFAF8;">
	<!-- Left decoration -->
	<div class="hidden lg:block absolute left-6 xl:left-14 top-0 bottom-0 pointer-events-none">
		<!-- Vertical line full height -->
		<div class="absolute left-3 top-[10%] bottom-[10%] w-px" style="background: linear-gradient(to bottom, transparent, #2D6A4F 30%, #2D6A4F 70%, transparent); opacity: 0.08;"></div>

		<!-- Dots and crosses along the line -->
		<div class="absolute left-0 top-[18%] flex items-center gap-2">
			<div class="w-[7px] h-[7px] rounded-full" style="background: #2D6A4F; opacity: 0.2;"></div>
			<div class="h-px w-6" style="background: #2D6A4F; opacity: 0.1;"></div>
		</div>
		<div class="absolute left-[1px] top-[35%]">
			<div class="w-[5px] h-[5px] rotate-45" style="border: 1px solid #2D6A4F; opacity: 0.15;"></div>
		</div>
		<div class="absolute left-0 top-[52%] flex items-center gap-2">
			<div class="w-[7px] h-[7px] rounded-full" style="border: 1.5px solid #2D6A4F; opacity: 0.18;"></div>
			<div class="h-px w-10" style="background: #2D6A4F; opacity: 0.08;"></div>
		</div>
		<div class="absolute left-0 top-[68%] flex items-center gap-2">
			<div class="w-[7px] h-[7px] rounded-full" style="background: #2D6A4F; opacity: 0.12;"></div>
			<div class="h-px w-4" style="background: #2D6A4F; opacity: 0.1;"></div>
		</div>
		<div class="absolute left-[1px] top-[82%]">
			<div class="w-[5px] h-[5px] rotate-45" style="border: 1px solid #2D6A4F; opacity: 0.12;"></div>
		</div>

		<!-- Text label -->
		<div class="absolute left-6 bottom-[15%] -rotate-90 origin-bottom-left">
			<span class="text-[9px] font-medium tracking-[0.3em] uppercase" style="color: #2D6A4F; opacity: 0.12;">Portfolio 2026</span>
		</div>
	</div>

	<!-- Right decoration -->
	<div class="hidden lg:block absolute right-6 xl:right-14 top-0 bottom-0 pointer-events-none">
		<!-- Vertical line -->
		<div class="absolute right-3 top-[15%] bottom-[15%] w-px" style="background: linear-gradient(to bottom, transparent, #2D6A4F 30%, #2D6A4F 70%, transparent); opacity: 0.08;"></div>

		<!-- Horizontal bars — right aligned, varying lengths -->
		<div class="absolute right-0 top-[20%] flex flex-col items-end space-y-3">
			<div class="h-px w-10" style="background: #2D6A4F; opacity: 0.1;"></div>
			<div class="h-px w-16" style="background: #2D6A4F; opacity: 0.07;"></div>
			<div class="h-px w-6" style="background: #2D6A4F; opacity: 0.12;"></div>
		</div>

		<!-- Circle element -->
		<div class="absolute right-0 top-[42%]">
			<div class="w-16 h-16 rounded-full" style="border: 1px solid #2D6A4F; opacity: 0.06;"></div>
		</div>

		<!-- More bars lower -->
		<div class="absolute right-0 top-[62%] flex flex-col items-end space-y-3">
			<div class="h-px w-8" style="background: #2D6A4F; opacity: 0.1;"></div>
			<div class="h-px w-14" style="background: #2D6A4F; opacity: 0.06;"></div>
			<div class="h-px w-4" style="background: #2D6A4F; opacity: 0.12;"></div>
			<div class="h-px w-10" style="background: #2D6A4F; opacity: 0.08;"></div>
		</div>

		<!-- Small square -->
		<div class="absolute right-1 top-[78%]">
			<div class="w-3 h-3" style="border: 1px solid #2D6A4F; opacity: 0.1;"></div>
		</div>

		<!-- Text label -->
		<div class="absolute right-6 top-[15%] rotate-90 origin-top-right">
			<span class="text-[9px] font-medium tracking-[0.3em] uppercase" style="color: #2D6A4F; opacity: 0.12;">Sylhet &middot; Bangladesh</span>
		</div>
	</div>

	<div class="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">

		<!-- Photo -->
		<div
			class="mx-auto mb-8 transition-all duration-700"
			style="opacity: {visible ? 1 : 0}; transform: scale({visible ? '1' : '0.85'});"
		>
			<img
				src="/1F0A2279.JPG"
				alt="Rayhan Ahmed"
				class="w-28 h-28 md:w-32 md:h-32 mx-auto object-cover object-top"
				style="border-radius: 50%; box-shadow: 0 6px 24px rgba(26, 46, 26, 0.1); border: 3px solid #E8F0E8;"
			/>
		</div>

		<!-- Name -->
		<h1
			class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight transition-all duration-700"
			style="color: #1A2E1A; clip-path: inset(0 {visible ? '0%' : '100%'} 0 0); transition: clip-path 0.8s cubic-bezier(0.77, 0, 0.18, 1) 0.15s;"
		>
			Rayhan Ahmed
		</h1>

		<!-- Roles -->
		<p
			class="mt-3 text-sm transition-all duration-500"
			style="color: #7A8D7A; opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '8px'}); transition-delay: 0.35s;"
		>
			Developer &middot; Analyst &middot; Manager &middot; Consultant
		</p>

		<!-- One-liner -->
		<p
			class="mt-4 text-sm leading-relaxed max-w-md mx-auto transition-all duration-500"
			style="color: #6B7F6B; opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '8px'}); transition-delay: 0.45s;"
		>
			CS grad from Sylhet, currently doing my Master's at SUST and building web apps remotely for a UK company. I wear a few hats — pick the one you need.
		</p>

		<!-- Accent line -->
		<div
			class="mt-6 w-12 h-px mx-auto transition-transform duration-500"
			style="background: #2D6A4F; transform: scaleX({visible ? 1 : 0}); transition-delay: 0.55s;"
		></div>

		<!-- CTA -->
		<div
			class="mt-8 transition-all duration-500"
			style="opacity: {visible ? 1 : 0}; transition-delay: 0.6s;"
		>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 text-sm font-medium animated-link"
				style="color: #2D6A4F;"
			>
				Get in Touch
				<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</main>

