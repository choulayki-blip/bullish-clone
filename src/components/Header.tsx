import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wider text-primary">
          BULLISH
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-sm">
            <span className="text-muted-foreground">The word Bullish was said: </span>
            <span className="text-primary font-bold text-glow">4352 times</span>
            <span className="text-muted-foreground"> Today on X</span>
          </div>
          
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold">
            Buy $BULLISH
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
