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
          backgroundColor: color,
        }}
        className={
          "flex flex-col gap-y-4 items-center relative justify-between mx-auto top-[-25%] h-[500px] w-[600px] md:w-[1000px] rounded-lg origin-top"
        }
      >
        <div className="flex h-full w-full items-center justify-between py-10 back px-8  rounded-lg relative mx-auto flex-col border-4 border-primary text-[#E6E6E6]">
          <div className="h-[60px] md:h-[100px] w-[120px] md:w-[200px]">
            <Image
              src={src}
              alt="Image of a person"
              height={800}
              width={400}
              className="object-cover  rounded-lg"
            />
          </div>

          <p className="text-xl tracking-tight italic text-[#E6E6E6] md:text-3xl font-bold text-center">
            {description}
          </p>
          <div className="flex justify-center items-center gap-4">
            <Image
              alt=""
              src={src}
              className="object-cover h-16 w-16 rounded-full"
              height={50}
              width={50}
            />
            <div className="flex flex-col w-full">
              <h2 className="text-start tracking-tight text-2xl md:text-3xl font-bold text-[#E6E6E6]">
                {title}
              </h2>
              <p className="text-start tracking-tight text-lg">CEO of Lokers</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
