import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  defaultValues,
  getBoxColor,
  getBackgroundBoxColor,
  getTypographyStyle,
  getTextColor,
} from 'app/shared/utils/styles.utils';
import { FormBoxProps } from 'app/shared/components/Form/FormBox/FormBox';
import { BackgroundVariant } from 'app/shared/types/backgroundVariant.type';

const getContentBackgroundColor = (
  theme: Theme,
  variant?: BackgroundVariant,
): string => {
  return variant === 'contained'
    ? theme.palette.background.paper
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
        getBoxColor(theme, props.color),
      color: (props: Partial<FormBoxProps>) =>
        getTextColor(theme, props.color, props.headerVariant),
      backgroundColor: (props: Partial<FormBoxProps>) =>
        getBackgroundBoxColor(
          theme,
          props.color,
          props.headerVariant,
        ),
      padding: theme.spacing(1, 2),
    },
    headerInput: (props: Partial<FormBoxProps>) => {
      const fontStyles = getTypographyStyle(theme, props.size);
      return {
        color: getTextColor(theme, props.color, props.headerVariant),
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
        getBoxColor(theme, props.color),
      backgroundColor: (props: Partial<FormBoxProps>) =>
        getContentBackgroundColor(theme, props.contentVariant),
      padding: theme.spacing(2),

      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
  }),
  { name: 'FormBox' },
);
