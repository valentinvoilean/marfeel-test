import { compose, pure } from 'recompose';

import { withAdditionalHandlers } from './withAdditionalHandlers';
import { withHeaderStateHandlers } from './withHeaderState';
import { withLifecycleMethods } from './withLifecycleMethods';

import { Header } from './Header';

import { ComposedProps } from './types';

export const HeaderContainer = compose<ComposedProps, {}>(
  withHeaderStateHandlers,
  withAdditionalHandlers,
  withLifecycleMethods,
  pure
)(Header);
