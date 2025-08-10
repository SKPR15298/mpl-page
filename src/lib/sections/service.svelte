<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
</script>

<section class="relative w-full bg-white px-6 py-24 text-gray-800">
	<!-- Section Heading -->
	<div class="mx-auto max-w-7xl space-y-4 text-center">
		<h2 class="text-4xl font-extrabold text-blue-700">Informasi Pelayanan</h2>
		<p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
			Ketahui jam kerja, lokasi, dan kontak kami untuk konsultasi kebutuhan Anda.
		</p>
	</div>

	<!-- Cards -->
	<div class="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
		<!-- Jam Operasional -->
		<div
			class="group rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
		>
			<Icon
				icon="mdi-clock-outline"
				class="mb-6 text-5xl text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
			/>
			<h3 class="text-xl font-semibold text-gray-900">Jam Operasional</h3>
			<ul class="mt-3 space-y-1 text-base leading-relaxed text-gray-600">
				<li>Senin - Jumat: 08.00 - 16.00 WIB</li>
				<li>Sabtu: 08.00 - 13.00 WIB</li>
			</ul>
		</div>

		<!-- Alamat -->
		<div
			class="group rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
		>
			<Icon
				icon="mdi-map-marker"
				class="mb-6 text-5xl text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
			/>
			<h3 class="text-xl font-semibold text-gray-900">Alamat</h3>
			<p class="mt-3 text-base leading-relaxed text-gray-600">
				Raya Langlang IV No.230, Singosari, Malang, Jawa Timur
			</p>
		</div>

		<!-- Kontak -->
		<div
			class="group rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
		>
			<Icon
				icon="mdi-phone"
				class="mb-6 text-5xl text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
			/>
			<h3 class="text-xl font-semibold text-gray-900">Kontak Kami</h3>
			<ul class="mt-3 space-y-2 text-base leading-relaxed text-gray-600">
				<li>+62 898-3230-058 (ISNAINI)</li>
				<li>+62 851-4252-8672 (GITA)</li>
				<li class="flex items-center gap-2">
					<Icon icon="mdi-email" class="text-lg text-blue-600" />
					ptmurniputralang@gmail.com
				</li>
				<li class="flex items-center gap-2">
					<Icon icon="mdi-email" class="text-lg text-blue-600" />
					adm.murniputralang@gmail.com
				</li>
			</ul>
		</div>
	</div>

	<!-- Map -->
	<div class="mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-gray-100 shadow-lg">
		<!-- svelte-ignore a11y_missing_attribute -->
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.1987706138099!2d112.62505034947633!3d-7.883129524029042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62bd8160a1c4f%3A0xa4fdaac6a780401!2sPT%20Murni%20Putra%20Lang!5e0!3m2!1sid!2sid!4v1754740508565!5m2!1sid!2sid"
			class="h-[450px] w-full"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</section>
