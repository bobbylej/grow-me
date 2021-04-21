import { makeStyles } from '@material-ui/styles';

export const useFabContainerStyles = makeStyles(() => ({
  fabContainer: {
    position: 'fixed',
    bottom: '1rem',
    right: 0,
    left: 0,
    width: '100%',
  },
  fabContent: {
    position: 'relative',
  },
}));
