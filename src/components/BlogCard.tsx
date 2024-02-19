"use client";

import Link from "next/link";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  date: string;
  image?: string;
  link: string;
}

const BlogCard = ({ title, date, image, link }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
      whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
      transition={{ duration: 0.5, delay: 0.1 }} // Adjust timing and delay here
      viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
    >
      <Link href={link}>
        <article className="flex flex-col gap-4 ">
          <Card>
            <img
              src={
                image ||
                "https://images.unsplash.com/photo-1705522732948-d7514ec76b95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"
              }
              alt={title}
              className="w-full h-80 object-cover rounded-lg"
            />
          </Card>
          <div className="flex flex-col gap-1">
            <p className="font-extralight">{date}</p>
            <h1 className="font-semibold text-2xl">{title}</h1>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
