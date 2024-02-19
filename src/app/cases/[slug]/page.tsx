import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeftIcon } from "lucide-react";

import Link from "next/link";

const CaseStudyPage = ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <MaxWidthWrapper className="py-8">
      <Link className="flex items-center space-x-2 text-blue-600" href="/cases">
        <ArrowLeftIcon className="h-4 w-4" />
        <span>All case studies</span>
      </Link>
      <div className="md:flex md:space-x-16">
        <div className="md:w-2/3">
          <h1 className="text-5xl font-bold">Kozmo</h1>
          <p className="mt-4 text-gray-600">
            Ut nunc, dui sit sit nil, cras velit lorem. Laoreet gravida
            adipiscing augue sit justo elit. Mauris bibendum mattis et diam
            tellus. Auctor mauris felis lobortis tempus.
          </p>
          <div className="mt-8">
            <img
              alt="Kozmo Case Study"
              className="rounded-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/3">
          <div className="space-y-4 w-full">
            <div>
              <h3 className="font-semibold">UI/UX</h3>
              <p>Nayzak</p>
            </div>
            <div>
              <h3 className="font-semibold">Role:</h3>
              <p>Branding, Web design</p>
            </div>
            <div>
              <h3 className="font-semibold">Date:</h3>
              <p>Nov 2023</p>
            </div>
            <div>
              <h3 className="font-semibold">Preview</h3>
              <Link className="text-blue-600" href="#">
                https://framer.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CaseStudyPage;
