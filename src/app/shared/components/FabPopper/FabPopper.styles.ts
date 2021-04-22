import { makeStyles } from '@material-ui/styles';
import { FabPopperProps } from 'app/shared/components/FabPopper/FabPopper';

export const useFabPopperStyles = makeStyles({
  popper: {
    maxWidth: (props: Partial<FabPopperProps>) =>
      props.size === 'small' ? '400px' : '600px',
  },
});
