import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import QuoteCard from './QuoteCard';
import { siteConfig } from '../data/siteConfig';

export default function DialogueWallSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Dialogues' },
    { id: 'philosophy', label: 'Batch Philosophy' },
    { id: 'elevation', label: 'Elevation Only' },
    { id: 'chaos', label: 'Pure Chaos' },
    { id: 'opinion', label: 'TFI Opinions' },
    { id: 'friendship', label: 'Friendship' },
  ];

  const filteredQuotes = activeCategory === 'all'
    ? siteConfig.dialogues
    : siteConfig.dialogues.filter(q => q.category === activeCategory);

  const rotations = ["sm:-rotate-1", "sm:rotate-0.5", "sm:rotate-1", "sm:-rotate-0.5"];

  return (
    <section id="dialogues" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        eyebrow="TFI PHILOSOPHY"
        stamp="WORDS OF WISDOM"
        title="DIALOGUES WE LIVE BY"
        subtitle="Things we actually send each other at 2:00 AM before making questionable life choices."
        annotation="Tested & verified across 100+ theater visits"
      />

      {/* Category Pills Filter */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#1C1917] text-[#FAF6EE] shadow-[2px_2px_0px_0px_#7F1D1D]'
                : 'bg-[#FFFDF9] text-[#57534E] border border-[#D8CBB6] hover:bg-[#FAF6EE] hover:text-[#1C1917]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Dialogue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredQuotes.map((dialogue, index) => (
          <QuoteCard
            key={dialogue.id}
            dialogue={dialogue}
            rotation={rotations[index % rotations.length]}
          />
        ))}
      </div>

      {/* Footer hint */}
      <div className="mt-8 text-center font-handwriting text-lg text-[#78716C]">
        "Click COPY on any dialogue to send it to your gang's group chat right now." 👆
      </div>
    </section>
  );
}
