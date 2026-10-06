import React from 'react';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import ImagePlaceholder from './ImagePlaceholder';

export default function HeroSection() {
  const { hero, meta } = siteConfig;

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Small subtle hashtag & official notice tag */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#7F1D1D] text-[#FAF6EE] font-mono text-xs font-bold uppercase tracking-widest shadow-2xs">
          ★ {meta.hashtag} ★
        </span>
        <span className="rubber-stamp text-[10px] text-[#2D5A3D] border-[#2D5A3D]">
          STANLEY B.TECH TRIO
        </span>
      </div>

      {/* Main Headline: జాతి రత్నాలు • THE THREE RATHNALU */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
        {/* Telugu Movie Poster Headline */}
        <h1 className="font-serif text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-black text-[#1C1917] tracking-tight leading-[0.95] drop-shadow-xs">
          {hero.teluguTitle}
        </h1>

        {/* English Title Treatment */}
        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#7F1D1D] tracking-widest uppercase leading-none mt-1">
          {hero.englishTitle}
        </h2>

        {/* Subtitle: B.Tech. Lazy. Fun. We just need each other. */}
        <p className="font-handwriting text-2xl sm:text-3xl text-[#57534E] pt-2">
          "B.Tech. Lazy. Fun. We just need each other."
        </p>
      </div>

      {/* Primary Visual: Group Photo with Handwritten Annotations */}
      <div className="relative max-w-xl mx-auto my-4 sm:my-8">
        {/* Handwritten Poster Annotations */}
        <div className="absolute -top-4 -left-3 sm:-left-8 z-20 bg-[#FEF08A] text-[#854D0E] border border-[#FDE047] px-2.5 py-1 rounded-sm shadow-md font-handwriting text-lg sm:text-xl -rotate-6 pointer-events-none">
          B.Tech survivors 🎓
        </div>

        <div className="absolute -top-3 -right-2 sm:-right-8 z-20 bg-[#FAF6EE] text-[#7F1D1D] border-2 border-dashed border-[#7F1D1D] px-2.5 py-0.5 rounded-sm shadow-md font-mono text-xs font-bold uppercase tracking-wider rotate-3 pointer-events-none">
          LAZY BUT COMMITTED
        </div>

        <div className="absolute top-8 -right-3 sm:-right-7 z-20 font-handwriting text-sm text-[#78716C] -rotate-2 pointer-events-none">
          Professional procrastinators ⏳
        </div>

        <div className="absolute -bottom-4 left-4 sm:left-8 z-20 bg-[#FAF6EE] text-[#1C1917] border border-[#1C1917] px-3 py-1 rounded-sm shadow-md font-handwriting text-base sm:text-lg -rotate-2 pointer-events-none">
          "Plans optional • Friendship mandatory" 💛
        </div>

        {/* Polaroid / Friendship Movie Poster Frame */}
        <div className="p-3 sm:p-4 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[8px_8px_0px_0px_#1C1917]">
          {/* Top Ticket Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-dashed border-[#D8CBB6] font-mono text-[10px] text-[#78716C]">
            <span className="font-bold text-[#7F1D1D]">STANLEY COLLEGE OF ENGINEERING</span>
            <span className="font-bold text-[#1C1917]">LAHARI • VEDHA • KEERTHI</span>
          </div>

          {/* The Hero Photo Placeholder */}
          <div className="relative">
            <ImagePlaceholder
              src={siteConfig.images.hero}
              placeholderKey={siteConfig.placeholders.HERO_IMAGE_PLACEHOLDER}
              type="hero"
              title="LAHARI • VEDHA • KEERTHI"
              subtitle="The Three Rathnalu"
              aspectRatio="aspect-[16/10] sm:aspect-[16/10]"
              objectPosition="center 40%"
              className="w-full"
            />
          </div>

          {/* Card Footer */}
          <div className="mt-3 pt-2 border-t border-dashed border-[#D8CBB6] flex items-center justify-between">
            <span className="font-display text-lg sm:text-xl text-[#1C1917] tracking-wider">
              జాతి రత్నాలు • THE THREE RATHNALU
            </span>
            <span className="font-mono text-xs text-[#7F1D1D] font-bold">
              {meta.hashtag}
            </span>
          </div>
        </div>
      </div>

      {/* Prominent Instagram CTA Button */}
      <div className="mt-8 flex flex-col items-center justify-center space-y-3">
        <a
          href={meta.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-sm sm:text-base font-bold uppercase tracking-wider rounded-sm shadow-[4px_4px_0px_0px_#1C1917] transition-all hover:-translate-y-0.5 active:translate-y-0 group"
        >
          <Instagram className="w-5 h-5 text-[#FAF6EE] group-hover:rotate-12 transition-transform" />
          <span>{meta.instagram.buttonLabel}</span>
          <ArrowRight className="w-4 h-4 text-[#E6A229] group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-xs font-mono text-[#78716C] text-center">
          {meta.instagram.subtext}
        </p>
      </div>

      {/* Minimal Personality Tags */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {hero.tags.map((tag, idx) => (
          <div
            key={idx}
            className="px-3 py-1 bg-[#FFFDF9] border border-[#D8CBB6] rounded-sm font-mono text-xs text-[#44403C] shadow-2xs"
          >
            ★ {tag}
          </div>
        ))}
      </div>
    </section>
  );
}
