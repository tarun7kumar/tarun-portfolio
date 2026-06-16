import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full h-[55px] md:h-[70px] z-40 transition-all duration-300 flex items-center ${
        isScrolled
          ? 'bg-[#F6F1EA]/85 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-[#F6F1EA]/20 dark:border-neutral-800/50 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Absolute Logo aligned with Left Sidebar */}
      <a
        href="#hero"
        className={`absolute left-6 md:left-10 text-2xl font-bold font-poppins hover:opacity-85 transition-colors duration-300 flex items-center gap-px select-none ${
          isScrolled ? 'text-neutral-950 dark:text-white' : 'text-cream'
        }`}
      >
        <span className="font-extrabold text-[32px] lowercase tracking-tight">tk</span>
        <span className="text-[#A33614] text-[32px] leading-none font-black">.</span>
      </a>

      {/* Full-width container for links */}
      <div className="w-full px-6 md:px-10 flex items-center justify-end">
        {/* Right side: Navigation links */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <a
            href="#skills"
            className={`font-poppins font-normal text-[14px] md:text-[15px] tracking-wide transition-colors duration-300 ${
              isScrolled
                ? 'text-[#8B3116] hover:text-[#A33614] dark:text-neutral-300 dark:hover:text-amber-500'
                : 'text-cream/95 hover:text-cream'
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`font-poppins font-normal text-[14px] md:text-[15px] tracking-wide transition-colors duration-300 ${
              isScrolled
                ? 'text-[#8B3116] hover:text-[#A33614] dark:text-neutral-300 dark:hover:text-amber-500'
                : 'text-cream/95 hover:text-cream'
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`font-poppins font-normal text-[14px] md:text-[15px] tracking-wide transition-colors duration-300 ${
              isScrolled
                ? 'text-[#8B3116] hover:text-[#A33614] dark:text-neutral-300 dark:hover:text-amber-500'
                : 'text-cream/95 hover:text-cream'
            }`}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-poppins font-medium text-[13px] md:text-[14px] tracking-wide px-5 py-1.5 rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'border-[#8B3116] text-[#8B3116] hover:bg-[#8B3116] hover:text-cream'
                : 'border-cream/60 text-cream hover:bg-cream/10'
            }`}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}






