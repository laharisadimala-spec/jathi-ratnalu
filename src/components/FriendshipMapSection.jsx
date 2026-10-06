import React from 'react';
import { Compass, GraduationCap, Pin, Star, Bus, Car, Trees, Cloud, ArrowDownRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function FriendshipMapSection() {
  const { friendshipMap } = siteConfig;
  const { friends, destination } = friendshipMap;

  return (
    <section id="friendship-map" className="py-12 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-sm bg-[#7F1D1D] text-[#FAF6EE] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-2xs mb-2">
          ★ SCRAPBOOK TRAVEL MAP ★
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-wider leading-[0.95]">
          {friendshipMap.heading}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#57534E] font-sans">
          {friendshipMap.subtitle}
        </p>
      </div>

      {/* The Physical Aged Map Surface */}
      <div className="relative bg-[#F5EEDB] border-2 border-[#1C1917] rounded-sm shadow-[10px_10px_0px_0px_#1C1917] p-4 sm:p-8 lg:p-10 overflow-hidden">
        {/* Corner Washi Tapes & Pushpins */}
        <div className="washi-tape -top-2 left-8 -rotate-6 hidden sm:block" />
        <div className="washi-tape -top-2 right-8 rotate-3 hidden sm:block" />
        <div className="washi-tape -bottom-2 left-12 rotate-2 hidden sm:block" />
        <div className="washi-tape -bottom-2 right-12 -rotate-3 hidden sm:block" />

        {/* Vintage Top Map Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b-2 border-dashed border-[#8C7A64] font-mono text-xs text-[#705D49]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#7F1D1D]" />
            <span className="font-bold text-[#1C1917]">THREE ROUTES. ONE DESTINATION.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rubber-stamp text-[9px] text-[#7F1D1D] border-[#7F1D1D]">
              HANDMADE MAP
            </span>
            <span className="text-[11px] hidden sm:inline">SCALE: 100% EMOTION</span>
          </div>
        </div>

        {/* -------------------------------------------------------------
            MAP CANVAS & CONVERGING ROUTES
           ------------------------------------------------------------- */}
        <div className="relative min-h-[580px] lg:min-h-[620px] bg-[#FAF3E0] border border-[#D5C29D] rounded-sm p-4 sm:p-6 shadow-inner overflow-hidden">
          {/* Subtle Vintage Grid & Compass Watermark */}
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
            <Compass className="w-32 h-32 text-[#7F1D1D]" />
          </div>

          {/* Illustrated SVG Dotted Routes Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            preserveAspectRatio="none"
            viewBox="0 0 1000 700"
          >
            {/* Route 1 (Lahari: Top-Left -> Center-Bottom) */}
            <path
              d="M 200 170 C 240 280, 320 370, 500 510"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
            {/* Route 2 (Vedha: Top-Right -> Center-Bottom) */}
            <path
              d="M 800 170 C 750 280, 680 370, 500 510"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
            {/* Route 3 (Keerthi: Mid-Left -> Center-Bottom) */}
            <path
              d="M 180 380 C 260 410, 360 460, 500 510"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Decorative Hand-Drawn Elements across the Map */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-30 text-[#8C7A64] pointer-events-none hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 font-mono text-[10px]">
              <Cloud className="w-4 h-4" />
              <span>CLEAR SKIES</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[10px]">
              <Bus className="w-4 h-4 text-[#D9532F]" />
              <span>COLLEGE BUS #07</span>
            </div>
          </div>

          {/* Little Stars / Road Signs */}
          <div className="absolute top-[32%] left-[34%] font-handwriting text-sm text-[#7F1D1D] -rotate-6 pointer-events-none hidden lg:block">
            "Stop for tea ☕"
          </div>
          <div className="absolute top-[34%] right-[28%] font-handwriting text-sm text-[#7F1D1D] rotate-6 pointer-events-none hidden lg:block">
            "Running late as usual 🏃‍♀️"
          </div>

          {/* -----------------------------------------------------------
              1. THREE STARTING POLAROID PHOTOS PINNED TO MAP
             ----------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 mb-8 sm:mb-12">
            {/* FRIEND 1: LAHARI */}
            <div className="flex flex-col items-center">
              <div className="relative bg-[#FFFDF9] border-2 border-[#1C1917] p-2.5 sm:p-3 rounded-sm shadow-[4px_4px_0px_0px_#1C1917] transform sm:-rotate-2 hover:rotate-0 transition-transform duration-300 w-full max-w-[210px]">
                {/* Pushpin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#DC2626] border border-[#1C1917] flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE]" />
                </div>

                <ImagePlaceholder
                  src={friends[0].image}
                  placeholderKey={friends[0].placeholderKey}
                  type="cast"
                  title="LAHARI"
                  aspectRatio="aspect-[1/1]"
                  objectPosition={friends[0].objectPosition || "center 45%"}
                  className="w-full mb-2"
                />

                <div className="text-center pt-1 border-t border-dashed border-[#D8CBB6]">
                  <span className="font-display text-xl text-[#1C1917] tracking-wider block">
                    {friends[0].name}
                  </span>
                </div>
              </div>
            </div>

            {/* FRIEND 2: VEDHA (Center/Slightly offset) */}
            <div className="flex flex-col items-center md:items-end lg:items-center">
              <div className="relative bg-[#FFFDF9] border-2 border-[#1C1917] p-2.5 sm:p-3 rounded-sm shadow-[4px_4px_0px_0px_#1C1917] transform sm:rotate-2 hover:rotate-0 transition-transform duration-300 w-full max-w-[210px]">
                {/* Pushpin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#E6A229] border border-[#1C1917] flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE]" />
                </div>

                <ImagePlaceholder
                  src={friends[1].image}
                  placeholderKey={friends[1].placeholderKey}
                  type="cast"
                  title="VEDHA"
                  aspectRatio="aspect-[1/1]"
                  objectPosition={friends[1].objectPosition || "center 28%"}
                  className="w-full mb-2"
                />

                <div className="text-center pt-1 border-t border-dashed border-[#D8CBB6]">
                  <span className="font-display text-xl text-[#1C1917] tracking-wider block">
                    {friends[1].name}
                  </span>
                </div>
              </div>
            </div>

            {/* FRIEND 3: KEERTHI */}
            <div className="flex flex-col items-center md:items-start lg:items-end">
              <div className="relative bg-[#FFFDF9] border-2 border-[#1C1917] p-2.5 sm:p-3 rounded-sm shadow-[4px_4px_0px_0px_#1C1917] transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-[210px]">
                {/* Pushpin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#2D5A3D] border border-[#1C1917] flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE]" />
                </div>

                <ImagePlaceholder
                  src={friends[2].image}
                  placeholderKey={friends[2].placeholderKey}
                  type="cast"
                  title="KEERTHI"
                  aspectRatio="aspect-[1/1]"
                  objectPosition={friends[2].objectPosition || "center 35%"}
                  className="w-full mb-2"
                />

                <div className="text-center pt-1 border-t border-dashed border-[#D8CBB6]">
                  <span className="font-display text-xl text-[#1C1917] tracking-wider block">
                    {friends[2].name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------
              2. DESTINATION: STANLEY COLLEGE OF ENGINEERING
             ----------------------------------------------------------- */}
          <div className="relative z-20 mt-10 sm:mt-16 max-w-lg mx-auto">
            {/* Golden Campus Pinned Plaque */}
            <div className="p-5 sm:p-6 bg-[#FAF6EE] border-3 border-[#7F1D1D] rounded-sm text-center shadow-[6px_6px_0px_0px_#1C1917] relative">
              {/* Pushpin on top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#7F1D1D] border-2 border-[#1C1917] flex items-center justify-center shadow-md">
                <GraduationCap className="w-4 h-4 text-[#FAF6EE]" />
              </div>

              <span className="font-mono text-[10px] uppercase font-bold text-[#7F1D1D] tracking-widest block mt-1">
                ★ THE CONVERGENCE POINT ★
              </span>

              <h3 className="font-display text-3xl sm:text-4xl text-[#1C1917] tracking-wider leading-tight mt-1">
                {destination.name}
              </h3>

              {/* Handwritten Annotation */}
              <div className="mt-3 pt-3 border-t border-dashed border-[#D8CBB6]">
                <p className="font-handwriting text-xl sm:text-2xl text-[#7F1D1D] font-bold">
                  "{destination.annotation1}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Legend & Stamp at bottom */}
        <div className="mt-4 pt-3 border-t border-dashed border-[#8C7A64] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#705D49]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-3 h-0.5 bg-[#DC2626] border-b border-dashed inline-block" /> Red Dotted Routes
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#7F1D1D] inline-block" /> Destination
            </span>
          </div>
          <span>B.Tech Timeline • Forever Connected</span>
        </div>
      </div>
    </section>
  );
}
