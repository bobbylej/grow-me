import { Theme } from '@material-ui/core';
import { CSSProperties, makeStyles } from '@material-ui/styles';
import { Color } from 'app/shared/types/color.type';
import { defaultValues } from 'app/shared/utils/styles.utils';
import { FormBoxProps } from 'app/shared/components/Form/FormBox/FormBox';
import { BackgroundVariant } from 'app/shared/types/backgroundVariant.type';
import { Size } from 'app/shared/types/size.type';

const getTypographyStyle = (
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

const getColor = (
  theme: Theme,
  color?: Color,
  variant?: BackgroundVariant,
): string => {
  switch (color) {
    case 'primary':
      return variant === 'outlined'
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText;
    case 'primaryLight':
      return variant === 'outlined'
        ? theme.palette.primary.light
        : theme.palette.primary.contrastText;
    case 'secondary':
      return variant === 'outlined'
        ? theme.palette.secondary.main
        : theme.palette.secondary.contrastText;
    case 'secondaryLight':
      return variant === 'outlined'
        ? theme.palette.secondary.light
        : theme.palette.secondary.contrastText;
  }
  return theme.palette.primary.main;
};

const getContrastColor = (
  theme: Theme,
  color?: Color,
  variant?: BackgroundVariant,
): string => {
  return getColor(
    theme,
    color,
    variant === 'outlined' ? 'contained' : 'outlined',
  );
};

const getContentBackgroundColor = (
  theme: Theme,
  variant?: BackgroundVariant,
): string => {
  return variant === 'contained'
    ? theme.palette.grey[300]
    : theme.palette.background.default;
};

export const useFormBoxStyles = makeStyles(
  (theme: Theme) => ({
    header: {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderTopRightRadius: defaultValues.borderRadius,
      borderTopLeftRadius: defaultValues.borderRadius,
      borderBottomWidth: 0,
      borderColor: (props: Partial<FormBoxProps>) =>
        getColor(theme, props.color, 'outlined'),
      color: (props: Partial<FormBoxProps>) =>
        getColor(theme, props.color, props.headerVariant),
      backgroundColor: (props: Partial<FormBoxProps>) =>
        getContrastColor(theme, props.color, props.headerVariant),
      padding: theme.spacing(1, 2),
    },
    headerInput: (props: Partial<FormBoxProps>) => {
      const fontStyles = getTypographyStyle(theme, props.size);
      return {
        color: getColor(theme, props.color, props.headerVariant),
        fontSize: fontStyles.fontSize,
        fontWeight: fontStyles.fontWeight,
      };
    },
    content: {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderBottomRightRadius: defaultValues.borderRadius,
      borderBottomLeftRadius: defaultValues.borderRadius,
      borderColor: (props: Partial<FormBoxProps>) =>
        getColor(theme, props.color, 'outlined'),
      backgroundColor: (props: Partial<FormBoxProps>) =>
        getContentBackgroundColor(theme, props.contentVariant),
      padding: theme.spacing(2),
    },
  }),
  { name: 'FormBox' },
);
