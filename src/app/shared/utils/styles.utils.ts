import { Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import { BackgroundVariant } from 'app/shared/types/backgroundVariant.type';
import { Color } from 'app/shared/types/color.type';
import { Size } from 'app/shared/types/size.type';

export const htmlFontSize = 16;

export const pxToRem = (px: number): string =>
  `${px / htmlFontSize}rem`;

export const defaultValues = {
  borderRadius: '4px',
};

export const getTypographyStyle = (
  theme: Theme,
  size?: Size,
): CSSProperties => {
  switch (size) {
    case 'small':
      return theme.typography.body1;
    case 'medium':
      return theme.typography.h3;
  }
  return theme.typography.h3;
};

export const getBoxColor = (
  theme: Theme,
  color: Color = 'primary',
  variant: BackgroundVariant = 'outlined',
): string => {
  const colorMatrix: Record<
    Color,
    Record<BackgroundVariant, string>
  > = {
    primary: {
      outlined: theme.palette.primary.main,
      contained: theme.palette.primary.contrastText,
    },
    primaryLight: {
      outlined: theme.palette.primary.light,
      contained: theme.palette.primary.contrastText,
    },
    secondary: {
      outlined: theme.palette.secondary.main,
      contained: theme.palette.secondary.contrastText,
    },
    secondaryLight: {
      outlined: theme.palette.secondary.light,
      contained: theme.palette.secondary.contrastText,
    },
  };
  return colorMatrix[color][variant];
};

export const getContrastBoxColor = (
  theme: Theme,
  color: Color = 'primary',
  variant: BackgroundVariant = 'outlined',
): string => {
  return getBoxColor(
    theme,
    color,
    variant === 'outlined' ? 'contained' : 'outlined',
  );
};
