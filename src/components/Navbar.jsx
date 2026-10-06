import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Characters', href: '#cast' },
    { label: 'Jathi Ratnalu', href: '#jathi-ratnalu' },
    { label: 'Our Routes', href: '#friendship-map' },
    { label: 'Moments of Us', href: '#moments' },
    { label: 'Chat Archives', href: '#dialogues' },
    { label: 'Rules', href: '#rules' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Vintage Cinema Airmail / Film Reel Top Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#7F1D1D] via-[#D9532F] to-[#E6A229]" />

      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF6EE]/95 backdrop-blur-md border-[#E2D7C5] shadow-xs py-2 sm:py-2.5'
            : 'bg-[#FAF6EE] border-[#E2D7C5] py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo / Brand: Three People Together Icon + జాతి రత్నాలు / JATHI RATNALU */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Jathi Ratnalu — Lahari, Vedha & Keerthi"
          >
            {/* Minimal Illustrated Icon of Three People Standing Together */}
            <div className="w-11 h-11 rounded-sm bg-[#7F1D1D] text-[#FAF6EE] flex items-center justify-center shadow-[2px_2px_0px_0px_#1C1917] group-hover:rotate-3 transition-transform shrink-0 p-1.5">
              <svg viewBox="0 0 48 36" fill="currentColor" className="w-full h-full">
                {/* Left Friend (Lahari) */}
                <circle cx="12" cy="11" r="5" fill="#FAF6EE" />
                <path d="M4 29 C4 21 8 18 12 18 C16 18 20 21 20 29 Z" fill="#FAF6EE" />

                {/* Center Friend (Vedha) - Center & Slightly Raised */}
                <circle cx="24" cy="8" r="5.5" fill="#E6A229" />
                <path d="M15 29 C15 19 19 16 24 16 C29 16 33 19 33 29 Z" fill="#E6A229" />

                {/* Right Friend (Keerthi) */}
                <circle cx="36" cy="11" r="5" fill="#FAF6EE" />
                <path d="M28 29 C28 21 32 18 36 18 C40 18 44 21 44 29 Z" fill="#FAF6EE" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-black text-[#1C1917] tracking-normal leading-none group-hover:text-[#7F1D1D] transition-colors">
                  {siteConfig.meta.teluguTitle}
                </span>
                <span className="text-[9px] font-mono font-bold bg-[#E6A229]/20 text-[#854D0E] px-1.5 py-0.2 rounded border border-[#E6A229]/40">
                  TRIO
                </span>
              </div>
              <span className="text-[10px] font-display text-[#7F1D1D] tracking-widest uppercase leading-tight mt-0.5">
                {siteConfig.meta.englishTitle} • LAHARI • VEDHA • KEERTHI
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-5 font-mono text-xs font-semibold text-[#44403C]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2 py-1 rounded-sm hover:text-[#7F1D1D] hover:bg-[#EBDDC9]/40 transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Official Instagram CTA */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.meta.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#7F1D1D] hover:bg-[#681414] text-[#FAF6EE] font-mono text-xs font-bold uppercase tracking-wider rounded-sm shadow-[2px_2px_0px_0px_#1C1917] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">@professionallylostt</span>
              <span className="sm:hidden">INSTA</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm border border-[#D8CBB6] bg-[#FFFDF9] text-[#1C1917] hover:bg-[#F4ECE0] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-b border-[#E2D7C5] px-4 py-4 space-y-3 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded bg-[#FFFDF9] border border-[#E2D7C5] text-[#1C1917] hover:bg-[#F4ECE0]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.meta.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded bg-[#7F1D1D] text-[#FAF6EE] font-bold text-center"
            >
              <Instagram className="w-4 h-4" />
              <span>{siteConfig.meta.instagram.handle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
