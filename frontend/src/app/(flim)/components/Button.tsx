// Core
import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

// App
import { BaseSpinner } from './Spinner';

// Type
type ButtonType = {
    text?: string;
    circle?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    ghost?: boolean;
    loading?: boolean;
    to?: string;
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

// Component
const Button: FC<ButtonType> = ({
    text,
    size = 'md',
    circle = false,
    type = 'default',
    icon,
    ghost = false,
    loading = false,
    to,
    onClick,
    className,
}) => {
    // Templates
    if (to) {
        return (
            <Link
                className={cn(
                    'flex justify-center items-center',
                    'transition-all duration-300',
                    'ease-in-out',
                    {
                        'btn-lg': size === 'lg',
                        'btn-md': size === 'md',
                        'btn-sm': size === 'sm',
                        'btn-ghost': ghost,
                        'rounded-full': circle,
                        'btn-primary': type === 'primary',
                    },
                    className,
                )}
                href={to}
            >
                {icon}
                {text}
            </Link>
        );
    }

    return (
        <button
            className={cn(
                'flex justify-center items-center',
                'transition-all duration-300',
                'ease-in-out',
                {
                    'btn-lg': size === 'lg',
                    'btn-md': size === 'md',
                    'btn-sm': size === 'sm',
                    'btn-ghost': ghost,
                    'btn-primary': type === 'primary',
                    'rounded-full': circle,
                    'bg-white text-[#FF0000]': loading,
                },
                className,
            )}
            onClick={onClick}
            disabled={loading}
        >
            {loading ? <BaseSpinner color="#FF0000" width={20} height={20} className="mr-2" /> : icon}
            {loading ? 'Loading . . .' : text}
        </button>
    );
};

export { Button };
