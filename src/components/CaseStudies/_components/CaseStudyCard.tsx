"use client";

import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Case } from "@/app/cases/cases";
import Link from "next/link";

const CaseStudyCard = ({
  caseStudy,
  className,
}: {
  caseStudy: Case;
  className?: string;
}) => {
  const { title, subtitle, skills, images, slug } = caseStudy;
  return (
    <motion.div
      className="flex"
      // initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
      whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
      viewport={{ once: true, amount: 0.4 }} // Configure when the animation triggers
    >
      <Card
        className={cn(
          " bg-secondary p-4 border-none dark:border-2 dark:border-primary rounded-3xl",
          className
        )}
      >
        {/* <Badge variant={"secondary"} className="absolute top-4 right-4">
          {ownProject ? "Own Project" : "Client Project"}
        </Badge> */}
        <div className="flex justify-center">
          <img
            src={images[0]}
            alt="Preview of GiG Bezorgd Case Study"
            className="hover:grow h-[30vh] md:h-96 w-[50vw] md:w-96 object-contain transition-all duration-1000"
          />
        </div>
        <div className="flex flex-row justify-between h-fit">
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))}
            </div>
            <div className="mt-2 h-24">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-lg tracking-tight font-medium">{subtitle}</p>
            </div>
            <div className="mt-auto">
              <Link
                href={`/cases/${slug}`}
                className={buttonVariants({
                  variant: "default",
                  className: "mt-2",
                })}
              >
                Read Case Study
              </Link>
            </div>
          </div>{" "}
        </div>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
