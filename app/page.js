import Footer from "@/components/Footer";
import HelpSection from "@/components/HelpSection";
import TestimonialSection from "@/components/TestimonialSection";
import PopularResidences from "@/components/PopularResidences";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <PopularResidences />
      <TestimonialSection />
      <HelpSection />
      <Footer />
    </div>
  );
}
