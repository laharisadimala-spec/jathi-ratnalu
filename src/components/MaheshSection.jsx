import React from 'react';
import { Crown } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function MaheshSection() {
  const { mahesh } = siteConfig;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 mb-8 border-b-2 border-dashed border-[#1C1917]">
        <div>
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#E6A229]" />
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-wider">
              {mahesh.title}
            </h3>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#57534E] mt-1 font-medium">
            "{mahesh.subtitle}"
          </p>
        </div>

        <span className="rubber-stamp text-[10px] text-[#7F1D1D] border-[#7F1D1D] self-start sm:self-auto">
          DIALOGUE & SWAG
        </span>
      </div>

      {/* Grid of Curated Movies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {mahesh.movies.map((movie, idx) => (
          <div
            key={movie.id}
            className={`p-4 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[4px_4px_0px_0px_#1C1917] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
              idx % 2 === 0 ? 'sm:rotate-0.5' : 'sm:-rotate-0.5'
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-dashed border-[#D8CBB6]">
                <span className="font-mono text-[9px] font-bold text-[#7F1D1D] uppercase tracking-wider bg-[#7F1D1D]/10 px-1.5 py-0.5 rounded-xs">
                  {movie.tag}
                </span>
                <span className="font-mono text-xs font-bold text-[#1C1917]">
                  {movie.year}
                </span>
              </div>

              {/* Poster Image */}
              <div className="mb-3">
                <ImagePlaceholder
                  src={movie.image}
                  placeholderKey={`MAHESH_${movie.id.toUpperCase()}_IMAGE`}
                  type="movie"
                  title={movie.title}
                  aspectRatio="aspect-[4/5]"
                  className="w-full"
                />
              </div>

              {/* Title */}
              <h4 className="font-display text-2xl text-[#1C1917] tracking-wider leading-none">
                {movie.title}
              </h4>
            </div>

            {/* Vibe / Note */}
            <div className="mt-3 pt-2 border-t border-dashed border-[#E2D7C5]">
              <p className="font-handwriting text-base text-[#D9532F]">
                "{movie.vibe}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
