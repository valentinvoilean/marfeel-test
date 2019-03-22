import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { Logo } from '../shared/Logo';
import {
  StyledHeader,
  StyledItem,
  StyledLink,
  StyledList,
  StyledNav,
  StyledSideMenu,
  StyledTransparentShim
} from './styled';

import { SideMenuProps } from './types';

export const SideMenu: React.FunctionComponent<SideMenuProps> = ({ isSideMenuVisible, toggleSideMenu }) => {
  if (!isSideMenuVisible) {
    return null;
  }

  const handleClick = () => toggleSideMenu(false);

  return (
    <StyledTransparentShim onClick={handleClick}>
      <StyledSideMenu>
        <StyledHeader>
          <Logo />
        </StyledHeader>
        <StyledNav>
          <StyledList>
            <ThemeConsumer>
              {theme =>
                theme.sideMenu.items.map((item: string, index: number) => (
                  <StyledItem key={index}>
                    <StyledLink isActive={index === 0} href={`#${index + 1}`} onClick={handleClick}>
                      {item}
                    </StyledLink>
                  </StyledItem>
                ))
              }
            </ThemeConsumer>
          </StyledList>
        </StyledNav>
      </StyledSideMenu>
    </StyledTransparentShim>
  );
};
