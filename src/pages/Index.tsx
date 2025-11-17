import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollingTicker from "@/components/ScrollingTicker";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import PFPGeneratorSection from "@/components/PFPGeneratorSection";
import LamboSection from "@/components/LamboSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ScrollingTicker />
        <AboutSection />
        <StatsSection />
        <PFPGeneratorSection />
        <LamboSection />
      </main>
    </div>
  );
};

export default Index;
