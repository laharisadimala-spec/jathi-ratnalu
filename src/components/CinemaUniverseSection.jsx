import React, { useState } from 'react';
import { Film, Sparkles, Heart, Crown, Flame, Award, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from './SectionHeading';
import MovieCard from './MovieCard';
import ImagePlaceholder from './ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function CinemaUniverseSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'prabhas' | 'mahesh'
  const [jogipetClicked, setJogipetClicked] = useState(false);

  const { jathiRatnalu, friendshipPicks, prabhas, mahesh } = siteConfig.cinemaUniverse;

  const handleJogipetCelebration = () => {
    setJogipetClicked(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#7F1D1D', '#E6A229', '#D9532F']
    });
    setTimeout(() => setJogipetClicked(false), 2500);
  };

  return (
    <section id="cinema" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        eyebrow="TFI DEPARTMENT"
        stamp="HALL OF FAME"
        title="OUR CINEMA UNIVERSE"
        subtitle="Not an encyclopedia. A collection of movies that define our WhatsApp arguments, weekend plans, and moral compass."
        annotation="Watched in single screens, multiplexes & 2 AM repeat telecasts"
      />

      {/* ===================================================================
          1. CENTERPIECE: JATHI RATNALU (THE BIGGEST CARD ON THE WEBSITE)
         =================================================================== */}
      <div className="mb-14 sm:mb-20">
        <div className="relative p-6 sm:p-8 lg:p-10 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[8px_8px_0px_0px_#1C1917] overflow-hidden">
          {/* Top Marquee Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-dashed border-[#1C1917]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#7F1D1D] animate-ping" />
              <span className="font-mono text-xs font-bold text-[#7F1D1D] uppercase tracking-widest">
                ★ {jathiRatnalu.badge} ★
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="bg-[#E6A229]/20 text-[#854D0E] font-bold px-2.5 py-0.5 rounded border border-[#E6A229]/40">
                DIR: {jathiRatnalu.director}
              </span>
              <span className="font-bold text-[#1C1917]">
                YEAR {jathiRatnalu.year}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
                <ImagePlaceholder
                  placeholderKey={jathiRatnalu.imagePlaceholder}
                  type="movie"
                  title="JATHI RATNALU"
                  subtitle="Jogipet Srikanth, Sekhar & Ravi"
                  aspectRatio="aspect-[4/3] sm:aspect-[1/1]"
                  className="w-full"
                />

                {/* Corner Washi Tape */}
                <div className="washi-tape -top-2 left-8 -rotate-6" />

                {/* Rubber Stamp */}
                <div className="absolute bottom-3 right-3 rubber-stamp text-xs bg-[#FAF6EE] text-[#7F1D1D] border-[#7F1D1D] shadow-sm">
                  100% LIFESTYLE
                </div>
              </div>
            </div>

            {/* Description & Quotes Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div>
                <span className="font-handwriting text-2xl text-[#D9532F]">
                  "{jathiRatnalu.tagline}"
                </span>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[0.92] mt-1">
                  {jathiRatnalu.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#78716C] uppercase font-bold tracking-wider mt-1">
                  {jathiRatnalu.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-sans">
                {jathiRatnalu.description}
              </p>

              {/* Quote Banner */}
              <div className="p-3.5 bg-[#FAF6EE] border-l-4 border-[#7F1D1D] border-y border-r border-[#E2D7C5] rounded-r-sm">
                <p className="font-typewriter text-xs sm:text-sm text-[#1C1917] italic">
                  "{jathiRatnalu.highlightQuote}"
                </p>
                <span className="block text-[10px] font-mono text-[#78716C] mt-1">
                  — The Jogipet Supreme Court Manifesto
                </span>
              </div>

              {/* Badges / Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {jathiRatnalu.badges.map((b, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#FFFDF9] border border-[#1C1917] rounded-sm font-mono text-[10px] sm:text-xs font-bold text-[#1C1917] shadow-[1px_1px_0px_0px_#1C1917]"
                  >
                    ★ {b}
                  </span>
                ))}
              </div>

              {/* Interactive Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleJogipetCelebration}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-xs font-bold uppercase tracking-wider rounded-sm shadow-[3px_3px_0px_0px_#1C1917] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E6A229]" />
                  <span>{jogipetClicked ? "🦢 JOGIPET SUPREME VIBES!" : "TRIGGER JOGIPET ELEVATION"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. FRIENDSHIP & YOUTH CHAOS: ENE + MAD
         =================================================================== */}
      <div className="mb-14 sm:mb-20">
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#D8CBB6]">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍻</span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#1C1917] tracking-wider">
              FRIENDSHIP & CHAOS ARCHIVES
            </h3>
          </div>
          <span className="font-typewriter text-xs text-[#78716C] hidden sm:inline">
            Required Viewing For Mana Batch
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {friendshipPicks.map((film, idx) => (
            <div
              key={film.id}
              className={`p-5 sm:p-6 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[5px_5px_0px_0px_#1C1917] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                idx === 0 ? 'sm:-rotate-0.5' : 'sm:rotate-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-dashed border-[#D8CBB6]">
                  <span className="font-mono text-[10px] font-bold text-[#7F1D1D] uppercase tracking-wider bg-[#7F1D1D]/10 px-2 py-0.5 rounded-xs">
                    {film.badge}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#1C1917]">
                    {film.year}
                  </span>
                </div>

                <div className="mb-4">
                  <ImagePlaceholder
                    placeholderKey={film.imagePlaceholder}
                    type="movie"
                    title={film.title}
                    aspectRatio="aspect-[16/9]"
                    className="w-full"
                  />
                </div>

                <h4 className="font-display text-3xl text-[#1C1917] tracking-wider leading-none">
                  {film.title}
                </h4>

                <p className="font-handwriting text-lg text-[#D9532F] mt-1">
                  "{film.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans mt-2.5">
                  {film.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-dashed border-[#D8CBB6] bg-[#FAF6EE] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-sm">
                <span className="block font-mono text-[9px] uppercase font-bold text-[#78716C]">
                  Iconic Batch Dialogue:
                </span>
                <p className="font-typewriter text-xs text-[#1C1917] italic mt-0.5">
                  "{film.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================================================================
          3. PRABHAS & MAHESH BABU SECTIONS (CURATED PICKS)
         =================================================================== */}
      <div className="space-y-14 sm:space-y-20">
        {/* PRABHAS */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 mb-6 border-b border-[#D8CBB6]">
            <div>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#D9532F]" />
                <h3 className="font-display text-2xl sm:text-3xl text-[#1C1917] tracking-wider">
                  {prabhas.categoryTitle}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#78716C] mt-0.5">
                {prabhas.categorySubtitle}
              </p>
            </div>
            <span className="rubber-stamp text-[9px] text-[#D9532F] border-[#D9532F] self-start sm:self-auto">
              CUT-OUT ELEVATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {prabhas.movies.map((movie, idx) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                tagline={movie.tagline}
                vibe={movie.vibe}
                quote={movie.quote}
                badge={movie.badge}
                imagePlaceholder={movie.imagePlaceholder}
                rotation={idx % 2 === 0 ? 'sm:-rotate-0.5' : 'sm:rotate-0.5'}
              />
            ))}
          </div>
        </div>

        {/* MAHESH BABU */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 mb-6 border-b border-[#D8CBB6]">
            <div>
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#E6A229]" />
                <h3 className="font-display text-2xl sm:text-3xl text-[#1C1917] tracking-wider">
                  {mahesh.categoryTitle}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#78716C] mt-0.5">
                {mahesh.categorySubtitle}
              </p>
            </div>
            <span className="rubber-stamp text-[9px] text-[#7F1D1D] border-[#7F1D1D] self-start sm:self-auto">
              SUPERSTAR DIALOGUES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mahesh.movies.map((movie, idx) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                tagline={movie.tagline}
                vibe={movie.vibe}
                quote={movie.quote}
                badge={movie.badge}
                imagePlaceholder={movie.imagePlaceholder}
                rotation={idx % 2 === 0 ? 'sm:rotate-0.5' : 'sm:-rotate-0.5'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
