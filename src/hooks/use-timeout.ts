/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

type TUseTimeout = {
  callback: () => void;
  duration: number;
  deps: number[];
};

export const useTimeout = ({
  callback,
  duration = 100,
  deps = [],
}: TUseTimeout) => {
  useEffect(() => {
    const timeout = setTimeout(callback, duration);

    return () => clearTimeout(timeout);
  }, deps);
};
