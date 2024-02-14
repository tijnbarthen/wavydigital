import { CornerDownRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";
import { Waves } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import BlogCard from "./BlogCard";

const ArticleSection = () => {
  return (
    <MaxWidthWrapper className="py-8">
      <div className="flex flex-row gap-2 items-center">
        <CornerDownRight className="h-6 w-6" />
        <h2 className="text-lg uppercase">Articles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
        <BlogCard title="Test" image="" date="Today" link="/" />
        <BlogCard title="Test" image="" date="Today" link="/" />
        <BlogCard title="Test" image="" date="Today" link="/" />
        <BlogCard title="Test" image="" date="Today" link="/" />
      </div>
    </MaxWidthWrapper>
  );
};

export default ArticleSection;
