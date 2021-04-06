import { makeStyles } from '@material-ui/styles';
import { maxContentWidth } from 'app/shared/constants/theme';

export const useFabContainerStyles = makeStyles(() => ({
  fabContainer: {
    position: 'fixed',
    bottom: '2rem',
    right: 0,
    left: 0,
    width: '100%',
  },
  fabContent: {
    position: 'relative',
    width: '100%',
    maxWidth: maxContentWidth,
    margin: 'auto',
  },
}));
