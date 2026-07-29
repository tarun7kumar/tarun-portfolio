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
        DESKTOP ONLY: Contact fixed behind everything for the scroll-reveal effect.
        Hidden on mobile to avoid bleed-through issues.
      */}
      <div className="hidden md:block fixed inset-0 w-full h-screen z-0 overflow-y-auto">
        <Contact />
      </div>

      {/*
        Main scrolling content.
        Desktop: z-10, pb-[100vh] for scroll runway, pointer-events-none (children re-enable).
        Mobile: normal flow, no padding trick needed.
      */}
      <main className="relative z-10 w-full md:pb-[100vh] md:pointer-events-none">
        {/* Hero */}
        <StackingCard id="hero" index={0} totalSections={3} className="bg-[#8B3116] pointer-events-auto">
          <Hero />
        </StackingCard>

        {/* Skills */}
        <div id="skills" className="relative w-full bg-[#F6F1EA] rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-[#8B3116]/15 overflow-hidden pointer-events-auto" style={{ zIndex: 20 }}>
          <Skills />
        </div>

        {/* Projects */}
        <div id="projects" className="relative w-full bg-[#1a1a1a] rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-white/10 pointer-events-auto" style={{ zIndex: 30 }}>
          <Projects />
        </div>
      </main>

      {/*
        Contact section:
        - Mobile: normal document flow, fully scrollable
        - Desktop: invisible scroll anchor (the actual Contact is the fixed element above)
      */}
      <div id="contact" className="relative w-full md:pointer-events-none" style={{ zIndex: 5 }}>
        <div className="md:hidden">
          <Contact />
        </div>
      </div>
    </>
  );
}
