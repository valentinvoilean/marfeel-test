import throttle from 'lodash.throttle';
import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

import { StyledHeader, StyledRightSideSection, StyledTopSection } from './styled';

import { Logo } from '../shared/Logo';
import { BurgerMenu } from './components/BurgerMenu';
import { Navigation } from './components/Navigation';

import { HeaderState } from './types';

import { firstWaypoint, secondWaypont, throttleTimeout } from './constants';

export class Header extends React.PureComponent<{}, HeaderState> {
  public state = {
    isNavigationVisible: window.scrollY <= firstWaypoint,
    isHeaderVisible: window.scrollY <= secondWaypont
  };

  private checkTopOffset = throttle(() => {
    const { isNavigationVisible, isHeaderVisible } = this.state;
    const newNavigationState = window.scrollY <= firstWaypoint;
    const newHeaderState = window.scrollY <= secondWaypont;

    if (isHeaderVisible !== newHeaderState || isNavigationVisible !== newNavigationState) {
      this.setState({
        isNavigationVisible: newNavigationState,
        isHeaderVisible: newHeaderState
      });
    }
  }, throttleTimeout);

  public componentDidMount(): void {
    window.addEventListener('scroll', this.checkTopOffset);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('scroll', this.checkTopOffset);
  }

  public render(): JSX.Element {
    const { isHeaderVisible, isNavigationVisible } = this.state;

    if (!isHeaderVisible) {
      return <BurgerMenu showWrapper={true} />;
    }

    return (
      <StyledHeader>
        <LoadingBar />
        <StyledTopSection>
          <BurgerMenu />
          <StyledRightSideSection>
            <Logo />
          </StyledRightSideSection>
        </StyledTopSection>
        {isNavigationVisible && <Navigation />}
      </StyledHeader>
    );
  }
}
