import CaseStudiesSection from "@/components/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import LogoScroll from "@/components/LogoScroll";
import PricingPage from "@/components/PricingPage";
import StickyScroll from "@/components/StickyScroll";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import ZoomParallax from "@/components/ZoomParralax";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <ZoomParallax />
      <StickyScroll />
      <CaseStudiesSection />
      <TestimonialSection />
      <LogoScroll />
      <PricingPage />
    </>
  );
}
