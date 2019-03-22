import { ReduxConnectProps } from './withReduxConnect';

export type ComposedProps = ReduxConnectProps;
export type SideMenuProps = ComposedProps;

export interface StyledLinkProps {
  isActive: boolean;
}

export interface StyledTransparentShimProps {
  isVisible: boolean;
}

export interface StyledSideMenuProps {
  isVisible: boolean;
}
