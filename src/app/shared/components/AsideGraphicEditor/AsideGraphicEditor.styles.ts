import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SimplyColor } from 'app/shared/types/color.type';
import { pxToRem } from 'app/shared/utils/styles.utils';

export const useAsideGraphicEditor = makeStyles((theme: Theme) => ({
  root: {
    '& > $asideGraphicEditor:hover': {
      '& + $blanket': {
        left: 0,
      },
      '& $nameItem': {
        opacity: 1,
      },
    },
  },
  asideGraphicEditor: ({ color }: { color: SimplyColor }) => ({
    position: 'fixed',
    top: '50%',
    left: '1rem',
    width: 'auto',
    margin: 0,
    transform: 'translateY(-50%)',
    color: theme.palette[color].main,
    zIndex: 2,
  }),
  blanket: {
    position: 'fixed',
    width: '50%',
    top: 0,
    bottom: 0,
    left: '-50%',
    backgroundImage: `linear-gradient(to right, ${theme.palette.background.default}, rgba(255,0,0,0))`,
    transition: 'left 0.3s ease-in',
    zIndex: 1,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
  },
  nameItem: {
    marginLeft: pxToRem(10),
    opacity: 0,
    transition: 'opacity 0.3s ease-in',
  },
  circleItem: {
    display: 'flex',
    minWidth: pxToRem(30),
    justifyContent: 'center',
  },
}));
