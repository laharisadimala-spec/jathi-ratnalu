import React, { useState } from 'react';
import { Quote, Copy, Check, Sparkles } from 'lucide-react';

export default function QuoteCard({ dialogue, rotation = "rotate-0" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(dialogue.line);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`group relative bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm p-4 sm:p-5 shadow-[4px_4px_0px_0px_#1C1917] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1C1917] ${rotation}`}
    >
      {/* Top Tag & Copy Button */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-[#D8CBB6]">
        <span className="font-mono text-[9px] font-bold text-[#7F1D1D] uppercase tracking-wider bg-[#7F1D1D]/10 px-2 py-0.5 rounded-xs">
          ★ {dialogue.tag}
        </span>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#78716C] hover:text-[#1C1917] transition-colors p-1 rounded hover:bg-[#FAF6EE]"
          title="Copy this dialogue"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-[#2D5A3D]" />
              <span className="text-[#2D5A3D]">COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Main Dialogue Line in Bold Typewriter / Serif */}
      <div className="my-2">
        <Quote className="w-5 h-5 text-[#E6A229] mb-1.5 opacity-80" />
        <p className="font-display text-xl sm:text-2xl text-[#1C1917] tracking-wide leading-tight group-hover:text-[#7F1D1D] transition-colors">
          "{dialogue.line}"
        </p>
      </div>

      {/* Context & Speaker */}
      <div className="mt-3 pt-3 border-t border-dashed border-[#E2D7C5] bg-[#FAF6EE] -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3 rounded-b-sm">
        <p className="text-xs text-[#57534E] font-sans leading-relaxed">
          {dialogue.context}
        </p>
        <span className="block text-[10px] font-mono text-[#78716C] font-semibold mt-1">
          — {dialogue.speaker}
        </span>
      </div>
    </div>
  );
}
