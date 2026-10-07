import React, { useState } from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';

export default function DidYouFollowSection() {
  const { didYouFollow } = siteConfig;
  const [clicked, setClicked] = useState(false);

  const handleFollowClick = () => {
    setClicked(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7F1D1D', '#E6A229', '#D9532F']
    });
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <div className="p-6 sm:p-10 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[6px_6px_0px_0px_#1C1917]">
        {/* Heading & Subtext */}
        <h3 className="font-display text-4xl sm:text-5xl text-[#1C1917] tracking-wider">
          {didYouFollow.heading}
        </h3>

        <p className="font-handwriting text-2xl sm:text-3xl text-[#57534E] mt-1">
          "{didYouFollow.subtext}"
        </p>

        {/* Action Button: YES, I DID ↗ */}
        <div className="pt-6">
          <a
            href={didYouFollow.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFollowClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-sm sm:text-base font-bold uppercase tracking-wider rounded-sm shadow-[4px_4px_0px_0px_#1C1917] transition-all hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <Instagram className="w-5 h-5 text-[#FAF6EE] group-hover:rotate-12 transition-transform" />
            <span>{didYouFollow.buttonLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#E6A229] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Playful Confirmation Message */}
        {clicked && (
          <div className="mt-5 p-3.5 bg-[#FAF6EE] border-2 border-[#1C1917] rounded-sm animate-fadeIn shadow-inner">
            <p className="font-display text-2xl text-[#7F1D1D] tracking-wide">
              {didYouFollow.messageSuccess}
            </p>
            <span className="block font-typewriter text-xs text-[#78716C] mt-0.5">
              *You're officially one of us now.
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
