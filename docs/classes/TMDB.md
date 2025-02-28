[**peek-a-boo.ts**](../README.md)

***

[peek-a-boo.ts](../globals.md) / TMDB

# Class: TMDB

Defined in: [src/movies/tmdb.ts:6](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L6)

## Constructors

### new TMDB()

> **new TMDB**(`key`, `proxy`): [`TMDB`](TMDB.md)

Defined in: [src/movies/tmdb.ts:20](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L20)

#### Parameters

##### key

`string`

##### proxy

`string`

#### Returns

[`TMDB`](TMDB.md)

## Properties

### appProxy

> **appProxy**: `string`

Defined in: [src/movies/tmdb.ts:8](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L8)

***

### movieInfo()

> **movieInfo**: (`id`) => `string`

Defined in: [src/movies/tmdb.ts:12](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L12)

#### Parameters

##### id

`string`

#### Returns

`string`

***

### moviePopular

> **moviePopular**: `string`

Defined in: [src/movies/tmdb.ts:10](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L10)

***

### movieSearch

> **movieSearch**: `string`

Defined in: [src/movies/tmdb.ts:11](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L11)

***

### movieSimilar()

> **movieSimilar**: (`id`) => `string`

Defined in: [src/movies/tmdb.ts:18](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L18)

#### Parameters

##### id

`string`

#### Returns

`string`

***

### movieTrending

> **movieTrending**: `string`

Defined in: [src/movies/tmdb.ts:9](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L9)

***

### tmdbApiKey

> **tmdbApiKey**: `string`

Defined in: [src/movies/tmdb.ts:7](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L7)

***

### tvInfo()

> **tvInfo**: (`id`) => `string`

Defined in: [src/movies/tmdb.ts:16](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L16)

#### Parameters

##### id

`string`

#### Returns

`string`

***

### tvPopular

> **tvPopular**: `string`

Defined in: [src/movies/tmdb.ts:14](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L14)

***

### tvSearch

> **tvSearch**: `string`

Defined in: [src/movies/tmdb.ts:15](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L15)

***

### tvSimilar()

> **tvSimilar**: (`id`) => `string`

Defined in: [src/movies/tmdb.ts:17](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L17)

#### Parameters

##### id

`string`

#### Returns

`string`

***

### tvTrending

> **tvTrending**: `string`

Defined in: [src/movies/tmdb.ts:13](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L13)

## Methods

### getEpisodeSources()

> **getEpisodeSources**(`id`, `season`, `episode`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `ISource`\>\>

Defined in: [src/movies/tmdb.ts:312](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L312)

#### Parameters

##### id

`string`

##### season

`number`

##### episode

`number`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `ISource`\>\>

***

### getMovieEmbeds()

> **getMovieEmbeds**(`id`): [`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `IEpisodeServer`[]\>

Defined in: [src/movies/tmdb.ts:268](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L268)

#### Parameters

##### id

`string`

#### Returns

[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `IEpisodeServer`[]\>

***

### getMovieInfo()

> **getMovieInfo**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/movies/tmdb.ts:151](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L151)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### getMovieSources()

> **getMovieSources**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `ISource`\>\>

Defined in: [src/movies/tmdb.ts:239](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L239)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `ISource`\>\>

***

### getSimilarMovies()

> **getSimilarMovies**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/tmdb.ts:217](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L217)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### getSimilarTvShows()

> **getSimilarTvShows**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/tmdb.ts:195](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L195)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### getTrendingMovies()

> **getTrendingMovies**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/tmdb.ts:35](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L35)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### getTrendingTv()

> **getTrendingTv**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/tmdb.ts:63](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L63)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### getTvEmbeds()

> **getTvEmbeds**(`id`, `season`, `episode`): [`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `IEpisodeServer`[]\>

Defined in: [src/movies/tmdb.ts:344](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L344)

#### Parameters

##### id

`string`

##### season

`number`

##### episode

`number`

#### Returns

[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| `IEpisodeServer`[]\>

***

### getTvInfo()

> **getTvInfo**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/movies/tmdb.ts:173](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L173)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### searchMovie()

> **searchMovie**(`query`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/tmdb.ts:91](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L91)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### searchTv()

> **searchTv**(`query`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/tmdb.ts:120](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/tmdb.ts#L120)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>
