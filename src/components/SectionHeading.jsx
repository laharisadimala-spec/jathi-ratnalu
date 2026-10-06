import React from 'react';

export default function SectionHeading({
  eyebrow = "",
  title = "",
  subtitle = "",
  annotation = "",
  align = "center",
  stamp = "",
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-8 sm:mb-12 ${
        isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {/* Eyebrow Label with optional Stamp */}
      <div
        className={`flex items-center gap-2 mb-2 flex-wrap ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-sm bg-[#7F1D1D] text-[#FAF6EE] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm">
            ★ {eyebrow} ★
          </span>
        )}

        {stamp && (
          <span className="rubber-stamp text-[10px] text-[#D9532F] border-[#D9532F]">
            {stamp}
          </span>
        )}
      </div>

      {/* Main Title in Bold Bebas Neue / Serif */}
      <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[0.95] mt-1">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed font-sans max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Playful Handwritten Annotation */}
      {annotation && (
        <div
          className={`mt-2 font-handwriting text-lg sm:text-xl text-[#7F1D1D] flex items-center gap-1.5 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span>✍️</span>
          <span>{annotation}</span>
        </div>
      )}
    </div>
  );
}
