import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useFormControlStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
  },
  formControlWrapper: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));
