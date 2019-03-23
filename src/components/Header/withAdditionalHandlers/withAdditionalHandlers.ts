import { withHandlers } from 'recompose';

import { HeaderStateProps } from '../withHeaderState';
import { AdditionalHandlersProps } from './types';

import { firstWaypoint, secondWaypont } from '../constants';

export const withAdditionalHandlers = withHandlers<HeaderStateProps, AdditionalHandlersProps>({
  checkTopOffset: props => () => {
    const { isNavigationVisible, isHeaderVisible, setHeaderState } = props;
    const newNavigationState = window.scrollY <= firstWaypoint;
    const newHeaderState = window.scrollY <= secondWaypont;

    if (isHeaderVisible !== newHeaderState || isNavigationVisible !== newNavigationState) {
      setHeaderState({
        isNavigationVisible: newNavigationState,
        isHeaderVisible: newHeaderState
      });
    }
  }
});
