// Core
import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

// App
import { PlayIcon } from '../Icon';
import { defaultMovieImage } from '@/assets';

// Type
import { CardType } from '@/types/types';
import { Button } from '../Button';

// Component
const Card: FC<CardType & { className?: string }> = ({ id, mode, title, poster, className }) => {
    // Template
    return (
        <Link href={`/${mode}/${id}`} className={cn('relative hover:cursor-pointer group/container z-10', className)}>
            <div
                className={cn(
                    "relative w-full h-72 2xl:h-80 rounded-3xl bg-center bg-no-repeat bg-cover group/poster group/container after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:rounded-3xl hover:after:bg-black/60 after:transition after:ease-in-out after:duration-300",
                )}
                style={{
                    backgroundImage: `url(${
                        poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultMovieImage.src
                    }`,
                }}
            >
                <Button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 px-8 bg-red-main rounded-full shadow-btn z-10 text-white text-xl scale-50 opacity-0 transition ease-in-out duration-300 group-hover/poster:opacity-100 group-hover/poster:scale-100 hover:shadow-btn-hover"
                    type="primary"
                    size="lg"
                    icon={<PlayIcon width={'16px'} height={'16px'} />}
                    circle
                />
            </div>
            <h3 className="font-medium text-white text-sm md:text-lg mt-4 transition duration-300 ease-in-out group-hover/container:text-red-main hover:text-red-main">
                {title}
            </h3>
        </Link>
    );
};

export { Card };
