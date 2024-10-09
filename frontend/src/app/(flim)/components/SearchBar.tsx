import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Button } from './Button';

const SearchBar = () => {
    // Hook
    const searchParams = useSearchParams();
    const router = useRouter();

    // States
    const [searchValue, setSearchValue] = useState('');

    // Function
    // * handle onChange search value
    const handleSearchMovie = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('keyword', searchValue.trim());

        router.push(`?${newParams.toString()}`);
    };

    // Effect
    // * sync get value param keyword url
    useEffect(() => {
        const keyword = searchParams.get('keyword');
        if (keyword !== '' && keyword) setSearchValue(keyword);
    }, [searchParams]);

    // Template
    return (
        <Suspense>
            <div className=" flex items-center relative rounded-full bg-black w-full md:w-fit lg:w-fit">
                <input
                    className="outline-none border-none rounded-full px-6 py-2 bg-black placeholder-gray-500 text-white flex-1 md:flex-auto md:w-96"
                    placeholder="Enter keyword"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchMovie();
                        }
                    }}
                />
                <Button className="py-1" text="Search" size="md" type="primary" onClick={handleSearchMovie} circle />
            </div>
        </Suspense>
    );
};

export { SearchBar };
