"use client";

import { DependencyList, useEffect } from "react";

interface IUseTimeOutProps {
  callback: () => void;
  duration?: number;
  deps?: DependencyList;
}

export const useTimeOut = ({
  callback,
  duration = 100,
  deps = [],
}: IUseTimeOutProps) => {
  useEffect(() => {
    const timeout = setTimeout(callback, duration);

    return () => clearTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
