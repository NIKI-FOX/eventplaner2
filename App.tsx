
import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { type Event } from './types';
import { Header } from './components/Header';
import { EventForm } from './components/EventForm';
import { EventList } from './components/EventList';
import { Footer } from './components/Footer';

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);


function App() {
  const [events, setEvents] = useLocalStorage<Event[]>('events', []);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent: Event = { ...event, id: Date.now().toString() };
    setEvents(prevEvents => [...prevEvents, newEvent].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    setIsFormVisible(false); // Hide form after adding
  };

  const deleteEvent = (id: string) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 font-sans">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <main className="mt-12">
          {isFormVisible ? (
            <EventForm onAddEvent={addEvent} onCancel={() => setIsFormVisible(false)} />
          ) : (
             <div className="text-center">
                <button
                onClick={() => setIsFormVisible(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                >
                <PlusIcon />
                Add New Event
                </button>
            </div>
          )}

          <EventList events={events} onDeleteEvent={deleteEvent} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
