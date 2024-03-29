"use client";
import { useRef, useEffect } from "react";
import styles from "./page.module.css";
import PricingPage from "../PricingPage";
import Lenis from "@studio-freight/lenis";
import TextGradientScroll from "../TextGradientScroll";

export default function LogoScroll() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.35;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    // @ts-ignore
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        // @ts-ignore
        stickyMask.current.offsetTop /
        // @ts-ignore
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0; // return a default value when stickyMask.current or container.current is null
  };

  return (
    <main className={`${styles.main} pt-0`}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <div className="relative h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 flex  justify-center">
            {/* <PricingPage /> */}
          </div>
          {/* <video autoPlay muted loop>
            <source src="/medias/nature.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className="h-[100vh] bg-gradient-to-r from-blue-500 to-purple-500 relative">
        <TextGradientScroll
          paragraph="But we are here to help."
          className="mx-auto sticky pt-[50vh] px-4 justify-center flex text-background -mb-20"
          WhyUs={true}
        />
      </div>
    </main>
  );
}
