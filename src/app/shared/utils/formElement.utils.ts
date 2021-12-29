import { FormElement } from 'app/shared/interfaces/formElement.interface';
import { FormElementsCounter } from 'app/shared/interfaces/formElementsCounter.interface';

export const countFormElements = (
  formElements: FormElement[] | undefined,
): FormElementsCounter => {
  const counter: FormElementsCounter = {
    groups: 0,
    sections: 0,
    questions: 0,
  };
  formElements?.forEach((formElement) => {
    switch (formElement.type) {
      case 'group':
        counter.groups += 1;
        break;
      case 'section':
        counter.sections += 1;
        break;
      case 'questionSentence':
        counter.questions += 1;
        break;
    }
    if (formElement.children) {
      const childrenCounter = countFormElements(formElement.children);
      (Object.keys(
        childrenCounter,
      ) as (keyof FormElementsCounter)[]).forEach((key) => {
        counter[key] = counter[key] + childrenCounter[key];
      });
    }
  });
  return counter;
};
