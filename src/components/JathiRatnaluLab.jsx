import React, { useState } from 'react';
import { FlaskConical, Sparkles, RefreshCw, Stamp, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../data/siteConfig';

export default function JathiRatnaluLab() {
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleNextMood = () => {
    setIsSpinning(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#7F1D1D', '#D9532F', '#E6A229']
    });

    setTimeout(() => {
      setCurrentMoodIndex((prev) => (prev + 1) % siteConfig.moodGenerator.length);
      setIsSpinning(false);
    }, 250);
  };

  const currentMood = siteConfig.moodGenerator[currentMoodIndex];

  return (
    <section id="jathi-lab" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        eyebrow="JOGIPET ACADEMY OF SCIENCES"
        stamp="UNVERIFIED FACTS"
        title="VERY IMPORTANT CINEMA RESEARCH"
        subtitle="Unbiased investigations conducted by three friends while eating samosas during interval."
        annotation="Source: Trust me bro"
      />

      {/* Grid of Fake Research Notices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {siteConfig.jathiNotes.map((note, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[4px_4px_0px_0px_#1C1917] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-[#D8CBB6]">
                <span className="font-mono text-[9px] font-bold text-[#7F1D1D] uppercase tracking-wider">
                  REPORT #{idx + 101}
                </span>
                <span className="rubber-stamp text-[8px] text-[#2D5A3D] border-[#2D5A3D]">
                  CERTIFIED
                </span>
              </div>

              <h4 className="font-display text-2xl text-[#1C1917] tracking-wider leading-tight">
                {note.title}
              </h4>

              <p className="font-typewriter text-xs text-[#78716C] mt-1">
                {note.source}
              </p>

              <div className="mt-4 p-3 bg-[#FAF6EE] border border-[#E2D7C5] rounded-xs">
                <p className="text-xs sm:text-sm text-[#44403C] font-sans leading-relaxed">
                  "{note.finding}"
                </p>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-dashed border-[#E2D7C5] flex items-center justify-between font-mono text-[9px] text-[#78716C]">
              <span>CONFIDENTIALITY: NONE</span>
              <span className="text-[#D9532F]">STATUS: 100% CANON</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Batch Mood Generator */}
      <div className="max-w-xl mx-auto bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1C1917] text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E6A229]/20 text-[#854D0E] font-mono text-xs font-bold uppercase rounded-sm border border-[#E6A229]/40 mb-3">
          <FlaskConical className="w-3.5 h-3.5 text-[#D9532F]" />
          <span>DAILY TFI PRESCRIPTION GENERATOR</span>
        </div>

        <h3 className="font-display text-3xl sm:text-4xl text-[#1C1917] tracking-wider">
          WHAT IS YOUR VIBE TODAY?
        </h3>

        {/* Dynamic Mood Card */}
        <div className="my-5 p-5 bg-[#FAF6EE] border border-[#1C1917] rounded-sm shadow-inner text-left">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E2D7C5]">
            <span className="font-mono text-xs font-bold text-[#7F1D1D] uppercase">
              Current Vibe:
            </span>
            <span className="text-2xl">{currentMood.soundEmoji}</span>
          </div>

          <p className="font-display text-2xl sm:text-3xl text-[#1C1917] tracking-wider">
            {currentMood.vibe}
          </p>

          <p className="text-xs sm:text-sm text-[#57534E] font-sans mt-1">
            <span className="font-bold text-[#1C1917]">Symptom:</span> {currentMood.status}
          </p>

          <p className="text-xs sm:text-sm text-[#7F1D1D] font-mono font-bold mt-2 pt-2 border-t border-dashed border-[#E2D7C5]">
            👉 Batch Prescription: {currentMood.prescription}
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleNextMood}
          disabled={isSpinning}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#292524] text-[#FAF6EE] font-mono text-xs font-bold uppercase tracking-wider rounded-sm shadow-[3px_3px_0px_0px_#7F1D1D] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#E6A229] ${isSpinning ? 'animate-spin' : ''}`} />
          <span>SPIN AGAIN FOR NEXT PRESCRIPTION</span>
        </button>

        <p className="mt-3 text-[10px] font-mono text-[#78716C]">
          No appointment needed. 100% free cinema therapy.
        </p>
      </div>
    </section>
  );
}
