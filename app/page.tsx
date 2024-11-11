import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Features2 from "@/components/Features-2";
import Features3 from "@/components/Features-3";
import Features4 from "@/components/Features-4";

import Features5 from "@/components/Features-5";
import Features6 from "@/components/Features-6";
import Templates from "@/components/Templates";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col  items-center">
      <Header />
      <Hero />
      <Features />
      <Features2 />
      <Features3 />
      <Features4 />
      <Features5 />
      <Features6 />
      <Templates />
    </div>
  );
}
