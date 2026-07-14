import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const shouldReduce = useReducedMotion();

  if (shouldReduce) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#A33614] origin-left z-50"
      style={{ scaleX }}
    />
  );
}

function App() {
  return (
    <>
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}

export default App;
