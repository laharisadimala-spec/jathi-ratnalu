import React, { useState } from 'react';
import { Sparkles, Film, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import ImagePlaceholder from './ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function JathiRatnaluShrine() {
  const [jogipetActive, setJogipetActive] = useState(false);
  const { jathiRatnalu } = siteConfig;

  const handleJogipetMode = () => {
    setJogipetActive(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#7F1D1D', '#E6A229', '#D9532F']
    });

    setTimeout(() => {
      setJogipetActive(false);
    }, 3000);
  };

  return (
    <section id="jathi-ratnalu" className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20">
      {/* Shrine Container */}
      <div
        className={`relative p-6 sm:p-10 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[8px_8px_0px_0px_#1C1917] transition-all duration-300 ${
          jogipetActive ? 'ring-4 ring-[#E6A229] -rotate-0.5' : ''
        }`}
      >
        {/* Top Header Tag */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-dashed border-[#1C1917]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7F1D1D] animate-ping" />
            <span className="font-mono text-xs font-bold text-[#7F1D1D] uppercase tracking-widest">
              ★ THE HOLY GRAIL SHRINE ★
            </span>
          </div>
          <span className="font-typewriter text-xs text-[#78716C]">
            EST. 2021 • ANUDEEP K.V.
          </span>
        </div>

        {/* Shrine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Large Poster Image Container */}
          <div className="md:col-span-6 relative">
            {/* Washi Tape */}
            <div className="washi-tape -top-3 left-10 -rotate-3" />

            <div className="transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
              <ImagePlaceholder
                src={jathiRatnalu.image}
                placeholderKey={jathiRatnalu.placeholderKey}
                type="shrine"
                title={jathiRatnalu.title}
                aspectRatio="aspect-[4/3] sm:aspect-[1/1]"
                className="w-full"
              />
            </div>

            {/* Corner Rubber Stamp */}
            <div className="absolute -bottom-3 -right-2 rubber-stamp text-[11px] bg-[#FAF6EE] text-[#7F1D1D] border-[#7F1D1D] shadow-sm">
              100% LIFESTYLE
            </div>
          </div>

          {/* Shrine Description & Notes */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[0.9]">
                {jathiRatnalu.title}
              </h3>

              {/* Handwritten Note 1 */}
              <p className="font-handwriting text-2xl text-[#7F1D1D] mt-2 leading-snug">
                "{jathiRatnalu.tagline}"
              </p>

              {/* Handwritten Note 2 */}
              <p className="font-typewriter text-xs text-[#78716C] mt-1 italic">
                — {jathiRatnalu.subnote}
              </p>
            </div>

            {/* Quote Pills */}
            <div className="space-y-2 pt-1">
              {jathiRatnalu.quotes.map((q, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-[#FAF6EE] border-l-3 border-[#7F1D1D] border-y border-r border-[#E2D7C5] rounded-r-xs font-mono text-xs text-[#1C1917]"
                >
                  "{q}"
                </div>
              ))}
            </div>

            {/* Jogipet Mode Trigger Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleJogipetMode}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm shadow-[3px_3px_0px_0px_#1C1917] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E6A229]" />
                <span>{jogipetActive ? "🦢 JOGIPET MODE ACTIVATED!" : jathiRatnalu.buttonLabel}</span>
              </button>

              {jogipetActive && (
                <p className="font-handwriting text-lg text-[#D9532F] mt-2 animate-fadeIn">
                  Swan theory confirmed. Logic successfully disabled! 😂
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
