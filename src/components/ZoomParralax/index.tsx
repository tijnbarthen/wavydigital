"use client";

import styles from "./styles.module.css";
import image1 from "./image1.png";
import Image from "next/image";
import {
  useScroll,
  useTransform,
  motion,
  useViewportScroll,
} from "framer-motion";
import { useRef } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionHeading from "../SectionHeading";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      id: 1,
      src: "/image1.png",
      scale: scale4,
    },
    {
      src: "/image1.png",
      scale: scale5,
    },
    {
      src: "/image1.png",
      scale: scale6,
    },
    {
      src: "/image1.png",
      scale: scale5,
    },
    {
      src: "/image1.png",
      scale: scale6,
    },
    {
      src: "/image1.png",
      scale: scale8,
    },
    {
      src: "/image1.png",
      scale: scale9,
    },
  ];

  return (
    <>
      <MaxWidthWrapper className="py-8">
        <SectionHeading
          className="py-20"
          title="We know that navigating the digital world can be difficult. 🤯"
        />
      </MaxWidthWrapper>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale, id }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  {id === 1 ? (
                    <div className="h-full">
                      <Image
                        src={src}
                        fill
                        alt="image"
                        className="object-cover"
                      />
                      <WaveText />
                    </div>
                  ) : (
                    <Image
                      src={src}
                      fill
                      alt="image"
                      className="object-cover"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

const WaveText = () => {
  const { scrollYProgress } = useScroll();
  const [xRange, setXRange] = useState(["-100%", "100%"]);

  useEffect(() => {
    // Determine if the device is mobile or not based on the window width
    const isMobile = window.innerWidth < 768; // Example breakpoint for mobile devices

    // Adjust the range values for mobile devices
    if (isMobile) {
      setXRange(["-180%", "250%"]); // Less movement on mobile
    } else {
      setXRange(["-200%", "200%"]); // More movement on desktop
    }
  }, []);

  const xValue = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <div className="flex justify-center items-center my-auto h-full overflow-hidden">
      <motion.div
        key={1}
        style={{ x: xValue }}
        className="text-sm md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
      >
        But we are here to help.
      </motion.div>
    </div>
  );
};
