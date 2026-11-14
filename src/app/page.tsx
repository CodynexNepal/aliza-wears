import React from 'react';
import { AlizaCharacter } from '@/components/character/AlizaCharacter';
import { publish } from '@/lib/event-bus';

export default function Home() {
  const handleGreetEvent = () => {
    // Simulate a UI event triggering the animation
    publish('aliza:animate', { animation: 'wave' });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#F7F7F5]">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#0E0F0C] mb-2">CodyNex OS</h1>
        <p className="text-[#0E0F0C] opacity-70">Aliza Wears Interface</p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <AlizaCharacter />
        
        <button
          onClick={handleGreetEvent}
          className="bg-[#C3FF7D] hover:bg-[#9FE870] text-[#0E0F0C] font-semibold px-6 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0E0F0C] focus:ring-offset-2"
        >
          Trigger Greet Event
        </button>
      </div>

      <div className="mt-16 text-sm text-[#0E0F0C] opacity-60 max-w-md text-center">
        <p>Click the character or use the button to trigger the wave animation.</p>
        <p className="mt-2">Design adheres to SOP-001: Flat, accessible, 60-30-10 color balance.</p>
      </div>
    </main>
  );
}
