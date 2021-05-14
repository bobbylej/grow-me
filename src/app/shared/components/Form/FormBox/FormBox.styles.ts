import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { defaultValues } from 'app/shared/utils/stylesUtils';

export const useFormBoxStyles = makeStyles(
  (theme: Theme) => ({
    header: {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderTopRightRadius: defaultValues.borderRadius,
      borderTopLeftRadius: defaultValues.borderRadius,
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      padding: theme.spacing(1, 2),
    },
    headerPrimary: {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,

      '&$headerContained': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    headerPrimaryLight: {
      borderColor: theme.palette.primary.light,
      color: theme.palette.primary.light,

      '&$headerContained': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      },
    },
    headerSecondary: {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,

      '&$headerContained': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
    },
    headerSecondaryLight: {
      borderColor: theme.palette.secondary.light,
      color: theme.palette.secondary.light,

      '&$headerContained': {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
      },
    },
    headerContained: {},
    content: {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderBottomRightRadius: defaultValues.borderRadius,
      borderBottomLeftRadius: defaultValues.borderRadius,
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
    },
    contentPrimary: {
      borderColor: theme.palette.primary.main,
    },
    contentPrimaryLight: {
      borderColor: theme.palette.primary.light,
    },
    contentSecondary: {
      borderColor: theme.palette.secondary.main,
    },
    contentSecondaryLight: {
      borderColor: theme.palette.secondary.light,
    },
    contentContained: {
      backgroundColor: theme.palette.grey[300],
    },
  }),
  { name: 'FormBox' },
);
