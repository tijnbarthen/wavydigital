import { CornerDownRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";
import { Waves } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

const ArticleSection = () => {
  return (
    <MaxWidthWrapper className="py-8">
      <SectionHeading title="Stories that occured in our journey." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <BlogCard title="Test" image="" date="Today" link="/" />
        <BlogCard title="Test" image="" date="Today" link="/" />
        <BlogCard title="Test" image="" date="Today" link="/" />
        <BlogCard title="Test" image="" date="Today" link="/" />
      </div>
    </MaxWidthWrapper>
  );
};

export default ArticleSection;
