import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useWeightStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    height: pxToRem(27),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '999rem',
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(0.25),
    '-moz-appearance': 'textfield',

    '& input': {
      display: 'inline-block',
      padding: `0 ${pxToRem(5)}`,
    },

    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  rootLight: {
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
  },
  rootSecondary: {
    color: theme.palette.secondary.contrastText,
    borderColor: theme.palette.secondary.contrastText,
  },
  rootSecondaryLight: {
    color: theme.palette.secondary.contrastText,
    borderColor: theme.palette.secondary.contrastText,
  },
}));
