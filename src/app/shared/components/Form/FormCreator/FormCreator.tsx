import React from 'react';
import { Grid } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideItem } from 'app/shared/interfaces/asideItem.interface';
import { convertMarkdownRulesJsonToJsx } from 'app/shared/utils/markdownJsonToJsx.utils';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { useFormCreatorStyles } from 'app/shared/components/Form/FormCreator/FormCreator.styles';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { Color } from 'app/shared/types/color.type';
import {
  AddFormElement,
  SetFormElementValue,
} from 'app/shared/types/formCreatorAction.type';
import { generateAsideItemsFromFormElements } from 'app/shared/utils/aside.utils';
import { IntersectionProvider } from 'app/shared/context/IntersectionContext/IntersectionContext';
import { getSimplyColor } from 'app/shared/utils/color.utils';

export interface FormCreatorProps {
  formElements: FormElement[];
  color?: Color;
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

  const asideItems: AsideItem[] = generateAsideItemsFromFormElements(
    formElements,
  );

  return (
    <IntersectionProvider>
      <AsideGraphicEditor
        direction="column"
        color={getSimplyColor(color)}
        items={asideItems}
      />
      <Grid container direction="column" className={styles.form}>
        {content}
      </Grid>
    </IntersectionProvider>
  );
};
