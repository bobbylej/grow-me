import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useHeaderTitleStyles = makeStyles((theme: Theme) => ({
  header: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  headerIcon: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
  },
  headerItem: {
    display: 'flex',
    alignItems: 'center',
  },
}));
