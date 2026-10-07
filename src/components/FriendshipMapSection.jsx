import React from 'react';
import { Compass, GraduationCap, Bus, Cloud } from 'lucide-react';
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
        {/* Corner Washi Tapes */}
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
        <div className="relative bg-[#FAF3E0] border border-[#D5C29D] rounded-sm p-4 sm:p-6 lg:p-8 shadow-inner overflow-hidden">
          {/* Subtle Vintage Compass Watermark */}
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
            <Compass className="w-32 h-32 text-[#7F1D1D]" />
          </div>

          {/* Decorative Travel Elements */}
          <div className="opacity-35 text-[#8C7A64] pointer-events-none hidden md:flex items-center justify-between mb-4 px-2 font-mono text-[10px]">
            <div className="flex items-center gap-1">
              <Bus className="w-4 h-4 text-[#D9532F]" />
              <span>COLLEGE BUS #07</span>
            </div>
            <div className="flex items-center gap-1">
              <Cloud className="w-4 h-4" />
              <span>CLEAR SKIES</span>
            </div>
          </div>

          {/* =========================================================
              DESKTOP VIEW (md+):
              LAHARI   ───────┐
                              │
              VEDHA    ───────┼──> STANLEY COLLEGE OF ENGINEERING
                              │
              KEERTHI  ───────┘
             ========================================================= */}
          <div className="hidden md:flex items-center justify-between gap-4 lg:gap-8 relative z-20 min-h-[380px]">
            {/* LEFT COLUMN: 3 Friends stacked vertically */}
            <div className="w-[240px] lg:w-[270px] shrink-0 flex flex-col justify-between h-[360px] py-1">
              {friends.map((friend, idx) => {
                const pinColors = ['bg-[#DC2626]', 'bg-[#E6A229]', 'bg-[#2D5A3D]'];
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-0.5'];
                return (
                  <div
                    key={friend.id}
                    className={`relative bg-[#FFFDF9] border-2 border-[#1C1917] p-2.5 rounded-sm shadow-[4px_4px_0px_0px_#1C1917] flex items-center gap-3 transform ${rotations[idx]} hover:rotate-0 transition-transform`}
                  >
                    {/* Pushpin */}
                    <div
                      className={`absolute -top-2.5 left-3 w-5 h-5 rounded-full ${pinColors[idx]} border border-[#1C1917] flex items-center justify-center shadow-xs`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE]" />
                    </div>

                    {/* Friend Photo */}
                    <div className="w-16 h-16 lg:w-18 lg:h-18 shrink-0">
                      <ImagePlaceholder
                        src={friend.image}
                        placeholderKey={friend.placeholderKey}
                        type="cast"
                        title={friend.name}
                        aspectRatio="aspect-[1/1]"
                        objectPosition={friend.objectPosition || "center"}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Friend Name & Route Badge */}
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] lg:text-[10px] font-bold text-[#7F1D1D] uppercase tracking-wider block">
                        ROUTE 0{idx + 1}
                      </span>
                      <h3 className="font-display text-2xl lg:text-3xl text-[#1C1917] tracking-wider leading-none">
                        {friend.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CENTER CONNECTOR: SVG 3 Independent Converging Routes */}
            <div className="flex-1 flex items-center justify-center h-[360px] relative px-2">
              <svg viewBox="0 0 200 360" className="w-full h-[360px]" fill="none">
                <defs>
                  <marker
                    id="map-arrow-desktop"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#DC2626" />
                  </marker>
                </defs>

                {/* Route 1: LAHARI (top -> right -> down -> right into Stanley) */}
                <path
                  d="M 5 55 L 85 55 Q 100 55 100 70 L 100 165 Q 100 175 115 175 L 190 175"
                  stroke="#DC2626"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  markerEnd="url(#map-arrow-desktop)"
                />

                {/* Route 2: VEDHA (mid -> straight right into Stanley) */}
                <path
                  d="M 5 180 L 190 180"
                  stroke="#DC2626"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  markerEnd="url(#map-arrow-desktop)"
                />

                {/* Route 3: KEERTHI (bottom -> right -> up -> right into Stanley) */}
                <path
                  d="M 5 305 L 85 305 Q 100 305 100 290 L 100 195 Q 100 185 115 185 L 190 185"
                  stroke="#DC2626"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  markerEnd="url(#map-arrow-desktop)"
                />
              </svg>

              {/* Decorative Travel Notes */}
              <div className="absolute top-[22%] left-[45%] font-handwriting text-xs text-[#7F1D1D] -rotate-6 pointer-events-none hidden lg:block">
                Stop for tea ☕
              </div>
              <div className="absolute bottom-[22%] left-[45%] font-handwriting text-xs text-[#7F1D1D] rotate-6 pointer-events-none hidden lg:block">
                Running late 🏃‍♀️
              </div>
            </div>

            {/* RIGHT COLUMN: STANLEY COLLEGE OF ENGINEERING */}
            <div className="w-[280px] lg:w-[320px] shrink-0">
              <div className="relative p-5 sm:p-6 bg-[#FAF6EE] border-3 border-[#7F1D1D] rounded-sm text-center shadow-[6px_6px_0px_0px_#1C1917]">
                {/* Pushpin on top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#7F1D1D] border-2 border-[#1C1917] flex items-center justify-center shadow-md">
                  <GraduationCap className="w-4 h-4 text-[#FAF6EE]" />
                </div>

                <span className="font-mono text-[10px] uppercase font-bold text-[#7F1D1D] tracking-widest block mt-1">
                  ★ THE CONVERGENCE POINT ★
                </span>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] tracking-wider leading-tight mt-1">
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

          {/* =========================================================
              MOBILE VIEW (< md):
              3 Friends in a row -> 3 down routes converging to Stanley
             ========================================================= */}
          <div className="md:hidden relative z-20 space-y-3">
            {/* 3 Friends row */}
            <div className="grid grid-cols-3 gap-2">
              {friends.map((friend, idx) => {
                const pinColors = ['bg-[#DC2626]', 'bg-[#E6A229]', 'bg-[#2D5A3D]'];
                return (
                  <div
                    key={friend.id}
                    className="relative bg-[#FFFDF9] border-2 border-[#1C1917] p-1.5 sm:p-2 rounded-sm shadow-[3px_3px_0px_0px_#1C1917] flex flex-col items-center text-center"
                  >
                    {/* Pushpin */}
                    <div
                      className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${pinColors[idx]} border border-[#1C1917] flex items-center justify-center shadow-xs`}
                    >
                      <div className="w-1 h-1 rounded-full bg-[#FAF6EE]" />
                    </div>

                    <div className="w-full aspect-square mt-1 mb-1">
                      <ImagePlaceholder
                        src={friend.image}
                        placeholderKey={friend.placeholderKey}
                        type="cast"
                        title={friend.name}
                        aspectRatio="aspect-[1/1]"
                        objectPosition={friend.objectPosition || "center"}
                        className="w-full h-full"
                      />
                    </div>

                    <span className="font-display text-sm sm:text-base text-[#1C1917] tracking-wider leading-tight block truncate w-full">
                      {friend.name}
                    </span>
                    <span className="font-mono text-[8px] text-[#7F1D1D] font-bold block">
                      ROUTE 0{idx + 1}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile SVG Converging Routes */}
            <div className="w-full flex justify-center py-1">
              <svg viewBox="0 0 300 80" className="w-full h-16 max-w-sm" fill="none">
                <defs>
                  <marker
                    id="map-arrow-mobile"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="7"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 1 1 L 5 8 L 9 1 z" fill="#DC2626" />
                  </marker>
                </defs>

                {/* Route 1 (Lahari): Left -> center bottom */}
                <path
                  d="M 50 5 L 50 25 Q 50 35 60 35 L 135 35 Q 145 35 145 45 L 145 70"
                  stroke="#DC2626"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  markerEnd="url(#map-arrow-mobile)"
                />

                {/* Route 2 (Vedha): Mid -> straight down */}
                <path
                  d="M 150 5 L 150 70"
                  stroke="#DC2626"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  markerEnd="url(#map-arrow-mobile)"
                />

                {/* Route 3 (Keerthi): Right -> center bottom */}
                <path
                  d="M 250 5 L 250 25 Q 250 35 240 35 L 165 35 Q 155 35 155 45 L 155 70"
                  stroke="#DC2626"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  markerEnd="url(#map-arrow-mobile)"
                />
              </svg>
            </div>

            {/* Mobile Destination */}
            <div className="p-4 bg-[#FAF6EE] border-3 border-[#7F1D1D] rounded-sm text-center shadow-[5px_5px_0px_0px_#1C1917] relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#7F1D1D] border-2 border-[#1C1917] flex items-center justify-center shadow-md">
                <GraduationCap className="w-3.5 h-3.5 text-[#FAF6EE]" />
              </div>

              <span className="font-mono text-[9px] uppercase font-bold text-[#7F1D1D] tracking-widest block mt-0.5">
                ★ THE CONVERGENCE POINT ★
              </span>

              <h3 className="font-display text-2xl text-[#1C1917] tracking-wider leading-tight mt-0.5">
                {destination.name}
              </h3>

              <div className="mt-2 pt-2 border-t border-dashed border-[#D8CBB6]">
                <p className="font-handwriting text-lg text-[#7F1D1D] font-bold">
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
