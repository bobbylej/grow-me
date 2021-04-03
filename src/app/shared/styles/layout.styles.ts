import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  content: {
    maxWidth: '1140px',
    margin: 'auto',
  },
}));

export default useLayoutStyles;
