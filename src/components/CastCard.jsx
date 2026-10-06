import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function CastCard({ member }) {
  return (
    <div
      className={`group relative bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm p-4 sm:p-5 shadow-[5px_5px_0px_0px_#1C1917] transition-all duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#1C1917] flex flex-col justify-between ${member.rotation}`}
    >
      <div>
        {/* Top Header Bar: Rathnam Number */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-[#D8CBB6]">
          <span className="font-mono text-xs font-bold text-[#7F1D1D] uppercase tracking-wider bg-[#7F1D1D]/10 px-2 py-0.5 rounded-xs border border-[#7F1D1D]/20">
            ★ {member.rathnamNo} ★
          </span>
          <span className="font-mono text-[10px] text-[#78716C] uppercase">
            CHARACTER
          </span>
        </div>

        {/* Character Photo Container */}
        <div className="relative mb-3">
          <ImagePlaceholder
            src={member.image}
            placeholderKey={member.placeholderKey}
            type="cast"
            title={member.name}
            aspectRatio="aspect-[3/4]"
            objectPosition={member.objectPosition || "center"}
            className="w-full"
          />
        </div>

        {/* Name — Clean, no fake job titles */}
        <div className="text-center pb-2">
          <h3 className="font-display text-3xl sm:text-4xl text-[#1C1917] tracking-wider leading-none group-hover:text-[#7F1D1D] transition-colors">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Description / Personality Quotes directly under name */}
      <div className="mt-2 pt-3 border-t border-dashed border-[#E2D7C5] bg-[#FAF6EE] -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3.5 rounded-b-sm">
        <p className="font-typewriter text-xs sm:text-[13px] text-[#1C1917] leading-relaxed whitespace-pre-line italic">
          "{member.quote}"
        </p>
      </div>
    </div>
  );
}
