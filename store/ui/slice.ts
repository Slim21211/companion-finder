import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUIState, MEDIA } from './types';

const initialState: IUIState = {
  media: MEDIA.DESKTOP, // Дефолт (до инициализации)
  screenWidth: 1920,
  screenHeight: 1080,
  isInitialized: false,
};

const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMedia: (state, { payload }: PayloadAction<MEDIA>) => {
      state.media = payload;
    },
    setScreenSize: (
      state,
      { payload }: PayloadAction<{ width: number; height: number }>
    ) => {
      state.screenWidth = payload.width;
      state.screenHeight = payload.height;

      // Автоматически определяем media на основе ширины
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

export const { setMedia, setScreenSize } = uiReducer.actions;
export default uiReducer.reducer;
