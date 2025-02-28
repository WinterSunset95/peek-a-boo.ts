[**peek-a-boo.ts**](../README.md)

***

[peek-a-boo.ts](../globals.md) / Zoro

# Class: Zoro

Defined in: [src/anime/zoro.ts:7](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/zoro.ts#L7)

## Constructors

### new Zoro()

> **new Zoro**(): [`Zoro`](Zoro.md)

#### Returns

[`Zoro`](Zoro.md)

## Methods

### getAnimeInfo()

> **getAnimeInfo**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/anime/zoro.ts:41](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/zoro.ts#L41)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### getEpisodeServers()

> **getEpisodeServers**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`IEpisodeServer`[]\>\>

Defined in: [src/anime/zoro.ts:57](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/zoro.ts#L57)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`IEpisodeServer`[]\>\>

***

### getEpisodeSources()

> **getEpisodeSources**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`undefined` \| `ISource`\>\>

Defined in: [src/anime/zoro.ts:26](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/zoro.ts#L26)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`undefined` \| `ISource`\>\>

***

### getTopAiring()

> **getTopAiring**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/anime/zoro.ts:73](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/zoro.ts#L73)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### getTrending()

> **getTrending**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/anime/zoro.ts:9](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/zoro.ts#L9)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### searchAnime()

> **searchAnime**(`query`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/anime/zoro.ts:92](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/zoro.ts#L92)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>
