import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

import { Header } from './Header';

import { StoreStyledProvider } from '../shared/StoreStyledProvider';

describe('Header', () => {
  it('renders without crashing', () => {
    const header = renderer
      .create(
        <StoreStyledProvider>
          <Header />
        </StoreStyledProvider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
