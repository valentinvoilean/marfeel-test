import styled from 'styled-components';

export const StyledBurgerMenu = styled.button`
  // reset button
  border: none;
  padding: 0;
  -webkit-appearance: unset;
  background: none
    
  height: 16px;
  width: 20px;
  position: absolute;
  cursor: pointer;
`;

export const StyledBurgerMenuInner = styled.div`
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.header.menuButton.color};
  top: 7px;

  :before,
  :after {
    display: block;
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.header.menuButton.color};
  }

  :before {
    top: -6px;
  }

  :after {
    bottom: -6px;
  }
`;

export const StyledBurgerMenuWrapper = styled.div`
  position: fixed;
  top: 3px;
  left: 5px;
  background: ${({ theme }) => theme.header.menuButton.background};
  width: 20px;
  height: 16px;
  padding: 12px 10px 12px 10px;
  border-radius: 50%;
  cursor: pointer;
`;
