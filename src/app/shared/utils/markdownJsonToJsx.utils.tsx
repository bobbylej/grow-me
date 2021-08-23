import React from 'react';
import { FormGroup, RadioGroup } from '@material-ui/core';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import { MarkdownRuleProps } from 'app/shared/interfaces/markdownRuleProps.interface';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { SingleQuestion } from 'app/shared/components/SingleQuestion/SingleQuestion';
import { RadioCustom } from 'app/shared/components/RadioCustom/RadioCustom';
import { CheckBoxCustom } from 'app/shared/components/CheckBoxCustom/CheckBoxCustom';
import { Weight } from 'app/shared/components/Weight/Weight';
import { MarkdownRuleJsxConverter } from 'app/shared/types/markdownRuleConvertedElements.type';
import {
  AddFormElement,
  SetFormElementValue,
} from 'app/shared/types/formCreatorAction.type';
import { FormControl } from 'app/shared/components/Form/FormControl/FormControl';
import { QuestionSentence } from 'app/shared/components/QuestionSentence/QuestionSentence';
import { Color } from 'app/shared/types/color.type';
import { QuestionGroup } from 'app/shared/components/QuestionGroup/QuestionGroup';
import { QuestionItem } from 'app/shared/components/QuestionItem/QuestionItem';
import { FormTextField } from 'app/shared/components/Form/FormTextField/FormTextField';
import { getSimplyColor } from 'app/shared/utils/color.utils';
import { AddFormElementButton } from 'app/shared/components/Form/AddFormElementButton/AddFormElementButton';
import { getPossibleChildrenTypes } from 'app/shared/utils/markdown.utils';

export const convertMarkdownRulesJsonToJsx = (
  markdownRulesElementsJson: FormElement[],
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
  addFormElement?: AddFormElement,
  root?: boolean,
): React.ReactElement[] => {
  const jsxNodes = markdownRulesElementsJson.map(
    (markdownRuleElementJson) =>
      convertMarkdownRuleJsonToJsx(
        markdownRuleElementJson,
        props,
        setValue,
        addFormElement,
      ),
  );
  if (root) {
    jsxNodes.push(
      convertAddFormElementButtonToJsx(props, addFormElement),
    );
  }
  return jsxNodes;
};

export const convertMarkdownRuleJsonToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
  addFormElement?: AddFormElement,
): React.ReactElement => {
  return getMarkdownRuleJsxConverter(markdownRuleElementJson.type)(
    markdownRuleElementJson,
    props,
    setValue,
    addFormElement,
  );
};

export const getMarkdownRuleJsxConverter = (
  markdownRuleType: MarkdownRuleType,
): MarkdownRuleJsxConverter => {
  switch (markdownRuleType) {
    case 'group':
      return convertMarkdownGroupToJsx;
    case 'section':
      return convertMarkdownSectionToJsx;
    case 'questionSingle':
      return convertMarkdownQuestionSingleToJsx;
    case 'questionGroup':
      return convertMarkdownQuestionGroupToJsx;
    case 'questionSentence':
      return convertMarkdownQuestionSentenceToJsx;
    case 'radioButton':
      return convertMarkdownRadioButtonToJsx;
    case 'checkBox':
      return convertMarkdownCheckBoxToJsx;
    case 'textInput':
      return convertMarkdownTextInputToJsx;
    case 'textareaInput':
      return convertMarkdownTextareaInputToJsx;
    case 'weight':
      return convertMarkdownWeightToJsx;
  }
};

export const convertMarkdownGroupToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
  addFormElement?: AddFormElement,
): React.ReactElement => {
  return (
    <FormBox
      id={markdownRuleElementJson.id}
      key={markdownRuleElementJson.id}
      title={markdownRuleElementJson.value}
      color={props?.color}
      editMode
      changeTitle={(title) =>
        setValue && setValue(markdownRuleElementJson.id, title)
      }
    >
      {markdownRuleElementJson.children &&
        convertMarkdownRulesJsonToJsx(
          markdownRuleElementJson.children,
          props,
          setValue,
          addFormElement,
        )}
      {convertAddFormElementButtonToJsx(
        props,
        addFormElement,
        markdownRuleElementJson.type,
        markdownRuleElementJson.id,
      )}
    </FormBox>
  );
};

