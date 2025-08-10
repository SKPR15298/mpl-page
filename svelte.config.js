import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build', // fixed typo here
			fallback: 'index.html',
			precompress: true,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ status, path }) => {
				if (status === 404) {
					console.warn(`Warning: prerender could not find ${path}`);
					return 'continue';
				}
			}
		}
		// Remove ssr from here
	}
};

export default config;
