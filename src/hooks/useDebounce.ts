import { useEffect, useState } from 'react';

// This hook is to except often requests to a server
// We subscribe to an event when user typing
// The request will send in 500ms after user stop typing
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer)
    };
  }, [value, delay]);

  return debouncedValue;
}
