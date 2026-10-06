import React from 'react';
import { Film, Sparkles, Quote, Star } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function MovieCard({
  title,
  year,
  tagline,
  vibe,
  quote,
  badge,
  imagePlaceholder,
  isFeatured = false,
  rotation = "rotate-0",
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm p-4 sm:p-5 shadow-[4px_4px_0px_0px_#1C1917] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1C1917] cursor-pointer ${rotation}`}
    >
      {/* Top Header: Badge & Year */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-[#D8CBB6]">
        <span className="font-mono text-[10px] font-bold text-[#7F1D1D] uppercase tracking-wider bg-[#7F1D1D]/10 px-2 py-0.5 rounded-xs border border-[#7F1D1D]/20">
          {badge || "TFI ESSENTIAL"}
        </span>
        <span className="font-mono text-xs font-bold text-[#1C1917]">
          {year}
        </span>
      </div>

      {/* Image / Artwork Placeholder */}
      <div className="relative mb-3 overflow-hidden rounded-xs">
        <ImagePlaceholder
          placeholderKey={imagePlaceholder}
          type="movie"
          title={title}
          aspectRatio="aspect-[16/10]"
          className="w-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Small corner ticket stamp */}
        <div className="absolute top-2 right-2 bg-[#1C1917]/80 text-[#FAF6EE] text-[9px] font-mono px-1.5 py-0.5 rounded backdrop-blur-xs">
          TICKET #OK
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="space-y-1.5">
        <h4 className="font-display text-2xl text-[#1C1917] tracking-wider group-hover:text-[#7F1D1D] transition-colors leading-tight">
          {title}
        </h4>

        {tagline && (
          <p className="text-xs text-[#57534E] font-sans leading-snug line-clamp-2">
            {tagline}
          </p>
        )}

        {vibe && (
          <div className="pt-1 flex items-center gap-1.5 text-[11px] font-handwriting text-[#D9532F]">
            <Sparkles className="w-3 h-3 text-[#E6A229] shrink-0" />
            <span className="truncate">{vibe}</span>
          </div>
        )}

        {/* Iconic snippet quote if available */}
        {quote && (
          <div className="mt-2.5 pt-2 border-t border-dashed border-[#E2D7C5]">
            <p className="text-[11px] font-typewriter text-[#1C1917] italic line-clamp-2">
              "{quote}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
