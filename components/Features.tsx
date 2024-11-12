import React from "react";
import FeatureSection from "./FeatureSection";
import { CheckIcon } from "lucide-react";

const Features = () => {
  return (
    <>
      <FeatureSection
        title={
          <>
            Get a full article in <br /> 10 seconds
          </>
        }
        description="Write SEO optimized marketing copy for blogs, Facebook ads, Google Ads and more to increase clicks, conversions and sales. Our AI writer will help you to become more productive and creative."
        media={{
          type: "video",
          src: "/models.mp4",
        }}
        showCTA
      />

      <FeatureSection
        title={
          <>
            Let our AI writer <br /> find topics
          </>
        }
        description="If you provide the niche or industry of your business, our AI can recommend topics it can write about for you."
        media={{
          type: "video",
          src: "/models.mp4",
        }}
        reverseLayout
      >
        <ul className="flex flex-col gap-4 lg:gap-7">
          {["Unique Content", "SEO Safe", "Blazing Fast"].map((item) => (
            <li key={item}>
              <p className="flex items-center text-xl lg:text-2xl gap-5 md:gap-10 lg:gap-14 font-bold">
                <CheckIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-primary" />
                {item}
              </p>
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        title={
          <>
            One platform, all <br /> AI models
          </>
        }
        description="With Writeseed you can use all the top AI models, like GPT-4, GPT-4o, Claude 3.5 Sonnet, Llama 3 and many more."
        media={{
          type: "image",
          src: "/ais.png",
          alt: "AI models",
        }}
        reverseLayout
      />

      <FeatureSection
        title={<>Chrome Extension</>}
        description="Use AI everywhere from Gmail to Wordpress directly in your browser. With our smart Chrome extension, ChatGPT follows you around the web."
        media={{
          type: "image",
          src: "/exheronew.png",
          alt: "exheronew",
        }}
      />
      <FeatureSection
        title={
          <>
            SEO & NLP <br /> Editor
          </>
        }
        description="Track the most important SEO metrics while creating your content and optimize it with NLP terms."
        media={{
          type: "image",
          src: "/seohero.png",
          alt: "seohero",
        }}
        reverseLayout
      />
    </>
  );
};

export default Features;
