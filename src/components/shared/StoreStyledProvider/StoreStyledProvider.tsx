import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from '../../../store';
import { defaultTheme } from '../../../store/theme/constants';

export const StoreStyledProvider: React.FunctionComponent = ({ children }) => (
  <Provider store={configureStore()}>
    <ThemeProvider theme={defaultTheme}>
      <>{children}</>
    </ThemeProvider>
  </Provider>
);
