import { withHandlers } from 'recompose';

import { HeaderStateProps } from '../withHeaderState';
import { AdditionalHandlersProps } from './types';

import { firstWaypoint, secondWaypont } from '../constants';

export const checkTopOffset = (props: HeaderStateProps) => () => {
  const { isNavigationVisible, isHeaderVisible, setHeaderState } = props;
  const newNavigationState = window.scrollY <= firstWaypoint;
  const newHeaderState = window.scrollY <= secondWaypont;

  if (isHeaderVisible !== newHeaderState || isNavigationVisible !== newNavigationState) {
    setHeaderState({
      isNavigationVisible: newNavigationState,
      isHeaderVisible: newHeaderState
    });
  }
};

export const withAdditionalHandlers = withHandlers<HeaderStateProps, AdditionalHandlersProps>({
  checkTopOffset
});
