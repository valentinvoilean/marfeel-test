import { compose } from 'recompose';

import { BurgerMenu } from './BurgerMenu';

import { withAdditionalHandlers } from './withAdditionalHandlers';
import { withReduxConnect } from './withReduxConnect';

import { ComposedProps, OwnProps } from './types';

export const BurgerMenuContainer = compose<ComposedProps, OwnProps>(
  withReduxConnect,
  withAdditionalHandlers
)(BurgerMenu);
