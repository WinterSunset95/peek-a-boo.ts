[**peek-a-boo.ts**](../README.md)

***

[peek-a-boo.ts](../globals.md) / Gogo

# Class: Gogo

Defined in: [src/anime/gogo.ts:7](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/gogo.ts#L7)

## Constructors

### new Gogo()

> **new Gogo**(): [`Gogo`](Gogo.md)

#### Returns

[`Gogo`](Gogo.md)

## Methods

### getAnimeInfo()

> **getAnimeInfo**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/anime/gogo.ts:48](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/gogo.ts#L48)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### getEpisodeServers()

> **getEpisodeServers**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`IEpisodeServer`[]\>\>

Defined in: [src/anime/gogo.ts:73](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/gogo.ts#L73)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`IEpisodeServer`[]\>\>

***

### getEpisodeSources()

> **getEpisodeSources**(`id`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`undefined` \| `ISource`\>\>

Defined in: [src/anime/gogo.ts:34](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/gogo.ts#L34)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`undefined` \| `ISource`\>\>

***

### getTopAiring()

> **getTopAiring**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

Defined in: [src/anime/gogo.ts:89](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/gogo.ts#L89)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<`string` \| [`MediaInfo`](../interfaces/MediaInfo.md)\>\>

***

### getTrending()

> **getTrending**(): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/anime/gogo.ts:9](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/gogo.ts#L9)

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

***

### searchAnime()

> **searchAnime**(`query`): `Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>

Defined in: [src/anime/gogo.ts:117](https://github.com/WinterSunset95/peek-a-boo.ts/blob/8815e721cff6128fa9f7e41ee6186f9acba0c30f/src/anime/gogo.ts#L117)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PeekABoo`](../interfaces/PeekABoo.md)\<[`MovieSearchResult`](../interfaces/MovieSearchResult.md)[]\>\>
