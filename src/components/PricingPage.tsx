"use client";
import { CheckIcon } from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import TextGradientScroll from "./TextGradientScroll";
import { Button } from "./ui/button";
import Lenis from "@studio-freight/lenis";

const tiers = [
  {
    name: "Websites",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "from €1.999",
    description:
      "Launch or rebrand your business with a fully fledged website from us",
    features: [
      "Free discovery call",
      "14-days turnaround",
      "2 tweaks included",
      "Additional tweaks starting at $999",
    ],
  },
  {
    name: "Platforms",
    id: "tier-team",
    href: "#",
    priceMonthly: "On request",
    description:
      "Launch or rebrand your business with a fully fledged website from us",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
  },
];

export default function PricingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="isolate overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="mx-auto max-w-7xl px-4 pb-96 pt-0 text-center sm:pt-0 lg:px-6">
        <div className="mx-auto max-w-4xl text-white dark:text-secondary">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Pricing
          </h2> */}
          {/* <TextGradientScroll
            paragraph="The right price for you, whoever you are"
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            WhyUs={false}
          /> */}
          <p className="text-4xl md:text-7xl font-bold tracking-tighter ">
            The right price for you.{" "}
            <br className="hidden sm:inline lg:hidden" />
            Whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
          {/* <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
        </div>
      </div>
      <div className="flow-root bg-background pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-secondary p-8 shadow-xl border border-primary/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base text-muted-foreground font-semibold leading-7 "
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight ">
                        {tier.priceMonthly}
                      </span>
                      {/* <span className="text-base font-semibold leading-7 text-gray-600">
                        /month
                      </span> */}
                    </div>
                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                      {tier.description}
                    </p>
                    <Button
                      variant="outline"
                      size={"lg"}
                      className=" mt-6 rounded-full text-secondary hover:text-secondary font-bold text-base gap-2 group bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80"
                    >
                      Schedule a call with us{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </Button>

                    <p className="mt-6 text-base font-bold leading-7 ">
                      What you will get:
                    </p>
                    <FadeInStagger>
                      <ul
                        role="list"
                        className="mt-6 space-y-4 text-sm md:text-base leading-6 text-muted-foreground"
                      >
                        {tier.features.map((feature) => (
                          <li ref={ref} key={feature} className="flex gap-x-3">
                            <FadeIn className="flex flex-row gap-2">
                              <CheckIcon
                                className="h-6 w-5 flex-none text-primary"
                                aria-hidden="true"
                              />
                              {feature}
                            </FadeIn>
                          </li>
                        ))}
                      </ul>
                    </FadeInStagger>
                  </div>
                </div>
              ))}
              {/* <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                    Discounted
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                    Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
