import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

import { StyledHeader, StyledRightSideSection, StyledTopSection } from './styled';

import { Logo } from '../shared/Logo';
import { BurgerMenu } from './components/BurgerMenu';
import { Navigation } from './components/Navigation';

import { HeaderProps } from './types';

export const Header: React.FunctionComponent<HeaderProps> = props => {
  const { isHeaderVisible, isNavigationVisible } = props;

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
};
