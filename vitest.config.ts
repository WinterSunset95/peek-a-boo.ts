import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		// Just having this file here stops Vite from crawling up to SvelteTube
		environment: 'node',
    setupFiles: ['./test/setup.ts'],
    exclude: [...configDefaults.exclude, '.direnv/**'],
	}
});
