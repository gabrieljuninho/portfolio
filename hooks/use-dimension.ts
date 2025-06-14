"use client";

import { useEffect, useRef } from "react";

export const useDimension = () => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = window.innerWidth;
    dimensions.current.height = window.innerHeight;
  }, []);

  return dimensions.current;
};
