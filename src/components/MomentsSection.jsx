import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function MomentsSection() {
  const { moments } = siteConfig;

  return (
    <section id="moments" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Heading: MOMENTS OF US */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-sm bg-[#7F1D1D] text-[#FAF6EE] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-2xs mb-2">
          ★ PHOTO SCRAPBOOK ★
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[0.95]">
          MOMENTS OF US
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#57534E] font-sans">
          {moments.subtitle}
        </p>
      </div>

      {/* Scrapbook Grid of 6 Memory Polaroids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {moments.items.map((item) => (
          <div
            key={item.id}
            className={`relative p-4 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[5px_5px_0px_0px_#1C1917] transition-all duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#1C1917] flex flex-col justify-between ${item.rotation}`}
          >
            {/* Corner Washi Tape Piece */}
            <div className="washi-tape -top-2 left-6 -rotate-3" />

            {/* Top Placeholder Tag */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-dashed border-[#D8CBB6]">
              <span className="font-mono text-[10px] font-bold text-[#78716C] uppercase">
                {item.placeholderKey}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E6A229]" />
            </div>

            {/* Photo / Graphic Container */}
            <div className="relative mb-3">
              <ImagePlaceholder
                src={item.image}
                placeholderKey={item.placeholderKey}
                type="movie"
                title={item.caption}
                aspectRatio="aspect-[4/3] sm:aspect-[1/1]"
                objectPosition={item.objectPosition || "center"}
                className="w-full"
              />
            </div>

            {/* Handwritten Caption at bottom */}
            <div className="pt-2 text-center border-t border-dashed border-[#E2D7C5]">
              <p className="font-handwriting text-2xl text-[#1C1917]">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
