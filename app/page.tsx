import Header from "@/app/_components/Header";
import HeroSection from "./_components/home/HeroSection";
import AboutSection from "./_components/home/AboutSection";
import ApproachesSection from "./_components/home/ApproachesSection";
import ServicesSection from "./_components/home/ServicesSection";
import ContactSection from "./_components/home/ContactSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
      <>
        <Header />
        <HeroSection />
        <AboutSection />
        <ApproachesSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </>
  );
}
