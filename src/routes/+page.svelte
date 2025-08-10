<script>
	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Vision from '$lib/sections/vision.svelte';
	import Value from '$lib/sections/value.svelte';
	import Service from '$lib/sections/service.svelte';
	import CTA from '$lib/sections/cta.svelte';
	import Outlet from '$lib/sections/outlet.svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<Hero />
	<About />
	<Vision />
	<Value />
	<Service />
	<CTA />
	<Outlet />
</div>
