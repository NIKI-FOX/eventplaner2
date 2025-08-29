
import React from 'react';
import { type Event } from '../types';
import { EventCard } from './EventCard';

interface EventListProps {
  events: Event[];
  onDeleteEvent: (id: string) => void;
}

export const EventList: React.FC<EventListProps> = ({ events, onDeleteEvent }) => {
  if (events.length === 0) {
    return (
      <div className="text-center mt-16">
        <p className="text-slate-400 text-lg">You have no upcoming events.</p>
        <p className="text-slate-500">Click "Add New Event" to get started!</p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {events.map(event => (
        <EventCard key={event.id} event={event} onDeleteEvent={onDeleteEvent} />
      ))}
    </div>
  );
};
