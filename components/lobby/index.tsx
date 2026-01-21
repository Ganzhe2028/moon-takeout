'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FoodVanCard } from './food-van-card';
import { Tabs } from './tabs';
import { MOCK_FOOD_VANS, TABS } from '@/lib/constants';

import type { TabFilter, FoodVan } from '@/types';

interface LobbyProps {
  onJoinSuccess: () => void;
}

export function Lobby({ onJoinSuccess }: LobbyProps): React.ReactElement {
  const [activeTab, setActiveTab] = useState<TabFilter>('all');

  const filteredVans = useMemo((): FoodVan[] => {
    switch (activeTab) {
      case 'myGrade':
        return MOCK_FOOD_VANS.filter((van) => van.organizer.includes('G10'));
      case 'nearClosing':
        return MOCK_FOOD_VANS.filter((van) => van.closingMinutes <= 10);
      default:
        return MOCK_FOOD_VANS;
    }
  }, [activeTab]);

  const handleJoin = (vanId: string): void => {
    const van = MOCK_FOOD_VANS.find((v) => v.id === vanId);
    if (van) {
      console.log(`Joined van: ${van.name}`);
      onJoinSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl font-semibold text-gray-900">Hi, Student 👋</h1>
          <p className="text-sm text-gray-500 mt-1">Find a food van to join</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-6 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredVans.map((van, index) => (
              <motion.div
                key={van.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <FoodVanCard van={van} onJoin={handleJoin} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredVans.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              <p>No vans available in this category</p>
              <p className="text-sm mt-1">暂无符合条件的车队</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
