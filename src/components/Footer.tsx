import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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
        <h1 className="font-semibold text-5xl lg:text-7xl text-white text-center">
          Let&apos;s create your next big idea.
        </h1>
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
