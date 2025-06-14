"use client";

import { FC, ReactNode, useEffect, useRef } from "react";

import { LenisRef, ReactLenis } from "lenis/react";

interface ISmoothScrollProviderProps {
  children: ReactNode;
}

const SmoothScrollProvider: FC<ISmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    let rafId: number;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);

      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <ReactLenis ref={lenisRef} options={{ autoRaf: false }} root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
