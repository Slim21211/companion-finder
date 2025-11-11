export enum MEDIA {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

export interface IUIState {
  media: MEDIA;
  screenWidth: number;
  screenHeight: number;
  isInitialized: boolean;
}
