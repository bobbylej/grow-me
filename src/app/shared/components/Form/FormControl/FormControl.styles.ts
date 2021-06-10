import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useFormControlStyles = makeStyles((theme: Theme) => ({
  formControlWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
  },
}));
