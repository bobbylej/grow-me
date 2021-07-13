import { AsideItem } from 'app/shared/interfaces/asideItem.interface';
import { FormElement } from 'app/shared/interfaces/formElement.interface';

export const generateAsideItemsFromFormElements = (
  formElements: FormElement[],
): AsideItem[] => {
  const asideItems: AsideItem[] = [];
  formElements
    ?.filter(
      (formElement) =>
        formElement.type === 'group' ||
        formElement.type === 'section',
    )
    .forEach((formElement) => {
      asideItems.push({
        id: formElement.id,
        name: formElement.value as string,
        type: formElement.type as 'group' | 'section',
        status: 'pending',
      });
      const children =
        formElement.children &&
        generateAsideItemsFromFormElements(formElement.children);
      if (children) {
        asideItems.push(...children);
      }
    });
  return asideItems;
};
