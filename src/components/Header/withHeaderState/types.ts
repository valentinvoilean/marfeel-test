import { StateHandler, StateHandlerMap } from 'recompose';

export interface StateHandlersProps {
  isHeaderVisible: boolean;
  isNavigationVisible: boolean;
}

export interface UpdatersProps extends StateHandlerMap<StateHandlersProps> {
  setHeaderState: StateHandler<StateHandlersProps>;
}

export type HeaderStateProps = StateHandlersProps & UpdatersProps;
