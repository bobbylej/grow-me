import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useAsideGraphicEditor = makeStyles((theme: Theme) => ({
  asideGraphicEditor: {
    position: 'fixed',
    top: '50%',
    left: '0.5%',
    transform: 'translateY(-50%)',
    color: theme.palette.primary.main,
    zIndex: -1,
  },
  itemGraphicEditor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  nameItem: {
    minWidth: pxToRem(50),
    marginLeft: pxToRem(10),
  },
}));
