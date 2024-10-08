// App
import { httpRequest } from '@/utils/httpRequest';
import { BannerType, MovieResponseType, VideoIntroduceResponseType, VideoIntroduceType } from '@/types/types';

// Interna

// Constanst
const MAXIMUM_BANNER = 5;

// * get data banner movies popular
export const getBannerMovies = async () => {
    const response = await httpRequest.get('movie/popular?api_key=ae722869d6f14e76aebfb0d1fd961dd7');
    const movies: Array<MovieResponseType> = response.data?.results;

    if (!movies) return;

    const bannerPopularMovies: Array<BannerType> = movies.slice(0, MAXIMUM_BANNER).map((movie) => ({
        id: movie.id,
        name: movie.title,
        overview: movie.overview,
        poster: movie.poster_path,
        backdrop: movie.backdrop_path,
    }));

    return bannerPopularMovies;
};

// * get data movie's banner
export const getVideoBannerById = async (idBannerSelected: number) => {
    const response = await httpRequest.get(`movie/${idBannerSelected}/videos?api_key=ae722869d6f14e76aebfb0d1fd961dd7`);
    const videosData: Array<VideoIntroduceResponseType> = response.data?.results;

    if (!response) return;

    const videoData: Array<VideoIntroduceResponseType> = videosData.slice(0, 1);
    const video: VideoIntroduceType = {
        ...videoData[0],
        publishedAt: videoData[0].published_at,
    };

    return video;
};
