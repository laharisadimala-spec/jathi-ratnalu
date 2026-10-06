import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import FilmStrip from './components/FilmStrip';
import HeroSection from './components/HeroSection';
import CastSection from './components/CastSection';
import JathiRatnaluMovieSection from './components/JathiRatnaluMovieSection';
import FriendshipMapSection from './components/FriendshipMapSection';
import MomentsSection from './components/MomentsSection';
import ThingsWeSaySection from './components/ThingsWeSaySection';
import DidYouFollowSection from './components/DidYouFollowSection';
import OurRulesSection from './components/OurRulesSection';
import NoNazarBadge from './components/NoNazarBadge';
import InstagramCtaSection from './components/InstagramCtaSection';
import Footer from './components/Footer';
import { Instagram } from 'lucide-react';
import { siteConfig } from './data/siteConfig';

// Subtle, fast, cinematic motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#1C1917] selection:bg-[#7F1D1D] selection:text-[#FAF6EE] relative overflow-x-hidden">
      {/* 1. Cinematic Opening Loading Screen */}
      {!loadingFinished && (
        <LoadingScreen onFinish={() => setLoadingFinished(true)} />
      )}

      {/* 2. Top Header Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. JATHI RATNALU HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <HeroSection />
        </motion.div>

        {/* Vintage Film Strip Ribbon */}
        <FilmStrip className="my-4" />

        {/* 3. THE MAIN CHARACTERS (LAHARI, VEDHA, KEERTHI) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <CastSection />
        </motion.div>

        {/* 4. JATHI RATNALU MOVIE-INSPIRED SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <JathiRatnaluMovieSection />
        </motion.div>

        {/* 5. HOW WE GOT HERE / THREE ROUTES. ONE STORY. (SCRAPBOOK TRAVEL MAP) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <FriendshipMapSection />
        </motion.div>

        {/* 6. MOMENTS OF US (PHOTO SCRAPBOOK) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <MomentsSection />
        </motion.div>

        {/* Reverse Vintage Film Strip */}
        <FilmStrip reverse className="my-4" />

        {/* 7. THINGS WE ACTUALLY SAY (CHAT ARCHIVES) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <ThingsWeSaySection />
        </motion.div>

        {/* 8. DID YOU START FOLLOWING US? */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <DidYouFollowSection />
        </motion.div>

        {/* 9. OUR UNOFFICIAL RULES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <OurRulesSection />
        </motion.div>

        {/* 10. 🧿 NO NAZAR */}
        <NoNazarBadge />

        {/* 11. GIANT BALCONY TICKET INSTAGRAM CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <InstagramCtaSection />
        </motion.div>
      </main>

      {/* 12. END CREDITS FOOTER */}
      <Footer />

      {/* Sticky Mobile Floating Action Button (Direct Instagram 1-tap) */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a
          href={siteConfig.meta.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#7F1D1D] text-[#FAF6EE] font-mono text-xs font-bold uppercase rounded-full shadow-[3px_3px_0px_0px_#1C1917] border border-[#1C1917] active:scale-95 transition-transform"
          aria-label="Open Instagram @professionallylostt"
        >
          <Instagram className="w-4 h-4 text-[#FAF6EE]" />
          <span>@professionallylostt</span>
        </a>
      </div>
    </div>
  );
}
