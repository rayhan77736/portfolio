<script lang="ts">
	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contact — Rayhan Ahmed</title>
	<meta name="description" content="Get in touch with Rayhan Ahmed" />
</svelte:head>

<nav
	class="fixed top-0 inset-x-0 z-50"
	style="background: rgba(250,250,248,0.9); backdrop-filter: blur(12px); border-bottom: 1px solid #D4DDD4;"
>
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-14">
			<span class="text-xs font-medium tracking-[0.15em] uppercase" style="color: #1A2E1A;">Contact</span>
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
						type="text"
						bind:value={name}
						required
						class="w-full px-0 py-2 text-sm focus:outline-none"
						style="background: transparent; border: none; border-bottom: 1px solid #D4DDD4; color: #1A2E1A;"
						placeholder="Your name"
					/>
				</div>
				<div>
					<label for="email" class="block text-xs font-medium uppercase tracking-wide mb-2" style="color: #4A5D4A;">Email</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						class="w-full px-0 py-2 text-sm focus:outline-none"
						style="background: transparent; border: none; border-bottom: 1px solid #D4DDD4; color: #1A2E1A;"
						placeholder="your@email.com"
					/>
				</div>
				<div>
					<label for="message" class="block text-xs font-medium uppercase tracking-wide mb-2" style="color: #4A5D4A;">Message</label>
					<textarea
						id="message"
						bind:value={message}
						required
						rows={4}
						class="w-full px-0 py-2 text-sm focus:outline-none resize-none"
						style="background: transparent; border: none; border-bottom: 1px solid #D4DDD4; color: #1A2E1A;"
						placeholder="Tell me about your project..."
					></textarea>
				</div>
				<div class="pt-4">
					<button
						type="submit"
						class="px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200"
						style="background: #1A2E1A; color: #FAFAF8;"
					>
						Send Message
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
		</div>
	</div>
</main>

<footer class="py-6" style="background: #FAFAF8; border-top: 1px solid #E8F0E8;">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-xs" style="color: #9BA89B;">&copy; {new Date().getFullYear()} Rayhan Ahmed</p>
	</div>
</footer>
