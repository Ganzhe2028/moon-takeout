'use client';

import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

export function Progress({ value, max, className }: ProgressProps): React.ReactElement {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-gray-100', className)}>
      <div
        className="h-full rounded-full bg-indigo-600 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
