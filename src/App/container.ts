import { compose } from 'recompose';

import { App } from './App';

import { withLifecycleMethods } from './withLifecycleMethods';
import { withReduxConnect } from './withReduxConnect';

import { ComposedProps } from './types';

export const AppContainer = compose<ComposedProps, {}>(
  withReduxConnect,
  withLifecycleMethods
)(App);
