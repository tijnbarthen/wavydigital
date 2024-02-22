"use client";
import CaseStudiesSection from "@/components/CaseStudies/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import LogoScroll from "@/components/LogoScroll";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PricingPage from "@/components/PricingPage";
import StickyScroll from "@/components/StickyScroll";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import TextGradientScroll from "@/components/TextGradientScroll";
import ZoomParallax from "@/components/ZoomParralax";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <HeroSection />
      <TeamSection />
      <MaxWidthWrapper className="pb-0">
        <TextGradientScroll
          paragraph="We know the digital world can be complex."
          className=""
          WhyUs={true}
        />
      </MaxWidthWrapper>
      <LogoScroll />

      {/* <ZoomParallax /> */}
      <StickyScroll />
      <CaseStudiesSection />
      <TestimonialSection />
      {/* <LogoScroll /> */}
      {/* <PricingPage /> */}
    </>
  );
}
