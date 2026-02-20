import Footer from "@/components/Footer";
import HelpSection from "@/components/HelpSection";
import TestimonialSection from "@/components/TestimonialSection";
import PopularResidences from "@/components/PopularResidences";
export default function Home() {
  return (
    <div >
      <PopularResidences />
      <TestimonialSection />
      <HelpSection />
      <Footer />
    </div>
  );
}
