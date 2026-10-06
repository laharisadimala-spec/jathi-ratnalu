import React, { useState } from 'react';
import { Film, Clapperboard, Camera, User } from 'lucide-react';

/**
 * ImagePlaceholder Component
 * --------------------------------------------------------------------------
 * Renders the image from /public/images/... (or an external URL).
 * If the image file has not been added yet or fails to load, it automatically
 * renders an ultra-stylish vintage Telugu cinema card fallback rather than
 * showing a broken image!
 */
export default function ImagePlaceholder({
  src,
  placeholderKey = "IMAGE_PLACEHOLDER",
  alt = "Cinema Poster",
  className = "",
  imageClassName = "",
  objectPosition = "center",
  aspectRatio = "aspect-[4/5]",
  type = "default", // 'hero' | 'cast' | 'movie' | 'shrine'
  title = "",
  subtitle = ""
}) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If a src is provided and hasn't errored yet, try loading it
  const shouldAttemptImage = Boolean(src) && !hasError && !src.includes('PLACEHOLDER');

  if (shouldAttemptImage) {
    return (
      <div className={`relative overflow-hidden rounded-sm bg-[#F4ECE0] border-2 border-[#1C1917] ${aspectRatio} ${className}`}>
        <img
          src={src}
          alt={alt}
          style={objectPosition ? { objectPosition } : undefined}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${imageClassName} ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />

        {/* Subtle vintage warm tint over real photo */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-amber-900/5" />

        {/* Loading skeleton while image loads */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#FAF6EE] animate-pulse">
            <Film className="w-8 h-8 text-[#D8CBB6]" />
          </div>
        )}
      </div>
    );
  }

  // Fallback Graphic Poster when file is not yet added
  const getStyling = () => {
    switch (type) {
      case 'hero':
        return {
          bg: 'bg-gradient-to-br from-[#FAF6EE] via-[#F4ECE0] to-[#EBDDC9]',
          icon: <Clapperboard className="w-14 h-14 text-[#7F1D1D] mb-2 stroke-[1.5]" />,
          tag: 'HERO PHOTO SLOT',
          expectedFile: src || '/images/hero.jpg'
        };
      case 'cast':
        return {
          bg: 'bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F4ECE0]',
          icon: <User className="w-10 h-10 text-[#D9532F] mb-2 stroke-[1.5]" />,
          tag: 'CHARACTER PHOTO',
          expectedFile: src || `/images/${placeholderKey.toLowerCase()}.jpg`
        };
      case 'shrine':
        return {
          bg: 'bg-gradient-to-br from-[#FAF6EE] via-[#F5EADB] to-[#E5D5BD]',
          icon: <Film className="w-16 h-16 text-[#7F1D1D] mb-2 stroke-[1.5]" />,
          tag: 'JATHI RATNALU POSTER',
          expectedFile: src || '/images/jathi-ratnalu.jpg'
        };
      case 'movie':
      default:
        return {
          bg: 'bg-gradient-to-br from-[#FDFBF7] via-[#F5EADB] to-[#EBDDC9]',
          icon: <Film className="w-9 h-9 text-[#1C1917] mb-2 stroke-[1.5]" />,
          tag: 'CINEMA POSTER',
          expectedFile: src || '/images/poster.jpg'
        };
    }
  };

  const style = getStyling();

  return (
    <div
      className={`group relative overflow-hidden rounded-sm border-2 border-[#1C1917] ${style.bg} ${aspectRatio} flex flex-col items-center justify-center p-4 text-center select-none shadow-[3px_3px_0px_0px_#1C1917] transition-transform duration-300 ${className}`}
    >
      {/* Top & Bottom Film Sprocket Perforations */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-[#1C1917]/10 flex items-center justify-around px-2 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-1.5 bg-[#FAF6EE] rounded-[1px] border border-[#1C1917]/20" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#1C1917]/10 flex items-center justify-around px-2 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-1.5 bg-[#FAF6EE] rounded-[1px] border border-[#1C1917]/20" />
        ))}
      </div>

      {/* Decorative Film Stamp in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <Film className="w-48 h-48 rotate-12 text-[#1C1917]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[90%]">
        <div className="transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
          {style.icon}
        </div>

        {title && (
          <h4 className="font-display text-xl sm:text-2xl text-[#1C1917] tracking-wider leading-none mb-1">
            {title}
          </h4>
        )}

        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#1C1917] text-[#FAF6EE] font-mono text-[10px] uppercase font-bold tracking-widest my-1 shadow-sm">
          <span>{style.tag}</span>
        </div>

        {/* Expected File Path / Placeholder Key */}
        <div className="mt-1.5 px-2 py-0.5 bg-amber-100/90 border border-dashed border-amber-800/40 rounded text-[10px] font-mono text-amber-950 font-bold max-w-full truncate">
          <code>{placeholderKey}</code>
        </div>
      </div>

      {/* Corner Washi Tape Accent */}
      <div className="absolute -top-1 -right-6 w-16 h-4 bg-[#E8DCB8]/80 -rotate-45 border-y border-dashed border-[#B8A882] pointer-events-none" />
    </div>
  );
}
