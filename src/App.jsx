import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Home from '@/pages/Home';
import AllProjects from '@/pages/AllProjects';

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
      className="fixed top-[55px] md:top-[70px] left-0 right-0 h-[3px] bg-[#8B3116] origin-left z-50 pointer-events-none"
      style={{ scaleX }}
    />
  );
}

function App() {
  return (
    <div className="bg-[#F6F1EA] min-h-screen selection:bg-[#A33614]/30 selection:text-[#F6F1EA]">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;
