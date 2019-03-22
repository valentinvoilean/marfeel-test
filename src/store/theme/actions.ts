import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { LOAD_THEME } from './types';

export const loadTheme = (): ThunkAction<{}, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const response = await axios.get('/theme');
  const { data } = response;

  return dispatch({
    type: LOAD_THEME,
    theme: data.theme
  });
};
