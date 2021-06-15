import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormTextFieldProps } from 'app/shared/components/Form/FormTextField/FormTextField';

const getFontSize = (
  props: FormTextFieldProps,
  theme: Theme,
): string | number | undefined => {
  switch (props.inputSize) {
    case 'h2':
      return theme.typography.h2.fontSize;
    case 'h3':
      return theme.typography.h3.fontSize;
    default:
      return 'inherit';
  }
};

export const useFormTextFieldStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
  },
  textField: {
    '& input': {
      fontSize: (props: FormTextFieldProps) =>
        getFontSize(props, theme),
    },
    '& label:not(.MuiInputLabel-shrink)': {
      color: theme.palette.primary.light,
      fontSize: (props: FormTextFieldProps) =>
        getFontSize(props, theme),
    },
  },
}));
