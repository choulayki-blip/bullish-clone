import character1 from "@/assets/character-1.jpg";
import pumpfun from "@/assets/pumpfun.jpg";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AboutSection = () => {
  const contractAddress = "C2omVhcvt3DDY77S2KZzawFJQeETZofgZ4eNWWkXpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute top-10 -right-10 w-32 h-32">
              <img 
                src={pumpfun} 
                alt="Pump.fun" 
                className="w-full h-full object-contain opacity-80"
              />
            </div>
            <img 
              src={character1} 
              alt="BULLISH Character" 
              className="w-full max-w-md mx-auto rounded-lg border-2 border-primary/50 animate-pulse-glow"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              What is <span className="text-primary text-glow">BULLISH</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every bullish degen deserves a Lambo, keys in hand, engine roaring under the neon lights of success. 
              We're not stopping, until every last one of us pulls up in style. Job ain't done 'til the garage is full. 
              <span className="text-foreground font-bold"> Do you understand?</span>
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Contract Address</h3>
              <div className="flex items-center gap-3">
                <code className="flex-1 bg-background/50 border border-primary/30 rounded px-4 py-3 text-sm text-primary font-mono overflow-x-auto">
                  {contractAddress}
                </code>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary/10 shrink-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
