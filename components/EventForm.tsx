
import React, { useState } from 'react';
import { type Event } from '../types';

interface EventFormProps {
  onAddEvent: (event: Omit<Event, 'id'>) => void;
  onCancel: () => void;
}

export const EventForm: React.FC<EventFormProps> = ({ onAddEvent, onCancel }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('00:00');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date || !time) {
      setError('All fields are required.');
      return;
    }

    const eventDateTime = new Date(`${date}T${time}`);
    if (eventDateTime <= new Date()) {
      setError('Event date and time must be in the future.');
      return;
    }
    
    setError('');
    onAddEvent({ name, date: eventDateTime.toISOString() });
    setName('');
    setDate('');
    setTime('00:00');
  };
  
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-xl mx-auto mb-12 p-6 bg-slate-800/50 rounded-lg shadow-lg border border-slate-700 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-center mb-6 text-cyan-400">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="event-name" className="block text-sm font-medium text-slate-300">Event Name</label>
          <input
            id="event-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Project Deadline"
            className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-slate-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label htmlFor="event-date" className="block text-sm font-medium text-slate-300">Date</label>
            <input
                id="event-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={today}
                className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-slate-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div>
            <label htmlFor="event-time" className="block text-sm font-medium text-slate-300">Time</label>
            <input
                id="event-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-slate-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <div className="flex justify-end space-x-3 pt-2">
            <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-500"
            >
            Cancel
            </button>
            <button
                type="submit"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500"
            >
            Add Event
            </button>
        </div>
      </form>
    </div>
  );
};
