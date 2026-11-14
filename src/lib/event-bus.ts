import { useEffect, useRef } from 'react';

type EventMap = {
  'aliza:animate': { animation: string };
  // Add more events as needed
};

type EventKey = keyof EventMap;

type Listener<T> = (payload: T) => void;

const eventBus: Record<EventKey, Set<Listener<any>>> = {
  'aliza:animate': new Set(),
};

export const publish = <K extends EventKey>(event: K, payload: EventMap[K]) => {
  const listeners = eventBus[event];
  if (listeners) {
    listeners.forEach((listener) => listener(payload));
  }
};

export const subscribe = <K extends EventKey>(event: K, listener: Listener<EventMap[K]>) => {
  if (!eventBus[event]) {
    eventBus[event] = new Set();
  }
  eventBus[event].add(listener);
  return () => {
    eventBus[event]?.delete(listener);
  };
};

export const useEventBus = () => {
  return { publish, subscribe };
};
