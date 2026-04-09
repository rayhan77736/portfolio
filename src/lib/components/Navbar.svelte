<script lang="ts">
	import { onMount } from 'svelte';

	let {
		sections,
		pageTitle
	}: { sections: { id: string; label: string }[]; pageTitle: string } = $props();

	let activeSection = $state('');
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			{ threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
		);

		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			mobileMenuOpen = false;
		}
	}
</script>

<nav
	class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
	style="background: {scrolled ? 'rgba(250,250,248,0.9)' : 'transparent'}; backdrop-filter: {scrolled ? 'blur(12px)' : 'none'}; {scrolled ? 'border-bottom: 1px solid #D4DDD4;' : ''}"
	aria-label="{pageTitle} navigation"
>
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-14">
			<span class="text-xs font-medium tracking-[0.15em] uppercase" style="color: #1A2E1A;">
				{pageTitle}
			</span>

			<!-- Desktop nav -->
			<div class="hidden md:flex items-center gap-6">
				{#each sections as section}
					<button
						onclick={() => scrollToSection(section.id)}
						class="text-xs tracking-wide transition-colors duration-200"
						style="color: {activeSection === section.id ? '#2D6A4F' : '#7A8D7A'}; {activeSection === section.id ? 'font-weight: 500;' : ''}"
					>
						{section.label}
					</button>
				{/each}
				<a
					href="/contact"
					class="text-xs font-medium px-4 py-1.5 rounded-full transition-colors duration-200"
					style="background: #1A2E1A; color: #FAFAF8;"
				>
					Contact
				</a>
			</div>

			<!-- Mobile -->
			<button
				class="md:hidden p-2"
				style="color: #1A2E1A;"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-menu"
				aria-label="Toggle navigation menu"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div id="mobile-menu" class="md:hidden" style="background: rgba(250,250,248,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid #D4DDD4;">
			<div class="px-4 py-3 space-y-1">
				{#each sections as section}
					<button
						onclick={() => scrollToSection(section.id)}
						class="block w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-150"
						style="color: {activeSection === section.id ? '#2D6A4F' : '#4A5D4A'}; {activeSection === section.id ? 'background: #E8F0E8;' : ''}"
					>
						{section.label}
					</button>
				{/each}
				<a
					href="/contact"
					class="block w-full text-center px-3 py-2 mt-2 text-sm rounded-md font-medium"
					style="background: #1A2E1A; color: #FAFAF8;"
				>
					Contact
				</a>
			</div>
		</div>
	{/if}
</nav>
