import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useCheckBoxCustomStyles = makeStyles((theme: Theme) => ({
  checkBox: {
    color: theme.palette.grey[400],
  },
}));
