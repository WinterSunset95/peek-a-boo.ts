import { describe, it, expect, beforeAll } from 'vitest';
import { TMDB } from '../src/index'; // Adjust path based on your structure

// Note: You need to provide a real TMDB API key to run these tests.
// Don't hardcode it; pull it from the environment.
const TMDB_API_KEY = process.env.TMDB_API_KEY || 'efe0d01423f29d0dd19e4a7e482b217b';

describe('TMDB Class', () => {
	let tmdb: TMDB;

	beforeAll(() => {
		// Initialize without an app proxy for testing
		// tmdb = new TMDB(TMDB_API_KEY, 'https://api.allorigins.win/raw?url=');
		tmdb = new TMDB(TMDB_API_KEY, 'https://proud-bar-19c9.wintersunset95.workers.dev/');
	});

	describe('Movie Endpoints', () => {
		it('should fetch trending movies', async () => {
			const result = await tmdb.getTrendingMovies();

			expect(result.peek).toBe(true);
			// Check that 'boo' is an array and has items
			expect(Array.isArray(result.boo)).toBe(true);
			expect(result.boo.length).toBeGreaterThan(0);
			
			// Verify the shape of the parsed data
			const firstMovie = result.boo[0];
			expect(firstMovie).toHaveProperty('Id');
			expect(firstMovie).toHaveProperty('Title');
		});

		it('should search for a specific movie', async () => {
			const result = await tmdb.searchMovie('Inception');

			expect(result.peek).toBe(true);
			expect(result.boo.length).toBeGreaterThan(0);
			
			// Verify the shape of the parsed data
			const firstMovie = result.boo[0];
			expect(firstMovie).toHaveProperty('Id');
			expect(firstMovie).toHaveProperty('Title');
		});

		it('should get movie info for a valid ID', async () => {
			// 27205 is the TMDB ID for Inception
			const result = await tmdb.getMovieInfo('27205');

			expect(result.peek).toBe(true);
			// @ts-ignore - TS might complain since boo can be a string on failure
			expect(result.boo.Title).toBe('Inception');
		});

		it('should fail gracefully for an invalid movie ID', async () => {
			const result = await tmdb.getMovieInfo('invalid_id_99999');

			expect(result.peek).toBe(false);
			expect(typeof result.boo).toBe('string');
		});
	});

	describe('Static Embed Generators', () => {
		it('should return movie embed links synchronously', () => {
			const result = tmdb.getMovieEmbeds('27205');

			expect(result.peek).toBe(true);
			expect(Array.isArray(result.boo)).toBe(true);
			// @ts-ignore
			expect(result.boo[0].url).toContain('27205');
		});
	});
});
