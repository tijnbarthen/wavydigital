import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHeader from "@/components/PageHeader";
import PricingPage from "@/components/PricingPage";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <PageHeader
          title="Contact Us."
          contact={{
            emailTitle: "Send us an email",
            emailAdress: "info@wavydigital.io",
            phoneTitle: "Or call us",
            phoneNumer: "06 - 23218709",
            openingDays: "Everyday",
            openingTime: "09:00 - 19:00",
          }}
        />
      </MaxWidthWrapper>
      <PricingPage />
      <ContactForm />
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
