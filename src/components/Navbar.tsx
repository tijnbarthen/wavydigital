"use client";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Menu, X, Waves } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

type Props = {
  tokens?: number;
};

export default function Navbar({ tokens }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className=" block top-0 inset-x-0 z-50 border-b border-black h-16">
      <MaxWidthWrapper className="py-0">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between sm:justify-none gap-x-6 h-16"
          aria-label="Global"
        >
          <div className="flex md:flex-1">
            <Link href="/" className="">
              <div className="flex flex-row items-center">
                <span className="sr-only">WavyDigital</span>
                <img src="/logowavydigital.png" className="h-8 w-8" />
              </div>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-6"></div>

          <div>
            <Button
              type="button"
              variant={"ghost"}
              className="p-0"
              // className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Waves className="h-8 w-8" aria-hidden="true" />
            </Button>
          </div>
        </nav>
        <Transition.Root show={mobileMenuOpen} as={React.Fragment}>
          <Dialog
            as="div"
            // open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-[100]" />
            <Transition.Child
              as={React.Fragment}
              enter="transition ease-in-out duration-500"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-500"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-[100] w-full  overflow-y-auto bg-white dark:bg-black px-4 py-0  sm:ring-1 sm:ring-gray-900/10">
                <MaxWidthWrapper className="py-0">
                  <div className="flex items-center max-w-7xl justify-between gap-x-6 h-16 top-0 w-full">
                    <Link
                      href="/"
                      className="-m-1.5 p-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">WavyDigital</span>
                      <img src="/logowavydigital.png" className="h-8 w-8" />
                    </Link>
                    <Button
                      type="button"
                      className="p-0"
                      variant={"ghost"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-10 w-10" aria-hidden="true" />
                    </Button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="pt-10 flex flex-col gap-10">
                        {navigation.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ x: 100, opacity: 0 }} // Start off-screen to the left
                            whileInView={{ x: 0, opacity: 1 }} // End at its final position, fully opaque
                            transition={{
                              duration: 0.5,
                              delay: (index + 1) * 0.1,
                            }} // Adjust timing and delay here
                            viewport={{ once: true, amount: 0.5 }} // Configure when the animation triggers
                          >
                            <Link
                              onClick={() => setMobileMenuOpen(false)}
                              key={item.name}
                              href={item.href}
                              className="border-b border-black dark:border-white flex-1 h-auto flex gap-1 py-2"
                            >
                              <p className="self-start">0{index + 1}</p>
                              <p className=" text-3xl md:text-5xl font-bold">
                                {item.name}
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <div className="py-6"></div>
                    </div>
                  </div>
                </MaxWidthWrapper>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </MaxWidthWrapper>
    </header>
  );
}
