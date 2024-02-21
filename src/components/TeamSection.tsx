"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";
import PageHeader from "./PageHeader";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <MaxWidthWrapper>
      <SectionHeading title="Meet The Team 👋" className="py-8" />
      <div className="flex md:flex-row gap-4 flex-col">
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
          whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
          transition={{ duration: 0.5, delay: 0.1 }} // Adjust timing and delay here
          viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
          className="flex flex-col gap-4 flex-1"
        >
          <Card>
            <img
              src={"/suave.png"}
              className="w-full h-96 object-cover rounded-lg"
            />
          </Card>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-xl ">Luke</h1>
          </div>
        </motion.div>{" "}
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
          whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
          transition={{ duration: 0.5, delay: 0.1 }} // Adjust timing and delay here
          viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
          className="flex flex-col gap-4 flex-1"
        >
          <Card>
            <img
              src={"/tonski.png"}
              className="w-full h-96 object-cover rounded-lg"
            />
          </Card>
          <div className="flex flex-row gap-2">
            <h1 className="font-semibold text-xl ">Tijn</h1>
          </div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TeamSection;
