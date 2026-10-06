import React, { useState, useEffect } from 'react';
import { Film, Clapperboard, SkipForward } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function LoadingScreen({ onFinish }) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1300);
    const t3 = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  const handleSkip = () => {
    setVisible(false);
    if (onFinish) onFinish();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF6EE] text-[#1C1917] transition-opacity duration-500 p-4">
      {/* Background Projector Light Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-stone-200" />

      {/* Retro Cinema Opening Card */}
      <div className="relative z-10 max-w-sm w-full p-6 sm:p-8 bg-[#FFFDF9] border-2 border-[#1C1917] rounded-sm shadow-[6px_6px_0px_0px_#1C1917] text-center">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#7F1D1D] text-[#FAF6EE] font-mono text-[11px] font-bold uppercase tracking-widest rounded-sm mb-4">
          <Clapperboard className="w-3.5 h-3.5" />
          <span>THREE RATHNALU • TAKE 01</span>
        </div>

        {/* Dynamic Opening Messages */}
        <div className="min-h-[80px] flex flex-col items-center justify-center">
          {step === 0 && (
            <div className="animate-fadeIn">
              <h3 className="font-serif text-3xl font-black tracking-normal text-[#1C1917]">
                జాతి రత్నాలు
              </h3>
              <p className="font-display text-xl text-[#7F1D1D] mt-0.5">
                JATHI RATNALU
              </p>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fadeIn">
              <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-[#D9532F]">
                LAHARI • VEDHA • KEERTHI
              </h3>
              <p className="font-handwriting text-xl text-[#7F1D1D] mt-0.5">
                B.Tech survivors entering... 🔥
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fadeIn">
              <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-[#2D5A3D]">
                #THETHREERATHNALU
              </h3>
              <p className="font-mono text-xs text-[#78716C] mt-1">
                Stanley College of Engineering • Certified.
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#EBDDC9] h-2 rounded-full overflow-hidden my-4 border border-[#1C1917]/20">
          <div
            className="bg-[#7F1D1D] h-full transition-all duration-700 ease-out"
            style={{ width: `${(step + 1) * 33.3}%` }}
          />
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#78716C] hover:text-[#1C1917] transition-colors underline underline-offset-4 cursor-pointer mt-1"
        >
          <SkipForward className="w-3.5 h-3.5" />
          <span>Skip to Story</span>
        </button>
      </div>

      <p className="mt-4 font-mono text-xs text-[#78716C] tracking-widest uppercase">
        LAHARI • VEDHA • KEERTHI
      </p>
    </div>
  );
}
