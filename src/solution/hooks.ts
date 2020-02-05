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

export const useTriggerOnChange = <T>(val: T, v1: T, v2: T, cb: () => void) => {
  const valRef = useRef<T>();
  const cbRef = useRef<() => void>();

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    if (valRef.current === v1 && val === v2) {
      cbRef.current();
    }
    valRef.current = val;
  }, [val, v1, v2]);
};
