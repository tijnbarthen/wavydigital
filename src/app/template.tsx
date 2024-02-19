"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial="initialState"
          animate="animate"
          exit="exitState"
          transition={{ duration: 1 }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "circle(0% at 100% 0%)",
            },
            animate: {
              opacity: 1,
              clipPath: "circle(150% at 100% 0%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "circle(0% at 100% 0%)",
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
