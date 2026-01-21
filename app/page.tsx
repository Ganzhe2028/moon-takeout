'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Lobby } from '@/components/lobby';
import { SuccessPage } from '@/components/success';

type View = 'lobby' | 'success';

export default function Home(): React.ReactElement {
  const [currentView, setCurrentView] = useState<View>('lobby');

  const handleJoinSuccess = (): void => {
    setCurrentView('success');
  };

  const handleBackHome = (): void => {
    setCurrentView('lobby');
  };

  return (
    <AnimatePresence mode="wait">
      {currentView === 'lobby' ? (
        <motion.div
          key="lobby"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Lobby onJoinSuccess={handleJoinSuccess} />
        </motion.div>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <SuccessPage onBackHome={handleBackHome} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
