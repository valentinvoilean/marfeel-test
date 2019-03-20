import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { StyledMainSection, StyledMediaBlock } from './styled';

export const MainSection: React.FunctionComponent = () => (
  <ThemeConsumer>
    {theme => (
      <StyledMainSection>
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMediaBlock color={theme.colors.gray1} rows={4} />
      </StyledMainSection>
    )}
  </ThemeConsumer>
);
