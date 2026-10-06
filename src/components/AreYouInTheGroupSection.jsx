import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Key } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';

export default function AreYouInTheGroupSection() {
  const { groupCheck } = siteConfig;
  const [clicked, setClicked] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleClick = () => {
    setClicked(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#7F1D1D', '#E6A229', '#D9532F']
    });

    setMessageIndex((prev) => (prev + 1) % groupCheck.results.length);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <div className="p-6 sm:p-10 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[6px_6px_0px_0px_#1C1917]">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E6A229]/20 text-[#854D0E] font-mono text-xs font-bold uppercase rounded-sm border border-[#E6A229]/40 mb-3">
          <Key className="w-3.5 h-3.5 text-[#D9532F]" />
          <span>TRIO ACCESS VERIFICATION</span>
        </div>

        {/* Heading & Subtext */}
        <h3 className="font-display text-4xl sm:text-5xl text-[#1C1917] tracking-wider">
          {groupCheck.heading}
        </h3>

        <p className="font-handwriting text-2xl text-[#57534E] mt-1">
          "{groupCheck.subtext}"
        </p>

        {/* Interactive Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm shadow-[3px_3px_0px_0px_#1C1917] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#E6A229]" />
            <span>{groupCheck.buttonLabel}</span>
          </button>
        </div>

        {/* Revealed Funny Message */}
        {clicked && (
          <div className="mt-5 p-4 bg-[#FAF6EE] border-2 border-[#1C1917] rounded-sm animate-fadeIn shadow-inner">
            <p className="font-display text-2xl sm:text-3xl text-[#7F1D1D] tracking-wide">
              {groupCheck.results[messageIndex]}
            </p>
            <span className="block font-typewriter text-xs text-[#78716C] mt-1">
              *Verified by Lahari, Vedha & Keerthi
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
