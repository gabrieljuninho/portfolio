"use client";

import { useEffect, useRef } from "react";

type TUseDimension = {
  width: number;
  height: number;
};

export const useDimension = (): TUseDimension => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = window.innerWidth;
    dimensions.current.height = window.innerHeight;
  }, []);

  return dimensions.current;
};
