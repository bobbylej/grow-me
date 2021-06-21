import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SimplyColor } from 'app/shared/types/color.type';
import { pxToRem } from 'app/shared/utils/styles.utils';

export const useAsideGraphicEditor = makeStyles((theme: Theme) => ({
  asideGraphicEditor: ({ color }: { color: SimplyColor }) => ({
    position: 'fixed',
    top: '50%',
    left: '0.5%',
    width: 'auto',
    margin: 0,
    transform: 'translateY(-50%)',
    color: theme.palette[color].main,
  }),
  itemGraphicEditor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  nameItem: {
    marginLeft: pxToRem(10),
  },
  circleItem: {
    display: 'flex',
    minWidth: pxToRem(30),
    justifyContent: 'center',
  },
}));
