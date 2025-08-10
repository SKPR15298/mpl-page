<script>
	import { reveal } from '$lib/animation/reveal';
	import Icon from '@iconify/svelte';
</script>

<section class="relative w-full bg-[#fafafa] px-6 pb-24">
	<div class="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-[30%_70%]">
		<!-- Left Image -->
		<div class="mt-12 flex justify-center md:mt-0 md:justify-start">
			<img
				src="/images/person.png"
				alt="Founder"
				class="h-auto max-w-sm object-contain md:max-w-full"
			/>
		</div>

		<!-- Right Content (Visi + Misi stacked) -->
		<div class="space-y-6">
			<!-- Visi -->
			<div class="space-y-4 text-justify">
				<h4 use:reveal class="text-2xl font-semibold text-blue-600 italic backdrop-blur-sm">
					# Visi Misi
				</h4>
				<h2 class="text-4xl font-extrabold text-gray-900">Komitmen kami sepenuh hati!</h2>
				<p class="leading-relaxed text-gray-700">
					Menjadi distributor instrumen bedah terkemuka di Indonesia yang membawahi beberapa merk,
					mulai dari kualitas premium, middle class dan ekonomis (low price).
				</p>
				<p class="leading-relaxed text-gray-700">
					Dengan mengutamakan kecocokan barang dan kecepatan pengiriman.
				</p>
			</div>

			<!-- Misi -->
			<div class="grid grid-cols-1 gap-6 text-justify sm:grid-cols-2 lg:grid-cols-3">
				<!-- Card 1 -->
				<div
					class="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-md transition hover:shadow-xl"
				>
					<Icon icon="mdi-stethoscope" class="mb-4 text-3xl" />
					<p class="mb-2 font-bold">Menyediakan instrumen bedah</p>
					<p class="text-sm leading-relaxed opacity-90">
						Dengan berbagai merk kualitas premium, middle class, dan ekonomis. Terdiri dari AKL dan
						TKDN.
					</p>
				</div>
				<!-- Card 2 -->
				<div
					class="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-md transition hover:shadow-xl"
				>
					<Icon icon="mdi-headset" class="mb-4 text-3xl" />
					<p class="mb-2 font-bold">Memberikan pelayanan optimal</p>
					<p class="text-sm leading-relaxed opacity-90">
						Fokus pada kecocokan barang dan kecepatan pengiriman.
					</p>
				</div>
				<!-- Card 3 -->
				<div
					class="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-md transition hover:shadow-xl"
				>
					<Icon icon="mdi-handshake" class="mb-4 text-3xl" />
					<p class="mb-2 font-bold">Membangun kerja sama yang baik</p>
					<p class="text-sm leading-relaxed opacity-90">
						Dengan Rumah Sakit, Klinik, dan fasilitas kesehatan, serta memberi jaminan mutu terbaik.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
