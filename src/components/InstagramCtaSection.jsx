import React from 'react';
import { Instagram, ArrowRight, Ticket } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function InstagramCtaSection() {
  const { instagram } = siteConfig.meta;

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Giant Cinema Ticket Stub Container */}
      <div className="relative bg-[#FFFDF9] border-3 border-[#1C1917] rounded-sm p-6 sm:p-12 shadow-[10px_10px_0px_0px_#1C1917] text-center overflow-hidden">
        {/* Ticket Perforations on Left & Right */}
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF6EE] border-2 border-[#1C1917] hidden sm:block" />
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF6EE] border-2 border-[#1C1917] hidden sm:block" />

        {/* Top Ticket Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 sm:mb-8 border-b-2 border-dashed border-[#D8CBB6] font-mono text-xs">
          <div className="flex items-center gap-1.5 text-[#7F1D1D] font-bold">
            <Ticket className="w-4 h-4" />
            <span>FINAL DESTINATION • ALL ACCESS PASS</span>
          </div>
          <span className="rubber-stamp text-[10px] text-[#2D5A3D] border-[#2D5A3D]">
            UNLIMITED ADMISSION
          </span>
          <span className="text-[#78716C] font-mono">
            LAHARI • VEDHA • KEERTHI
          </span>
        </div>

        {/* Big Impact Copy */}
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[1.05]">
            chalu iga<br />
            insta scroll chesuko inka
            <span className="text-[#7F1D1D] block mt-4">
              inka em undi poyi reels chudandi
            </span>
          </h3>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#57534E] pt-2">
            "You've seen enough. Now find us where the actual nonsense happens."
          </p>

          {/* High-Impact CTA Button */}
          <div className="pt-4 flex justify-center">
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-base sm:text-lg font-bold uppercase tracking-wider rounded-sm shadow-[5px_5px_0px_0px_#1C1917] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0 group"
            >
              <Instagram className="w-6 h-6 text-[#FAF6EE] group-hover:rotate-12 transition-transform" />
              <span>{instagram.buttonLabel}</span>
              <ArrowRight className="w-5 h-5 text-[#E6A229] group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          <p className="text-xs font-mono text-[#78716C] pt-2">
            Follow <span className="font-bold text-[#1C1917]">{instagram.handle}</span> on Instagram
          </p>
        </div>

        {/* Bottom Ticket Barcode */}
        <div className="mt-8 sm:mt-12 pt-4 border-t-2 border-dashed border-[#D8CBB6] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#78716C]">
          <div className="font-mono tracking-widest text-sm">
            ||||| | |||| || |||||| | ||||| | ||
          </div>
          <div>
            <span>STANLEY • THREE RATHNALU</span>
          </div>
          <div className="text-[#7F1D1D] font-bold">
            VALID FOR: ZERO LOGIC
          </div>
        </div>
      </div>
    </section>
  );
}
