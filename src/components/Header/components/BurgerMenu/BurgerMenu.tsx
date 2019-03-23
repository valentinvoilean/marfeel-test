import React from 'react';

import { StyledBurgerMenu, StyledBurgerMenuInner, StyledBurgerMenuWrapper } from './styled';

import { BurgerMenuProps } from './types';

export const BurgerMenu: React.FunctionComponent<BurgerMenuProps> = props => {
  const { handleClick, showWrapper } = props;

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
