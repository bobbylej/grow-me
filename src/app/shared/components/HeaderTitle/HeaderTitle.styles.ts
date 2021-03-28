import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useHeaderTitleStyles = makeStyles((theme: Theme) => ({
  header: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  headerIcon: {
    width: pxToRem(40),
    height: pxToRem(40),
  },
}));
