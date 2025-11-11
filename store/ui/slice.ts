import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUIState, MEDIA } from './types';

const initialState: IUIState = {
  // ВАЖНО: по умолчанию считаем мобильным!
  media: MEDIA.MOBILE,
  screenWidth: 375, // типичная мобильная ширина
  screenHeight: 667,
  isInitialized: false, // до первого измерения — не инициализировано
};

const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScreenSize: (
      state,
      { payload }: PayloadAction<{ width: number; height: number }>
    ) => {
      state.screenWidth = payload.width;
      state.screenHeight = payload.height;

      // Определяем медиа
      if (payload.width < 768) {
        state.media = MEDIA.MOBILE;
      } else if (payload.width < 1024) {
        state.media = MEDIA.TABLET;
      } else {
        state.media = MEDIA.DESKTOP;
      }

      state.isInitialized = true;
    },
  },
});

export const { setScreenSize } = uiReducer.actions;
export default uiReducer.reducer;
