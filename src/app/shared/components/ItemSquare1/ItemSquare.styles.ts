import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from '../../utils/stylesUtils';

export const useItemSquareStyles = makeStyles((theme: Theme) => ({
  squareContainer: {
    width: pxToRem(50),
    height: pxToRem(50),
    padding: '10%',
  },
  itemsSquereContainer: {
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
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.light,
  },
  itemSquereTemplate: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  itemSquereSurvey: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  },
}));
