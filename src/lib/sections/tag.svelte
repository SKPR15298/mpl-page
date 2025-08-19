<script lang="ts">
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let targetRef: HTMLElement;

	// Slower springs
	let scrollYProgress = spring(0, { stiffness: 0.05, damping: 0.3 });
	let scrollVelocity = spring(0, { stiffness: 0.05, damping: 0.3 });

	let skewX = spring(0, { stiffness: 0.08, damping: 0.35 });
	let x = spring(0, { stiffness: 0.08, damping: 0.35 });

	let lastProgress = 0;

	onMount(() => {
		const onScroll = () => {
			if (!targetRef) return;

			const rect = targetRef.getBoundingClientRect();
			const progress = Math.min(
				Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight), 0),
				1
			);

			scrollYProgress.set(progress);

			// Calculate velocity & clamp it for smoothness
			let velocity = progress - lastProgress;
			velocity = Math.max(Math.min(velocity, 0.25), -0.25);

			scrollVelocity.set(velocity);
			lastProgress = progress;

			// Lower skew multiplier for softer tilt
			skewX.set(velocity * -30);

			// Reduce x travel & add easing
			const easedProgress = progress ** 1.5; // ease-out
			x.set(easedProgress * -1500);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<section bind:this={targetRef} class="bg-blue-600 text-blue-600">
	<div class="sticky top-0 flex items-center overflow-hidden py-8">
		<p
			class="text-md origin-bottom-left leading-[0.85] font-black whitespace-nowrap text-white uppercase md:text-2xl md:leading-[0.85]"
			style="transform: skewX({$skewX}deg) translateX({$x}px);"
		>
			Your Surgical Instruments Specialist. Your Surgical Instruments Specialist. Your Surgical
			Instruments Specialist. Your Surgical Instruments Specialist. Your Surgical Instruments
			Specialist. Your Surgical Instruments Specialist. Your Surgical Instruments Specialist. Your
			Surgical Instruments Specialist. Your Surgical Instruments Specialist.
		</p>
	</div>
</section>
