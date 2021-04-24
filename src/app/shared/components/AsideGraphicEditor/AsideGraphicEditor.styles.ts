import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useAsideGraphicEditor = makeStyles((theme: Theme) => ({
  asideGraphicEditor: {
    position: 'fixed',
    top: `${pxToRem(160)}%`,
    left: 0,
    color: theme.palette.primary.main,
  },
}));
