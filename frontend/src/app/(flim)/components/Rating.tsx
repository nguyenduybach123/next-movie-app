import { StarIcon } from 'lucide-react';
import React, { useState } from 'react';

const Rating = () => {
    const [pointRating, setPointRating] = useState(3);

    return (
        <div className="flex items-center space-x-2 cursor-pointer">
            {[...Array(5)].map((_, index) => (
                <StarIcon
                    key={index}
                    width={40}
                    height={40}
                    fill={index < pointRating ? '#ff0000' : 'transparent'}
                    stroke="#ff0000"
                    strokeWidth={1}
                    onMouseEnter={() => setPointRating(++index)}
                />
            ))}
        </div>
    );
};

export default Rating;
