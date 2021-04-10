import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useCircleStyles = makeStyles((theme: Theme) => ({
  circle: {
    borderRadius: '50%',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));
