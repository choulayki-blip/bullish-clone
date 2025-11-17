import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import character1 from "@/assets/character-1.jpg";
import character2 from "@/assets/character-2.jpg";

const HeroSection = () => {
  const scrollToPFP = () => {
    document.getElementById('pfp-generator')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-foreground">JUST A</span>
              <span className="block text-primary text-glow">$BULLISH</span>
              <span className="block text-foreground">DEGEN</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              $BULLISH isn't just another token. It's a movement built on resilience, community,
              and unshakable optimism.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToPFP}
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold text-lg px-8"
              >
                PFP Generator
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8"
              >
                View Chart
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8"
              >
                X Page
              </Button>
            </div>
          </div>
          
          {/* Right Content - Character Cards */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-0 right-0 w-72 h-72 animate-pulse-glow" style={{ transform: 'rotate(15deg)' }}>
              <img 
                src={character1} 
                alt="Character" 
                className="w-full h-full object-cover rounded-lg border-2 border-primary/50"
              />
            </div>
            <div className="absolute bottom-0 right-20 w-64 h-64 animate-pulse-glow" style={{ transform: 'rotate(-10deg)', animationDelay: '1s' }}>
              <img 
                src={character2} 
                alt="Character" 
                className="w-full h-full object-cover rounded-lg border-2 border-primary/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
