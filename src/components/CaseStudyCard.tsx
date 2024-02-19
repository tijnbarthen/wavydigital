"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const CaseStudyCard = ({ image }: { image?: string }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
      whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
      transition={{ duration: 0.5, delay: 0.1 }} // Adjust timing and delay here
      viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
    >
      <Card className=" bg-slate-100 p-6 w-full border-none dark:border-2 dark:border-white ">
        <div className="flex justify-center">
          <img
            src={
              image ||
              "https://framerusercontent.com/images/IwQGpm16IrG3DUIAqlXEFJefk.png?scale-down-to=1024"
            }
            alt=""
            className="hover:grow h-96 w-96 object-contain"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">GiG Bezorgd</h3>
            <div>
              <Badge variant={"outline"}>UI/UX Design</Badge>
            </div>
          </div>
          <div className="self-end">
            <motion.div
              whileHover={{
                scale: 1.05,
                borderColor: "#f9a8d4",
                borderWidth: 4,
                borderRadius: "15px",
              }}
              transition={{ duration: 0.3 }}
              className="mt-4 rounded-2xl "
            >
              <Button variant={"default"}>
                <motion.span
                  whileHover={{
                    color: "#f9a8d4",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Read Case Study
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
