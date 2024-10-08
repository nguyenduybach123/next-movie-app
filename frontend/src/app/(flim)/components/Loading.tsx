// Core
import { FC } from 'react';
import cn from 'classnames';

// App
import { BaseSpinner } from './Spinner';

// Component
const Loading: FC<{ className?: string }> = ({ className }) => {
    // Template
    return (
        <div className={cn(className, 'flex justify-center items-center w-screen h-screen')}>
            <div className="flex flex-col justify-center items-center">
                <BaseSpinner width={50} height={50} />
                <h1 className="mt-8 [text-shadow:_0_4px_8px_#FF0000] text-white text-2xl text-center font-semibold tracking-wide">
                    LOADING
                </h1>
            </div>
        </div>
    );
};

export { Loading };
