import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export interface SavingsData {
  userSaved: number;
  teamSaved: number;
  schoolTotal: number;
  teamSize: number;
  pinhaofanEquivalent: number;
}

/**
 * Generate mock savings data per PRD specs:
 * - userSaved: Random float between ¥3.0 and ¥15.0
 * - teamSaved: userSaved * Random integer (3 to 8 people)
 * - schoolTotal: Static large number (¥12,450) + teamSaved
 * - pinhaofanEquivalent: userSaved / 10 (1 Pinhaofan = ¥10)
 */
export function generateSavings(): SavingsData {
  const userSaved = Math.random() * (15 - 3) + 3;
  const teamSize = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
  const teamSaved = userSaved * teamSize;
  const schoolTotal = 12450 + teamSaved;
  const pinhaofanEquivalent = userSaved / 10;

  return {
    userSaved: parseFloat(userSaved.toFixed(2)),
    teamSaved: parseFloat(teamSaved.toFixed(2)),
    schoolTotal: parseFloat(schoolTotal.toFixed(2)),
    teamSize,
    pinhaofanEquivalent: parseFloat(pinhaofanEquivalent.toFixed(1)),
  };
}

export function formatCurrency(amount: number): string {
  return `¥${amount.toFixed(2)}`;
}
