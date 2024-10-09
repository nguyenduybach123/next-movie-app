// Core
import { FC, useMemo } from 'react';
import { InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';

// App
import { Button, Card, CardSkeleton } from '../../components';

// Type
import { CardType, TVSeriesResponseType } from '@/types/types';
type TVSeriesType = {
    tvseries: InfiniteData<TVSeriesResponseType[]>;
    isFetching?: boolean;
    hasNextPage: boolean;
    fetchNextPage: () => Promise<InfiniteQueryObserverResult<InfiniteData<TVSeriesResponseType[], unknown>, Error>>;
    isFetchingNextPage: boolean;
};

// Component
export const TVSeriesList: FC<TVSeriesType> = ({ tvseries, isFetching = false, hasNextPage, fetchNextPage }) => {
    const tvSeriesCards: Array<CardType> = useMemo(() => {
        return tvseries?.pages
            .flatMap((page) => page)
            .map((tv) => ({
                id: tv.id,
                title: tv.name,
                poster: tv.poster_path,
                mode: 'tvseries',
            }));
    }, [tvseries]);

    // Template
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 -mx-2 mt-16">
                {tvSeriesCards.map((tv) => {
                    if (tv) {
                        return (
                            <Card
                                key={tv.id}
                                mode={tv.mode}
                                id={tv.id}
                                title={tv.title}
                                poster={tv.poster}
                                className="mb-8"
                            />
                        );
                    }
                })}
                {isFetching && (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                )}
            </div>
            <div className="flex items-center justify-center mt-8">
                {hasNextPage ? (
                    <Button
                        text="Watch more"
                        size="sm"
                        ghost
                        onClick={() => fetchNextPage()}
                        loading={isFetching}
                        circle
                    />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

export default TVSeriesList;
