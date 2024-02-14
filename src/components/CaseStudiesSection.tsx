import { CornerDownRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";
import { Waves } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const CaseStudiesSection = () => {
  return (
    <MaxWidthWrapper className="py-8">
      <div className="flex flex-row gap-2 items-center">
        <CornerDownRight className="h-6 w-6" />
        <h2 className="text-lg uppercase tracking-tight subpixel-antialiased font-semibold">
          Case Studies.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
        <CaseStudyCard />
        <CaseStudyCard image="https://gigbezorgd.nl/wp-content/uploads/2022/07/gigLogo2-887x800.png" />
        <CaseStudyCard />
        <CaseStudyCard />
      </div>
    </MaxWidthWrapper>
  );
};

export default CaseStudiesSection;

const CaseStudyCard = ({ image }: { image?: string }) => {
  return (
    <Card className="bg-slate-100 p-6 w-full border-none">
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
          <Button variant={"default"}>Read Case Study</Button>
        </div>
      </div>
    </Card>
  );
};
