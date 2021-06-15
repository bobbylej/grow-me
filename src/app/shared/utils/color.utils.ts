import { Color, SimplyColor } from 'app/shared/types/color.type';

export const getSimplyColor = (color?: Color): SimplyColor => {
  switch (color) {
    case 'primary':
    case 'primaryLight':
      return 'primary';
    case 'secondary':
    case 'secondaryLight':
      return 'secondary';
  }
  return 'primary';
};
