<script>
	// @ts-nocheck

	import { reveal } from '$lib/animation/reveal';
	import Icon from '@iconify/svelte';
</script>

<section
	id="about"
	class="relative flex min-h-[50dvh] w-full items-center justify-center bg-[#fafafa] px-6"
>
	<div class="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
		<!-- Left Column -->
		<div class="mt-12 space-y-2 md:mt-0">
			<!-- Pill -->
			<p class="text-2xl font-semibold text-blue-600 italic backdrop-blur-sm"># Tentang Kami</p>

			<div class="space-y-6">
				<!-- Heading -->
				<h2 use:reveal class="text-3xl font-extrabold text-gray-900 md:text-4xl">
					Kenali lebih dalam!
				</h2>

				<!-- Description -->
				<p class="text-justify leading-relaxed text-gray-600">
					<span class="font-bold text-blue-600 hover:underline">PT. Murni Putra Lang (MPL)</span>
					adalah distributor instrumen bedah yang berbasis di Kabupaten Malang, Jawa Timur. Kami menyediakan
					produk berkualitas – AKL (Jerman & Pakistan) serta TKDN – untuk memenuhi kebutuhan Rumah Sakit,
					Puskesmas, dan fasilitas kesehatan di seluruh Indonesia.
				</p>

				<p class="text-justify leading-relaxed text-gray-600">
					Dengan pengalaman luas dan layanan yang responsif, kami menghadirkan solusi alat bedah
					dalam berbagai merek dan kelas (set maupun ecer), dengan komitmen pada ketepatan,
					kecepatan, dan kepuasan pelanggan.
				</p>
			</div>
		</div>

		<!-- Right Column (Image) -->
		<div
			class="w-full overflow-hidden rounded-xl border border-gray-200 shadow-md md:ml-auto md:max-w-[450px]"
		>
			<!-- svelte-ignore a11y_missing_attribute -->
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1754736344706!6m8!1m7!1sn_Sq6Iyu8PyFOEUlKSZBmQ!2m2!1d-7.883155676541995!2d112.6253202301195!3f47.22650516441682!4f7.475963641555822!5f0.4894256567630373"
				class="h-[300px] w-full"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</section>
