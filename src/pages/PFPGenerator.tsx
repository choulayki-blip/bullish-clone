import Header from "@/components/Header";
import ScrollingTicker from "@/components/ScrollingTicker";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import pfpHero from "@/assets/pfp-hero.jpg";
import meme1 from "@/assets/meme-1.jpg";
import character1 from "@/assets/character-1.jpg";
import character2 from "@/assets/character-2.jpg";
import bullMascot from "@/assets/bull-mascot.jpg";

const PFPGenerator = () => {
  const examplePFPs = [meme1, character1, character2, bullMascot, meme1, character1, character2, bullMascot];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <ScrollingTicker />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 min-h-screen flex items-center">
          <div className="container mx-auto">
            <h1 className="text-6xl md:text-8xl font-black text-center mb-16">
              <span className="text-primary text-glow">PFP</span> Generator
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - PFP Preview */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden border-4 border-primary neon-glow">
                  <img 
                    src={pfpHero} 
                    alt="Generated PFP" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold text-lg px-8"
                >
                  Download PFP
                </Button>
              </div>

              {/* Right side - Generator Form */}
              <div className="flex flex-col gap-6">
                <p className="text-lg md:text-xl text-muted-foreground">
                  $BULLISH isn't just another token, it's a movement built on resilience, community, and unshakable optimism.
                </p>
                
                <Textarea 
                  placeholder="Create your own BULLISH PFP that match your style"
                  className="min-h-[200px] bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground resize-none"
                />

                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold text-lg"
                >
                  Generate now!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Example PFPs Gallery */}
        <section className="relative py-20 px-4 bg-background/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {examplePFPs.map((img, idx) => (
                <div 
                  key={idx}
                  className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale animate-pulse-glow"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <img 
                    src={img} 
                    alt={`Example PFP ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PFPGenerator;
