import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaProps = {
  type: "video" | "image";
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  title: React.ReactNode;
  description: string;
  media: MediaProps;
  showCTA?: boolean;
  reverseLayout?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const FeatureSection = ({
  title,
  description,
  media,
  showCTA = false,
  reverseLayout = false,
  children,
  className,
}: FeatureSectionProps) => {
  const MediaComponent = ({ reverseLayout }: { reverseLayout: boolean }) => {
    if (media.type === "video") {
      return (
        <video
          src={media.src}
          autoPlay
          loop
          muted
          className={cn(
            "w-3/5 md:w-2/3 lg:w-1/4 rounded-md lg:mt-20",
            reverseLayout ? "order-first lg:order-last" : ""
          )}
        />
      );
    }
    return (
      <Image
        src={media.src}
        alt={media.alt || "feature"}
        width={500}
        height={500}
        className="w-3/5 md:w-2/3 lg:w-2/3 rounded-md lg:mt-20"
      />
    );
  };

  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row lg:px-20 mt-20 items-center justify-center gap-12 md:gap-16 lg:gap-20 py-10 text-center",
        className
      )}
    >
      <MediaComponent reverseLayout={reverseLayout} />
      <div
        className={cn(
          "flex flex-col items-center gap-7 mt-10 lg:mt-20 w-full lg:w-1/2",
          reverseLayout ? "order-last lg:order-first" : ""
        )}
      >
        <p className="text-4xl font-bold mt-10 md:text-5xl lg:text-7xl">{title}</p>
        <p className="text-xl text-muted-foreground max-w-[36ch]">{description}</p>
        {children}
        {showCTA && (
          <Button className="px-12 py-8 text-lg rounded-lg hover:bg-black hover:text-white self-center w-fit">
            Start Free Trial <ArrowRightIcon />
          </Button>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
