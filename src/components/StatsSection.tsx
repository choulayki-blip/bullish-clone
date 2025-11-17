import statsDashboard from "@/assets/stats-dashboard.jpg";
import meme1 from "@/assets/meme-1.jpg";
import character1 from "@/assets/character-1.jpg";
import bullMascot from "@/assets/bull-mascot.jpg";

const StatsSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale">
            <img src={statsDashboard} alt="Stats" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale">
            <img src={meme1} alt="Meme" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale">
            <img src={character1} alt="Character" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale">
            <img src={meme1} alt="Meme" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale">
            <img src={bullMascot} alt="Bull" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground">
            The word <span className="text-primary font-bold">Bullish</span> was said:
          </p>
          <div className="text-6xl md:text-8xl font-black text-primary text-glow">
            4352
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground">
            <span className="text-foreground font-bold">times</span> Today on <span className="text-primary font-bold">X</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
