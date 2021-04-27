export interface AsideGraphic {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'done';
  type: 'group' | 'section';
}
