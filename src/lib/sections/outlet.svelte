<script lang="ts">
	const hospitals: string[] = [
		'RSUD Grati',
		'RSUD Dr. Saiful Anwar',
		'RSUD TONGAS',
		'RSUD Besuki',
		'RSDKT JEMBER',
		'RSUD DR Koesnadi',
		'RS LAVALETTE',
		'RS PRASETYA HUSADA',
		'RS Rizani',
		'RSUD MALANG',
		'RSUD LAWANG',
		'RSIA GALERI CANDRA',
		'RS BAPTIS BATU',
		'RSI AISYIYAH',
		'RS PINDAD TUREN',
		'RS DEA',
		'RS MARINIR EWA PANGGALILA',
		'RS PANTI NIRMALA',
		'RSUD ARROZY',
		'RS PUTRA WASPADA'
	];
</script>

<section class="relative w-full bg-white px-6 py-24 text-gray-800">
	<div class="mx-auto max-w-3xl space-y-4 text-center">
		<h2 class="text-4xl font-extrabold text-blue-700">Outlet Kami</h2>
		<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-600">
			Ketahui jam kerja dan lokasi kami – konsultasikan kebutuhan kamu
		</p>
	</div>

	<!-- Scrollable minimalist list -->
	<div
		class="mx-auto mt-8 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-sm"
		style="max-height: calc(5 * 3rem);"
	>
		<ul class="flex flex-col divide-y divide-gray-100">
			{#each hospitals as name}
				<li
					class="flex cursor-pointer items-center justify-center px-4 py-3 text-center text-lg font-medium text-gray-800 transition hover:bg-blue-50"
					title={name}
				>
					{name}
				</li>
			{/each}
		</ul>
	</div>
</section>
