import React from 'react';

export default function FilmStrip({ reverse = false, className = "" }) {
  const items = [
    "జాతి రత్నాలు • JATHI RATNALU",
    "LAHARI • VEDHA • KEERTHI",
    "THE THREE RATHNALU",
    "STANLEY COLLEGE OF ENGINEERING",
    "B.TECH SURVIVORS • PROFESSIONAL PROCRASTINATORS",
    "WE JUST NEED EACH OTHER",
    "#TheThreeRathnalu",
    "LIFE ANEDI ZINDAGI AIPOYINDI",
  ];

  const duplicated = [...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden bg-[#1C1917] text-[#FAF6EE] py-2.5 border-y-2 border-[#1C1917] shadow-xs select-none ${className}`}>
      {/* Top Sprocket Holes */}
      <div className="flex justify-between px-2 mb-1 opacity-70">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2.5 h-1.5 bg-[#FAF6EE] rounded-[1px]" />
        ))}
      </div>

      {/* Marquee Content */}
      <div className="relative flex overflow-x-hidden whitespace-nowrap">
        <div
          className={`flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest ${
            reverse ? 'animate-reel' : 'animate-reel'
          }`}
          style={{
            animationDirection: reverse ? 'reverse' : 'normal',
            animationDuration: '35s'
          }}
        >
          {duplicated.map((item, index) => (
            <div key={index} className="flex items-center gap-6 shrink-0">
              <span className="hover:text-[#E6A229] transition-colors">{item}</span>
              <span className="text-[#D9532F] text-xs">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sprocket Holes */}
      <div className="flex justify-between px-2 mt-1 opacity-70">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2.5 h-1.5 bg-[#FAF6EE] rounded-[1px]" />
        ))}
      </div>
    </div>
  );
}
