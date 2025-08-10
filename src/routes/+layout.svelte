<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/layout/navbar.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/layout/footer.svelte';
	export const ssr = false;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative">
	<Navbar />
	<main>
		<slot />
	</main>

	<Footer />
</div>
