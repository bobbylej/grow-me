import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useNavigationStyles = makeStyles((theme: Theme) => ({
  navigation: {
    paddingTop: '5rem',
  },
  link: {
    display: 'block',
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    textTransform: 'uppercase',

    '&.active': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
