// Core
import { FC } from 'react';
import cn from 'classnames';

// App
import { useHomeContext } from '../../context/HomeContext';
import { CloseIcon } from '@/app/(flim)/components/Icon';
import { VideoSkeleton } from '@/app/(flim)/components';

// Component
const TrailerModal: FC<{
    trailerKey: string;
    isFetching: boolean;
}> = ({ trailerKey, isFetching }) => {
    // Context
    const { isOpenDialogTrailer, setIsOpenDialogTrailer } = useHomeContext();

    if (!isOpenDialogTrailer) {
        trailerKey = '';
    }

    // Template
    return (
        <div
            className={cn('fixed top-0 bottom-0 left-0 right-0 bg-black/40 py-16 md:py-64 lg:py-16 z-[60]', {
                hidden: !isOpenDialogTrailer,
            })}
        >
            <div className="relative max-w-screen-md bg-black-main h-full z-50 mx-auto p-8">
                <CloseIcon
                    width={'32px'}
                    height={'32px'}
                    className="absolute top-1 right-1 cursor-pointer z-10 hover:fill-red-500"
                    colorHover={'text-red-main'}
                    onClick={() => {
                        setIsOpenDialogTrailer(false);
                    }}
                />
                {!isFetching ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        className="w-full h-full mt-2 p-2"
                    ></iframe>
                ) : (
                    <VideoSkeleton width="100%" height="100%" />
                )}
            </div>
        </div>
    );
};

export { TrailerModal };
