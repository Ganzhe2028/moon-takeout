'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Trophy, Home, Share2 } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateSavings, formatCurrency } from '@/lib/utils';

import type { SavingsData } from '@/lib/utils';

interface SuccessPageProps {
  onBackHome: () => void;
}

export function SuccessPage({ onBackHome }: SuccessPageProps): React.ReactElement {
  const [savings, setSavings] = useState<SavingsData | null>(null);

  useEffect(() => {
    setSavings(generateSavings());
  }, []);

  const handleShare = (): void => {
    if (navigator.share) {
      navigator.share({
        title: 'Moon Takeout Savings',
        text: `我在 Moon Takeout 省了 ${savings ? formatCurrency(savings.userSaved) : ''}！`,
        url: window.location.href,
      }).catch(() => {
        console.log('Share cancelled');
      });
    } else {
      alert('分享成功！/ Share successful!');
    }
  };

  if (!savings) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-lg mx-auto px-4 py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex justify-center mb-6"
        >
          <div className="rounded-full bg-green-100 p-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900">Payment Successful</h1>
          <p className="text-lg text-gray-500 mt-1">支付成功</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100 mb-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">本次拼团为你节省了</p>
              <motion.p
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="text-5xl font-bold text-indigo-600 mb-2"
              >
                {formatCurrency(savings.userSaved)}
              </motion.p>
              <p className="text-sm text-gray-500">
                相当于省下了{' '}
                <span className="font-semibold text-indigo-600">
                  {savings.pinhaofanEquivalent}
                </span>{' '}
                次拼好饭
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="mb-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">全车共省</span>
                <span className="text-xl font-semibold text-gray-900">
                  {formatCurrency(savings.teamSaved)}
                </span>
              </div>
              <div className="border-t border-gray-100" />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">本学期全校累计节省</span>
                <span className="text-xl font-semibold text-green-600">
                  {formatCurrency(savings.schoolTotal)}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 mb-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-amber-100 p-3">
                <Trophy className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-amber-600 font-medium uppercase tracking-wide">
                  Achievement Unlocked
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  🏆 达成成就：善及万物
                </p>
                <p className="text-sm text-gray-500">Benevolence to all things</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3"
        >
          <Button variant="secondary" onClick={onBackHome} className="flex-1">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <Button variant="primary" onClick={handleShare} className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Share Report
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
