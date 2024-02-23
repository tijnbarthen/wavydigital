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
import cases from "../cases";

import Link from "next/link";
import { notFound } from "next/navigation";

const CaseStudyPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const caseStudy = cases.find((c) => c.slug === slug);

  if (!caseStudy) {
    return notFound();
  }

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
              {caseStudy.title}
            </li>
          </ol>
        </nav>
        <section className="mt-4 grid grid-cols-6 gap-x-10">
          <div className=" col-span-6 md:col-span-4">
            <h1 className="font-extrabold tracking-tight text-5xl md:text-6xl">
              {caseStudy.title}
            </h1>

            <p className="text-lg md:text-xl font-semibold mt-4 max-w-lg">
              {caseStudy.subtitle}
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 mt-8 md:mt-0">
            <div className="flex flex-col md:justify-end flex-wrap md:text-end">
              <h3 className="text-lg md:text-lg font-semibold">Build With</h3>
              <div className="mt-1 flex gap-2 md:justify-end flex-wrap">
                {caseStudy.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:justify-end flex-wrap md:text-end mt-2">
              <h3 className="text-lg md:text-lg font-semibold">Client</h3>
              <p className="mt-1 text-lg text-gray-600">{caseStudy.client}</p>
            </div>
            <div className="flex flex-col md:justify-end flex-wrap md:text-end mt-1">
              <h3 className="text-lg md:text-lg font-semibold">Year</h3>
              <p className="mt-1 text-lg text-gray-600">{caseStudy.year}</p>
            </div>
            <div className="flex flex-col md:justify-end flex-wrap md:text-end mt-1">
              <h3 className="text-lg md:text-lg font-semibold ">
                Visit project
              </h3>
              <a
                href={caseStudy.project_url}
                target="_blank"
                className="mt-1 text-lg  underline from-blue-600 w-fit to-purple-600 bg-clip-text text-transparent bg-gradient-to-r self-end "
              >
                {caseStudy.project_url}
              </a>
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
            {caseStudy.images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={image}
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
            {caseStudy.projectDescription}
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
