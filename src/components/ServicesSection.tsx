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
      <MaxWidthWrapper className="py-8">
        <div className="flex flex-row gap-2 items-center">
          <CornerDownRight className="h-6 w-6" />
          <h2 className="text-lg uppercase tracking-tight subpixel-antialiased font-semibold">
            Solutions.
          </h2>
        </div>
        <div>
          <dl className="mt-8 space-y-6 divide-y divide-black/100">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                        <div className="flex flex-row gap-4 items-center">
                          <Waves className="h-8 w-8" />
                          <span className="text-2xl font-semibold leading-7">
                            {faq.question}
                          </span>
                        </div>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
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
            ))}
          </dl>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ServicesSection;
