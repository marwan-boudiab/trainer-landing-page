import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const functionId = setTimeout(() => savedCallback.current(), 3000);
    return () => clearTimeout(functionId);
  }, []);
}
