import { CalendarRangeIcon, EyeIcon, StarIcon } from 'lucide-react';
import React from 'react';

const MovieReview = () => {
    return (
        <div className="flex items-center">
            <div className="px-2">
                <div className="flex items-center">
                    <span className="text-2xl text-[#ff0000] font-semibold">8.5</span>
                    <StarIcon fill="#ff0000" stroke="#ff0000" strokeWidth={1} />
                </div>
            </div>
            <div className="bg-white w-1 h-5 mx-2"></div>
            <div className="flex space-x-4 px-2">
                <div className="flex items-center space-x-2">
                    <CalendarRangeIcon stroke="#ff0000" strokeWidth={3} />
                    <span className="text-2xl text-[#ff0000] font-semibold">2024</span>
                </div>
                <div className="flex items-center space-x-2">
                    <EyeIcon stroke="#ff0000" strokeWidth={3} />
                    <span className="text-2xl text-[#ff0000] font-semibold">4k</span>
                </div>
            </div>
        </div>
    );
};

export default MovieReview;
