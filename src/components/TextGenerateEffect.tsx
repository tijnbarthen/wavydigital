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
              className="dark:text-white text-black opacity-0"
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
      <div className="mt-4">
        <div className=" dark:text-white text-black text-4xl md:text-6xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </motion.div>
  );
};
