import { useState, useEffect, useRef } from "react";
import { useFormikContext } from "formik";

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
  const {
    getFieldProps,
    registerField,
    unregisterField,
    isSubmitting
  } = useFormikContext();

  useEffect(() => {
    registerField(name, { validate });
    return () => unregisterField(name);
  });

  const [fieldProps, { error }] = getFieldProps(name);

  return {
    ...fieldProps,
    label,
    disabled: isSubmitting,
    invalid: !!error,
    helpText: {
      validationMsg: true,
      children: error
    }
  };
};
