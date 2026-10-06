import React, { useState } from 'react';
import { Film, Shuffle, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';

export default function MovieNightSection() {
  const { movieNightPicks } = siteConfig;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasDecided, setHasDecided] = useState(false);

  const handleDecideFate = () => {
    setIsSpinning(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#7F1D1D', '#D9532F', '#E6A229']
    });

    // Quick playful roulette shuffle
    let counter = 0;
    const interval = setInterval(() => {
      setSelectedIndex(Math.floor(Math.random() * movieNightPicks.length));
      counter++;
      if (counter > 6) {
        clearInterval(interval);
        setIsSpinning(false);
        setHasDecided(true);
      }
    }, 80);
  };

  const currentPick = movieNightPicks[selectedIndex];

  return (
    <section id="movie-night" className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center scroll-mt-20">
      {/* Container */}
      <div className="p-6 sm:p-10 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[6px_6px_0px_0px_#1C1917]">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E6A229]/20 text-[#854D0E] font-mono text-xs font-bold uppercase rounded-sm border border-[#E6A229]/40 mb-3">
          <Film className="w-3.5 h-3.5 text-[#D9532F]" />
          <span>BATCH FATE DECIDER</span>
        </div>

        <h3 className="font-display text-4xl sm:text-5xl text-[#1C1917] tracking-wider">
          WHAT ARE WE WATCHING?
        </h3>

        <p className="text-xs sm:text-sm text-[#78716C] font-mono mt-1">
          Stop arguing in the group chat. Click the button and accept your fate.
        </p>

        {/* The Resulting Movie Card */}
        <div className="my-6 p-5 sm:p-6 bg-[#FAF6EE] border-2 border-[#1C1917] rounded-sm text-center space-y-2 shadow-inner">
          <span className="font-mono text-xs font-bold text-[#7F1D1D] uppercase tracking-wider bg-[#7F1D1D]/10 px-2.5 py-0.5 rounded-xs border border-[#7F1D1D]/20">
            ★ {currentPick.badge} ★
          </span>

          <h4 className="font-display text-3xl sm:text-4xl text-[#1C1917] tracking-wider pt-1">
            {currentPick.title}
          </h4>

          <p className="font-handwriting text-2xl text-[#7F1D1D] leading-snug">
            "{currentPick.verdict}"
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#57534E] pt-1">
            👉 {currentPick.vibe}
          </p>
        </div>

        {/* The Action Button */}
        <button
          type="button"
          onClick={handleDecideFate}
          disabled={isSpinning}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm shadow-[3px_3px_0px_0px_#1C1917] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <Shuffle className={`w-4 h-4 text-[#E6A229] ${isSpinning ? 'animate-spin' : ''}`} />
          <span>{isSpinning ? "CONSULTING THE BATCH..." : "DECIDE OUR FATE"}</span>
        </button>

        {hasDecided && (
          <p className="mt-3 font-typewriter text-xs text-[#78716C]">
            *Decision is legally binding. No re-rolls permitted.
          </p>
        )}
      </div>
    </section>
  );
}
