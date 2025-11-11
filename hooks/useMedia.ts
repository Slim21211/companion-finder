'use client';

import { useAppSelector } from '@/store';
import { MEDIA } from '@/store/ui/types';

export function useMedia() {
  const { media, screenWidth, screenHeight, isInitialized } = useAppSelector(
    (state) => state.ui
  );

  // ВАЖНО: если ещё не инициализировано — считаем мобильным!
  const isMobile = !isInitialized ? true : media === MEDIA.MOBILE;
  const isTablet = media === MEDIA.TABLET;
  const isDesktop = media === MEDIA.DESKTOP;

  return {
    media,
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    isInitialized,
  };
}
