import ArticleSection from "@/components/ArticleSection/ArticleSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ZoomParallax from "@/components/ZoomParralax";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <ZoomParallax />
      <CaseStudiesSection />
      <ArticleSection />
      {/* <TechStack /> */}
    </>
  );
}
