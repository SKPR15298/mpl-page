<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { writable } from 'svelte/store';
	import { openWhatsApp } from '$lib/function/order_template';

	let menuOpen = false;
	const scrolled = writable(false);

	onMount(() => {
		const onScroll = () => {
			scrolled.set(window.scrollY > 50);
		};
		window.addEventListener('scroll', onScroll);
		onScroll(); // initialize
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<!-- Announcement Bar -->
<div
	class="fixed inset-x-0 top-0 z-50 flex w-full bg-blue-700 shadow-sm transition-all duration-300"
	class:translate-y-[-100%]={$scrolled}
	class:opacity-0={$scrolled}
	style="height: 48px;"
>
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 text-sm text-white">
		<span class="truncate overflow-hidden text-center font-medium sm:text-left">
			PT. Murni Putra Lang – Distributor Instrument Bedah
		</span>

		<!-- Contact links hidden on small screens -->
		<div class="hidden flex-col items-center gap-2 sm:flex sm:flex-row sm:gap-6">
			<a href="tel:+6281234567890" class="flex items-center gap-2 hover:underline">
				<Icon icon="mdi:phone" class="text-lg" />
				<span>+62 812-3456-7890</span>
			</a>
			<a href="mailto:info@murniputralang.com" class="flex items-center gap-2 hover:underline">
				<Icon icon="material-symbols:mail" class="text-lg" />
				<span>adm.murniputralang@gmail.com</span>
			</a>
		</div>
	</div>
</div>

<!-- Navbar -->
<nav
	class="fixed inset-x-0 z-40 w-full border-b border-gray-300 bg-white py-2 text-gray-800 shadow-sm transition-all duration-300"
	style="top: {$scrolled ? '0px' : '48px'}"
>
	<div class="mx-auto px-4 sm:px-6 md:max-w-7xl lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="flex flex-shrink-0 items-center">
				<img
					src="/images/mpl-logo.png"
					alt="PT. Murni Putra Lang Logo"
					class="h-12 w-auto md:h-25"
				/>
			</a>

			<!-- Desktop menu -->
			<div class="hidden sm:flex sm:items-center sm:gap-6">
				<a href="/" class="whitespace-nowrap transition duration-200 hover:text-blue-600">Beranda</a
				>
				<a href="/#about" class="whitespace-nowrap transition duration-200 hover:text-blue-600"
					>Tentang Kami</a
				>
				<a href="" class="whitespace-nowrap transition duration-200 hover:text-blue-600">Katalog</a>
				<a href="/#contact" class="whitespace-nowrap transition duration-200 hover:text-blue-600"
					>Kontak</a
				>

				<button
					on:click={() => openWhatsApp('consultation')}
					class="ml-10 hidden items-center gap-2 rounded-md bg-green-400 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-green-400 hover:ring-2 hover:ring-green-400 sm:flex"
				>
					<Icon icon="mdi:whatsapp" width="20" height="20" />
					Konsultasi
				</button>
			</div>

			<!-- Hamburger button -->
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md p-2 text-gray-800 transition duration-300 hover:bg-gray-200 focus:outline-none sm:hidden"
				aria-controls="mobile-menu"
				aria-expanded={menuOpen}
				on:click={toggleMenu}
			>
				<span class="sr-only">Open main menu</span>
				{#if !menuOpen}
					<Icon icon="mdi:menu" width="24" height="24" />
				{:else}
					<Icon icon="mdi:close" width="24" height="24" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div
			id="mobile-menu"
			class="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-b border-gray-300 bg-white px-4 pb-4 text-gray-800 transition-colors duration-300 sm:hidden"
		>
			<a
				href="/"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
				>Beranda</a
			>
			<a
				href="/#about"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
				>Tentang Kami</a
			>
			<a
				href="/#catalog"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
				>Katalog</a
			>
			<a
				href="/#contact"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
				>Kontak</a
			>
			<a
				href="https://wa.me/6285142528672?text=Halo%20MPL,%20saya%20ingin%20konsultasi%20tentang%20produk%20yang%20Anda%20tawarkan."
				target="_blank"
				rel="noopener"
				class="mt-2 flex items-center gap-2 rounded-md bg-green-400 px-4 py-2 text-base font-semibold text-white transition duration-300 hover:bg-green-600/20 hover:text-green-400 hover:ring-2 hover:ring-green-400"
			>
				<Icon icon="mdi:whatsapp" width="20" height="20" />
				Konsultasi
			</a>
		</div>
	{/if}
</nav>
