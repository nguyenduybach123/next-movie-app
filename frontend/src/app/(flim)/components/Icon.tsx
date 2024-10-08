// Core
import { FC } from 'react';
import cn from 'classnames';

// Type
import { IconType } from '@/types/types';

// Component
export const CloseIcon: FC<IconType> = ({ width, height, onClick, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width={width}
            height={height}
            className={cn(className)}
            onClick={onClick}
            fill="#fff"
        >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
    );
};

// Component
export const PlayIcon: FC<IconType> = ({ width, height, colorHover, onClick, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width={width}
            height={height}
            className={cn(className, `hover:${colorHover}`)}
            onClick={onClick}
            fill="#fff"
        >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
        </svg>
    );
};
