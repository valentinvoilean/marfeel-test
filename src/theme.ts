import logo from './img/marfeel_logo.svg';

export const theme = {
  colors: {
    primaryColor: 'black',
    secondaryColor: 'white',
    gray1: '#E0E0E0',
    gray2: '#f2f2f2'
  },
  sizes: {
    size1: '10px',
    size2: '15px',
    size3: '20px',
    size4: '40px',
    size5: '50px'
  },
  header: {
    background: 'rgb(2,0,36)',
    fontFamily: 'Roboto',
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
