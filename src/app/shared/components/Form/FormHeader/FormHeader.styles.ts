import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useFormHeaderStyles = makeStyles((theme: Theme) => ({
  headerItem: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
}));
