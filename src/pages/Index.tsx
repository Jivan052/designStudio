import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollPopup from "@/components/ScrollPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CTASection />
      </main>
      <Footer />
      <MobileBar />
      <ScrollPopup />
      <div className="md:hidden h-16" aria-hidden="true" />
    </div>
  );
};

export default Index;
