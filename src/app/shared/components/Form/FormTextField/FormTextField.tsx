import { TextField, TextFieldProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useFormTextFieldStyles } from 'app/shared/components/Form/FormTextField/FormTextField.styles';

export interface FormTextFieldProps {
  inputSize?: 'small' | 'medium' | 'h2' | 'h3';
  weight?: ReactElement;
}

export const FormTextField = ({
  inputSize,
  weight,
  ...props
}: FormTextFieldProps & TextFieldProps): ReactElement => {
  const { root, textField } = useFormTextFieldStyles({ inputSize });
  return (
    <div className={root}>
      <TextField
        {...props}
        className={`${textField} ${props.className}`}
      />
      {weight}
    </div>
  );
};
