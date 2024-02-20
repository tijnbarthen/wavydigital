import ArticleSection from "@/components/ArticleSection/ArticleSection";
import BlogCard from "@/components/BlogCard";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PersonalSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import { Card } from "@/components/ui/card";
import image from "next/image";
import Image from "next/image";
import { title } from "process";
import TeamSection from "@/components/TeamSection";
import ZoomParallax from "@/components/ZoomParralax";
import SectionHeading from "@/components/SectionHeading";
import StickyScroll from "@/components/StickyScroll/App";
import { HeroParallax } from "@/components/HeroParallax/HeroParallaxComponent";
import { HeroParallaxDemo } from "@/components/HeroParallax";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <ZoomParallax />
      <CaseStudiesSection />
      <ArticleSection />
    </>
  );
}
