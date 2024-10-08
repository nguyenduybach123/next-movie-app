// Core
import { FC } from 'react';
import { VideoSkeleton } from '../../../components/Skeleton/VideoSkeleton';
import { VideoIntroduceType } from '@/types/types';

// Type
type MovieIntroduceType = {
    introduces: Array<VideoIntroduceType>;
    isFetching: boolean;
};

// Component
export const MovieIntroduce: FC<MovieIntroduceType> = ({ introduces, isFetching = false }) => {
    // Template
    return (
        <div className="py-2 px-4 md:px-8 lg:px-16">
            {introduces?.map((movieIntroduce) => (
                <div className="mb-12" key={movieIntroduce.key}>
                    <h3 className="text-white text-base md:text-2xl font-semibold mb-4">{movieIntroduce.name}</h3>
                    {!isFetching ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${movieIntroduce.key}`}
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

export default MovieIntroduce;
