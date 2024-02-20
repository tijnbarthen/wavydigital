import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { SparklesCore } from "./Sparkles";

type FooterLink = {
  title: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <MaxWidthWrapper className="py-8">
      <footer className="bg-black rounded-3xl flex justify-center items-center flex-col gap-16 px-10 py-36 relative">
        <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20 px-">
            Let&apos;s create your next big idea.
          </h1>
          <div className="w-[60rem] relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <Button
          variant="outline"
          size={"lg"}
          className="py-8 rounded-full font-bold text-lg"
        >
          Schedule a call with us <ArrowRight className="ml-2" />
        </Button>
        <div className="flex justify-center gap-6 flex-wrap">
          {footerLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-white font-bold hover:underline cursor-pointer transition-all"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-5 right-5">
          <ThemeToggle />
        </div>
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
