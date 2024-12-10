"use client";

import { useState } from "react";
import { motion, Variants } from "motion/react";
import { Dot } from "lucide-react";

import { useDimension } from "@/hooks/use-dimension";
import { useTimeout } from "@/hooks/use-timeout";

import { fade, slideUp } from "@/features/preloader/utils/variant";

import { preloaderWords } from "@/constants/preloader-words";

const Preloader = () => {
  const [index, setIndex] = useState<number>(0);

  const { width, height } = useDimension();

  useTimeout({
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
      className="fixed z-50 h-dvh w-dvw bg-[#f2f4ee]"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <div className="flex h-full w-full items-center justify-center">
        {width > 0 ? (
          <>
            <motion.div
              className="flex items-center justify-center text-3xl text-foreground md:text-4xl"
              variants={fade}
              initial="initial"
              animate="enter"
            >
              <Dot size={48} className="mr-2 text-foreground" />
              <p>{preloaderWords[index]}</p>
            </motion.div>
            <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
              <motion.path
                className="fill-[#f2f4ee]"
                variants={curve}
                initial="initial"
                exit="exit"
              />
            </motion.svg>
          </>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Preloader;
