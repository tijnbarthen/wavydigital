"use client";

import { Meteors } from "@/lib/meteors";
import MaxWidthWrapper from "./MaxWidthWrapper";
import PageHeader from "./PageHeader";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <PageHeader
        title="Wavy Digital."
        subtitle="Business. Savvy. Tech."
        description="At WavyDigital, we bring entrepreneurial vision and coding expertise together for a successful tech product — fast, reliable, and with a dash of fun."
      />

      <div className="mt-10 flex flex-col gap-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
          whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
          transition={{ duration: 0.5, delay: 0.1 }} // Adjust timing and delay here
          viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
          className="lg:h-32 h-20 w-full relative"
        >
          <img
            src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover rounded-3xl"
            alt=""
          />
          <h1 className="text-xl md:text-4xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
            We build. We grow. We scale.
          </h1>
        </motion.div>
        <div className="flex flex-row gap-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
            whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
            transition={{ duration: 0.5, delay: 0.2 }} // Adjust timing and delay here
            viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
            className="lg:h-32 h-20 w-2/3 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D"
              className="h-full w-full object-cover rounded-3xl"
              alt=""
            />
            <h1 className="text-lg md:text-3xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
              E-Commerce.
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
            whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
            transition={{ duration: 0.5, delay: 0.2 }} // Adjust timing and delay here
            viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
            className="lg:h-32 h-20 w-full relative  bg-gradient-to-br  from-indigo-500 rounded-3xl flex justify-center items-center to-pink-500"
          >
            {/* <img
              src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover rounded-3xl"
              alt=""
            /> */}

            <h1 className="text-lg md:text-4xl font-bold text-white tracking-tight">
              Web Development.
            </h1>
          </motion.div>
        </div>

        <div className="flex flex-row gap-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
            whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
            transition={{ duration: 0.5, delay: 0.3 }} // Adjust timing and delay here
            viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
            className="lg:h-32 h-20 w-full relative"
          >
            <h1 className="text-xl md:text-4xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
              Automations.
            </h1>
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyYWRpZW50fGVufDB8MHwwfHx8MA%3D%3D"
              className="h-full w-full object-cover rounded-3xl"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
            whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
            transition={{ duration: 0.5, delay: 0.3 }} // Adjust timing and delay here
            viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
            className="lg:h-32 h-20 w-full relative text-center"
          >
            <h1 className="text-xl md:text-4xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
              Platforms.
            </h1>
            <img
              src="https://images.unsplash.com/photo-1548350896-fafc317d3ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdyYWRpZW50fGVufDB8MHwwfHx8MA%3D%3D"
              className="h-full w-full object-cover rounded-3xl "
              alt=""
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
          whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
          transition={{ duration: 0.5, delay: 0.4 }} // Adjust timing and delay here
          viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
          className="lg:h-32 h-20 w-full relative bg-gradient-to-br  from-blue-500 rounded-3xl flex justify-center items-center to-yellow-500"
        >
          <h1 className="text-xl md:text-4xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
            🚀 {"  "}Ready for launch?
          </h1>

          {/* <img
            src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover rounded-3xl"
            alt=""
          /> */}
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
