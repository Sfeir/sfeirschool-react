import { useState, useEffect, useRef } from "react";
import {
  useField as formikUseField,
  useFormikContext,
  FieldConfig
} from "formik";

export const useScheduler = (callback: () => void, interval: number) => {
  const [running, setRunning] = useState(false);
  const callbackRef = useRef<() => void>();

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

export const useField = <T>(
  name: string,
  options: { label?: string } & Omit<FieldConfig<T>, "name"> = {}
) => {
  const { label, ...config } = options;
  const [field, meta] = formikUseField({ name, ...config });
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
