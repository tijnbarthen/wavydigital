"use client";

import {
  ArrowBigDownDash,
  ArrowRight,
  CornerDownRight,
  MinusIcon,
  PlusIcon,
  Waves,
} from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Disclosure } from "@headlessui/react";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const faqs = [
  {
    question:
      "Automate your e-commerce order fulfillment, so you can focus on growth.",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Build a dynamic platform that scales with your business.",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Dynamic landing pages that convert visitors into customers.",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question:
      "Launch a custom web application that solves your unique needs in 2 weeks.",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Anything else? We're here to help!",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <MaxWidthWrapper className="py-16">
        <SectionHeading title="Services." />
        <div>
          <dl className="space-y-6 divide-y divide-black/100 dark:dive-white/100">
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
                whileInView={{ y: 0, opacity: 1 }} // End at its final position, fully opaque
                transition={{ duration: 0.5, delay: 0.1 }} // Adjust timing and delay here
                viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
              >
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left">
                          <div className="flex flex-row gap-4 items-center">
                            <Waves className="h-8 w-8 self-start" />
                            <span className=" text-md md:text-2xl font-semibold leading-7">
                              {faq.question}
                            </span>
                          </div>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 py-2 pr-12">
                        <p className="text-base leading-7 text-black">
                          {faq.answer}
                        </p>
                        <Button className="mt-4" variant="default">
                          Learn More
                          <ArrowRight className="h-6 w-6 ml-2" />
                        </Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </dl>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ServicesSection;
