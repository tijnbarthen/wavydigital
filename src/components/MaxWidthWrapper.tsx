import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 py-10 md:py-16", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
