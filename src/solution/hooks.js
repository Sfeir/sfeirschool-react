import { useState, useEffect, useRef } from "react";

export const useScheduler = (callback, interval) => {
  const [running, setRunning] = useState(false);
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const toggleRunning = () => {
    !running && callbackRef.current();
    setRunning(!running);
  };

  useEffect(() => {
    if (running) {
      const iid = setInterval(callbackRef.current, interval);
      return () => clearInterval(iid);
    }
  }, [interval, running]);

  return { running, toggleRunning };
};
