"use client";

import { useState } from "react";

import { Dot } from "lucide-react";
import { motion, Variants } from "motion/react";

import { fade, slideUp } from "@/lib/motion";

import { useDimension } from "@/hooks/use-dimension";
import { useTimeOut } from "@/hooks/use-time-out";

import { preloaderWords } from "@/common/data/preloader-word";

export function Preloader() {
  const [index, setIndex] = useState<number>(0);

  const { width, height } = useDimension();

  useTimeOut({
    callback: () => {
      setIndex((prevIndex) => prevIndex + 1);
    },
    duration: index === 0 ? 500 : 250,
    deps: [index],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-foreground fixed z-50 flex h-screen w-screen cursor-wait items-center justify-center"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      {width > 0 ? (
        <>
          <motion.div
            className="flex items-center justify-center text-3xl text-white md:text-4xl"
            initial="initial"
            animate="enter"
            variants={fade}
          >
            <Dot size={48} className="me-2" />
            <p>{preloaderWords[index]}</p>
          </motion.div>
          <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
            <motion.path
              initial="initial"
              exit="exit"
              variants={curve}
              className="fill-zinc-800"
            />
          </motion.svg>
        </>
      ) : null}
    </motion.div>
  );
}
