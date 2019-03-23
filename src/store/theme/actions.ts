import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { LOAD_THEME } from './types';

export const loadTheme = (): ThunkAction<{}, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  dispatch(showLoading());
  const response = await axios.get('/theme');
  const { data } = response;
  dispatch(hideLoading());

  return dispatch({
    type: LOAD_THEME,
    theme: data.theme
  });
};
