import 'normalize.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';

import { theme } from './theme';

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  </ThemeProvider>
);

export default App;
