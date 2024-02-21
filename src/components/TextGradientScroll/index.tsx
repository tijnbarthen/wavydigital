"use client";

import { cn } from "@/lib/utils";
import Character from "./_components/Character";

import React from "react";

type Props = {
  className?: string;
  paragraph: string;
  WhyUs?: boolean;
};

export default function TextGradientScroll({
  WhyUs,
  className,
  paragraph,
}: Props) {
  const words = paragraph.split(" ");
  return (
    <main
      className={cn(
        className,
        " w-full px-4  top-4 md:top-8  font-bold text-3xl md:text-6xl "
      )}
    >
      <div className={`${WhyUs === true ? "" : "h-[100vh]"}`}> </div>
      <Character paragraph={paragraph} WhyUs={WhyUs} />
    </main>
  );
}
