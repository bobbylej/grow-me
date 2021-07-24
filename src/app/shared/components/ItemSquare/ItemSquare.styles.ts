import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Color } from 'app/shared/types/color.type';
import {
  getBackgroundBoxColor,
  getTextColor,
  pxToRem,
} from 'app/shared/utils/styles.utils';

export const useItemSquareStyles = makeStyles((theme: Theme) => ({
  itemSquareWrap: {
    position: 'relative',
  },
  descriptionSquare: ({ color }: { color: Color }) => ({
    padding: theme.spacing(1, 2),
    color: getTextColor(theme, color),
    backgroundColor: getBackgroundBoxColor(theme, color, 'contained'),

    '&:last-child': {
      paddingBottom: theme.spacing(1),
    },
  }),
  circleSurvey: {
    position: 'absolute',
    top: pxToRem(-10),
    right: pxToRem(-10),
    fontSize: '1rem',
  },
}));
