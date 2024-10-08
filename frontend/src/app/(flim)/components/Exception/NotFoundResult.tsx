// Core
import { notResultSearchImage } from '@/assets';
import Image from 'next/image';
import { FC } from 'react';

// App

// Component
export const NotFoundResult: FC<{ keyword: string }> = ({ keyword }) => {
    // Templates
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col justify-center items-center text-white text-center">
                <h1 className="my-8 text-4xl font-bold tracking-wide">No Results Found For : {keyword}</h1>
                <Image src={notResultSearchImage} alt='' width={150} height={150} />
                <h3 className="mt-5 text-2xl font-semibold tracking-normal">Dont give up</h3>
            </div>
        </div>
    );
};

export default NotFoundResult;
