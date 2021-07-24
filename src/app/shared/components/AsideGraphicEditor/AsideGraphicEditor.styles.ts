import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AsidePosition } from 'app/shared/types/asidePosition.type';
import { SimplyColor } from 'app/shared/types/color.type';
import { pxToRem } from 'app/shared/utils/styles.utils';

const getAsidePosition = (
  position: AsidePosition,
  isFlying: boolean,
): 'fixed' | 'relative' | 'static' => {
  switch (position) {
    case 'fixed':
    case 'static':
      return position;
    case 'sticky':
      return isFlying ? 'fixed' : 'relative';
  }
};

const getAsideTop = (
  position: AsidePosition,
  isFlying: boolean,
): string | undefined => {
  switch (position) {
    case 'fixed':
      return '50%';
    case 'sticky':
      return isFlying ? '50%' : '0';
  }
};

const getAsideTransform = (
  position: AsidePosition,
  isFlying: boolean,
): string | undefined => {
  switch (position) {
    case 'fixed':
      return 'translateY(-50%)';
    case 'sticky':
      return isFlying ? 'translateY(-50%)' : undefined;
  }
};

export const useAsideGraphicEditor = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    left: 0,

    '& > $asideGraphicEditor:hover': {
      '& + $blanket': {
        left: 0,
      },
      '& $nameItem': {
        opacity: 1,
      },
    },
  },
  asideGraphicEditor: ({
    color,
    position,
    isFlying,
  }: {
    color: SimplyColor;
    position: AsidePosition;
    isFlying: boolean;
  }) => ({
    position: getAsidePosition(position, isFlying),
    top: getAsideTop(position, isFlying),
    left: '1rem',
    width: 'auto',
    margin: 0,
    color: theme.palette[color].main,
    zIndex: 2,
    transform: getAsideTransform(position, isFlying),
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
  nameItemActive: {
    fontWeight: theme.typography.fontWeightBold,
  },
  circleItem: {
    display: 'flex',
    minWidth: pxToRem(30),
    justifyContent: 'center',
  },
}));
