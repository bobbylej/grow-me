import { createMuiTheme } from '@material-ui/core/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

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
      main: '#009688',
      light: '#80cbc4',
      dark: '#00695c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#fff',
    },
    text: {
      primary: '#3e3e3e',
      secondary: '#fff',
    },
    background: {
      paper: '#424242',
      default: '#fff',
    },
  },
});

export const darkTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#009688',
      light: 'rgb(51, 171, 159)',
      dark: 'rgb(0, 105, 95)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
      light: 'rgb(247, 51, 120)',
      dark: 'rgb(171, 0, 60)',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#3e3e3e',
    },
    background: {
      paper: '#fff',
      default: '#424242',
    },
  },
});
