import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHeader from "@/components/PageHeader";

const AboutPage = () => {
  return (
    <MaxWidthWrapper className="py-24">
      <PageHeader
        title="About Us."
        subtitle="Speed. Reliability. Quality. Fun."
        description="At WavyDigital, we bring entrepreneurial vision and coding expertise together for a successful tech product — fast, reliable, and with a dash of fun."
      />
    </MaxWidthWrapper>
  );
};

export default AboutPage;
