import { connect } from 'react-redux';
import { toggleSideMenu } from '../../actions/sideMenu';

interface StateProps {
  isSideMenuVisible: boolean;
}

interface DispatchProps {
  toggleSideMenu: typeof toggleSideMenu;
}

export type ReduxConnectProps = StateProps & DispatchProps;

export const withReduxConnect = connect<StateProps, DispatchProps>(
  (state: any) => ({
    isSideMenuVisible: state.sideMenu.isActive
  }),
  {
    toggleSideMenu
  }
);
