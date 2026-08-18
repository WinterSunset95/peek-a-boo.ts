import { TMDB } from "./src";
import * as util from 'util';
const TMDB_API_KEY = process.env.TMDB_API_KEY || 'efe0d01423f29d0dd19e4a7e482b217b';
const tmdb = new TMDB(TMDB_API_KEY, 'https://proud-bar-19c9.wintersunset95.workers.dev/');
// const tmdb = new TMDB(TMDB_API_KEY, '');

async function run() {
  console.log("Testing getTrendingMovies()")
  const res = await tmdb.getTrendingMovies();
  console.log(util.inspect(res, {showHidden: false, depth: null, colors: true}))
}

run()
