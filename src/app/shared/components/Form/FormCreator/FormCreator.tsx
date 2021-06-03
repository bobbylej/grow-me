import React from 'react';
import { Grid } from '@material-ui/core';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic.interface';
import { SingleQuestion } from 'app/shared/components/SingleQuestion/SingleQuestion';
import { QuestionGroup } from 'app/shared/components/QuestionGroup/QuestionGroup';
import { convertMarkdownRulesJsonToJsx } from 'app/shared/utils/markdownJsonToJsx.utils';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { useFormCreatorStyles } from 'app/shared/components/Form/FormCreator/FormCreator.styles';
import { FormElement } from 'app/shared/interfaces/formElement.interface';

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

  const setValue = (id: string, value: FormElementValue): void => {
    changeFormElementValue && changeFormElementValue(id, value);
  };

  const content = convertMarkdownRulesJsonToJsx(
    formElements,
    undefined,
    setValue,
  );

  return (
    <div>
      <Grid container direction="column" className={styles.form}>
        {content}
        <SingleQuestion text="test1" />
        <QuestionGroup />
      </Grid>
      <AsideGraphicEditor
        direction="column"
        circleEditor={circleEditorGraphic}
      />
    </div>
  );
};
