import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.colors.secondaryColor};
  padding: ${props => `${props.theme.sizes.padding1} ${props.theme.sizes.padding2}`};
`;

export const StyledTopSection = styled.section`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
`;

export const StyledRightSideSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
