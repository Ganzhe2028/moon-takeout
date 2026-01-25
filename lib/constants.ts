import type { FoodVan } from '@/types';

export const MOCK_FOOD_VANS: FoodVan[] = [
  {
    id: '1',
    name: '[G10] HEYTEA Group',
    organizer: 'G10-A',
    currentMembers: 3,
    maxMembers: 5,
    closingMinutes: 15,
    tag: 'Free Delivery',
    subtitle: 'By G10-A · 2 spots left',
  },
  {
    id: '2',
    name: '[G10-A] Milk Tea Train',
    organizer: 'G10-A',
    currentMembers: 4,
    maxMembers: 5,
    closingMinutes: 8,
    tag: 'Almost Full',
    subtitle: 'By G10-A · 1 spot left',
  },
  {
    id: '3',
    name: '[Library] McDonald\'s Pool',
    organizer: 'Library',
    currentMembers: 2,
    maxMembers: 6,
    closingMinutes: 25,
    tag: 'Free Delivery',
    subtitle: 'By Library · 4 spots left',
  },
  {
    id: '4',
    name: '[G11] Luckin Coffee',
    organizer: 'G11',
    currentMembers: 5,
    maxMembers: 8,
    closingMinutes: 5,
    tag: 'Closing Soon',
    subtitle: 'By G11 · 3 spots left',
  },
  {
    id: '5',
    name: '[G9] Pizza Hut',
    organizer: 'G9',
    currentMembers: 1,
    maxMembers: 4,
    closingMinutes: 30,
    tag: 'New Group',
    subtitle: 'By G9 · 3 spots left',
  },
];

export const TABS = [
  { id: 'all' as const, label: 'All Vans' },
  { id: 'myGrade' as const, label: 'My Grade' },
  { id: 'nearClosing' as const, label: 'Near Closing' },
];
