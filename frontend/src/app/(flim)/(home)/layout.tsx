// Core
import React, { FC } from 'react';

// App
import { HomeProvider } from './context/HomeContext';

// Component
const HomeLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    // Template
    return <HomeProvider>{children}</HomeProvider>;
};

export default HomeLayout;
