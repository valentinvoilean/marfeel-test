import { withHandlers } from 'recompose';

import { ReduxConnectProps } from '../withReduxConnect';
import { AdditionalHandlersProps } from './types';

export const withAdditionalHandlers = withHandlers<ReduxConnectProps, AdditionalHandlersProps>({
  handleClick: props => e => {
    e.preventDefault();
    props.toggleSideMenu();
  }
});