export const convertMarkdownSectionToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
  addFormElement?: AddFormElement,
): React.ReactElement => {
  return (
    <FormBox
      id={markdownRuleElementJson.id}
      key={markdownRuleElementJson.id}
      title={markdownRuleElementJson.value}
      color={props?.color}
      headerVariant="outlined"
      noBorder
      editMode
      changeTitle={(title) =>
        setValue && setValue(markdownRuleElementJson.id, title)
      }
    >
      {markdownRuleElementJson.children &&
        convertMarkdownRulesJsonToJsx(
          markdownRuleElementJson.children,
          props,
          setValue,
          addFormElement,
        )}
      {convertAddFormElementButtonToJsx(
        props,
        addFormElement,
        markdownRuleElementJson.type,
        markdownRuleElementJson.id,
      )}
    </FormBox>
  );
};

export const convertMarkdownQuestionSingleToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
  addFormElement?: AddFormElement,
): React.ReactElement => {
  const { id, children } = markdownRuleElementJson;
  const questionSentences = children?.filter(
    (markdownRule) => markdownRule.type === 'questionSentence',
  );
  const otherChildren = children?.filter(
    (markdownRule) =>
      !['questionSentence', 'radioButton', 'checkBox'].includes(
        markdownRule.type,
      ),
  );
  return (
    <SingleQuestion
      key={id}
      color={props?.color}
      text={
        questionSentences &&
        convertMarkdownRulesJsonToJsx(
          questionSentences,
          props,
          setValue,
          addFormElement,
        )
      }
    >
      {convertRadioGroupToJsx(id, children, props, setValue)}
      {convertCheckBoxGroupToJsx(id, children, props, setValue)}
      {otherChildren &&
        convertMarkdownRulesJsonToJsx(otherChildren, props, setValue)}
      {convertAddFormElementButtonToJsx(
        props,
        addFormElement,
        markdownRuleElementJson.type,
        markdownRuleElementJson.id,
      )}
    </SingleQuestion>
  );
};

export const convertMarkdownQuestionGroupToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
  addFormElement?: AddFormElement,
): React.ReactElement => {
  const { id, children } = markdownRuleElementJson;

  return (
    <QuestionGroup key={id} color={props?.color}>
      {convertQuestionSentenceGroupToJsx(
        id,
        children,
        props,
        setValue,
      )}
      {convertAddFormElementButtonToJsx(
        props,
        addFormElement,
        markdownRuleElementJson.type,
        markdownRuleElementJson.id,
      )}
    </QuestionGroup>
  );
};

export const convertQuestionSentenceGroupToJsx = (
  markdownRuleId: string,
  markdownRuleChildren?: FormElement[],
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const questionSentences = markdownRuleChildren?.filter(
    (markdownRule) => markdownRule.type === 'questionSentence',
  );
  const questionSentencesElement = questionSentences?.map(
    (questionSentence, index) => (
      <QuestionItem
        key={questionSentence.id}
        text={questionSentence.value as string}
        variant={index % 2 ? 'outlined' : 'contained'}
        color={props?.color}
      >
        {convertRadioGroupToJsx(
          markdownRuleId,
          markdownRuleChildren,
          props,
          setValue,
        )}
        {convertCheckBoxGroupToJsx(
          markdownRuleId,
          markdownRuleChildren,
          props,
          setValue,
        )}
      </QuestionItem>
    ),
  );
  return questionSentences?.length ? (
    <>{questionSentencesElement}</>
  ) : (
    <></>
  );
};

export const convertMarkdownQuestionSentenceToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const { id, value, children } = markdownRuleElementJson;

  const weightColor: Record<Color, Color> = {
    primary: 'primaryLight',
    primaryLight: 'primary',
    secondary: 'secondaryLight',
    secondaryLight: 'secondary',
  };
  const weightElement =
    children &&
    convertMarkdownRulesJsonToJsx(
      children,
      { ...props, color: weightColor[props?.color || 'primary'] },
      setValue,
    )?.[0];
  return (
    <QuestionSentence
      key={id}
      text={value as string}
      color={props?.color}
      weight={weightElement}
      editMode
      changeText={(text) => setValue && setValue(id, text)}
    ></QuestionSentence>
  );
};

