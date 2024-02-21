"use client";
import { useRef, useEffect } from "react";
import styles from "./page.module.css";
import PricingPage from "../PricingPage";
import Lenis from "@studio-freight/lenis";

export default function LogoScroll() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.3;
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
    <main className={`${styles.main} pt-32`}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <div className="relative h-full w-full bg-gradient-to-r from-blue-500 to-purple-500">
            {/* <PricingPage /> */}
          </div>
          {/* <video autoPlay muted loop>
            <source src="/medias/nature.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </main>
  );
}
