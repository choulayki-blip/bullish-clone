const ScrollingTicker = () => {
  const tickerText = "$BULLISH ";
  const repeatedText = tickerText.repeat(20);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-chart-green/20 via-chart-green/30 to-chart-green/20 py-4 border-t border-b border-primary/30">
      <div className="flex animate-scroll">
        <div className="flex whitespace-nowrap">
          {repeatedText.split(" ").map((text, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-primary mx-4"
            >
              {text}
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap">
          {repeatedText.split(" ").map((text, i) => (
            <span
              key={`duplicate-${i}`}
              className="text-2xl md:text-3xl font-bold text-primary mx-4"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTicker;
