import { FormElementValue } from 'app/shared/types/formElementValue.type';

export type SetFormElementValue = (
  id: string,
  value: FormElementValue,
) => void;
