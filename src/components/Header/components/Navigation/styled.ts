import styled from 'styled-components';

import { StyledItemProps } from './types';

export const StyledNav = styled.nav`
  display: block;
  font-family: '${props => props.theme.header.fontFamily}', sans-serif;
  font-size: ${props => props.theme.header.nav.fontSize};
  font-weight: ${props => props.theme.header.nav.fontWeight};
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-item: flex-start;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

export const StyledItem = styled.li<StyledItemProps>`
  white-space: nowrap;
  margin-right: ${props => props.theme.sizes.size2};
  padding-bottom: ${props => props.theme.header.nav.itemPadding};
  color: ${props => props.theme.header.nav.colour};
  ${props => {
    const { isActive } = props;
    const { borderWidth, colour } = props.theme.header.nav;
    if (isActive) {
      return `border-bottom: ${borderWidth} solid ${colour};`;
    }
  }}
`;
