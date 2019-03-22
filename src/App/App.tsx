import 'normalize.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { ThemeProvider } from 'styled-components';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainSection } from '../components/MainSection';
import { SideMenu } from '../components/SideMenu';

import { fonts } from './constants';
import { AppProps } from './types';

import { mock } from './mocks';

export class App extends React.PureComponent<AppProps> {
  public componentDidMount(): void {
    this.props.loadTheme();
  }

  public componentWillUnmount(): void {
    mock.restore();
  }

  public render(): JSX.Element {
    return (
      <ThemeProvider theme={this.props.theme}>
        <>
          <GoogleFontLoader fonts={fonts} />
          <Header />
          <MainSection />
          <Footer />
          <SideMenu />
        </>
      </ThemeProvider>
    );
  }
}
