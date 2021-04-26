import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useCircleStyles = makeStyles((theme: Theme) => ({
  circleSurvey: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
    fontSize: '1rem',
  },
  circleTemplate: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    fontSize: '1rem',
  },
  circleActive: {
    backgroundColor: theme.palette.primary.contrastText,
    border: `5px solid ${theme.palette.primary.main}`,
  },
  circleOutlined: {
    backgroundColor: theme.palette.primary.contrastText,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  circleCovered: {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  circleSmall: {
    width: pxToRem(20),
    height: pxToRem(20),
  },
  circleMedium: {
    width: pxToRem(30),
    height: pxToRem(30),
  },
}));
