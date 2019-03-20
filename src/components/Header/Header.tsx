import React from 'react';

import { StyledHeader, StyledRightSideSection, StyledTopSection } from './styled';

import { BurgerMenu } from './components/BurgerMenu';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';

export const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <StyledTopSection>
      <BurgerMenu />
      <StyledRightSideSection>
        <Logo />
      </StyledRightSideSection>
    </StyledTopSection>
    <Navigation />
  </StyledHeader>
);
