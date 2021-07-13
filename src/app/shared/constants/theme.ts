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
      main: '#64B088',
      light: '#C2FCDE',
      dark: '#477D61',
      contrastText: '#fff',
    },
    secondary: {
      main: '#41B3A3',
      light: '#7EBFB7',
      dark: '#2E7F75',
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
      main: '#64B088',
      light: '#C2FCDE',
      dark: '#477D61',
      contrastText: '#fff',
    },
    secondary: {
      main: '#41B3A3',
      light: '#7EBFB7',
      dark: '#2E7F75',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#3e3e3e',
    },
    background: {
      paper: '#ababab',
      default: '#424242',
    },
  },
});
