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
      main: '#33a68f',
      light: '#73C6B6',
      dark: '#237a69',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D9A5B3',
      light: '#FFDBE5',
      dark: '#8C5D69',
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
      main: '#33a68f',
      light: '#73C6B6',
      dark: '#237a69',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D9A5B3',
      light: '#FFDBE5',
      dark: '#8C5D69',
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
