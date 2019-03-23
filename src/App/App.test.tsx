import { shallow } from 'enzyme';
import React from 'react';

import { App } from './App';

import { defaultTheme } from '../store/theme/constants';

describe('App', () => {
  const props = {
    theme: defaultTheme,
    loadTheme: jest.fn()
  };
  let wrapper;

  it('renders without crashing', () => {
    shallow(<App {...props} />);
  });

  it('loads the theme on componentDidMount', () => {
    wrapper = shallow(<App {...props} />);
    expect(props.loadTheme).toHaveBeenCalled();
  });
});
