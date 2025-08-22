<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/layout/navbar.svelte';
	import favicon from '$lib/assets/favicon.ico';
	import apple_touch_icon from '$lib/assets/apple-touch-icon.png';
	import fav32 from '$lib/assets/favicon-32x32.png';
	import fav16 from '$lib/assets/favicon-16x16.png';
	import manifest from '$lib/assets/site.webmanifest';
	import Footer from '$lib/layout/footer.svelte';

	export const ssr = false;

	// ✅ Company info
	const siteName = 'Murni Putra Lang';
	const title = 'Murni Putra Lang – Distributor Instrumen Bedah';
	const description =
		'Murni Putra Lang adalah distributor instrumen bedah di Indonesia yang berbasis di Malang, Jawa Timur. Menyediakan perlengkapan kesehatan untuk rumah sakit, klinik, dan tenaga medis dengan standar internasional maupun nasional.';
	const url = 'https://murniputralang.com';
</script>

<svelte:head>
	<!-- Basic -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="PT. Murni Putra Lang, distributor alat bedah, instrumen medis, alat kesehatan, alat operasi, perlengkapan rumah sakit, alat medis Indonesia"
	/>
	<meta name="author" content={siteName} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Favicons -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" sizes="180x180" href={apple_touch_icon} />
	<link rel="icon" type="image/png" sizes="32x32" href={fav32} />
	<link rel="icon" type="image/png" sizes="16x16" href={fav16} />
	<link rel="manifest" href={manifest} />

	<!-- Theme -->
	<meta name="theme-color" content="#0a3d62" />
</svelte:head>

<div class="relative">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
