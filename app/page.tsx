import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Languages from "@/components/Languages";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col  items-center">
      <Header />
      <Hero />
      <Features />
      <Templates />
      <Languages />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
}
