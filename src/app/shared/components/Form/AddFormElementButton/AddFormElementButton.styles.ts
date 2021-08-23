import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AddFormElementButtonProps } from 'app/shared/components/Form/AddFormElementButton/AddFormElementButton';
import { defaultValues } from 'app/shared/utils/styles.utils';

export const useAddFormElementButtonStyles = makeStyles(
  (theme: Theme) => ({
    menu: ({
      color = 'primary',
    }: Partial<AddFormElementButtonProps>) => ({
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.palette[color].main,
      borderRadius: defaultValues.borderRadius,
      overflow: 'hidden',
    }),
    menuItem: ({
      color = 'primary',
    }: Partial<AddFormElementButtonProps>) => ({
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      transition: 'all ease-in 0.3s',

      '&:hover': {
        backgroundColor: theme.palette[color].main,
        color: theme.palette[color].contrastText,
      },
    }),
  }),
);
