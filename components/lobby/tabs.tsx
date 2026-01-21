'use client';

import { cn } from '@/lib/utils';

import type { TabFilter } from '@/types';

interface Tab {
  id: TabFilter;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: TabFilter;
  onTabChange: (tab: TabFilter) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps): React.ReactElement {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
            {
              'bg-indigo-600 text-white': activeTab === tab.id,
              'bg-gray-100 text-gray-600 hover:bg-gray-200': activeTab !== tab.id,
            }
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
