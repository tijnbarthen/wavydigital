"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

import React from "react";
import Link from "next/link";

type Props = {
  i: number;
  title: string;
  description: string;
  src: string;

  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const Card = ({
  i,
  title,
  description,
  src,

  color,
  progress,
  range,
  targetScale,
}: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={
        "h-[100vh] flex items-center justify-center sticky top-16 pt-10 md:pt-16"
      }
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={
          "flex flex-col gap-y-4 items-center relative justify-between mx-auto top-[-25%] h-[500px] w-[1100px] rounded-lg origin-top bg-gradient-to-r from-blue-600  to-purple-600 p-1"
        }
      >
        <div className="flex h-full w-full items-center justify-between py-10 bg-secondary back px-8 md:px-20  rounded-lg relative mx-auto  flex-col">
          <div className="h-[60px] md:h-[100px] w-[120px] md:w-[200px]">
            <Image
              src={src}
              alt="image"
              height={800}
              width={400}
              className="object-cover  rounded-lg"
            />
          </div>

          <h2 className="text-center text-lg md:text-4xl font-bold">{title}</h2>
          <p className="text-lg italic">{description}</p>
          <div className="h-16 w-16">
            <Image
              alt="image"
              src={src}
              className="object-cover h-full w-full rounded-full"
              height={50}
              width={50}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
