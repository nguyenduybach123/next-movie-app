// Core
import { FC } from 'react';

// App
import { VideoSkeleton } from '@/app/(flim)/components';

// Type
import { VideoIntroduceType } from '@/types/types';

type TVSeriesIntroduce = {
    introduces: Array<VideoIntroduceType>;
    isFetching: boolean;
};

// Component
export const TVSeriesIntroduce: FC<TVSeriesIntroduce> = ({ introduces, isFetching = false }) => {
    // Template
    return (
        <div className="py-2 px-4 md:px-8 lg:px-16">
            {introduces?.map((tvIntroduce) => (
                <div className="mb-12" key={tvIntroduce.key}>
                    <h3 className="text-white text-base md:text-2xl font-semibold mb-4">{tvIntroduce.name}</h3>
                    {!isFetching ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${tvIntroduce.key}`}
                            title="video"
                            width="100%"
                            height="800px"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <VideoSkeleton width="100%" height="800px" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TVSeriesIntroduce;
