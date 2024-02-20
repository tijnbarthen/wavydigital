"use client";

import Character from "./_components/Character";

import React from "react";

type Props = {
  className: string;
  paragraph: string;
};

export default function TextGradientScroll({ className, paragraph }: Props) {
  const words = paragraph.split(" ");
  return (
    <main className={className}>
      <div style={{ height: "100vh" }}></div>
      <Character paragraph={paragraph} />
    </main>
  );
}
