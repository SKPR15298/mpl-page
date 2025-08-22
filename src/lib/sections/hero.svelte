<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { onMount, tick } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';
	import { openWhatsApp } from '$lib/function/order_template';

	const api_url = 'https://api.github.com/repos/murniputralang/foto-mpl/contents/merk?ref=main';
	const speed = 50;

	let x = tweened(0, { duration: 0, easing: cubicOut });
	let images: string[] = [];
	const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
	let tickerWidth = 0;

	onMount(async () => {
		// Fetch logos from GitHub
		const res = await fetch(api_url);
		const files = await res.json();

		images = files
			.filter(
				(f: any) =>
					f.type === 'file' &&
					f.download_url &&
					imageExtensions.some((ext) => f.name.toLowerCase().endsWith(ext))
			)
			.map((f: any) => f.download_url);

		if (images.length === 0) return;

		await tick();
		const ticker = document.querySelector('.ticker-track') as HTMLElement;
		if (!ticker) return;

		// Duplicate until ticker is wide enough
		while (ticker.scrollWidth < window.innerWidth * 2) {
			images = [...images, ...images];
			await tick();
			tickerWidth = ticker.scrollWidth / 2;
		}
		tickerWidth = ticker.scrollWidth / 2;

		// Animate ticker
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
	});
</script>

<section
	class="relative flex min-h-screen w-full flex-col bg-cover bg-center bg-no-repeat"
	style="background-image: url('/images/hero.jpg');"
>
	<!-- Dark Overlay -->
	<div class="absolute inset-0 z-0 bg-black/35"></div>

	<!-- Blueish Gradient Ambient Overlay -->
	<div
		class="absolute inset-x-0 bottom-0 z-0 h-full max-h-[50dvh] bg-gradient-to-t from-blue-500/40 via-blue-400/20 to-transparent"
	></div>

	<!-- Hero Content (Centered) -->
	<div
		class="relative z-10 flex flex-grow flex-col items-center justify-center px-6 text-center sm:px-0"
	>
		<div class="gap-2">
			<h1
				class="text-2xl leading-snug font-bold text-white sm:text-4xl md:text-5xl md:leading-tight"
			>
				Kesulitan Mendapatkan Alat Bedah Berkualitas? <br /> Kami hadir untuk menjawab kebutuhan Anda.
			</h1>
			<p class="font-base mt-2 text-xl font-semibold text-white italic sm:text-3xl">
				PT Murni Putra Lang - Distributor Instrument Bedah
			</p>
		</div>

		<!-- Buttons Section -->
		<div
			class="mt-12 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:max-w-2xl sm:flex-row"
		>
			<a
				href="https://drive.google.com/drive/folders/1lZQxjbe19bRYQrn3dTEY6Dhshe8HqP8X?usp=share_link"
				class="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-gradient-to-br from-[#3f89ff33] to-[#0044ff33] px-6 py-3 text-base font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:from-[#3f89ff55] hover:to-[#0044ff55] hover:shadow-[0_8px_32px_rgba(0,68,255,0.3)] active:scale-[0.97] sm:w-auto"
			>
				<Icon
					icon="mdi:cart"
					class="text-xl transition-transform duration-300 group-hover:rotate-6"
				/>
				<span>Katalog Produk</span>
			</a>

			<button
				on:click={() => openWhatsApp('order')}
				class="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/20 bg-gradient-to-br from-[#00ff8033] to-[#00cc6633] px-6 py-3 text-base font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:from-[#00ff8055] hover:to-[#00cc6655] hover:shadow-[0_8px_32px_rgba(0,204,102,0.3)] active:scale-[0.97] sm:w-auto"
			>
				<Icon
					icon="fluent-chat-16-filled"
					class="text-xl transition-transform duration-300 group-hover:rotate-6"
				/>
				<span>Pesan Sekarang</span>
			</button>
		</div>
	</div>

	<!-- Trusted by Companies Section -->
	<div class="absolute bottom-16 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 px-6 md:px-12">
		<div class="flex flex-col items-center justify-center gap-3">
			<p class="text-sm font-medium text-white/80">Menyediakan Merk:</p>

			<!-- Ticker Wrapper -->
			<div class="relative w-full max-w-md overflow-hidden">
				<div class="ticker-track flex gap-2" style="transform: translateX({$x}px);">
					{#each images as img, i (img + '-' + i)}
						<div class="h-6 w-24 flex-shrink-0 overflow-hidden rounded-xl md:h-8">
							<img src={img} alt="Logo" class="h-full w-full object-contain" />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.ticker-track {
		display: flex;
	}
</style>
