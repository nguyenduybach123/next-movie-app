'use client';
// Core
import { FC, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// Internal
import { TVSeriesInfo, TVSeriesIntroduce } from './components';
import { getTVCast, getTVSeriesDetail, getTVSeriesIntroduce } from '@/service/tvSeries';
import { CardSlider, Loading, NotFoundQuery } from '../../components';

// Type
import { DisplayEnum } from '@/types/types';

interface TVSeriesDetailPageProps {
    params: {
        id: string;
    };
}

// Component
const TVSeriesDetailPage: FC<TVSeriesDetailPageProps> = ({ params }) => {
    const { id } = params;

    // Queries
    const {
        data: tvDetail,
        isFetching,
        isError: isErrorDetail,
    } = useQuery({
        queryKey: ['tvseriesdetail', id],
        queryFn: () => getTVSeriesDetail(id as string),
        refetchOnWindowFocus: false,
    });

    const tvId = tvDetail?.id;

    const { data: casts } = useQuery({
        queryKey: ['tvseriescasts', tvId],
        queryFn: () => getTVCast(tvId),
        enabled: !!tvId,
    });

    const {
        data: tvIntroduces,
        isPending: isTVIntroducePending,
        isError: isErrorIntroduce,
    } = useQuery({
        queryKey: ['tvseriesintroduce', tvId],
        queryFn: () => getTVSeriesIntroduce(id as string),
        refetchOnWindowFocus: false,
    });

    // Effects
    // * sync scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [tvDetail]);

    // Templates
    if (isErrorDetail) {
        return <NotFoundQuery />;
    }

    if (isErrorIntroduce) {
        return <NotFoundQuery />;
    }

    return (
        <>
            {isFetching ? (
                <Loading />
            ) : (
                <>
                    <TVSeriesInfo detailTV={tvDetail} casts={casts ? casts : []} />
                    <div className="bg-black-main px-4 md:px-8 py-8 md:py-16">
                        <TVSeriesIntroduce
                            introduces={tvIntroduces ? tvIntroduces : []}
                            isFetching={isTVIntroducePending}
                        />
                        <CardSlider
                            title="Similar"
                            displayType={DisplayEnum.Similar}
                            similarId={id as string}
                            mode="tvseries"
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default TVSeriesDetailPage;
