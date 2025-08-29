
import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: string;
}

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-slate-900/70 p-4 rounded-lg min-w-[70px]">
        <span className="text-4xl font-bold text-slate-100 tracking-tighter">{value.toString().padStart(2, '0')}</span>
        <span className="text-xs uppercase text-slate-400 tracking-widest">{label}</span>
    </div>
);

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const isFinished = days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;

  if (isFinished) {
    return (
        <div className="text-center py-8 bg-slate-900/70 rounded-lg">
            <p className="text-2xl font-bold text-green-400">The event has started!</p>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
      <TimeUnit value={days} label="Days" />
      <TimeUnit value={hours} label="Hours" />
      <TimeUnit value={minutes} label="Mins" />
      <TimeUnit value={seconds} label="Secs" />
    </div>
  );
};
