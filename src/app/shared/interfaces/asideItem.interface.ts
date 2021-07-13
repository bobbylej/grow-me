export interface AsideItem {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'done';
  type: 'group' | 'section';
}
