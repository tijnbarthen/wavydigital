import CaseStudiesSection from "@/components/CaseStudies/CaseStudiesSection";
import CaseStudyCard from "@/components/CaseStudies/_components/CaseStudyCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHeader from "@/components/PageHeader";
import cases from "./cases";

const CasesPage = () => {
  return (
    <>
      <MaxWidthWrapper className="py-16">
        <PageHeader
          title="Cases."
          description="All the projects we have worked on. From design to development, we have done it all."
        />
        <div className="grid grid-cols-2 gap-4 mt-12 items-stretch">
          {cases.map((caseStudy) => (
            <CaseStudyCard
              caseStudy={caseStudy}
              className="md:w-full"
              key={caseStudy.id}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default CasesPage;
