import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.colors.secondaryColor};
  padding: ${props => `${props.theme.sizes.size1} ${props.theme.sizes.size2}`} 0;
`;

export const StyledTopSection = styled.section`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  margin-bottom: ${props => props.theme.sizes.size1};
`;

export const StyledRightSideSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
