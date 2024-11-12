import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import { pricingFeatures, type PricingFeature } from "@/data/pricing";
import { Button } from "./ui/button";

const PricingFeature = ({ feature }: { feature: PricingFeature }) => {
  return (
    <div className="flex items-center gap-5 md:gap-10 lg:gap-14">
      <CheckIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-primary shrink-0" />
      <p className="flex items-center text-xl lg:text-2xl font-bold gap-2">
        {feature.icon && (
          <Image
            src={feature.icon}
            alt={feature.iconAlt || ""}
            width={20}
            height={20}
            className="object-contain"
          />
        )}
        {feature.text}
      </p>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="  py-20" aria-labelledby="pricing-title">
      <h2
        id="pricing-title"
        className="text-4xl font-bold text-center md:text-5xl lg:text-7xl mb-10"
      >
        Pricing
      </h2>

      <div className="rounded-2xl flex flex-col items-center gap-10 shadow-lg border border-border p-16 md:p-12">
        <h3 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl mb-4">Unlimited</h3>

        <p className="text-2xl font-bold text-center md:text-3xl lg:text-4xl mb-10">
          <span className="text-sm align-top">$</span>
          <span className="text-4xl">10</span>
          <span className="text-xl">/month</span>
        </p>

        <ul className="flex flex-col gap-4 lg:gap-7 items-center" role="list">
          <div className="flex flex-col gap-4 lg:gap-7">
            {pricingFeatures.map((feature, index) => (
              <li key={index}>
                <PricingFeature feature={feature} />
              </li>
            ))}
          </div>
        </ul>

        <Button className=" px-12 py-8  text-lg rounded-full  hover:bg-black hover:text-white self-center w-fit">
          Start Free Trial <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Pricing;
