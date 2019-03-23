import { connect } from 'react-redux';

import { toggleSideMenu } from '../../../../../store/sideMenu/actions';

import { OwnProps } from '../types';
import { DispatchProps } from './types';

export const withReduxConnect = connect<{}, DispatchProps, OwnProps>(
  null,
  {
    toggleSideMenu
  }
);
