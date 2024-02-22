import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

const CaseStudyPage = ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <MaxWidthWrapper className="py-8">
      <div className="mx-auto">
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-lg">
            <li>
              <Link className="text-blue-600 hover:underline" href="/cases">
                All Case Studies
              </Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li aria-current="page" className="text-gray-500">
              GiG Bezorgd
            </li>
          </ol>
        </nav>
        <section className="mt-4 grid grid-cols-6 gap-x-10">
          <div className=" col-span-6 md:col-span-4">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter">
              GiG Bezorgd
            </h1>
            <p className="text-lg md:text-xl font-semibold mt-4 max-w-lg">
              A self-service platform for GiG to manage their direct to consumer
              delivery service. The platform is designed to be simple and easy.
              All the orders are automatically synced with their delivery
              system.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 mt-8 md:mt-0">
            <div className="flex flex-col md:justify-end flex-wrap md:text-end">
              <h3 className="text-lg md:text-xl font-semibold">Skills</h3>
              <div className="mt-1 flex gap-2 md:justify-end flex-wrap">
                <Badge className="mt-1 py-1 px-3 text-sm">React</Badge>
                <Badge className="mt-1 py-1 px-3 text-sm">TailwindCSS</Badge>
                <Badge className="mt-1 py-1 px-3 text-sm">NodeJS</Badge>
                <Badge className="mt-1 py-1 px-3 text-sm">GraphQL</Badge>
              </div>
            </div>
            <div className="flex flex-col md:justify-end flex-wrap md:text-end mt-2">
              <h3 className="text-lg md:text-xl font-semibold">Client</h3>
              <p className="mt-1 text-lg text-gray-600">GiG Hard Seltzer</p>
            </div>
            <div className="flex flex-col md:justify-end flex-wrap md:text-end mt-2">
              <h3 className="text-lg md:text-xl font-semibold">Year</h3>
              <p className="mt-1 text-lg text-gray-600">2022</p>
            </div>
          </div>
        </section>
        <Carousel
          className="w-full py-8 "
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src="/gigBezorgd.webp"
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Gradient Background Image"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>

        {/* <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="col-span-2">
            <div className="relative">
              <img
                src="/gigBezorgd.webp"
                className="h-full w-full object-cover rounded-3xl"
                alt="Gradient Background Image"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative col-span-1">
              <img
                src="/gigDesktopFlipped .webp"
                className="h-full w-full object-cover rounded-3xl"
                alt="Gradient Background Image"
              />
            </div>
            <div className="relative col-span-1">
              <img
                src="/gigMobile.webp"
                className="h-full w-full object-cover rounded-3xl"
                alt="Gradient Background Image"
              />
            </div>
          </div>
        </div> */}
        <div className="mt-8">
          <h2 className="text-4xl font-bold">Project Description</h2>
          <p className="text-lg md:text-xl mt-4">
            Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
            adipiscing augue sit justo elit. Mauris bibendum mattis et diam
            tellus. Auctor mauris felis lobortis tempus.
          </p>
        </div>
        {/* <div className="mt-10">
          <h2 className="text-4xl font-bold">The solution</h2>
          <p className="text-lg md:text-xl mt-4">
            Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
            adipiscing augue sit justo elit. Mauris bibendum mattis et diam
            tellus. Auctor mauris felis lobortis tempus.
          </p>
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default CaseStudyPage;
