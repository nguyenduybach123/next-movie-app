// App
import {
    CastResponseType,
    CastType,
    DisplayEnum,
    MovieDetailType,
    MovieResponseType,
    VideoIntroduceResponseType,
    VideoIntroduceType,
} from '@/types/types';

// Internal
import { httpRequest } from '@/utils/httpRequest';

// Constant
const MAXIMUM_SHOW_CAST = 5;
const MAXIMUM_SHOW_VIDEO = 5;

// handle all option url ex: /type/keyword
// * get data movies
export const getMovies = async (page: number, type: DisplayEnum = DisplayEnum.Popular, keyword?: string) => {
    let url = '';

    if (keyword) {
        url = `search/movie?query=${keyword}&page=${page}&api_key=ae722869d6f14e76aebfb0d1fd961dd7`;
    } else if (type) {
        url = `movie/${type}?page=${page}&api_key=ae722869d6f14e76aebfb0d1fd961dd7`;
    } else {
        url = `movie/popular?page=${page}&api_key=ae722869d6f14e76aebfb0d1fd961dd7`;
    }

    const response = await httpRequest.get(url);
    const movies: Array<MovieResponseType> = response.data?.results;

    if (!movies) return [];

    return movies;
};

// * get data movies similar
export const getMovieSimilar = async (similarId: string) => {
    const url = `movie/${similarId}/similar?api_key=ae722869d6f14e76aebfb0d1fd961dd7`;

    const response = await httpRequest.get(url);
    const movies: Array<MovieResponseType> = response.data?.results;

    if (!movies) return [];

    return movies;
};

// * get data detail movie
export const getMovieDetail = async (id: string | undefined) => {
    if (!id) return null;

    const response = await httpRequest.get(`movie/${id}?api_key=ae722869d6f14e76aebfb0d1fd961dd7`);
    const detail = response.data;

    if (!response) return;

    const movieDetail: MovieDetailType = {
        id: detail.id,
        title: detail.title,
        overview: detail.overview,
        genres: detail.genres,
        poster: detail.poster_path,
        backdrop: detail.backdrop_path,
        vote_average: detail.vote_average,
        vote_count: detail.vote_count,
    };

    return movieDetail;
};

// * get data cast of movie
export const getMovieCast = async (id: number | undefined) => {
    if (!id) return [];

    const response = await httpRequest.get(`movie/${id}/credits?api_key=ae722869d6f14e76aebfb0d1fd961dd7`);
    const castData: Array<CastResponseType> = response.data?.cast;

    if (!response) return;

    const casts: Array<CastType> = castData.slice(0, MAXIMUM_SHOW_CAST).map((cast) => ({
        id: cast.id,
        name: cast.name,
        profile: cast.profile_path,
    }));

    return casts;
};

// * get data movie introduce
export const getMovieIntroduce = async (id: string | undefined) => {
    if (!id) return [];

    const response = await httpRequest.get(`movie/${id}/videos?api_key=ae722869d6f14e76aebfb0d1fd961dd7`);
    const videoIntroducesData: Array<VideoIntroduceResponseType> = response.data?.results;

    if (!response) return;

    const videoIntroduces: Array<VideoIntroduceType> = videoIntroducesData
        .slice(0, MAXIMUM_SHOW_VIDEO)
        .map((videoIntroduce) => ({
            name: videoIntroduce.name,
            key: videoIntroduce.key,
            site: videoIntroduce.site,
            size: videoIntroduce.size,
            type: videoIntroduce.type,
            official: videoIntroduce.official,
            publishedAt: videoIntroduce.published_at,
        }));

    return videoIntroduces;
};
