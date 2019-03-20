import React from 'react';

import { StyledFooter, StyledFooterContent, StyledSkyline } from './styled';

import skyline from '../../img/skyline.svg';

export const Footer: React.FunctionComponent = () => (
  <StyledFooter>
    <StyledSkyline>
      <img src={skyline} alt="skyline" />
    </StyledSkyline>
    <StyledFooterContent>©Copyright 2019 - marfeel.com</StyledFooterContent>
  </StyledFooter>
);
