import { connect } from 'react-redux';

import { AppState } from '../../store';
import { DispatchProps, StateProps } from './types';

import { loadTheme } from '../../store/theme/actions';

export const withReduxConnect = connect<StateProps, DispatchProps, {}, AppState>(
  state => ({
    theme: state.theme
  }),
  {
    loadTheme
  }
);
