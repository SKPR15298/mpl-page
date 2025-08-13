<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { writable } from 'svelte/store';

	let menuOpen = false;
	const scrolled = writable(false);

	onMount(() => {
		const onScroll = () => {
			scrolled.set(window.scrollY > 850);
		};
		window.addEventListener('scroll', onScroll);
		onScroll();

		return () => window.removeEventListener('scroll', onScroll);
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<nav
	class={`fixed inset-x-0 top-0 z-50 w-full border-b transition-colors duration-300
    ${
			$scrolled
				? 'border-gray-300 bg-white text-gray-800 shadow-sm'
				: 'border-white/10 bg-gray-600/30 text-white backdrop-blur-2xl'
		}`.trim()}
>
	<div class="mx-auto px-4 sm:px-6 md:max-w-7xl lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="flex flex-shrink-0 items-center">
				<img
					src="/images/mpl-logo.png"
					alt="PT. Murni Putra Lang Logo"
					class="h-12 w-auto md:h-20"
				/>
			</a>

			<!-- Desktop menu -->
			<div class="hidden sm:flex sm:items-center sm:gap-6">
				<a href="/" class="hover:text-brand whitespace-nowrap">Beranda</a>
				<a href="/#about" class="hover:text-brand whitespace-nowrap">Tentang Kami</a>
				<!-- svelte-ignore a11y_invalid_attribute -->
				<a href="" class="hover:text-brand whitespace-nowrap">Katalog</a>
				<a href="/#contact" class="hover:text-brand whitespace-nowrap">Kontak</a>
				<!-- WhatsApp desktop button -->
				<a
					href="https://wa.me/6281234567890"
					target="_blank"
					rel="noopener"
					class="ml-10 hidden items-center gap-2 rounded-md bg-green-400 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-green-600/20 hover:text-green-400 hover:ring-2 hover:ring-green-400 sm:flex"
				>
					<Icon icon="mdi:whatsapp" width="20" height="20" />
					Konsultasi
				</a>
			</div>

			<!-- Hamburger button -->
			<button
				type="button"
				class={`inline-flex items-center justify-center rounded-md p-2 transition duration-300 focus:outline-none sm:hidden
    ${$scrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white/20'}`}
				aria-controls="mobile-menu"
				aria-expanded={menuOpen}
				on:click={toggleMenu}
			>
				<span class="sr-only">Open main menu</span>
				{#if !menuOpen}
					<!-- Hamburger Icon -->
					<Icon icon="mdi:menu" width="24" height="24" />
				{:else}
					<!-- Close Icon -->
					<Icon icon="mdi:close" width="24" height="24" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Move this outside the inner fixed-height container -->
	{#if menuOpen}
		<div
			id="mobile-menu"
			class={`fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-b border-gray-300 px-4 pb-4 transition-colors duration-300 sm:hidden
      ${$scrolled ? 'bg-white text-gray-800' : 'bg-white/90 text-gray-800 backdrop-blur-lg'}`}
			style="will-change: backdrop-filter;"
		>
			<a
				href="/"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
			>
				Beranda
			</a>
			<a
				href="/#about"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
			>
				Tentang Kami
			</a>
			<a
				href="/#catalog"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
			>
				Katalog
			</a>
			<a
				href="/#contact"
				class="hover:text-brand block rounded px-3 py-2 text-base font-medium hover:bg-white/20"
			>
				Kontak
			</a>
			<a
				href="https://wa.me/6281234567890"
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
