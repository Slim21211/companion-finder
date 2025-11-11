'use client';

import { useAppSelector } from '@/store';
import { MEDIA } from '@/store/ui/types';

export function useMedia() {
  const { media, screenWidth, screenHeight, isInitialized } = useAppSelector(
    (state) => state.ui
  );

  return {
    media,
    isMobile: media === MEDIA.MOBILE,
    isTablet: media === MEDIA.TABLET,
    isDesktop: media === MEDIA.DESKTOP,
    screenWidth,
    screenHeight,
    isInitialized,
  };
}
