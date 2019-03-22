import React from 'react';

import { StyledBurgerMenu, StyledBurgerMenuInner, StyledBurgerMenuWrapper } from './styled';

import { BurgerMenuProps } from './types';

export const BurgerMenu: React.FunctionComponent<BurgerMenuProps> = ({ showWrapper, toggleSideMenu }) => {
  const handleClick = () => toggleSideMenu();

  const button = (
    <StyledBurgerMenu onClick={handleClick}>
      <StyledBurgerMenuInner />
    </StyledBurgerMenu>
  );

  if (showWrapper) {
    return <StyledBurgerMenuWrapper>{button}</StyledBurgerMenuWrapper>;
  }

  return button;
};
