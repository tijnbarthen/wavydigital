import { CornerDownRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";
import { Waves } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = [
  {
    title: "GiG Bezorgd",
    image:
      "https://gigbezorgd.nl/wp-content/uploads/2022/07/gigLogo2-887x800.png",
    tags: ["UI/UX Design"],
  },
  {
    title: "",
  },
];

const CaseStudiesSection = () => {
  return (
    <MaxWidthWrapper className="py-8">
      <SectionHeading title="Case Studies" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
        <CaseStudyCard />
        <CaseStudyCard image="https://gigbezorgd.nl/wp-content/uploads/2022/07/gigLogo2-887x800.png" />
        <CaseStudyCard />
        <CaseStudyCard />
      </div>

      <div className="flex justify-center mt-8">
        <Button variant={"default"}>View All Case Studies</Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default CaseStudiesSection;
