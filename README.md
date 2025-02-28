# peek-a-boo.ts
Search and stream movies, tv shows, anime and dramas from more than 10 different sources

## Quick Start
### Installation
```
# npm
npm install peek-a-boo.ts@latest

# yarn
yarn add peek-a-boo.ts@latest
```
### Usage
Each provider is put in its own class
```ts
import { TMDB, Gogo } from "peek-a-boo.ts"

// TMDB provider requires an api key. proxy is optional
const tmdbProvider = new TMDB(tmdbApiKey, proxy);
const animeProvider = new Gogo();

async function loadData() {
    const trendingAnime = await animeProvider.getTrending();
    const trendingMovies = await tmdbProvider.getTrendingMovies();
    // Both of the above will return data of type PeekABoo<MovieSearchResult[]>
}
```

For more information, please refer to the [documentation](/docs/globals.md)
