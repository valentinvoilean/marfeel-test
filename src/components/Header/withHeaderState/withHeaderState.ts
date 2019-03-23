import { withStateHandlers } from 'recompose';
import { firstWaypoint, secondWaypont } from '../constants';
import { StateHandlersProps, UpdatersProps } from './types';

export const withHeaderStateHandlers = withStateHandlers<StateHandlersProps, UpdatersProps>(
  {
    isNavigationVisible: window.scrollY <= firstWaypoint,
    isHeaderVisible: window.scrollY <= secondWaypont
  },
  {
    setHeaderState: () => newState => newState
  }
);
