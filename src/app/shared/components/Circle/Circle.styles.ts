import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CircleProps } from 'app/shared/components/Circle/Circle';
import { CircleVariant } from 'app/shared/types/circleVariant.type';
import { SimplyColor } from 'app/shared/types/color.type';
import { Size } from 'app/shared/types/size.type';
import { pxToRem } from 'app/shared/utils/styles.utils';

const getSize = (size?: Size): string => {
  switch (size) {
    case 'small':
      return pxToRem(20);
    case 'medium':
      return pxToRem(30);
    default:
      return pxToRem(30);
  }
};

const getBackgroudColor = (
  theme: Theme,
  color: SimplyColor,
  variant?: CircleVariant,
) => {
  switch (variant) {
    case 'active':
    case 'outlined':
      return theme.palette[color].contrastText;
    case 'contained':
      return theme.palette[color].main;
    default:
      return theme.palette[color].dark;
  }
};

const getBorder = (
  theme: Theme,
  color: SimplyColor,
  variant?: CircleVariant,
) => {
  switch (variant) {
    case 'active':
      return `5px solid ${theme.palette[color].main}`;
    case 'outlined':
    case 'contained':
      return `1px solid ${theme.palette[color].main}`;
  }
};

export const useCircleStyles = makeStyles((theme: Theme) => ({
  circle: ({ color = 'primary', size, variant }: CircleProps) => ({
    boxSizing: 'border-box',
    fontSize: '1rem',
    width: getSize(size),
    height: getSize(size),
    color: theme.palette[color].contrastText,
    backgroundColor: getBackgroudColor(theme, color, variant),
    border: getBorder(theme, color, variant),
    transition:
      'background-color 0.3s ease-in, border-width 0.3s ease-in',
  }),
}));
