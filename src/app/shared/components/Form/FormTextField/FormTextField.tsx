import { TextField, TextFieldProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useFormTextFieldStyles } from 'app/shared/components/Form/FormTextField/FormTextField.styles';

export interface FormTextFieldProps {
  inputSize?: 'small' | 'medium' | 'h2' | 'h3';
}

export const FormTextField = ({
  inputSize,
  ...props
}: FormTextFieldProps & TextFieldProps): ReactElement => {
  const { textField } = useFormTextFieldStyles({ inputSize });
  return (
    <TextField
      {...props}
      className={`${textField} ${props.className}`}
    />
  );
};
