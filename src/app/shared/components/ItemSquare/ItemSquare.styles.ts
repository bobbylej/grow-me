import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from '../../utils/stylesUtils';

export const useItemSquareStyles = makeStyles((theme: Theme) => ({
  squareContainer: {
    width: pxToRem(50),
    height: pxToRem(50),
    padding: '10%',
  },
  itemSquareContainer: {
    display: 'flex',
    width: '90%',
    height: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid',
  },
  descriptionSquareTemplate: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
  descriptionSquareSurvey: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
  },
  itemSquareTemplate: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  itemSquareSurvey: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  },
}));
