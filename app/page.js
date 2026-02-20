import Footer from "@/components/Footer";
import HelpSection from "@/components/HelpSection";
import TestimonialSection from "@/components/TestimonialSection";
import PopularResidences from "@/components/PopularResidences";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <PopularResidences />
      <TestimonialSection />
      <HelpSection />
      <Footer />
            
    </div>
  );
}
