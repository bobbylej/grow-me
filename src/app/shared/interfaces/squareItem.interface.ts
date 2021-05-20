export interface SquareItem {
  id: string;
  name: string;
  groupsNumber: number;
  sectionsNumber: number;
  questionsNumber: number;
  badge: { total: number; amount?: number };
}
