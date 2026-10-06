import React from 'react';
import { Instagram } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const { footer, meta } = siteConfig;

  return (
    <footer className="w-full bg-[#1C1917] text-[#FAF6EE] pt-10 pb-8 px-4 sm:px-6 border-t-4 border-[#7F1D1D]">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        {/* End Credits Header */}
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="font-serif text-3xl font-black text-[#FAF6EE]">
            {footer.teluguTitle}
          </span>
          <span className="font-display text-xl text-[#E6A229] tracking-widest uppercase">
            {footer.englishTitle}
          </span>
          <span className="font-mono text-xs text-[#A8A29E] tracking-wider mt-1">
            {footer.names} • {footer.college}
          </span>
        </div>

        {/* Minimal Copy with 🧿 NO NAZAR */}
        <div className="space-y-2 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#292524] rounded-full text-xs font-mono border border-[#44403C]">
            <span>🧿 NO NAZAR</span>
            <span className="text-[#A8A29E]">• Touch wood.</span>
          </div>

          <p className="text-sm sm:text-base text-[#FAF6EE] font-medium pt-1">
            {footer.line}
          </p>

          <p className="font-mono text-xs text-[#E6A229] uppercase tracking-wider">
            🎬 {footer.note}
          </p>

          <p className="font-typewriter text-xs text-[#78716C] pt-2">
            {footer.subline}
          </p>
        </div>

        {/* Instagram Direct Link */}
        <div className="pt-2">
          <a
            href={meta.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#292524] hover:bg-[#7F1D1D] text-[#FAF6EE] font-mono text-xs font-bold uppercase rounded-sm border border-[#44403C] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>{meta.instagram.handle}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
