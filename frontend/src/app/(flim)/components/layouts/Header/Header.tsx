'use client';
// Core
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// App
import { logoImage } from '@/assets';

// Contanst
const menus = [
    {
        id: 0,
        title: 'Home',
        href: '/',
    },
    {
        id: 1,
        title: 'Movies',
        href: '/movie',
    },
    {
        id: 2,
        title: 'TV Series',
        href: '/tvseries',
    },
];

// Component
export const Header = () => {
    const pathname = usePathname();
    const [isDisplayMenu, setIsDisplayMenu] = useState<boolean>(false);

    // Effects
    //* display menu
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100) {
                setIsDisplayMenu(true);
            } else {
                setIsDisplayMenu(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDisplayMenu]);

    // Template
    return (
        <div
            className={cn(
                'flex justify-center w-full px-8 py-0 md:py-8 fixed top-0 z-50 transition-all duration-200 ease-in-out',
                isDisplayMenu ? 'bg-black-main' : 'bg-transparent',
            )}
        >
            <div className="flex justify-between items-center w-full max-w-screen-2xl">
                <a className="hidden md:flex items-center hover:cursor-pointer group" href="/">
                    <Image src={logoImage} alt="Logo" className="mr-4 w-8 md:w-12 animate-bounce" />
                    <h1 className="text-white text-2xl md:text-4xl font-semibold group-hover:text-red-main group-hover:transition-custom">
                        theMovies
                    </h1>
                </a>
                <div className="flex items-center justify-evenly py-2 md:py-4 -mx-4 fixed md:relative left-0 right-0 bottom-0 md:left-auto md:right-auto md:bottom-auto bg-black-main md:bg-transparent">
                    {menus.map((menuItem) => (
                        <div className="px-4" key={menuItem.id}>
                            <Link
                                className={cn('nav-item', { 'after:w-full': menuItem.href === pathname })}
                                href={menuItem.href}
                            >
                                {menuItem.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
