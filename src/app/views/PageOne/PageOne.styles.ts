import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    padding: '1rem',
  },
}));

export default useStyles;
