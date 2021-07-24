import { IntersectionState } from 'app/shared/enums/intersectionState.enum';
import { ContextAction } from 'app/shared/interfaces/context.interface';

export enum IntersectionContextActionType {
  setIntersection = 'setIntersection',
}

type SetIntersectionAction = ContextAction<
  IntersectionContextActionType.setIntersection,
  { id: string; state: IntersectionState }
>;

export type IntersectionContextActions = SetIntersectionAction;
