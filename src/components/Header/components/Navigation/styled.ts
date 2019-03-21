import styled from 'styled-components';

import { StyledItemProps } from './types';

export const StyledNav = styled.nav`
  display: flex;
  overflow: hidden;
  height: 20px;
  justify-content: center;
  font-family: '${props => props.theme.header.fontFamily}', sans-serif;
  font-size: ${props => props.theme.header.nav.fontSize};
  font-weight: ${props => props.theme.header.nav.fontWeight};
`;

export const StyledList = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: flex-start;
  padding: 0 ${props => props.theme.sizes.size2};
  margin: 0;
  overflow: auto;
  height: 50px;
`;

export const StyledItem = styled.li<StyledItemProps>`
  white-space: nowrap;
  padding-right: ${props => props.theme.sizes.size2};
  color: ${props => props.theme.header.nav.colour};
`;

export const StyledLink = styled.a<StyledItemProps>`
  color: inherit;
  text-decoration: none;
  display: block;
  padding-bottom: ${props => props.theme.header.nav.itemPadding};
  ${props => {
    const { isActive } = props;
    const { borderWidth, colour } = props.theme.header.nav;
    if (isActive) {
      return `border-bottom: ${borderWidth} solid ${colour};`;
    }
  }}
`;
