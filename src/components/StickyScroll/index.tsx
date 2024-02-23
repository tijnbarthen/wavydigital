"use client";
// import "./style.css";
import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import TextGradientScroll from "../TextGradientScroll";

type Props = {
  title: string;
  sections: { title: string; content: string }[];
  className: string;
};

function Item({ className, title, sections }: Props) {
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
    <section
      className={`h-[130vh] md:h-[70vh] flex justify-center items-center max-w-7xl mx-auto ${className}`}
    >
      <div
        ref={ref}
        className="w-full relative flex flex-col space-y-10 md:space-y-0 md:flex-row md:gap-10 "
      >
        <figure className="sticky top-0 pt-14 md:pt-0 md:top-24 pb-2 h-fit bg-background md:w-1/2 px-4 z-20 md:h-full flex flex-row text-start font-semibold tracking-tight  border-b md:border-none border-primary ">
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
        <div className="md:w-1/2 flex flex-col space-y-16 px-4 z-10 pt-16 md:pt-0">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight ">
                {section.title}
              </h3>
              <p className="text-lg md:text-2xl tracking-tight font-medium text-muted-foreground">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sections1 = [
  {
    title: "We understand your business.",
    content:
      "Both founders have a background in business making us the perfect partner for your project. We know how to translate your business needs into a digital product.",
  },
  {
    title: "We build fast.",
    content:
      "We use the latest technologies and best practices to build your product fast. We don't waste time on unnecessary features. We focus on solving business problems with speed.",
  },
  {
    title: "We build simple.",
    content:
      "We help you identify the most beneficial and critical elements of your idea and turn them into an easy-to-use and beautiful product.",
  },
  {
    title: "We build affordable.",
    content:
      "Forget the endless search for freelancers or the cost of hiring a full-time dev team. No big budgets required.",
  },
  {
    title: "We build it ready for launch.",
    content: "You'll receive a product that is ready to launch.",
  },
];

const sections2 = [
  {
    title: "Free discovery call",
    content: "15 minutes to understand your needs.",
  },
  {
    title: "Proposal + agreement",
    content: "2 days. We'll send you a proposal and an agreement.",
  },
  {
    title: "Initial prototype",
    content:
      "3 days. We'll get you something visual, so you can see it come to life.",
  },
  {
    title: "Feedback",
    content:
      "1 day. Time for you to give us feedback on the initial prototype.",
  },
  {
    title: "MVP development",
    content:
      "6 days. This is where we build the first version of your product.",
  },
  {
    title: "MVP ready in 14 days. Guaranteed.",
    content:
      "Ready to launch. But we can also build it on a longer timeline if you prefer. We are flexible.",
  },
];

export default function StickyScroll() {
  return (
    <div className="md:pt-[60vh]">
      <Item
        title={"Why work with us?"}
        sections={sections1}
        className="md:mb-32"
      />
      <Item
        title={"How do we work?"}
        sections={sections2}
        className="pt-32 lg:pt-80"
      />
    </div>
  );
}
