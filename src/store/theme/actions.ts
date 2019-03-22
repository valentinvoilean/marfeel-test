import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { LOAD_THEME } from './types';

import { defaultTheme } from './constants';

export const loadTheme = (): ThunkAction<{}, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  return dispatch({
    type: LOAD_THEME,
    theme: {
      ...defaultTheme,
      header: {
        ...defaultTheme.header,
        background: 'red'
      }
    }
  });
};
