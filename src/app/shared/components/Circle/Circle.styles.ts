import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useCircleStyles = makeStyles((theme: Theme) => ({
  circle: {
    position: 'absolute',
    top: '100%',
    left: '100%',
    width: pxToRem(20),
    height: pxToRem(20),
    borderRadius: '50%',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));
