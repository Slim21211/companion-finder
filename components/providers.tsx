'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { queryClient } from '@/lib/query-client';
import { store } from '@/store';
import Header from './layout/header/header';
import Footer from './layout/Footer';
import { ReactNode } from 'react';
import { ScreenSizeTracker } from './ScreenSizeTracker';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScreenSizeTracker />
          <Header />
          {children}
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
