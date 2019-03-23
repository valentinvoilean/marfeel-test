import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

import { Header } from './Header';

import { StoreStyledProvider } from '../shared/StoreStyledProvider';

describe('Header', () => {
  it('renders without crashing', () => {
    const props: any = {
      isHeaderVisible: true,
      isNavigationVisible: true,
      setHeaderState: jest.fn,
      checkTopOffset: jest.fn
    };

    const header = renderer
      .create(
        <StoreStyledProvider>
          <Header {...props} />
        </StoreStyledProvider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
