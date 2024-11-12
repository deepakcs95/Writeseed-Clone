import { StaticImageData } from "next/image";
import gpt4Icon from "../public/apple-touch-icon.59f2e898.png";
import claudeIcon from "../public/claude.jpg";

export interface PricingFeature {
  text: string;
  icon?: StaticImageData;
  iconAlt?: string;
}

export const pricingFeatures: PricingFeature[] = [
  { text: "Unlimited Words" },
  { text: "Unlimited AI Images" },
  { text: "GPT-4", icon: gpt4Icon, iconAlt: "GPT-4" },
  { text: "GPT-4o", icon: gpt4Icon, iconAlt: "GPT-4o" },
  { text: "Claude 3.5", icon: claudeIcon, iconAlt: "Claude 3.5" },
  { text: "Sonnet", icon: claudeIcon, iconAlt: "Claude Sonnet" },
  { text: "Wordpress Integration" },
  { text: "SEO Optimized" },
  { text: "35 + Languages" },
  { text: "70+ Fine-tuned AI Templates" },
];
