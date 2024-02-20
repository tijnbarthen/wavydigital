"use client";
import "./styles.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "../SectionHeading";
import MaxWidthWrapper from "../MaxWidthWrapper";

function Item({
  title,
  description,
  inverted,
}: {
  title: string;
  description: string;
  inverted?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section
      className="h-fit flex justify-center items-center my-10"
      style={{
        flex: inverted ? "flex-row" : "flex-row-reverse",
      }}
    >
      <div
        ref={ref}
        className="w-[90%] md:w-full h-[200px] border-[2px] border-dotted relative"
      >
        <div className="w-full h-full flex justify-normal items-center flex-col p-10">
          <h1 className="text-xl md:text-4xl h-full w-full font-bold text-black tracking-tight ">
            {description}
          </h1>
          <h1 className="text-xl md:text-2xl  h-full w-full font-semibold text-black tracking-tight ">
            {title}
          </h1>
        </div>

        <figure className="progress text-red-500">
          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="100" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className=" stroke-blue-500 stroke-[20px]"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

export default function WhatWeOffer() {
  const features = [
    {
      description: "It's fast",
      benefit:
        "You'll move from the idea to a launchable web app in less than a month.",
    },
    {
      description: "It's simple",
      benefit:
        "We help you identify the most beneficial and critical elements of your idea and turn them into an easy-to-use and beautiful product.",
    },
    {
      description: "It's affordable",
      benefit:
        "Forget the endless search for freelancers or the cost of hiring a full-time dev team. No big budgets required.",
    },
    {
      description: "It's launchable",
      benefit: "You'll receive a product that is ready to launch.",
    },
  ];

  const howWeWork = [
    {
      task: "Free discovery call",
      duration: "15 minutes",
    },
    {
      task: "Proposal + agreement",
      duration: "2 days",
    },
    {
      task: "Initial prototype",
      duration: "3 days",
    },
    {
      task: "Feedback",
      duration: "1 day",
    },
    {
      task: "MVP development",
      duration: "6 days",
    },
  ];

  return (
    // f6754167448fd505f1b2d30494b7d97b-us21
    <>
      <MaxWidthWrapper className="">
        <SectionHeading title="Why work with us?" className="py-8" />
        {features.map((feature, index) => (
          <Item title={feature.benefit} description={feature.description} />
        ))}
        <SectionHeading title="How we work." className="py-8" />
        {howWeWork.map((work, index) => (
          <Item title={work.duration} description={work.task} inverted={true} />
        ))}
      </MaxWidthWrapper>
    </>
  );
}
