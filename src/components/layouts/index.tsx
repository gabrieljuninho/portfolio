"use client";

import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";

import { useLenis } from "@/hooks/use-lenis";
import { useTimeout } from "@/hooks/use-timeout";

import Preloader from "@/features/preloader";

import { PropsWithChildren } from "@/types/components";

const Layouts: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

  useLenis();

  useTimeout({
    callback: () => {
      setLoading(false);
      scrollTo(0, 0);
    },
    duration: 2000,
    deps: [],
  });

  return (
    <div key={pathname} className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default Layouts;
