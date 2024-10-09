'use client'; // Ensures this is a Client Component
// Core
import React, { FC, Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'swiper/css';

// Component
const FlimLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Suspense>{children}</Suspense>
        </QueryClientProvider>
    );
};

export default FlimLayout;
