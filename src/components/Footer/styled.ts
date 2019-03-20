import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: ${props => props.theme.sizes.size3};
  display: flex;
  flex-direction: column;
`;

export const StyledFooterContent = styled.div`
  background: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.textColor};
  text-align: center;
  padding: ${props => {
    const { size1, size2, size4 } = props.theme.sizes;
    return `${size4} ${size1} ${size2}`;
  }};
  font-family: ${props => props.theme.footer.fontFamily};
  font-weight: ${props => props.theme.footer.fontWeight};
  font-size: ${props => props.theme.footer.fontSize};
`;

export const StyledSkyline = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  img {
    width: 80%;
  }
`;
