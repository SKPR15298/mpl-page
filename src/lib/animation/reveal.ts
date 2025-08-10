// src/lib/reveal.ts
import { animate, inView, type Easing } from 'motion';

export interface RevealOptions {
	y?: number;
	delay?: number;
	duration?: number;
	easing?: Easing;
	once?: boolean;
	direction?: 'up' | 'left-to-right';
}

export function reveal(
	node: HTMLElement,
	{
		y = 20,
		delay = 0,
		duration = 0.6,
		easing = 'easeOut',
		once = true,
		direction = 'up'
	}: RevealOptions = {}
) {
	if (direction === 'left-to-right') {
		node.style.opacity = '1';
		node.style.clipPath = 'inset(0 100% 0 0)';
	} else {
		node.style.opacity = '0';
		node.style.transform = `translateY(${y}px)`;
	}

	const animateIn = () => {
		if (direction === 'left-to-right') {
			animate(
				node,
				{ clipPath: 'inset(0 0% 0 0)' },
				{
					delay,
					duration,
					ease: easing
				}
			);
		} else {
			animate(
				node,
				{ opacity: 1, transform: 'translateY(0)' },
				{
					delay,
					duration,
					ease: easing
				}
			);
		}
	};

	const stop = inView(node, () => {
		animateIn();
		if (once) stop();
	});

	return {
		destroy() {
			stop();
		}
	};
}
