import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Color } from 'app/shared/types/color.type';
import { getSimplyColor } from 'app/shared/utils/color.utils';
import { getBoxColor } from 'app/shared/utils/styles.utils';

export const useItemSquareListStyles = makeStyles((theme: Theme) => ({
  itemSquare: ({ color }: { color: Color }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    color: theme.palette[getSimplyColor(color)].main,
    border: `1px solid ${getBoxColor(theme, color)}`,
  }),
}));
