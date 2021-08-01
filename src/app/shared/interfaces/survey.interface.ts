import { FormElement } from 'app/shared/interfaces/formElement.interface';
import { FormElementsCounter } from 'app/shared/interfaces/formElementsCounter.interface';

export interface Survey {
  id: string;
  title: string;
  description?: string;
  formElements?: FormElement[];
  markdown?: string;
  statistics?: {
    sent: number;
    filled: number;
  };
  counter?: FormElementsCounter;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface ApiSurvey {
  id: string;
  title: string;
  description?: string;
  formElements?: FormElement[];
  markdown?: string;
  statistics?: {
    sent: number;
    filled: number;
  };
  counter?: FormElementsCounter;
  createdAt?: Date;
  modifiedAt?: Date;
}
