'use client';
// Core
import { FC, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// App

// Internal
import { getMovieCast, getMovieDetail, getMovieIntroduce } from '@/service/movie';
import { MovieInfo, MovieIntroduce } from './components';

// Type
import { DisplayEnum } from '@/types/types';
import { CardSlider, Loading } from '../../components';

interface MovieDetailPageProps {
    params: {
        id: string;
    };
}

// Component
const MovieDetailPage: FC<MovieDetailPageProps> = ({ params }) => {
    const { id } = params;

    // Queries
    const {
        data: movieDetail,
        isFetching,
        isError: isErrorDetail,
        error: errorDetail,
    } = useQuery({
        queryKey: ['detail', id],
        queryFn: () => getMovieDetail(id),
        refetchOnWindowFocus: false,
    });

    const movieId = movieDetail?.id;

    const { data: casts } = useQuery({
        queryKey: ['casts', movieId],
        queryFn: () => getMovieCast(movieId),
        enabled: !!movieId,
        refetchOnWindowFocus: false,
    });

    const {
        data: movieIntroduces,
        isPending: isMovieIntroducePending,
        isError: isErrorIntroduce,
        error: errorIntroduce,
    } = useQuery({
        queryKey: ['videointroduce', movieId],
        queryFn: () => getMovieIntroduce(id),
        refetchOnWindowFocus: false,
    });

    // Effect
    // * srcoll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [movieDetail]);

    // Templates
    if (isErrorDetail) {
        return <span>Error: {errorDetail.message}</span>;
    }

    if (isErrorIntroduce) {
        return <span>Error: {errorIntroduce.message}</span>;
    }

    //Template
    return (
        <>
            {isFetching ? (
                <Loading />
            ) : (
                <div>
                    <MovieInfo detailMovie={movieDetail} casts={casts ? casts : []} />
                    <div className="bg-black-main px-4 md:px-8 py-8 md:py-16">
                        <MovieIntroduce
                            introduces={movieIntroduces ? movieIntroduces : []}
                            isFetching={isMovieIntroducePending}
                        />
                        <CardSlider title="Similar" displayType={DisplayEnum.Similar} similarId={id} mode="movie" />
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieDetailPage;