export const convertRadioGroupToJsx = (
  markdownRuleId: string,
  markdownRuleChildren?: FormElement[],
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const radioButtons = markdownRuleChildren?.filter(
    (markdownRule) => markdownRule.type === 'radioButton',
  );
  return radioButtons?.length ? (
    <RadioGroup key={`${markdownRuleId}-radio-group`}>
      {convertMarkdownRulesJsonToJsx(radioButtons, props, setValue)}
    </RadioGroup>
  ) : (
    <></>
  );
};

export const convertMarkdownRadioButtonToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const { id, value, children } = markdownRuleElementJson;
  const weightElement =
    children &&
    convertMarkdownRulesJsonToJsx(children, props, setValue)?.[0];
  return (
    <FormControl
      key={id}
      control={
        <RadioCustom
          color={getSimplyColor(props?.color)}
          value={value}
          disabled
        />
      }
      label={value as string}
      weight={weightElement}
      editMode
      changeLabel={(label) => setValue && setValue(id, label)}
    />
  );
};

export const convertCheckBoxGroupToJsx = (
  markdownRuleId: string,
  markdownRuleChildren?: FormElement[],
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const checkBoxes = markdownRuleChildren?.filter(
    (markdownRule) => markdownRule.type === 'checkBox',
  );
  return checkBoxes?.length ? (
    <FormGroup key={`${markdownRuleId}-check-boxes`}>
      {convertMarkdownRulesJsonToJsx(checkBoxes, props, setValue)}
    </FormGroup>
  ) : (
    <></>
  );
};

export const convertMarkdownCheckBoxToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const { id, value, children } = markdownRuleElementJson;
  const weightElement =
    children &&
    convertMarkdownRulesJsonToJsx(children, props, setValue)?.[0];
  return (
    <FormControl
      key={id}
      control={
        <CheckBoxCustom
          color={getSimplyColor(props?.color)}
          value={value}
          disabled
        />
      }
      label={value as string}
      weight={weightElement}
      editMode
      changeLabel={(label) => setValue && setValue(id, label)}
    />
  );
};

export const convertMarkdownTextInputToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const { id, value, children, type } = markdownRuleElementJson;
  const placeholder = props?.placeholders?.[type];
  return (
    <FormTextField
      key={id}
      value={value}
      placeholder={placeholder}
      fullWidth
      disabled
      weight={
        children &&
        convertMarkdownRulesJsonToJsx(children, props, setValue)?.[0]
      }
    />
  );
};

export const convertMarkdownTextareaInputToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const { id, value, children, type } = markdownRuleElementJson;
  const placeholder = props?.placeholders?.[type];
  return (
    <FormTextField
      key={id}
      value={value}
      placeholder={placeholder}
      fullWidth
      multiline
      disabled
      weight={
        children &&
        convertMarkdownRulesJsonToJsx(children, props, setValue)?.[0]
      }
    />
  );
};

export const convertMarkdownWeightToJsx = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
): React.ReactElement => {
  const value = markdownRuleElementJson.value ?? 1;
  return (
    <Weight
      key={markdownRuleElementJson.id}
      weight={+value}
      color={props?.color}
      onChangeWeight={(weight) =>
        setValue && setValue(markdownRuleElementJson.id, weight)
      }
    />
  );
};

export const convertAddFormElementButtonToJsx = (
  props?: MarkdownRuleProps,
  addFormElement?: AddFormElement,
  parentType?: MarkdownRuleType,
  parentId?: string,
  possibleChildrenTypes?: MarkdownRuleType[],
): React.ReactElement => {
  possibleChildrenTypes =
    possibleChildrenTypes ?? getPossibleChildrenTypes(parentType);
  return (
    <AddFormElementButton
      key={`${parentId || 'root'}AddButton`}
      possibleFormElementsTypes={possibleChildrenTypes}
      color="secondary"
      onAdd={(type: MarkdownRuleType) =>
        addFormElement && addFormElement(type, parentId)
      }
    />
  );
};
