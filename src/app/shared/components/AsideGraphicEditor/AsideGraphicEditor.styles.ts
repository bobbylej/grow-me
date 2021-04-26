import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useAsideGraphicEditor = makeStyles((theme: Theme) => ({
  asideGraphicEditor: {
    position: 'fixed',
    top: `50%`,
    left: '0.5%',
    color: theme.palette.primary.main,
  },
  itemGraphicEditor: {
    display: 'flex',
    marginBottom: pxToRem(1),
  },
  nameItem: {
    marginLeft: pxToRem(10),
    lineHeight: pxToRem(40),
  },
}));
