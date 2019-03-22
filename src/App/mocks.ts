import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { defaultTheme } from '../store/theme/constants';

export const mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onGet('/theme').reply(200, {
  theme: {
    ...defaultTheme,
    header: {
      ...defaultTheme.header,
      background: '#fff',
      menuButton: {
        ...defaultTheme.header.menuButton,
        color: '#000'
      },
      nav: {
        ...defaultTheme.header.nav,
        colour: '#000'
      }
    }
  }
});
