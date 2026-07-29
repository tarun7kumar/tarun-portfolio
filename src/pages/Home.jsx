import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StackingCard from '@/components/layout/StackingCard';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout ensures the DOM has rendered the sections before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      {/*
        Contact is fixed to the viewport, behind everything (z-0).
        It is exactly h-screen and never moves.
        The scrolling content above acts as a cover that uncovers it.
      */}
      <div id="contact" className="fixed inset-0 w-full h-screen z-0">
        <Contact />
      </div>

      {/*
        Main scrolling content sits above Contact (z-10).
        pb-[100vh] creates scroll runway equal to Contact's height (h-screen)
        so Projects can fully scroll out of view, revealing Contact underneath.
      */}
      <main className="relative z-10 w-full pb-[100vh] pointer-events-none">
        {/* Hero */}
        <StackingCard id="hero" index={0} totalSections={3} className="bg-[#8B3116] pointer-events-auto">
          <Hero />
        </StackingCard>

        {/* Skills — normal scroll, not sticky. Scrolls over Hero, fully visible before Projects begins. */}
        <div id="skills" className="relative w-full bg-[#F6F1EA] rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-[#8B3116]/15 overflow-hidden pointer-events-auto" style={{ zIndex: 20 }}>
          <Skills />
        </div>

        {/* Projects — last scrollable section, acts as the "cover" over Contact */}
        <div id="projects" className="relative w-full bg-[#1a1a1a] rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-white/10 pointer-events-auto" style={{ zIndex: 30 }}>
          <Projects />
        </div>
      </main>
    </>
  );
}
