import React from 'react';
import CastCard from './CastCard';
import { siteConfig } from '../data/siteConfig';

export default function CastSection() {
  return (
    <section id="cast" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Heading */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-sm bg-[#7F1D1D] text-[#FAF6EE] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-2xs mb-2">
          ★ THE THREE RATHNALU ★
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[0.95]">
          THE MAIN CHARACTERS
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#57534E] font-sans">
          Lahari, Vedha and Keerthi. Three distinct personalities with one shared wavelength.
        </p>
      </div>

      {/* Grid of the 3 Friends */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {siteConfig.cast.map((member) => (
          <CastCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
