import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function FriendshipPicks() {
  const { friendshipMovies } = siteConfig;

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Mini Section Tag */}
      <div className="text-center mb-8">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#78716C]">
          ★ THE BEDROOM WALL POSTERS ★
        </span>
      </div>

      {/* Grid of ENE and MAD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {friendshipMovies.map((film) => (
          <div
            key={film.id}
            className={`p-5 sm:p-6 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[5px_5px_0px_0px_#1C1917] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${film.rotation}`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-[#D8CBB6]">
                <span className="font-mono text-[10px] font-bold text-[#7F1D1D] uppercase tracking-wider bg-[#7F1D1D]/10 px-2 py-0.5 rounded-xs">
                  {film.tag}
                </span>
                <span className="font-mono text-xs font-bold text-[#1C1917]">
                  {film.year}
                </span>
              </div>

              {/* Poster Image */}
              <div className="mb-4">
                <ImagePlaceholder
                  src={film.image}
                  placeholderKey={film.placeholderKey}
                  type="movie"
                  title={film.title}
                  aspectRatio="aspect-[16/10]"
                  className="w-full"
                />
              </div>

              {/* Title & Short Personality-Driven Line */}
              <h4 className="font-display text-3xl sm:text-4xl text-[#1C1917] tracking-wider leading-none">
                {film.title}
              </h4>

              <p className="font-handwriting text-2xl text-[#D9532F] mt-2">
                "{film.line}"
              </p>
            </div>

            {/* Bottom Quote Snippet */}
            <div className="mt-4 pt-2.5 border-t border-dashed border-[#D8CBB6] font-typewriter text-xs text-[#57534E] italic">
              "{film.quote}"
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
