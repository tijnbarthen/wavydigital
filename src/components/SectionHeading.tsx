"use client";

import { cn } from "@/lib/utils";
import { CornerDownRight } from "lucide-react";
import { motion } from "framer-motion";

const SectionHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
      whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
      transition={{ duration: 0.5, delay: 0.1 }} // Adjust timing and delay here
      viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
      className={cn("flex flex-row gap-2 items-center py-8", className)}
    >
      <CornerDownRight className="h-6 w-6" />
      <h2 className="text-lg uppercase tracking-tight subpixel-antialiased font-semibold">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;