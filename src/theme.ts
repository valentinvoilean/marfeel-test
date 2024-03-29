import logo from './img/marfeel_logo.svg';
import { ThemeProps } from './types';

export const theme: ThemeProps = {
  colors: {
    primaryColor: 'black',
    secondaryColor: 'white',
    gray1: '#E0E0E0',
    gray2: '#f2f2f2',
    gray3: '#b9b9b9'
  },
  sizes: {
    size1: '10px',
    size2: '15px',
    size3: '20px',
    size4: '40px',
    size5: '50px'
  },
  sideMenu: {
    headerBackground: 'rgb(2,0,36)',
    bodyBackground: 'white',
    linkColor: '#b9b9b9',
    linkColorActive: '#de0000',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '16px',
    items: [
      'Side Link 1',
      'Side Link 2',
      'Side Link 3',
      'Side Link 4',
      'Side Link 5',
      'Side Link 6',
      'Side Link 7',
      'Side Link 8',
      'Side Link 9',
      'Side Link 10'
    ]
  },
  header: {
    background: 'rgb(2,0,36)',
    fontFamily: 'Roboto',
    menuButton: {
      color: 'white',
      background: 'linear-gradient(to bottom, #fd8d00 0%,#98cd00 100%)'
    },
    nav: {
      fontWeight: '400',
      fontSize: '14px',
      borderWidth: '2px',
      itemPadding: '2px',
      colour: 'white',
      items: [
        'Section 1',
        'Section 2',
        'Section 3',
        'Section 4',
        'Section 5',
        'Section 6',
        'Section 7',
        'Section 8',
        'Section 9',
        'Section 10'
      ]
    },
    logo: {
      width: '100px',
      height: '25px',
      src: logo,
      title: 'Logo'
    }
  },
  footer: {
    background: '#f2f2f2',
    textColor: '#888',
    fontFamily: 'Raleway',
    fontWeight: '200',
    fontSize: '12px'
  }
};
