import { Button } from "@/components/ui/button";
import lambo from "@/assets/lambo.jpg";

const LamboSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-foreground">Pre Order your</span>
              <br />
              <span className="text-primary text-glow">Lambo</span>
            </h2>
            
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold text-xl px-12 py-6"
            >
              Pre Order Now!
            </Button>
          </div>

          {/* Right - Lambo Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
            <img 
              src={lambo} 
              alt="Lamborghini" 
              className="relative w-full rounded-lg border-2 border-primary/50 animate-pulse-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LamboSection;
