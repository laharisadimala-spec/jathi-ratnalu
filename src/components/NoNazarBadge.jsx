import React from 'react';

export default function NoNazarBadge({ className = "" }) {
  return (
    <div className={`flex justify-center my-6 select-none ${className}`}>
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-full shadow-[3px_3px_0px_0px_#1C1917] transform -rotate-1 hover:rotate-0 transition-transform">
        <span className="text-2xl" role="img" aria-label="evil eye">
          🧿
        </span>
        <div className="flex flex-col text-left">
          <span className="font-display text-xl sm:text-2xl text-[#1C1917] tracking-wider leading-none">
            NO NAZAR
          </span>
          <span className="font-handwriting text-base text-[#7F1D1D] leading-none mt-0.5">
            "Touch wood." 🪵
          </span>
        </div>
      </div>
    </div>
  );
}
