import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ease, hover, tap } from '@/utils/motion';
import useScrollSpy from '@/hooks/useScrollSpy';

// ─── Stagger Variants for nav links ─────────────────────────────────────────
const navContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: ease.smooth,
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.4,
      ease: ease.smooth,
    },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const activeSection = useScrollSpy();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full h-[55px] md:h-[70px] z-40 transition-all duration-300 flex items-center ${isScrolled
          ? 'bg-[#F6F1EA]/85 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-[#F6F1EA]/20 dark:border-neutral-800/50 shadow-md'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      {/* Absolute Logo aligned with Left Sidebar */}
      <motion.a
        href="#hero"
        initial={shouldReduce ? {} : { opacity: 0 }}
        animate={shouldReduce ? {} : { opacity: 1 }}
        transition={{ duration: 0.5, ease: ease.smooth, delay: 0.1 }}
        onClick={() => setIsMenuOpen(false)}
        className={`absolute left-6 md:left-0 md:w-[90px] md:justify-center text-2xl font-bold font-poppins hover:opacity-85 transition-colors duration-300 flex items-center gap-px select-none ${
          (isScrolled || isMenuOpen) ? 'text-neutral-950 dark:text-white' : 'text-cream'
        }`}
      >
        <span className="font-extrabold text-[32px] lowercase tracking-tight">tk</span>
        <span className="text-[32px] leading-none font-black">.</span>
      </motion.a>

      {/* Full-width container for links */}
      <div className="w-full px-6 md:px-10 flex items-center justify-end">
        {/* Right side: Navigation links (Desktop) */}
        <motion.div
          variants={shouldReduce ? {} : navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center space-x-6 md:space-x-10"
        >
          <motion.a
            variants={shouldReduce ? {} : navItemVariants}
            href="#skills"
            className={`relative font-poppins font-normal text-[14px] md:text-[15px] tracking-wide transition-all duration-300 pb-1 ${
              activeSection === 'skills'
                ? 'font-semibold ' + (isScrolled ? 'text-[#8B3116] dark:text-[#D9B7A6]' : 'text-cream')
                : isScrolled
                  ? 'text-[#8B3116]/65 hover:text-[#8B3116] dark:text-neutral-400 dark:hover:text-[#D9B7A6]'
                  : 'text-cream/95 hover:text-cream'
            }`}
          >
            Skills
            {activeSection === 'skills' && (
              <motion.span
                layoutId="nav-underline"
                className={`absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full ${
                  isScrolled ? 'bg-[#8B3116] dark:bg-[#D9B7A6]' : 'bg-cream'
                }`}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </motion.a>
          <motion.a
            variants={shouldReduce ? {} : navItemVariants}
            href="#projects"
            className={`relative font-poppins font-normal text-[14px] md:text-[15px] tracking-wide transition-all duration-300 pb-1 ${
              activeSection === 'projects'
                ? 'font-semibold ' + (isScrolled ? 'text-[#8B3116] dark:text-[#D9B7A6]' : 'text-cream')
                : isScrolled
                  ? 'text-[#8B3116]/65 hover:text-[#8B3116] dark:text-neutral-400 dark:hover:text-[#D9B7A6]'
                  : 'text-cream/95 hover:text-cream'
            }`}
          >
            Projects
            {activeSection === 'projects' && (
              <motion.span
                layoutId="nav-underline"
                className={`absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full ${
                  isScrolled ? 'bg-[#8B3116] dark:bg-[#D9B7A6]' : 'bg-cream'
                }`}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </motion.a>
          <motion.a
            variants={shouldReduce ? {} : navItemVariants}
            href="#contact"
            className={`relative font-poppins font-normal text-[14px] md:text-[15px] tracking-wide transition-all duration-300 pb-1 ${
              activeSection === 'contact'
                ? 'font-semibold ' + (isScrolled ? 'text-[#8B3116] dark:text-[#D9B7A6]' : 'text-cream')
                : isScrolled
                  ? 'text-[#8B3116]/65 hover:text-[#8B3116] dark:text-neutral-400 dark:hover:text-[#D9B7A6]'
                  : 'text-cream/95 hover:text-cream'
            }`}
          >
            Contact
            {activeSection === 'contact' && (
              <motion.span
                layoutId="nav-underline"
                className={`absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full ${
                  isScrolled ? 'bg-[#8B3116] dark:bg-[#D9B7A6]' : 'bg-cream'
                }`}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </motion.a>
          <motion.a
            variants={shouldReduce ? {} : navItemVariants}
            href="https://drive.google.com/file/d/1BPsx-Yfx4xdxvhu99tkYiuUhq5-8LFNz/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-poppins font-medium text-[13px] md:text-[14px] tracking-wide px-5 py-1.5 rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'border-[#8B3116] text-[#8B3116] hover:bg-[#8B3116] hover:text-cream'
                : 'border-cream/60 text-cream hover:bg-cream/10'
            }`}
            whileHover={shouldReduce ? {} : hover.liftSubtle}
            whileTap={shouldReduce ? {} : tap.pressSubtle}
          >
            Resume
          </motion.a>
        </motion.div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex md:hidden items-center justify-center p-2 rounded-full transition-all duration-300 z-50 cursor-pointer ${
            (isScrolled || isMenuOpen)
              ? 'text-neutral-950 dark:text-white hover:bg-neutral-500/10'
              : 'text-cream hover:bg-cream/10'
          }`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: ease.smooth }}
            className="fixed inset-0 w-full h-screen bg-[#F6F1EA]/98 dark:bg-neutral-950/98 backdrop-blur-xl z-30 flex flex-col justify-between pt-[75px] pb-8 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6 pt-10">
              {[
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((item, idx) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    custom={idx}
                    variants={shouldReduce ? {} : mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-poppins text-3xl font-semibold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-[#8B3116] dark:text-[#D9B7A6]'
                        : 'text-neutral-600 hover:text-[#8B3116] dark:text-neutral-400 dark:hover:text-[#D9B7A6]'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}

              <motion.div
                custom={3}
                variants={shouldReduce ? {} : mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pt-6"
              >
                <a
                  href="https://drive.google.com/file/d/1BPsx-Yfx4xdxvhu99tkYiuUhq5-8LFNz/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block font-poppins font-medium text-lg tracking-wide px-8 py-3 rounded-full border border-[#8B3116] text-[#8B3116] hover:bg-[#8B3116] hover:text-cream dark:border-[#D9B7A6] dark:text-[#D9B7A6] dark:hover:bg-[#D9B7A6] dark:hover:text-neutral-950 transition-all duration-300"
                >
                  Resume
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xs font-poppins text-neutral-500 dark:text-neutral-400 tracking-wider flex justify-between items-center border-t border-neutral-300 dark:border-neutral-800 pt-4"
            >
              <span>tk. portfolio</span>
              <span>© {new Date().getFullYear()}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
