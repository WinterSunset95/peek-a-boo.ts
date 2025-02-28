[**peek-a-boo.ts**](../README.md)

***

[peek-a-boo.ts](../globals.md) / AnimePahe

# Class: AnimePahe

Defined in: [src/anime/animepahe.ts:7](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/animepahe.ts#L7)

## Constructors

### new AnimePahe()

> **new AnimePahe**(): [`AnimePahe`](AnimePahe.md)

#### Returns

[`AnimePahe`](AnimePahe.md)

## Methods

### getAnimeInfo()

> **getAnimeInfo**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/anime/animepahe.ts:40](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/animepahe.ts#L40)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### getEpisodeServers()

> **getEpisodeServers**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`IEpisodeServer`[]\>\>

Defined in: [src/anime/animepahe.ts:56](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/animepahe.ts#L56)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`IEpisodeServer`[]\>\>

***

### getEpisodeSources()

> **getEpisodeSources**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`undefined` \| `ISource`\>\>

Defined in: [src/anime/animepahe.ts:26](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/animepahe.ts#L26)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`undefined` \| `ISource`\>\>

***

### getTopAiring()

> **getTopAiring**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/anime/animepahe.ts:72](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/animepahe.ts#L72)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### getTrending()

> **getTrending**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/anime/animepahe.ts:9](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/animepahe.ts#L9)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### searchAnime()

> **searchAnime**(`query`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/anime/animepahe.ts:91](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/animepahe.ts#L91)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>
