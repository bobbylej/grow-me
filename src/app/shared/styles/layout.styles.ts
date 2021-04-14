import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { maxContentWidth } from 'app/shared/constants/theme';

const useLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  content: {
    maxWidth: maxContentWidth,
    margin: 'auto',
  },
}));

export default useLayoutStyles;
