// Core
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// App
import { useHomeContext } from '../../context/HomeContext';
import { Button } from '@/app/(flim)/components';

// Type
import { BannerType } from '@/types/types';

// Constant
const variantBanner = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },
};

const variantImage = {
    initial: {
        scaleX: 0,
        scaleY: 0,
    },
    animate: {
        scaleX: 1,
        scaleY: 1,
        transition: {
            duration: 0.5,
        },
    },
};

// Component
const Banner: FC<BannerType> = ({ id, name, overview, backdrop, poster }) => {
    // Context
    const { setIsOpenDialogTrailer, setIdBannerSelected } = useHomeContext();

    // Functions
    // * handle open modal trailer movie
    const handleWatchTrailer = () => {
        setIdBannerSelected(id);
        setIsOpenDialogTrailer(true);
    };

    // Template
    return (
        <div
            className='relative h-100 md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32 flex justify-center bg-center bg-no-repeat bg-cover before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black/60 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-28 after:bg-gradient-to-t after:from-black-main after:to-transparent cursor-grab'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop})` }}
        >
            <div className="max-w-screen-2xl z-10 h-fit flex items-center justify-between">
                <motion.div
                    key={id}
                    className="w-full lg:w-2/3 px-4"
                    variants={variantBanner}
                    initial="initial"
                    whileInView="animate"
                >
                    <motion.h2
                        key={id}
                        className="font-bold text-4xl md:text-6xl lg:text-8xl delay-300 text-white transition duration-700 ease-in-out opacity-100 translate-y-0"
                        variants={variantBanner}
                        initial="initial"
                        whileInView="animate"
                    >
                        {name}
                    </motion.h2>
                    <motion.p
                        key={id}
                        className="font-medium text-white text-xs md:text-xl my-12 delay-[600ms] transition duration-700 ease-in-out opacity-100 translate-y-0"
                        variants={variantBanner}
                        initial="initial"
                        whileInView="animate"
                    >
                        {overview}
                    </motion.p>
                    <motion.div
                        key={id}
                        className="flex delay-[900ms] text-white transition duration-700 ease-in-out opacity-100 translate-y-0"
                        variants={variantBanner}
                        initial="initial"
                        whileInView="animate"
                    >
                        <Button to={`/movie/${id}`} text="Watch Now" size="lg" type="primary" className="mr-4" circle />
                        <Button text="Watch trailer" size="lg" ghost onClick={handleWatchTrailer} circle />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="hidden px-4 lg:block lg:w-1/3"
                    variants={variantImage}
                    initial="initial"
                    whileInView="animate"
                >
                    <Image
                        className="w-96 rounded-3xl transition-all duration-300"
                        src={`https://image.tmdb.org/t/p/w500/${poster}`}
                        alt="Poster"
                        layout="reponsive"
                        width={500}
                        height={750}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export { Banner };
