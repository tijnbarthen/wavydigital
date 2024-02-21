"use client";
import "./style.css";
import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import TextGradientScroll from "../TextGradientScroll";

type Props = {
  title: string;
  sections: { title: string; content: string }[];
};

function Item({ title, sections }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // .progress {
  //   position: sticky;
  //   top: 0;
  //   width: 80px;
  //   height: 80px;
  //   margin: 0;
  //   padding: 0;
  // }

  // .progress svg {
  //   transform: translateX(-100px) rotate(-90deg);
  // }

  // circle {
  //   stroke-dashoffset: 0;
  //   stroke-width: 5%;
  //   fill: none;
  // }
  return (
    <section className="h-[100vh] flex justify-center items-center max-w-7xl mx-auto">
      <div ref={ref} className="w-full relative flex">
        <figure className="w-1/2 sticky top-20 h-full flex flex-row">
          {/* <svg
            id="progress"
            width="75"
            height="75"
            viewBox="0 0 100 100"
            // className="translate-x-[-100px] -rotate-90 fill-none"
            className=" -rotate-90 fill-none"
          >
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className=" stroke-blue-600"
              stroke-width="5%"
              style={{
                pathLength: scrollYProgress,
                strokeDashoffset: 0,
              }}
            />
          </svg> */}
          <TextGradientScroll WhyUs={true} className={""} paragraph={title} />
          {/* <h1 className="text-6xl">Why work with us?</h1> */}
        </figure>
        <div className="w-1/2 flex flex-col space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <h3 className="text-4xl tracking-tight">{section.title}</h3>
              <p className="text-lg tracking-tight">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sections1 = [
  {
    title: "It's fast",
    content:
      "You'll move from the idea to a launchable web app in less than a month.",
  },
  {
    title: "It's simple",
    content:
      "We help you identify the most beneficial and critical elements of your idea and turn them into an easy-to-use and beautiful product.",
  },
  {
    title: "It's affordable",
    content:
      "Forget the endless search for freelancers or the cost of hiring a full-time dev team. No big budgets required.",
  },
  {
    title: "It's launchable",
    content: "You'll receive a product that is ready to launch.",
  },
];

const sections2 = [
  {
    title: "Free discovery call",
    content: "15 minutes",
  },
  {
    title: "Proposal + agreement",
    content: "2 days",
  },
  {
    title: "Initial prototype",
    content: "3 days",
  },
  {
    title: "Feedback",
    content: "1 day",
  },
  {
    title: "MVP development",
    content: "6 days",
  },
];

export default function StickyScroll() {
  return (
    <>
      <Item title={"Why work with us?"} sections={sections1} />
      <Item title={"How do we work?"} sections={sections2} />
    </>
  );
}