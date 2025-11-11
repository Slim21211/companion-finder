// components/ScreenSizeTracker.tsx
'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { setScreenSize } from '@/store/ui/slice';

/**
 * Компонент для отслеживания размера экрана и обновления Redux
 * Добавь его один раз в Root Layout
 */
export function ScreenSizeTracker() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Функция для обновления размера
    const updateScreenSize = () => {
      dispatch(
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };

    // Инициализация при монтировании
    updateScreenSize();

    // Слушаем изменение размера окна
    window.addEventListener('resize', updateScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [dispatch]);

  // Компонент ничего не рендерит
  return null;
}
