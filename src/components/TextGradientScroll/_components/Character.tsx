"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";
// import styles from "./style.module.scss";

type ParagraphProps = {
  paragraph: string;
  WhyUs?: boolean;
};

// offset: [
//   `start ${!!WhyUs ? "0.1" : "0.8"}`,
//   `start ${!!WhyUs ? "0.8" : "0.1"}`,
// ],

export default function Paragraph({ WhyUs, paragraph }: ParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: [
      `start ${WhyUs === true ? "1" : "1"}`,
      `start ${WhyUs === true ? "0.5" : "0.1"}`,
    ],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className={`flex text-3xl md:text-6xl max-w-7xl flex-wrap dark:text-white text-black ${
        WhyUs === true ? "" : "pt-10 h-1"
      }`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            WhyUs={WhyUs}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

type WordProps = {
  children: string;
  progress: MotionValue;
  range: number[];
  WhyUs?: boolean;
};

const Word = ({ children, progress, range, WhyUs }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={`relative mr-4 ${WhyUs === true ? "" : "top-4"}`}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

type CharProps = {
  children: string;
  progress: MotionValue;
  range: number[];
};

const Char = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={"opacity-0 absolute"}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
