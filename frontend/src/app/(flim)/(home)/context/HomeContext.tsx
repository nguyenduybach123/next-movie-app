'use client';
// Core
import React from 'react';

// Type
type HomeContextType = {
    isOpenDialogTrailer: boolean;
    setIsOpenDialogTrailer: React.Dispatch<React.SetStateAction<boolean>>;
    idBannerSelected: number;
    setIdBannerSelected: React.Dispatch<React.SetStateAction<number>>;
};

// Constant
const HomeContext = React.createContext<HomeContextType | undefined>(undefined);

// Hook
export const useHomeContext = () => {
    const context = React.useContext(HomeContext);

    if (!context) {
        throw new Error('useHomeContext must be used within a HomeContextProvider');
    }
    return context;
};

// Component
export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
    // States
    const [isOpenDialogTrailer, setIsOpenDialogTrailer] = React.useState(false);
    const [idBannerSelected, setIdBannerSelected] = React.useState(NaN);

    // Template
    return (
        <HomeContext.Provider
            value={{
                isOpenDialogTrailer,
                setIsOpenDialogTrailer,
                idBannerSelected,
                setIdBannerSelected,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
