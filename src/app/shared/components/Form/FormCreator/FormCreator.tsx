import React from 'react';
import { Grid } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic.interface';
import { convertMarkdownRulesJsonToJsx } from 'app/shared/utils/markdownJsonToJsx.utils';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { useFormCreatorStyles } from 'app/shared/components/Form/FormCreator/FormCreator.styles';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { SimplyColor } from 'app/shared/types/color.type';
import {
  AddFormElement,
  SetFormElementValue,
} from 'app/shared/types/formCreatorAction.type';

export interface FormCreatorProps {
  formElements: FormElement[];
  color?: SimplyColor;
  changeFormElementValue?: SetFormElementValue;
  addFormElement?: AddFormElement;
}

export const FormCreator = ({
  formElements,
  color = 'primary',
  changeFormElementValue,
  addFormElement,
}: FormCreatorProps): React.ReactElement => {
  const intl = useIntl();
  const styles = useFormCreatorStyles();
  const circleEditorGraphic: AsideGraphic[] = [
    {
      id: 'test 1',
      name: 'test 1',
      status: 'done',
      type: 'group',
    },
    {
      id: 'test 2',
      name: 'test 2',
      status: 'active',
      type: 'section',
    },
    {
      id: 'test 3',
      name: 'test 3',
      status: 'pending',
      type: 'section',
    },
  ];
  const placeholders: Partial<Record<MarkdownRuleType, string>> = {
    textInput: intl.formatMessage({
      id: 'FORM_CREATOR.PLACEHOLDER.TEXT_INPUT',
      defaultMessage: 'This is a place for a short open text answer',
    }),
    textareaInput: intl.formatMessage({
      id: 'FORM_CREATOR.PLACEHOLDER.TEXTAREA_INPUT',
      defaultMessage: `\nThis is a place for a long open text answer\n`,
    }),
  };

  const setValue = (id: string, value?: FormElementValue): void => {
    changeFormElementValue && changeFormElementValue(id, value);
  };

  const onAddFormElement = (
    type: MarkdownRuleType,
    parentId?: string,
  ): void => {
    console.log('onAddFormElement', type, parentId);

    addFormElement && addFormElement(type, parentId);
  };

  const content = convertMarkdownRulesJsonToJsx(
    formElements,
    {
      color,
      placeholders,
    },
    setValue,
    onAddFormElement,
    true,
  );

  return (
    <div>
      <Grid container direction="column" className={styles.form}>
        {content}
      </Grid>
      <AsideGraphicEditor
        direction="column"
        color={color}
        circleEditor={circleEditorGraphic}
      />
    </div>
  );
};
