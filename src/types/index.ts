import { IAnimeEpisode, IAnimeInfo, IAnimeResult, ISearch } from "@consumet/extensions";

export const mediaTypes = [ "anime", "movie", "tv", "unknown" ] as const
export type MediaTypes = typeof mediaTypes[number]

export interface MovieSearchResult {
	Id: string;
	Title: string;
	Poster: string;
	Type: "anime" | "movie" | "tv" | "unknown";
	IAnimeResult?: IAnimeResult;
	TmdbMovie?: TmdbMovie;
	TmdbTv?: TmdbTv;
}

export interface ConsumetAnimeInfo extends IAnimeInfo{}

export interface TmdbMovieInfo {
	adult: boolean,
	backdrop_path: string,
	belongs_to_collection: string,
	budget: number,
	genres: [
		{
			id: number,
			name: string
		},
	],
	homepage: string,
	id: number,
	imdb_id: string,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	production_companies: [
		{
			id: number,
			logo_path: string,
			name: string,
			origin_country: string
		}
	],
	production_countries: [
		{
			iso_3166_1: string,
			name: string
		}
	],
	release_date: string,
	revenue: number,
	runtime: number,
	spoken_languages: [
		{
			english_name: string,
			iso_639_1: string,
			name: string
		}
	],
	status: string,
	tagline: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number
}

export interface TmdbTvInfo {
	adult: boolean;
	backdrop_path: string;
	created_by: {
		id: number;
		credit_id: string;
		name: string;
		gender: number;
		profile_path: string;
	}[];
	episode_run_time: number[];
	first_air_date: string;
	genres: {
		id: number;
		name: string;
	}[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: {
		id: number;
		name: string;
		overview: string;
		vote_average: number;
		vote_count: number;
		air_date: string;
		episode_number: number;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string;
	};
	name: string;
	next_episode_to_air: null;
	networks: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string | null;
		name: string;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	seasons: {
		air_date: string;
		episode_count: number;
		id: number;
		name: string;
		overview: string;
		poster_path: string;
		season_number: number;
		vote_average: number;
	}[];
	spoken_languages: {
		english_name: string;
		iso_639_1: string;
		name: string;
	}[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
}

export interface TmdbTv {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
	id: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	first_air_date: string;
	name: string;
	vote_average: number;
	vote_count: number;
}

export interface TmdbMovie {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string; // Can be an empty string if unavailable
  title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface TmdbSearchResult<T> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface MovieInfo extends MovieSearchResult {
	Overview: string;
	Year: string;
	Duration: string;
	Genres: string[];
	Languages: string[];
}

export interface TvSeason {
	AirDate: string,
	EpisodeCount: number,
	Id: number,
	Name: string,
	Poster: string,
	Overview: string,
	SeasonNumber: string
}

export interface MediaInfo extends MovieInfo {
	AnimeEpisodes?: IAnimeEpisode[],
	ConsumetAnimeInfo?: ConsumetAnimeInfo,
	TvShowSeason?: TvSeason[],
	TmdbMovieInfo?: TmdbMovieInfo,
	TmdbTvInfo?: TmdbTvInfo,
}

export interface User {
	UserId: string,
	UserName: string,
	UserImage: string
}

export interface RoomCreate extends User {
	MediaId: string,
}

export interface OpenRoom extends User {
	RoomId: string,
	RoomName: string,
	Participants: User[],
	CurrentMedia?: MovieSearchResult,
	Messages: ChatMessage[],
}

export interface ActiveAnimeRoom extends OpenRoom {
	EpisodeId: string,
	Playing: boolean,
	TimeStamp: number
}

export interface ChatMessage extends User {
	MessageType: "text" | "sticker" | "media",
	Message: string
}

export interface RoomMessage<T> {
	RoomId: string,
	SenderId: string,
	Payload: T
}

export interface Release {
	Version: string,
	Apk: string,
	ChangeLogs: string
}

// When user requests to join a room
// Should recieve OpenRoom as result
export interface RoomRequest {
	RoomId: string,
	RequesterId: string,
}

export interface PeekABoo<T> {
	peek: boolean;
	boo: T;
}
