"use client";

import { FC, ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "motion/react";

import { useTimeOut } from "@/hooks/use-time-out";

import { Preloader } from "@/features/transition/preloader";

interface ITransitionProps {
  children: ReactNode;
}

const Transition: FC<ITransitionProps> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const pathname = usePathname();

  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
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

export default Transition;
