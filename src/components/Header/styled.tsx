import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.colors.secondaryColor};
`;

export const StyledTopSection = styled.section`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  padding: ${props => `${props.theme.sizes.size1} ${props.theme.sizes.size2}`};
`;

export const StyledRightSideSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
