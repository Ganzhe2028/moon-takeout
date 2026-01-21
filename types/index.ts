export interface FoodVan {
  id: string;
  name: string;
  organizer: string;
  currentMembers: number;
  maxMembers: number;
  closingMinutes: number;
  tag: string;
  subtitle: string;
}

export type TabFilter = 'all' | 'myGrade' | 'nearClosing';
