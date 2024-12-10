"use client";

import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

export const useLenis = (): void => {
  useEffect(() => {
    const lenis = new Lenis();

    let animationFrameId: number;

    const raf = (time: DOMHighResTimeStamp): void => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
};
