import { createMuiTheme } from '@material-ui/core/styles';
import { pxToRem } from 'app/shared/utils/styles.utils';

export const maxContentWidth = '1140px';

export const defaultTheme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 'normal',
    },
    h3: {
      fontSize: pxToRem(30),
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
});

export const lightTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    type: 'light',
    primary: {
      main: '#73C6B6',
      light: '#A2D9CE',
      dark: '#45B39D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#138D75',
      light: '#45B39D',
      dark: '#0E6655',
      contrastText: '#fff',
    },
    text: {
      primary: '#3e3e3e',
      secondary: '#fff',
    },
    background: {
      paper: '#e0e0e0',
      default: '#fff',
    },
  },
});

export const darkTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#73C6B6',
      light: '#A2D9CE',
      dark: '#45B39D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#33a68f',
      light: '#3cc7ab',
      dark: '#237a69',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#3e3e3e',
    },
    background: {
      paper: '#757575',
      default: '#424242',
    },
  },
});
