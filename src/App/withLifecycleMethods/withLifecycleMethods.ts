import { lifecycle } from 'recompose';
import { mock } from '../mocks';

import { ReduxConnectProps } from '../withReduxConnect';

type HandlersProps = ReduxConnectProps;

export const withLifecycleMethods = lifecycle<HandlersProps, {}>({
  componentDidMount() {
    this.props.loadTheme();
  },
  componentWillUnmount() {
    mock.restore();
  }
});
