import React from 'react';
import { Grid } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic.interface';
import { SingleQuestion } from 'app/shared/components/SingleQuestion/SingleQuestion';
import { QuestionGroup } from 'app/shared/components/QuestionGroup/QuestionGroup';
import { convertMarkdownRulesJsonToJsx } from 'app/shared/utils/markdownJsonToJsx.utils';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { useFormCreatorStyles } from 'app/shared/components/Form/FormCreator/FormCreator.styles';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export interface FormCreatorProps {
  formElements: FormElement[];
  changeFormElementValue?: (
    id: string,
    value?: FormElementValue,
  ) => void;
}

export const FormCreator = ({
  formElements,
  changeFormElementValue,
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

  const setValue = (id: string, value: FormElementValue): void => {
    changeFormElementValue && changeFormElementValue(id, value);
  };

  const content = convertMarkdownRulesJsonToJsx(
    formElements,
    {
      color: 'secondary',
      placeholders,
    },
    setValue,
  );

  return (
    <div>
      <Grid container direction="column" className={styles.form}>
        {content}
        <SingleQuestion text="test1" color="secondary" />
        <QuestionGroup />
      </Grid>
      <AsideGraphicEditor
        direction="column"
        circleEditor={circleEditorGraphic}
      />
    </div>
  );
};
