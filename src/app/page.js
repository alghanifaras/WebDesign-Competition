import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";



export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />

      <AboutUs />
    </main>
  );
}