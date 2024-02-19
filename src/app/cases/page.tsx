import CaseStudiesSection from "@/components/CaseStudiesSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHeader from "@/components/PageHeader";

const CasesPage = () => {
  return (
    <>
      <MaxWidthWrapper className="py-24">
        <PageHeader
          title="Cases."
          subtitle="Realise. Your. Vision."
          description="We are here to help you realise your vision. And we are here to help you make it a reality."
        />
      </MaxWidthWrapper>
    </>
  );
};

export default CasesPage;
