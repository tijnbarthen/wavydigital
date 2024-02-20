"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

import React from "react";

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
      className={"h-[100vh] flex items-center justify-center sticky top-10"}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={
          "flex flex-col relative top-[-25%] h-[500px] w-[1000px] rounded-lg p-[50px] origin-top"
        }
      >
        <h2 className="text-center m-0 text-4xl font-bold">{title}</h2>
        <div className={"flex h-[100%] mt-[50px] gap-[50px]"}>
          <div className={"w-[40%] relative top-[10%]"}>
            <p className="text-lg">{description}</p>
            <span className="flex items-center gap-[5px]">
              <a
                className="text-base underline cursor-pointer"
                href={src}
                target="_blank"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className={"relative w-[60%] h-full rounded-lg overflow-hidden"}>
            <motion.div
              className={"w-full h-full"}
              style={{ scale: imageScale }}
            >
              <Image fill src={`${src}`} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
