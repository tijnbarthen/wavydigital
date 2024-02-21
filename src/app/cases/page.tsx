import CaseStudiesSection from "@/components/CaseStudiesSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHeader from "@/components/PageHeader";

const CasesPage = () => {
  return (
    <>
      <MaxWidthWrapper className="py-16">
        <PageHeader
          title="Cases."
          description="All the projects we have worked on. From design to development, we have done it all."
        />
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[...Array(9)].map((_, i) => (
            <CaseStudyCard className="md:w-full" key={i} />
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default CasesPage;
