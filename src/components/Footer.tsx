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
    <MaxWidthWrapper className=" py-4 md:py-8 bg-background">
      <footer className="rounded-3xl flex justify-center shadow-xl border border-primary/10 items-center flex-col gap-16  py-36 relative md:bg-secondary">
        <h1 className="font-semibold max-w-3xl text-5xl lg:text-7xl  tracking-tight text-center">
          Ready to discuss your next big idea?
        </h1>
        <Button
          variant="outline"
          size={"lg"}
          className="py-8 rounded-full font-bold  text-lg gap-2 group"
        >
          Schedule a call with us{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </Button>
        <div className="flex justify-center gap-6 px-4 flex-wrap">
          {footerLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" font-bold hover:underline cursor-pointer transition-all"
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* <div className="absolute bottom-5 right-5">
          <ThemeToggle />
        </div> */}
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
