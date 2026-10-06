import React from 'react';
import { Pin, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function OurRulesSection() {
  const { unofficialRules } = siteConfig;

  return (
    <section id="rules" className="py-12 sm:py-20 px-4 sm:px-6 max-w-2xl mx-auto scroll-mt-20">
      {/* Pinned Note Container */}
      <div className="relative p-6 sm:p-10 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[6px_6px_0px_0px_#1C1917] transform -rotate-0.5 hover:rotate-0 transition-transform duration-300">
        {/* Top Pushpin Icon */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#7F1D1D] border-2 border-[#1C1917] flex items-center justify-center shadow-md">
          <div className="w-2 h-2 rounded-full bg-[#FAF6EE]" />
        </div>

        {/* Notice Header */}
        <div className="text-center pb-4 mb-4 border-b-2 border-dashed border-[#1C1917] pt-2">
          <span className="font-mono text-[10px] font-bold text-[#7F1D1D] uppercase tracking-widest block mb-1">
            ★ THE CONSTITUTION OF THREE RATHNALU ★
          </span>
          <h3 className="font-display text-4xl sm:text-5xl text-[#1C1917] tracking-wider">
            OUR UNOFFICIAL RULES
          </h3>
          <p className="font-typewriter text-xs text-[#78716C] mt-0.5">
            Written by Lahari, Vedha & Keerthi. Non-negotiable.
          </p>
        </div>

        {/* Rules List */}
        <ol className="space-y-3 font-handwriting text-xl sm:text-2xl text-[#1C1917] pl-2 sm:pl-4">
          {unofficialRules.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="font-mono text-sm font-bold text-[#7F1D1D] mt-1 shrink-0">
                {idx + 1}.
              </span>
              <span className="leading-snug">{rule}</span>
            </li>
          ))}
        </ol>

        {/* Rubber Stamp at the Bottom */}
        <div className="mt-8 pt-4 border-t border-dashed border-[#D8CBB6] flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#78716C]">
            TRIO RULEBOOK #08
          </span>
          <span className="rubber-stamp text-[9px] text-[#7F1D1D] border-[#7F1D1D]">
            FRIENDSHIP FOREVER
          </span>
        </div>
      </div>
    </section>
  );
}
