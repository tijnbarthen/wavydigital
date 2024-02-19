import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHeader from "@/components/PageHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <MaxWidthWrapper className="py-24">
        <PageHeader
          title="Contact Us."
          subtitle="Realise. Your. Vision."
          description="Don't hesitate to reach out to us. We are here to help you realise your vision. And we are here to help you make it a reality."
        />
      </MaxWidthWrapper>
      <BentoSection className="w-full bg-white border-4 mb-8">
        <ContactForm />
      </BentoSection>
      <BentoSection className={"bg-slate-500 justify-center items-center"}>
        <h1 className="font-semibold text-5xl lg:text-7xl text-white text-center">
          Schedule a call with us.
        </h1>
        <Button
          variant="outline"
          size={"lg"}
          className="py-8 rounded-full font-bold text-lg"
        >
          Schedule a call with us <ArrowRight className="ml-2" />
        </Button>
      </BentoSection>
    </>
  );
};

export default ContactPage;

const BentoSection = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <MaxWidthWrapper className="py-0">
      <div
        className={cn(
          "rounded-3xl flex flex-col gap-16 px-10 py-36 relative",
          className
        )}
      >
        {children}
      </div>
    </MaxWidthWrapper>
  );
};
