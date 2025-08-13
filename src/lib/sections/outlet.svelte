<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let showAll = false;
	let isDesktop = false;
	let visibleLogos: string[] = [];

	const logos: string[] = [
		'/logos/1.png',
		'/logos/2.png',
		'/logos/3.png',
		'/logos/4.png',
		'/logos/5.png',
		'/logos/6.png',
		'/logos/7.png',
		'/logos/8.png',
		'/logos/9.png',
		'/logos/10.png',
		'/logos/11.png',
		'/logos/12.png',
		'/logos/13.png',
		'/logos/14.png',
		'/logos/15.png',
		'/logos/16.png',
		'/logos/17.png',
		'/logos/18.png',
		'/logos/19.png',
		'/logos/20.png'
	];

	function updateIsDesktop() {
		isDesktop = window.innerWidth >= 768;
		visibleLogos = isDesktop || showAll ? logos : logos.slice(0, 6);
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			updateIsDesktop();
			window.addEventListener('resize', updateIsDesktop);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', updateIsDesktop);
		}
	});

	function toggleShow() {
		showAll = !showAll;
		visibleLogos = showAll || isDesktop ? logos : logos.slice(0, 6);
	}
</script>

<section class="relative w-full bg-white px-6 py-24 text-gray-800">
	<div class="mx-auto max-w-3xl space-y-4 text-center">
		<h2 class="text-4xl font-extrabold text-blue-700">Pelanggan Kami</h2>
		<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-600">
			Kenali pelanggan kami yang telah mempercayakan layanan kami kepada mereka.
		</p>
	</div>

	<!-- Logo Grid -->
	<div
		class="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
	>
		{#each visibleLogos as logo}
			<div
				class=" flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl
					  transition-all duration-500
					ease-out"
			>
				<img
					src={logo}
					alt="Hospital Logo"
					class="max-h-full max-w-full object-contain p-4"
					loading="lazy"
				/>
			</div>
		{/each}
	</div>

	<!-- Show more button ONLY on mobile -->
	{#if !isDesktop}
		<div class="mt-8 text-center">
			<button on:click={toggleShow} class="rounded-lg px-5 py-2 text-blue-700">
				{showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Semua'}
			</button>
		</div>
	{/if}
</section>

<style>
	img[loading='lazy'] {
		opacity: 0;
		transition: opacity 0.4s ease;
	}
	img[loading='lazy']:not([src='']) {
		opacity: 1;
	}
</style>
