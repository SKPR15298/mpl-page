<script>
	import Icon from '@iconify/svelte';
</script>

<section class="relative w-full bg-gradient-to-b from-blue-600 to-blue-800 px-6 py-24 text-white">
	<div class="mx-auto max-w-7xl space-y-4 text-center">
		<h2 class="text-3xl font-extrabold">Nilai-Nilai Inti yang Menjadi Fondasi Kami</h2>
		<p class="mx-auto max-w-3xl leading-relaxed text-blue-100">
			Kami berpegang pada prinsip yang kuat untuk memastikan setiap produk, layanan, dan interaksi
			mencerminkan standar tertinggi dalam dunia medis.
		</p>
	</div>

	<!-- Cards -->
	<div
		class="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 text-justify md:grid-cols-2 lg:grid-cols-2"
	>
		<!-- Card 1 -->
		<div
			class="group rounded-xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl"
		>
			<Icon
				icon="mdi-lightbulb-on"
				class="mb-4 text-4xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
			/>
			<h3 class="text-lg font-semibold text-white">Inovasi Berkelanjutan</h3>
			<p class="mt-2 text-sm leading-relaxed text-blue-100">
				Kami terus mengikuti perkembangan teknologi medis terbaru untuk menghadirkan solusi yang
				relevan dan efektif.
			</p>
		</div>

		<!-- Card 2 -->
		<div
			class="group rounded-xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl"
		>
			<Icon
				icon="mdi-shield-check"
				class="mb-4 text-4xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
			/>
			<h3 class="text-lg font-semibold text-white">Keandalan dan Kepercayaan</h3>
			<p class="mt-2 text-sm leading-relaxed text-blue-100">
				Kami berkomitmen membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan,
				responsivitas, dan layanan prima.
			</p>
		</div>

		<!-- Card 3 -->
		<div
			class="group rounded-xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl"
		>
			<Icon
				icon="mdi-account-tie"
				class="mb-4 text-4xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
			/>
			<h3 class="text-lg font-semibold text-white">Profesionalisme</h3>
			<p class="mt-2 text-sm leading-relaxed text-blue-100">
				Setiap anggota tim kami bekerja dengan integritas, dedikasi, dan pemahaman mendalam tentang
				kebutuhan industri kesehatan.
			</p>
		</div>

		<!-- Card 4 -->
		<div
			class="group rounded-xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl"
		>
			<Icon
				icon="mdi-certificate"
				class="mb-4 text-4xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
			/>
			<h3 class="text-lg font-semibold text-white">Kualitas Tanpa Kompromi</h3>
			<p class="mt-2 text-sm leading-relaxed text-blue-100">
				Kami menyediakan produk yang telah teruji, tersertifikasi, dan memenuhi standar kualitas
				internasional.
			</p>
		</div>
	</div>
</section>
