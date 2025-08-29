
import React from 'react';
import { type Event } from '../types';
import { CountdownTimer } from './CountdownTimer';

interface EventCardProps {
  event: Event;
  onDeleteEvent: (id: string) => void;
}

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
);


export const EventCard: React.FC<EventCardProps> = ({ event, onDeleteEvent }) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = eventDate.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700 backdrop-blur-sm p-6 flex flex-col transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10">
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-cyan-400">{event.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{formattedDate} at {formattedTime}</p>
            </div>
            <button 
                onClick={() => onDeleteEvent(event.id)} 
                className="text-slate-500 hover:text-red-400 transition-colors"
                aria-label={`Delete event ${event.name}`}
            >
                <TrashIcon />
            </button>
        </div>
        <CountdownTimer targetDate={event.date} />
      </div>
    </div>
  );
};
