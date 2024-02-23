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
          showSubtitle={false}
          description="All the projects we have worked on. From design to development, we have done it all."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 items-stretch">
          {cases.map((caseStudy) => (
            <CaseStudyCard
              caseStudy={caseStudy}
              className="w-full col-span-2 md:col-span-1 md:w-full"
              key={caseStudy.id}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default CasesPage;
