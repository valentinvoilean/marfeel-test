import { connect } from 'react-redux';
import { toggleSideMenu } from '../../../../actions/sideMenu';

interface DispatchProps {
  toggleSideMenu: typeof toggleSideMenu;
}

export type ReduxConnectProps = DispatchProps;

export const withReduxConnect = connect<null, DispatchProps>(
  null,
  {
    toggleSideMenu
  }
);
