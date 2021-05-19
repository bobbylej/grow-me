import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useRadioCustomStyles = makeStyles((theme: Theme) => ({
  radio: {
    color: theme.palette.grey[400],
  },
}));
