import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

function App() {
  return (
    <>
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
