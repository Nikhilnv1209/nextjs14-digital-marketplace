import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("max-w-screen-lg w-full mx-auto px-4 md:px-32", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
