[**peek-a-boo.ts**](../README.md)

***

[peek-a-boo.ts](../globals.md) / FlixHq

# Class: FlixHq

Defined in: [src/movies/flixhq.ts:7](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/flixhq.ts#L7)

## Constructors

### new FlixHq()

> **new FlixHq**(): [`FlixHq`](FlixHq.md)

#### Returns

[`FlixHq`](FlixHq.md)

## Methods

### getTrendingMovies()

> **getTrendingMovies**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/flixhq.ts:8](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/flixhq.ts#L8)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### searchMovie()

> **searchMovie**(`query`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/movies/flixhq.ts:29](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/movies/flixhq.ts#L29)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>
