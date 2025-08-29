
import React from 'react';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-indigo-400">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="text-center">
        <div className="flex items-center justify-center gap-4 mb-2">
            <CalendarIcon />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Event Countdown Planner
            </h1>
        </div>
      <p className="text-lg text-slate-400">Never miss an important date again.</p>
    </header>
  );
};
