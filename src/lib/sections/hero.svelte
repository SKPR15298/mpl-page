<script>
	import { reveal } from '$lib/animation/reveal';
	import Icon from '@iconify/svelte';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat pb-24 sm:pb-32"
	style="background-image: url('/images/hero.jpg');"
>
	<!-- Dark Overlay -->
	<div class="absolute inset-0 z-0 bg-black/20"></div>

	<!-- Blueish Gradient Ambient Overlay -->
	<div
		class="absolute inset-x-0 bottom-0 z-0 h-full max-h-[50dvh] bg-gradient-to-t from-blue-500/40 via-blue-400/20 to-transparent"
	></div>

	<!-- Hero Content -->
	<div
		class="relative z-10 mt-[-30px] flex max-w-7xl flex-col items-center justify-center gap-3 px-6 text-center sm:mt-[-60px] sm:gap-4 sm:px-0"
	>
		<p
			use:reveal
			class="flex max-w-screen-2xl items-center justify-center gap-2 rounded-full border-2 border-white
         bg-white/30 px-3 py-1.5 text-xs leading-loose leading-relaxed font-semibold
         text-white drop-shadow-[0_2px_2px_rgba(0,0,139,0.5)] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
		>
			<span>
				<Icon icon="mdi:location" />
			</span>
			Your Surgical Instruments Specialist
		</p>

		<h1
			use:reveal={{ delay: 0.2 }}
			class="text-2xl leading-snug font-bold text-white sm:text-4xl md:text-5xl md:leading-tight"
		>
			Kesulitan Mendapatkan Alat Bedah Berkualitas? <br /> Kami hadir untuk menjawab kebutuhan Anda.
		</h1>
	</div>

	<!-- Divider Line -->
	<div
		use:reveal={{ delay: 0.3 }}
		class="z-10 mt-6 h-1.5 w-3/4 max-w-2xl bg-white/80 sm:mt-8 sm:h-2"
	></div>

	<!-- Buttons Section -->
	<div
		use:reveal={{ delay: 0.4 }}
		class="mt-12 flex w-full max-w-md flex-col items-center justify-center gap-4 px-6 sm:max-w-2xl sm:flex-row sm:px-0"
	>
		<!-- Katalog Produk Button (Blue Glass) -->
		<button
			class="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-gradient-to-br from-[#3f89ff33] to-[#0044ff33] px-6 py-3 text-base font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:from-[#3f89ff55] hover:to-[#0044ff55] hover:shadow-[0_8px_32px_rgba(0,68,255,0.3)] active:scale-[0.97] sm:w-auto"
		>
			<Icon
				icon="mdi:cart"
				class="text-xl transition-transform duration-300 group-hover:rotate-6"
			/>
			<span>Katalog Produk</span>
		</button>

		<!-- Pesan Sekarang Button (Lime Green Glass) -->
		<button
			class="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-gradient-to-br from-[#00ff8033] to-[#00cc6633] px-6 py-3 text-base font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:from-[#00ff8055] hover:to-[#00cc6655] hover:shadow-[0_8px_32px_rgba(0,204,102,0.3)] active:scale-[0.97] sm:w-auto"
		>
			<Icon
				icon="fluent-chat-16-filled"
				class="text-xl transition-transform duration-300 group-hover:rotate-6"
			/>
			<span>Pesan Sekarang</span>
		</button>
	</div>

	<!-- Trusted by Companies Section -->
	<div class="absolute bottom-16 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 px-6 md:px-12">
		<div class="flex flex-col items-center justify-center gap-3">
			<p class="text-sm font-medium text-white/80">
				Dipercaya oleh rumah sakit & institusi kesehatan ternama
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
				<div
					alt="Company 1"
					class="h-6 bg-gray-200 opacity-80 grayscale transition hover:grayscale-0 md:h-8"
				/>
				<div
					alt="Company 2"
					class="h-6 bg-gray-200 opacity-80 grayscale transition hover:grayscale-0 md:h-8"
				/>
				<div
					alt="Company 3"
					class="h-6 bg-gray-200 opacity-80 grayscale transition hover:grayscale-0 md:h-8"
				/>
				<div
					alt="Company 4"
					class="h-6 bg-gray-200 opacity-80 grayscale transition hover:grayscale-0 md:h-8"
				/>
			</div>
		</div>
	</div>
</section>
