import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ThingsWeSaySection() {
  const { thingsWeSay } = siteConfig;

  return (
    <section id="dialogues" className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-sm bg-[#7F1D1D] text-[#FAF6EE] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-2xs mb-2">
          ★ CHAT ARCHIVES ★
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[0.95]">
          THINGS WE ACTUALLY SAY
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#57534E] font-sans">
          Actual conversation snippets from our group chat before making questionable life choices.
        </p>
      </div>

      {/* Grid of Chat / Dialogue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {thingsWeSay.map((item, idx) => (
          <div
            key={item.id}
            className={`p-4 sm:p-5 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[4px_4px_0px_0px_#1C1917] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
              idx % 2 === 0 ? 'sm:-rotate-0.5' : 'sm:rotate-0.5'
            }`}
          >
            {/* Top Micro Label */}
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-[#D8CBB6]">
              <span className="font-mono text-[9px] font-bold text-[#78716C] uppercase tracking-wider">
                CHAT #{idx + 1}
              </span>
              <span className="font-handwriting text-base text-[#D9532F]">
                {item.annotation}
              </span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-2 py-1">
              {item.chat.map((msg, i) => {
                const isFirst = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`flex flex-col ${isFirst ? 'items-start' : 'items-end'}`}
                  >
                    <span className="font-mono text-[9px] text-[#78716C] px-1">
                      {msg.sender}
                    </span>
                    <div
                      className={`px-3 py-1.5 rounded-sm border max-w-[85%] font-display text-lg tracking-wide ${
                        isFirst
                          ? 'bg-[#FAF6EE] text-[#1C1917] border-[#D8CBB6]'
                          : 'bg-[#7F1D1D] text-[#FAF6EE] border-[#1C1917]'
                      }`}
                    >
                      "{msg.text}"
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-3 pt-2 border-t border-dashed border-[#E2D7C5] flex items-center justify-between font-mono text-[9px] text-[#78716C]">
              <span>Verified 2:14 AM</span>
              <span className="text-[#2D5A3D]">DELIVERED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
