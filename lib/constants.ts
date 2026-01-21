import type { FoodVan } from '@/types';

export const MOCK_FOOD_VANS: FoodVan[] = [
  {
    id: '1',
    name: '[G10] 喜茶 HEYTEA 车队',
    organizer: 'G10-A',
    currentMembers: 3,
    maxMembers: 5,
    closingMinutes: 15,
    tag: '免配送费',
    subtitle: '由 G10-A 发起 · 差 2 人成团',
  },
  {
    id: '2',
    name: '[G10-A] 奶茶专列',
    organizer: 'G10-A',
    currentMembers: 4,
    maxMembers: 5,
    closingMinutes: 8,
    tag: '即将成团',
    subtitle: '由 G10-A 发起 · 差 1 人成团',
  },
  {
    id: '3',
    name: '[Library] 麦当劳拼车',
    organizer: 'Library',
    currentMembers: 2,
    maxMembers: 6,
    closingMinutes: 25,
    tag: '免配送费',
    subtitle: '由 Library 发起 · 差 4 人成团',
  },
  {
    id: '4',
    name: '[G11] 瑞幸咖啡团',
    organizer: 'G11',
    currentMembers: 5,
    maxMembers: 8,
    closingMinutes: 5,
    tag: '即将截单',
    subtitle: '由 G11 发起 · 差 3 人成团',
  },
  {
    id: '5',
    name: '[G9] 必胜客拼单',
    organizer: 'G9',
    currentMembers: 1,
    maxMembers: 4,
    closingMinutes: 30,
    tag: '新开团',
    subtitle: '由 G9 发起 · 差 3 人成团',
  },
];

export const TABS = [
  { id: 'all' as const, label: 'All Vans / 全部' },
  { id: 'myGrade' as const, label: 'My Grade / 我的年级' },
  { id: 'nearClosing' as const, label: 'Near Closing / 即将截单' },
];
