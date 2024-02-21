"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  const { ref } = useInView();

  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 tracking-tight"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <motion.div ref={ref} className={cn("font-bold", className)}>
      <div className="mt-0">
        <div className="xl:flex xl:flex-row font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-6xl leading-snug tracking-wide">
          {renderWords()}
          <h1 className="flex items-center text-6xl tracking-tight">
            <span className="relative xl:ml-3 h-[1em] mt-4 xl:mt-0 w-48 overflow-hidden">
              <span className="absolute h-full w-full tracking-tighter -translate-y-full animate-slide leading-none text-black dark:text-white">
                Ideas.
              </span>
              <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-black dark:text-white [animation-delay:2s]">
                Tech.
              </span>
              <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-black dark:text-white [animation-delay:4s]">
                Code.
              </span>
            </span>
          </h1>
        </div>
      </div>
    </motion.div>
  );
};
