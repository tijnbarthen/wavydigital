"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";
import Lenis from "@studio-freight/lenis";
import { useMediaQuery } from "react-responsive";
import { TextGenerateEffect } from "./TextGenerateEffect";
import TextGradientScroll from "./TextGradientScroll";

const Example = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Use media query to determine screen size
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Adjust x values based on screen size
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["5%", "-100%"] : ["90%", "-100%"]
  );
  return (
    <div className="max-w-7xl mx-auto px-4 mt-[60vh]">
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <TextGradientScroll
            paragraph="Don't just take our word for it. Here are some projects we have done."
            className="absolute w-full px-4 mx-auto justify-center flex top-11 font-bold h-1 tracking-tight"
            WhyUs={false}
          />

          <motion.div style={{ x }} className="flex gap-24 md:gap-32 pt-20">
            {cards.map((card) => {
              return <CaseStudyCard key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  // {
  //   url: "/imgs/abstract/5.jpg",
  //   title: "Title 5",
  //   id: 5,
  // },
  // {
  //   url: "/imgs/abstract/6.jpg",
  //   title: "Title 6",
  //   id: 6,
  // },
  // {
  //   url: "/imgs/abstract/7.jpg",
  //   title: "Title 7",
  //   id: 7,
  // },
];
