// App
import {
    CastResponseType,
    CastType,
    DisplayEnum,
    TVSeriesDetailType,
    TVSeriesResponseType,
    VideoIntroduceResponseType,
    VideoIntroduceType,
} from '@/types/types';

// Internal
import { httpRequest } from '@/utils/httpRequest';

// Constant
const MAXIMUM_SHOW_VIDEO = 5;
const MAXIMUM_SHOW_CAST = 5;

// * get data tvseries
export const getTVSeries = async (page: number, type?: DisplayEnum, keyword?: string) => {
    let url = '';

    if (keyword) {
        url = `search/tv?query=${keyword}&page=${page}&api_key=ae722869d6f14e76aebfb0d1fd961dd7`;
    } else if (type) {
        url = `tv/${type}?page=${page}&api_key=ae722869d6f14e76aebfb0d1fd961dd7`;
    } else {
        url = `tv/popular?page=${page}&api_key=ae722869d6f14e76aebfb0d1fd961dd7`;
    }

    const response = await httpRequest.get(url);
    const tvSeries: Array<TVSeriesResponseType> = response.data?.results;

    if (!tvSeries) return [];

    return tvSeries;
};

// * get data tvseries
export const getTVSeriesSimilar = async (similarId: string) => {
    const url = `movie/${similarId}/similar?api_key=ae722869d6f14e76aebfb0d1fd961dd7`;

    const response = await httpRequest.get(url);
    const movies: Array<TVSeriesResponseType> = response.data?.results;

    if (!movies) return [];

    return movies;
};

export const getTVSeriesDetail = async (id: string | undefined) => {
    if (!id) return null;

    const response = await httpRequest.get(`tv/${id}?api_key=ae722869d6f14e76aebfb0d1fd961dd7`);
    const detail = response.data;

    if (!response) return null;

    const tvDetail: TVSeriesDetailType = {
        id: detail.id,
        title: detail.name,
        overview: detail.overview,
        genres: detail.genres,
        poster: detail.poster_path,
        backdrop: detail.backdrop_path,
        vote_average: detail.vote_average,
        vote_count: detail.vote_count,
    };

    return tvDetail;
};

export const getTVCast = async (id: number | undefined) => {
    if (!id) return null;

    const response = await httpRequest.get(`tv/${id}/credits?api_key=ae722869d6f14e76aebfb0d1fd961dd7`);
    const castData: Array<CastResponseType> = response.data?.cast;

    if (!response) return;

    const casts: Array<CastType> = castData.slice(0, MAXIMUM_SHOW_CAST).map((cast) => ({
        id: cast.id,
        name: cast.name,
        profile: cast.profile_path,
    }));

    return casts;
};

export const getTVSeriesIntroduce = async (id: string | undefined) => {
    if (!id) return [];

    const response = await httpRequest.get(`tv/${id}/videos?api_key=ae722869d6f14e76aebfb0d1fd961dd7`);
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
