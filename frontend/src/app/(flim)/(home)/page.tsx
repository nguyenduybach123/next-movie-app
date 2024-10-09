'use client';
// Core
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// App
import { useHomeContext } from './context/HomeContext';
import { getBannerMovies, getVideoBannerById } from '@/service/banner';
import { BannerSlider, TrailerModal } from './components';
import NotFoundQuery from '../components/Exception/NotFoundQuery';

// Type
import { DisplayEnum } from '@/types/types';
import { CardSlider } from '../components/Card';
import { Loading } from '../components/Loading';

// Component
const HomePage = () => {
    // Context
    const { idBannerSelected, isOpenDialogTrailer } = useHomeContext();

    // Queries
    // * fetch data banners
    const {
        data: banners,
        isFetching,
        isError: isErrorBanner,
    } = useQuery({
        queryKey: ['banner'],
        queryFn: getBannerMovies,
        refetchOnWindowFocus: false,
    });

    // * fetch data trailer
    const {
        data: trailer,
        isFetching: isTrailerFetching,
        isError: isErrorTrailer,
    } = useQuery({
        queryKey: ['trailer'],
        queryFn: () => getVideoBannerById(idBannerSelected),
        enabled: isOpenDialogTrailer,
        refetchOnWindowFocus: false,
    });

    // Templates
    if (isErrorBanner) {
        return <NotFoundQuery />;
    }

    if (isErrorTrailer) {
        return <NotFoundQuery />;
    }

    return (
        <>
            {isFetching ? (
                <Loading />
            ) : (
                <>
                    <TrailerModal trailerKey={trailer ? trailer.key : ''} isFetching={isTrailerFetching} />
                    <BannerSlider data={banners ? banners : []} />
                    <div className="bg-black-main px-4 md:px-8 py-8 md:py-16">
                        <div className="max-w-screen-2xl mx-auto">
                            <CardSlider title="Trending Movies" displayType={DisplayEnum.Popular} mode="movie" />
                            <CardSlider title="Top Rated Movies" displayType={DisplayEnum.TopRated} mode="movie" />
                            <CardSlider title="Trending TV" displayType={DisplayEnum.Popular} mode="tvseries" />
                            <CardSlider title="Top Rated TV" displayType={DisplayEnum.TopRated} mode="tvseries" />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default HomePage;
