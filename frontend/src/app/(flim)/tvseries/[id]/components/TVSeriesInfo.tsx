// App
import { defaultCastImage } from '@/assets';
import { CastType, TVSeriesDetailType } from '@/types/types';
import Image from 'next/image';
import { FC } from 'react';
// Type
type TVSeriesInfoType = {
    detailTV: TVSeriesDetailType | null | undefined;
    casts: Array<CastType>;
};

// Component
export const TVSeriesInfo: FC<TVSeriesInfoType> = ({ detailTV, casts }) => {
    // Templates
    return (
        <div
            className='relative px-4 md:px-8 lg:px-16 py-12 md:pt-32 md:pb-20 bg-center bg-no-repeat bg-cover z-0 before:content-[""] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:bg-black-main before:-z-10 after:content-[""] after:absolute after:top-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-t after:from-black-main after:to-transparent after:-z-10'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailTV?.backdrop})` }}
        >
            <div className="flex items-start -mx-4 max-h-fit">
                <div className="hidden md:block w-64 lg:w-96 px-4">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${detailTV?.poster}`}
                        alt=""
                        layout="responsive"
                        width={500}
                        height={750}
                        className="w-full rounded-3xl"
                    />
                </div>
                <div className="px-4 flex-1 flex flex-col justify-between -my-2 lg:-my-4">
                    <h2 className="py-2 lg:py-4 font-bold text-white text-3xl md:text-5xl lg:text-7xl">
                        {detailTV?.title}
                    </h2>
                    <ul className="flex items-center p-4">
                        {detailTV?.genres.map((genre) => (
                            <li
                                key={genre.id}
                                className="bg-black-main border-2 border-white rounded-full text-sm p-2 mr-2"
                            >
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                    <p className="py-2 lg:py-4 text-white text-xs md:text-sm lg:text-base">{detailTV?.overview}</p>
                    <h3 className="text-white text-xl font-medium py-2">Casts</h3>
                    <div className="flex flex-wrap -mx-2 mt-1">
                        {casts?.map((cast) => {
                            return (
                                <div key={cast.id} className="w-28 px-2 mb-1">
                                    {cast.profile ? (
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500/${cast.profile}`}
                                            alt=""
                                            layout="responsive"
                                            width={500}
                                            height={750}
                                            className="rounded-xl"
                                        />
                                    ) : (
                                        <Image
                                            src={defaultCastImage}
                                            alt=""
                                            layout="responsive"
                                            width={500}
                                            height={750}
                                            className="h-full rounded-xl"
                                        />
                                    )}
                                    <span className="text-white text-xs md:text-sm font-sm">{cast.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TVSeriesInfo;
