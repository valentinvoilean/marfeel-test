import styled from 'styled-components';

export const StyledBurgerMenu = styled.button`
  // reset button
  border: none;
  padding: 0;
  -webkit-appearance: unset;
  background: none
    
  height: 16px;
  width: 20px;
  position: relative;
`;

export const StyledBurgerMenuInner = styled.div`
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background-color: #fff;
  top: 7px;

  :before,
  :after {
    display: block;
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: #fff;
  }

  :before {
    top: -6px;
  }

  :after {
    bottom: -6px;
  }
`;
