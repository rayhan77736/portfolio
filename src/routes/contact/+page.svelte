<script lang="ts">
	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let sending = $state(false);
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		sending = true;
		error = '';

		try {
			const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ name, email, message })
			});

			if (res.ok) {
				submitted = true;
			} else {
				error = 'Something went wrong. Try emailing me directly.';
			}
		} catch {
			error = 'Something went wrong. Try emailing me directly.';
		} finally {
			sending = false;
		}
	}
</script>

<svelte:head>
	<title>Contact — Rayhan Ahmed</title>
	<meta name="description" content="Get in touch with Rayhan Ahmed" />
</svelte:head>

<!-- Navbar with back button -->
<nav
	class="fixed top-0 inset-x-0 z-50"
	style="background: rgba(250,250,248,0.9); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid #D4DDD4;"
>
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-14">
			<div class="flex items-center gap-3">
				<button
					onclick={() => history.back()}
					class="flex items-center gap-1 text-xs transition-colors duration-200"
					style="color: #7A8D7A;"
					aria-label="Go back"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
					</svg>
					Back
				</button>
				<span class="w-px h-4" style="background: #D4DDD4;"></span>
				<span class="text-xs font-medium tracking-[0.15em] uppercase" style="color: #1A2E1A;">Contact</span>
			</div>
		</div>
	</div>
</nav>

<main class="pt-14 min-h-screen" style="background: #FAFAF8;">
	<div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
		<p class="text-xs font-medium tracking-[0.2em] uppercase mb-3" style="color: #2D6A4F;">
			Let's connect
		</p>
		<h1 class="text-2xl md:text-3xl font-bold tracking-tight mb-3" style="color: #1A2E1A;">
			Get in Touch
		</h1>
		<p class="text-sm leading-relaxed mb-12" style="color: #6B7F6B;">
			Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
		</p>

		{#if submitted}
			<div class="py-8 text-center">
				<p class="text-base font-medium" style="color: #1A2E1A;">Thanks for reaching out.</p>
				<p class="text-sm mt-1" style="color: #7A8D7A;">I'll get back to you as soon as possible.</p>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-5">
				<div>
					<label for="name" class="block text-xs font-medium uppercase tracking-wide mb-2" style="color: #4A5D4A;">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						bind:value={name}
						required
						disabled={sending}
						class="w-full px-0 py-2 text-sm focus:outline-none"
						style="background: transparent; border: none; border-bottom: 1px solid #D4DDD4; color: #1A2E1A;"
						placeholder="Your name"
					/>
				</div>
				<div>
					<label for="email" class="block text-xs font-medium uppercase tracking-wide mb-2" style="color: #4A5D4A;">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						bind:value={email}
						required
						disabled={sending}
						class="w-full px-0 py-2 text-sm focus:outline-none"
						style="background: transparent; border: none; border-bottom: 1px solid #D4DDD4; color: #1A2E1A;"
						placeholder="your@email.com"
					/>
				</div>
				<div>
					<label for="message" class="block text-xs font-medium uppercase tracking-wide mb-2" style="color: #4A5D4A;">Message</label>
					<textarea
						id="message"
						name="message"
						bind:value={message}
						required
						disabled={sending}
						rows={4}
						class="w-full px-0 py-2 text-sm focus:outline-none resize-none"
						style="background: transparent; border: none; border-bottom: 1px solid #D4DDD4; color: #1A2E1A;"
						placeholder="Tell me about your project..."
					></textarea>
				</div>

				{#if error}
					<p class="text-sm" style="color: #b91c1c;">{error}</p>
				{/if}

				<div class="pt-4">
					<button
						type="submit"
						disabled={sending}
						class="px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200"
						style="background: {sending ? '#6B7F6B' : '#1A2E1A'}; color: #FAFAF8; opacity: {sending ? 0.7 : 1};"
					>
						{sending ? 'Sending...' : 'Send Message'}
					</button>
				</div>
			</form>
		{/if}

		<div class="mt-16 pt-10" style="border-top: 1px solid #E8F0E8;">
			<p class="text-xs font-medium uppercase tracking-wide mb-4" style="color: #9BA89B;">Or directly</p>
			<div class="space-y-2">
				<p class="text-sm">
					<a href="mailto:rayhanahmed77736@gmail.com" style="color: #2D6A4F;">rayhanahmed77736@gmail.com</a>
				</p>
				<p class="text-sm">
					<a href="https://linkedin.com/in/rayhanahmed27" target="_blank" rel="noopener noreferrer" class="animated-link" style="color: #2D6A4F;">LinkedIn</a>
				</p>
				<p class="text-sm">
					<a href="https://www.instagram.com/rayhan.ryhan" target="_blank" rel="noopener noreferrer" class="animated-link" style="color: #2D6A4F;">Instagram</a>
				</p>
				<p class="text-sm">
					<a href="https://www.facebook.com/share/1DnMoc1xi8/" target="_blank" rel="noopener noreferrer" class="animated-link" style="color: #2D6A4F;">Facebook</a>
				</p>
			</div>

			<div class="mt-6 flex items-center gap-4">
				<span class="flex items-center gap-1.5 text-xs" style="color: #9BA89B;">
					<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					Sylhet, Bangladesh (GMT+6)
				</span>
				<a
					href="/rayhan-ahmed-cv.pdf"
					download
					class="flex items-center gap-1.5 text-xs font-medium animated-link"
					style="color: #2D6A4F;"
				>
					<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
					</svg>
					Download CV
				</a>
			</div>
		</div>
	</div>
</main>

<footer class="py-6" style="background: #FAFAF8; border-top: 1px solid #E8F0E8;">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-xs" style="color: #9BA89B;">&copy; {new Date().getFullYear()} Rayhan Ahmed</p>
	</div>
</footer>
