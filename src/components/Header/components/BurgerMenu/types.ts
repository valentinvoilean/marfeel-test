import { AdditionalHandlersProps } from './withAdditionalHandlers';
import { ReduxConnectProps } from './withReduxConnect';

export type ComposedProps = ReduxConnectProps & AdditionalHandlersProps;

export interface OwnProps {
  showWrapper?: boolean;
}

export type BurgerMenuProps = OwnProps & ComposedProps;
