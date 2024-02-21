"use client";
import CaseStudiesSection from "@/components/CaseStudies/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import LogoScroll from "@/components/LogoScroll";
import PricingPage from "@/components/PricingPage";
import StickyScroll from "@/components/StickyScroll";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
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
      <ZoomParallax />
      <StickyScroll />
      <CaseStudiesSection />
      <TestimonialSection />
      <LogoScroll />
      <PricingPage />
    </>
  );
}
