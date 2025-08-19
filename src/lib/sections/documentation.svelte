<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { onMount, tick } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	const api_url = 'https://api.github.com/repos/murniputralang/foto-mpl/contents/foto?ref=main';
	const speed = 50; // pixels per second

	let x = tweened(0, { duration: 0, easing: cubicOut });
	let images: string[] = [];
	const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
	let tickerWidth = 0;

	// Preload images helper
	const preloadImages = async (urls: string[]) =>
		await Promise.all(
			urls.map(
				(src) =>
					new Promise<void>((resolve) => {
						const img = new Image();
						img.src = src;
						img.onload = () => resolve();
						img.onerror = () => resolve();
					})
			)
		);

	onMount(async () => {
		try {
			const res = await fetch(api_url);
			const files: { type: string; download_url?: string; name: string }[] = await res.json();

			images = files
				.filter(
					(f) =>
						f.type === 'file' &&
						f.download_url &&
						imageExtensions.some((ext) => f.name.toLowerCase().endsWith(ext))
				)
				.map((f) => f.download_url!);

			if (!images.length) return;

			await preloadImages(images);
			await tick();

			const ticker = document.querySelector('.ticker-track') as HTMLElement;
			if (!ticker) return;

			tickerWidth = ticker.scrollWidth / 2; // width of one copy

			// Animate infinitely
			let last = performance.now();
			const animate = (now: number) => {
				const delta = (now - last) / 1000;
				last = now;

				x.update((v) => {
					let next = v - speed * delta;
					if (-next >= tickerWidth) next += tickerWidth;
					return next;
				});

				requestAnimationFrame(animate);
			};
			requestAnimationFrame(animate);
		} catch (err) {
			console.error('Failed to load images:', err);
		}
	});
</script>

<section class="relative w-full bg-white px-6 pb-24 text-gray-800">
	<div class="mx-auto max-w-3xl space-y-4 text-center">
		<h2 class="text-4xl font-extrabold text-blue-700">Dokumentasi Kunjungan</h2>
		<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-600">
			Potret kegiatan kunjungan kepada pelanggan kami.
		</p>
	</div>

	<!-- Ticker -->
	<div class="fade-mask relative mt-12 overflow-hidden">
		<div class="ticker-track flex gap-2 sm:gap-4" style="transform: translateX({$x}px);">
			{#each [...images, ...images] as img, i (i)}
				<div class="aspect-[4/5] w-60 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 sm:w-80">
					<img src={img} alt="Pelanggan" class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.fade-mask::before,
	.fade-mask::after {
		content: '';
		position: absolute;
		top: 0;
		width: 80px;
		height: 100%;
		pointer-events: none;
		z-index: 10;
	}

	.fade-mask::before {
		left: 0;
		background: linear-gradient(to right, white 0%, transparent 100%);
	}

	.fade-mask::after {
		right: 0;
		background: linear-gradient(to left, white 0%, transparent 100%);
	}
</style>
