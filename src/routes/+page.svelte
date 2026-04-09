<script lang="ts">
	import { onMount } from 'svelte';
	let visible = $state(false);
	onMount(() => { visible = true; });
</script>

<svelte:head>
	<title>Rayhan Ahmed</title>
	<meta name="description" content="Rayhan Ahmed — Developer, Analyst, Project Manager, Consultant" />
</svelte:head>

<main class="min-h-screen flex items-center relative overflow-hidden" style="background: #FAFAF8;">
	<!-- Subtle dot pattern -->
	<div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#2D6A4F 1px, transparent 1px); background-size: 24px 24px;"></div>

	<div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<p
			class="text-xs font-medium tracking-[0.2em] uppercase mb-6 transition-all duration-500"
			style="color: #2D6A4F; opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '10px'});"
		>
			Portfolio
		</p>

		<h1
			class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight transition-all duration-700"
			style="color: #1A2E1A; clip-path: inset(0 {visible ? '0%' : '100%'} 0 0); transition: clip-path 0.8s cubic-bezier(0.77, 0, 0.18, 1) 0.1s;"
		>
			Rayhan Ahmed
		</h1>

		<p
			class="mt-3 text-sm transition-all duration-600"
			style="color: #7A8D7A; opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '8px'}); transition-delay: 0.3s;"
		>
			Developer &middot; Analyst &middot; Manager &middot; Consultant
		</p>

		<div
			class="mt-8 w-16 h-px transition-transform duration-500"
			style="background: #2D6A4F; transform-origin: left; transform: scaleX({visible ? 1 : 0}); transition-delay: 0.4s;"
		></div>

		<!-- Service cards -->
		<nav
			class="mt-10 grid sm:grid-cols-2 gap-3 transition-all duration-600"
			style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '12px'}); transition-delay: 0.5s;"
		>
			<a
				href="/web-development"
				class="group p-4 rounded-xl transition-all duration-200"
				style="background: #FFFFFF; border: 1px solid #E8F0E8;"
			>
				<span class="text-sm font-semibold block group-hover:translate-x-0.5 transition-transform duration-200" style="color: #1A2E1A;">Web Development</span>
				<span class="text-xs mt-1 block" style="color: #9BA89B;">Frontend & Backend</span>
			</a>
			<a
				href="/business-intelligence"
				class="group p-4 rounded-xl transition-all duration-200"
				style="background: #FFFFFF; border: 1px solid #E8F0E8;"
			>
				<span class="text-sm font-semibold block group-hover:translate-x-0.5 transition-transform duration-200" style="color: #1A2E1A;">Business Intelligence</span>
				<span class="text-xs mt-1 block" style="color: #9BA89B;">Data & Analytics</span>
			</a>
			<a
				href="/project-management"
				class="group p-4 rounded-xl transition-all duration-200"
				style="background: #FFFFFF; border: 1px solid #E8F0E8;"
			>
				<span class="text-sm font-semibold block group-hover:translate-x-0.5 transition-transform duration-200" style="color: #1A2E1A;">Project Management</span>
				<span class="text-xs mt-1 block" style="color: #9BA89B;">Planning & Delivery</span>
			</a>
			<a
				href="/consulting"
				class="group p-4 rounded-xl transition-all duration-200"
				style="background: #FFFFFF; border: 1px solid #E8F0E8;"
			>
				<span class="text-sm font-semibold block group-hover:translate-x-0.5 transition-transform duration-200" style="color: #1A2E1A;">Consulting & Strategy</span>
				<span class="text-xs mt-1 block" style="color: #9BA89B;">Content & Executive</span>
			</a>
		</nav>

		<div
			class="mt-8 transition-all duration-500"
			style="opacity: {visible ? 1 : 0}; transition-delay: 0.65s;"
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

<style>
	nav a:hover {
		box-shadow: 0 4px 12px rgba(45, 106, 79, 0.08);
		border-color: #C8D8C8 !important;
		transform: translateY(-2px);
	}
</style>
