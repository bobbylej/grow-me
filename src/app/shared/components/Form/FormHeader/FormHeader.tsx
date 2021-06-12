import { Typography } from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';
import { useFormHeaderStyles } from 'app/shared/components/Form/FormHeader/FormHeader.styles';
import { FormTextField } from 'app/shared/components/Form/FormTextField/FormTextField';
import { SimplyColor } from 'app/shared/types/color.type';

export interface FormHeaderProps {
  editMode?: boolean;
  title?: string;
  description?: string;
  color?: SimplyColor;
  onChangeTitle?: (value: string) => void;
  onChangeDescription?: (value: string) => void;
}

export const FormHeader = ({
  color = 'primary',
  ...props
}: FormHeaderProps): ReactElement => {
  const intl = useIntl();
  const translation = {
    label: {
      title: intl.formatMessage({
        id: 'FORM.LABEL.TITLE',
        defaultMessage: 'Title',
      }),
      description: intl.formatMessage({
        id: 'FORM.LABEL.DESCRIPTION',
        defaultMessage: 'Description',
      }),
    },
  };
  const { headerItem } = useFormHeaderStyles();

  const [title, setTitle] = useState(props.title || '');
  const [description, setDescription] = useState(
    props.description || '',
  );

  const handleChange = (
    fieldName: 'title' | 'description',
    value: string,
  ): void => {
    switch (fieldName) {
      case 'title':
        setTitle(value);
        props.onChangeTitle && props.onChangeTitle(value);
        break;
      case 'description':
        setDescription(value);
        props.onChangeDescription && props.onChangeDescription(value);
        break;
    }
  };

  const editableTextFields = (
    <div>
      <FormTextField
        color={color}
        name="title"
        inputSize="h3"
        className={headerItem}
        fullWidth={true}
        label={translation.label.title}
        value={title}
        required={true}
        onChange={(event) =>
          handleChange('title', event.target.value)
        }
      />
      <FormTextField
        color={color}
        name="description"
        className={headerItem}
        fullWidth={true}
        label={translation.label.description}
        value={description}
        multiline={true}
        onChange={(event) =>
          handleChange('description', event.target.value)
        }
      />
    </div>
  );

  const textPreview = (
    <div>
      <Typography className={headerItem} variant="h2">
        {props.title}
      </Typography>
      <Typography className={headerItem} variant="body1">
        {props.description}
      </Typography>
    </div>
  );

  return props.editMode ? editableTextFields : textPreview;
};
