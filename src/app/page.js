import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/Contact";
import Feature from "@/components/Feature";
import HeroSection from "@/components/HeroSection";



export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />

      <AboutUs />

      <Feature />

      <ContactSection />
    </main>
  );
}