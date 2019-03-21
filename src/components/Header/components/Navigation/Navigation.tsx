import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { StyledItem, StyledList, StyledNav } from './styled';

export const Navigation: React.FunctionComponent = () => (
  <StyledNav>
    <StyledList>
      <ThemeConsumer>
        {theme =>
          theme.header.nav.items.map((item: string, index: number) => (
            <StyledItem isActive={index === 0} key={index}>
              {item}
            </StyledItem>
          ))
        }
      </ThemeConsumer>
    </StyledList>
  </StyledNav>
);
