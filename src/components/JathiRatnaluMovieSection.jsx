import React, { useState } from 'react';
import { Sparkles, Film, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';
import ImagePlaceholder from './ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function JathiRatnaluMovieSection() {
  const [jogipetActive, setJogipetActive] = useState(false);
  const { jathiRatnalu } = siteConfig;

  const handleJogipetMode = () => {
    setJogipetActive(true);
    confetti({
      particleCount: 40,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#7F1D1D', '#E6A229', '#D9532F']
    });

    setTimeout(() => {
      setJogipetActive(false);
    }, 3500);
  };

  return (
    <section id="jathi-ratnalu" className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20">
      {/* Movie Reference Card Container */}
      <div className="relative p-6 sm:p-10 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[8px_8px_0px_0px_#1C1917]">
        {/* Top Header Tag */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-dashed border-[#1C1917]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7F1D1D] animate-ping" />
            <span className="font-mono text-xs font-bold text-[#7F1D1D] uppercase tracking-widest">
              ★ CINEMA REFERENCE ★
            </span>
          </div>
          <span className="font-typewriter text-xs text-[#78716C]">
            aagam from 2024
          </span>
        </div>

        {/* Layout: Poster & Dramatic Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Movie Poster Container */}
          <div className="md:col-span-5 relative">
            <div className="washi-tape -top-3 left-8 -rotate-3" />

            <div className="transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
              <ImagePlaceholder
                src={jathiRatnalu.image}
                placeholderKey={jathiRatnalu.placeholderKey}
                type="movie"
                title={jathiRatnalu.title}
                aspectRatio="aspect-[3/4]"
                objectPosition={jathiRatnalu.objectPosition || "center"}
                className="w-full"
              />
            </div>

            {/* Handwritten Annotation around the section */}
            <div className="mt-3 text-center">
              <span className="font-handwriting text-lg sm:text-xl text-[#D9532F] inline-block -rotate-1">
                ✍️ "{jathiRatnalu.handwrittenNote}"
              </span>
            </div>
          </div>

          {/* Dramatic Dialogue Presentation */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-black text-[#1C1917] block">
                {jathiRatnalu.teluguTitle}
              </span>
              <h3 className="font-display text-4xl sm:text-5xl text-[#7F1D1D] tracking-wider leading-[0.9] mt-0.5">
                {jathiRatnalu.title}
              </h3>
            </div>

            {/* Dramatic Dialogue Box */}
            <div className="p-4 bg-[#FAF6EE] border-l-4 border-[#7F1D1D] border-y border-r border-[#E2D7C5] rounded-r-xs shadow-xs relative">
              <Quote className="w-5 h-5 text-[#E6A229] mb-1 opacity-70" />
              <p className="font-typewriter text-sm sm:text-base text-[#1C1917] leading-relaxed italic whitespace-pre-line">
                "{jathiRatnalu.dialogue}"
              </p>
              <span className="block font-mono text-[10px] text-[#78716C] mt-2 text-right">
                Naveen polishetty
              </span>
            </div>

            {/* Enter Jogipet Mode Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleJogipetMode}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm shadow-[3px_3px_0px_0px_#1C1917] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E6A229]" />
                <span>{jathiRatnalu.buttonLabel}</span>
              </button>

              {/* Playful Animated Result */}
              {jogipetActive && (
                <div className="mt-3 p-3 bg-[#FEF08A] border border-[#FDE047] rounded-sm text-center animate-fadeIn shadow-xs">
                  <p className="font-handwriting text-2xl text-[#854D0E] font-bold">
                    "{jathiRatnalu.buttonResult}" 😂
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
