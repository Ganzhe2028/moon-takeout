'use client';

import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

import type { FoodVan } from '@/types';

interface FoodVanCardProps {
  van: FoodVan;
  onJoin: (id: string) => void;
}

export function FoodVanCard({ van, onJoin }: FoodVanCardProps): React.ReactElement {
  const isUrgent = van.closingMinutes <= 10;
  const isAlmostFull = van.currentMembers >= van.maxMembers - 1;

  const getBadgeVariant = (): 'default' | 'success' | 'warning' | 'urgent' => {
    if (van.tag === 'Closing Soon') return 'urgent';
    if (van.tag === 'Almost Full') return 'success';
    if (van.tag === 'New Group') return 'warning';
    return 'default';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{van.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{van.subtitle}</p>
            </div>
            <Badge variant={getBadgeVariant()}>{van.tag}</Badge>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>
                {van.currentMembers}/{van.maxMembers} joined
              </span>
            </div>
            <div
              className={cn('flex items-center gap-1.5', {
                'text-red-500 font-medium': isUrgent,
              })}
            >
              <Clock className="h-4 w-4" />
              <span>Closing in {van.closingMinutes}m</span>
            </div>
          </div>

          <Progress value={van.currentMembers} max={van.maxMembers} />

          <Button
            onClick={() => onJoin(van.id)}
            className="w-full"
            variant={isAlmostFull ? 'primary' : 'secondary'}
          >
            Join Group
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
