<script lang="ts">
	import { openWhatsApp } from '$lib/function/order_template';
</script>

<section class="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row md:px-12"
	>
		<!-- Left Content -->
		<div class="mt-16 max-w-lg flex-1 text-center md:mt-0 md:text-left">
			<h1 class="text-3xl leading-tight font-bold md:text-5xl">
				Cari kebutuhan kamu di katalog <br />
				yang kami sediakan
			</h1>
			<p class="mt-4 text-lg text-blue-100">
				Butuh perlengkapan Bedah? No worries.. Kami ada untuk kamu!
			</p>
			<div class="mt-6 flex justify-center gap-4 md:justify-start">
				<a
					href="https://drive.google.com/drive/folders/1lZQxjbe19bRYQrn3dTEY6Dhshe8HqP8X?usp=share_link"
					class="rounded-lg bg-white px-5 py-3 font-medium text-blue-700 shadow transition-colors duration-200 hover:bg-blue-50"
				>
					Cek katalog
				</a>
				<button
					on:click={() => openWhatsApp('askAdmin')}
					class="cursor-pointer rounded-lg bg-blue-400 px-5 py-3 font-medium text-white shadow transition-colors duration-200 hover:bg-blue-300/60"
				>
					Hubungi admin
				</button>
			</div>
		</div>

		<!-- Right Image -->
		<div class="relative mt-8 flex flex-1 justify-center md:mt-0 md:justify-end">
			<img
				src="/images/person2.png"
				alt="Founder"
				class="h-auto max-w-sm object-contain md:max-w-full"
			/>
		</div>
	</div>
</section>
