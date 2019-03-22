import { defaultTheme } from './constants';
import { LOAD_THEME, ThemeActionTypes, ThemeState } from './types';

const initialState: ThemeState = {
  ...defaultTheme
};

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case LOAD_THEME: {
      return {
        ...state,
        ...action.theme
      };
    }
    default:
      return state;
  }
};
