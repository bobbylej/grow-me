import { IntersectionState } from 'app/shared/enums/intersectionState.enum';

export interface AsideItem {
  id: string;
  name: string;
  status?: IntersectionState;
  type: 'group' | 'section';
}
