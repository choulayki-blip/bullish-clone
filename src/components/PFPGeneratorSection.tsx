import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import meme1 from "@/assets/meme-1.jpg";
import character1 from "@/assets/character-1.jpg";
import character2 from "@/assets/character-2.jpg";
import bullMascot from "@/assets/bull-mascot.jpg";

const PFPGeneratorSection = () => {
  const navigate = useNavigate();
  const memeImages = [meme1, character1, character2, bullMascot, meme1, character1, character2];

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-12">
          <span className="text-primary text-glow">BULLISH</span> PFP Generator
        </h2>

        <div className="flex justify-center mb-12">
          <Button 
            size="lg"
            onClick={() => navigate('/pfp-generator')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold text-xl px-12 py-6"
          >
            Generate PFP!
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {memeImages.map((img, idx) => (
            <div 
              key={idx}
              className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale animate-pulse-glow"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <img src={img} alt={`PFP ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PFPGeneratorSection;
