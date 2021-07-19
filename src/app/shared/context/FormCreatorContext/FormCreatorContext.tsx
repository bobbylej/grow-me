import React, { createContext, useReducer } from 'react';
import { noContextProviderWarning } from 'app/shared/utils/context.utils';
import { ContextModel } from 'app/shared/interfaces/context.interface';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import {
  FormCreatorContextActions,
  FormCreatorContextActionType,
} from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { convertMarkdownToJson } from 'app/shared/utils/markdownRawToJson.utils';
import { convertJsonToMarkdown } from 'app/shared/utils/markdownJsonToRaw.utils';
import { MarkdownMock } from 'app/shared/mocks/markdown.mock';

export interface FormCreatorContextState {
  readonly title?: string;
  readonly description?: string;
  readonly formElements?: FormElement[];
  readonly markdown?: string;
}

export type FormCreatorContextModel = ContextModel<
  FormCreatorContextState,
  FormCreatorContextActions
>;

export interface FormCreatorProviderProps {
  initialState?: FormCreatorContextState;
}

const initialContext: FormCreatorContextModel = {
  state: {
    formElements: convertMarkdownToJson(MarkdownMock), // TODO: Temporary formElements, remove later
    markdown: MarkdownMock, // TODO: Temporary markdown, remove later
  },
  dispatch: () => {
    noContextProviderWarning();
  },
};

export const FormCreatorContext = createContext<FormCreatorContextModel>(
  initialContext,
);

const updateFormElementValue = (
  field: { id: string; value?: FormElementValue },
  formElements?: FormElement[],
): FormElement[] | undefined => {
  return formElements?.map((formElement) =>
    formElement.id === field.id
      ? {
          ...formElement,
          value: field.value,
        }
      : {
          ...formElement,
          children: updateFormElementValue(
            field,
            formElement.children,
          ),
        },
  );
};

const FormCreatorReducer = (
  state: FormCreatorContextState,
  action: FormCreatorContextActions,
): FormCreatorContextState => {
  switch (action.type) {
    case FormCreatorContextActionType.setTitle:
      return {
        ...state,
        title: action.payload,
      };
    case FormCreatorContextActionType.setDescription:
      return {
        ...state,
        description: action.payload,
      };
    case FormCreatorContextActionType.setElementValue:
      const formElements =
        updateFormElementValue(action.payload, state.formElements) ??
        [];
      return {
        ...state,
        formElements,
        markdown: convertJsonToMarkdown(formElements),
      };
    case FormCreatorContextActionType.setMarkdown:
      return {
        ...state,
        markdown: action.payload,
        formElements: convertMarkdownToJson(action.payload),
      };
    default:
      throw new Error('Wrong action type provided');
  }
};

export const FormCreatorProvider = ({
  initialState,
  children,
}: React.PropsWithChildren<FormCreatorProviderProps>): React.ReactElement => {
  const [state, dispatch] = useReducer(
    FormCreatorReducer,
    initialState || initialContext.state,
  );

  const formCreatorState = { state, dispatch };

  return (
    <FormCreatorContext.Provider value={{ ...formCreatorState }}>
      {children}
    </FormCreatorContext.Provider>
  );
};
