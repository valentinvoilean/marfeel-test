export interface ThemeProps {
  colors: {
    [color: string]: string;
  };
  sizes: {
    [size: string]: string;
  };
  sideMenu: {
    headerBackground: string;
    bodyBackground: string;
    linkColor: string;
    linkColorActive: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    items: string[];
  };
  header: {
    background: string;
    fontFamily: string;
    menuButton: {
      color: string;
      background: string;
    };
    nav: {
      fontWeight: string;
      fontSize: string;
      borderWidth: string;
      itemPadding: string;
      colour: string;
      items: string[];
    };
    logo: {
      width: string;
      height: string;
      src: string;
      title: string;
    };
  };
  footer: {
    background: string;
    textColor: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
  };
}
