import { useState, useEffect, useRef } from "react";
import { useField as formikUseField, useFormikContext } from "formik";

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
      const iid = setInterval(() => callbackRef.current(), interval);
      return () => clearInterval(iid);
    }
  }, [interval, running]);

  return { running, toggleRunning };
};

export const useField = (name, { label = name, validate } = {}) => {
  const [field, meta] = formikUseField({ name, validate });
  const { isSubmitting } = useFormikContext();

  return {
    ...field,
    label,
    disabled: isSubmitting,
    invalid: !!meta.error,
    helpText: {
      validationMsg: true,
      children: meta.error
    }
  };
};
