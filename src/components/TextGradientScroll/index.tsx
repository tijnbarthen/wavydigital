"use client";

import { cn } from "@/lib/utils";
import Character from "./_components/Character";

import React from "react";

type Props = {
  className: string;
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
    <main className={cn(className)}>
      <div className={`${!WhyUs && "h-[100vh]"}`}> </div>
      <Character paragraph={paragraph} />
    </main>
  );
}
