import { motion, useReducedMotion } from 'framer-motion';
import tarunCutout from '@/assets/images/tarun-cutout.png';
import signatureImg from '@/assets/images/signature.png';
import { fadeUp, fadeIn, lineExpand, ease, hover, tap } from '@/utils/motion';

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const GithubIcon = ({ className = "w-5 h-5" }) => (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );

  const LinkedinIcon = ({ className = "w-5 h-5" }) => (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  // Animation helpers — returns static props when reduced motion is preferred
  const anim = (variant) => shouldReduce ? {} : variant;
  const animInitial = (variant) => shouldReduce ? {} : { initial: variant.initial };
  const animAnimate = (variant) => shouldReduce ? {} : { animate: variant.animate || variant.whileInView, transition: variant.transition };

  return (
    <section id="hero" className="w-full min-h-screen relative overflow-hidden bg-[#8B3116] font-poppins text-cream">
      {/* Desktop Layout (md and up) */}
      <div className="hidden md:flex h-screen w-full select-none">

        {/* Left Sidebar - 90px width, Solid deep rust */}
        <motion.div
          {...animInitial(fadeIn(0))}
          {...animAnimate(fadeIn(0))}
          className="relative w-[90px] min-w-[90px] bg-[#8B3116] flex flex-col justify-between items-center border-r border-cream/20 z-35"
        >
          {/* Top Square Logo Box */}
          <div className="w-[90px] h-[70px] border-b border-cream/20 flex items-center justify-center">
          </div>

          {/* Social Icons - Positioned at the bottom, above the horizontal divider line */}
          <div className="flex-grow flex flex-col justify-end items-center gap-5 pb-8 text-cream/85">
            <motion.a
              href="https://github.com/tarun7kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-cream/20 bg-cream/5 flex items-center justify-center hover:bg-cream hover:text-[#8B3116] hover:border-transparent transition-all duration-300 shadow-md cursor-pointer"
              whileHover={shouldReduce ? {} : hover.scale}
              whileTap={shouldReduce ? {} : tap.press}
            >
              <GithubIcon className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tarun7kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-cream/20 bg-cream/5 flex items-center justify-center hover:bg-cream hover:text-[#8B3116] hover:border-transparent transition-all duration-300 shadow-md cursor-pointer"
              whileHover={shouldReduce ? {} : hover.scale}
              whileTap={shouldReduce ? {} : tap.press}
            >
              <LinkedinIcon className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Bottom Back Button Box */}
          <div className="w-[90px] h-[70px] border-t border-cream/20 flex items-center justify-center">
          </div>
        </motion.div>

        {/* Middle Image Column - 18% width */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, x: -30 }}
          animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: ease.smooth, delay: 0.15 }}
          className="w-[18%] bg-[#F6F1EA] flex flex-col justify-between relative border-r border-cream/20 z-30 overflow-visible"
        >
          {/* Top navigation - Height aligned with sidebar top box */}
          <div className="h-[70px] flex items-center justify-end px-8 text-[11px] font-semibold tracking-widest text-[#8B3116] z-20">
          </div>

          {/* Overflow Photo - scaled larger to dominate space */}
          <div className="absolute left-0 bottom-0 w-full h-[92%] overflow-visible pointer-events-none flex justify-center">
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.96, y: 30 }}
              animate={shouldReduce ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-full flex justify-center origin-bottom"
            >
              <img
                src={tarunCutout}
                alt="Tarun"
                className="h-full w-[200%] max-w-none object-contain object-bottom select-none pointer-events-auto filter drop-shadow-[15px_10px_20px_rgba(0,0,0,0.22)] transform translate-x-[18%] scale-[1.45] origin-bottom z-30"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content Column - bg-rust-gradient */}
        <div className="flex-1 bg-rust-gradient flex flex-col justify-between pl-[100px] lg:pl-[140px] xl:pl-[180px] pr-[72px] pt-[48px] pb-[48px] text-cream relative z-20 overflow-y-auto overflow-x-hidden">
          {/* Top navigation - Align closer to the top, height matching other columns */}
          <div className="h-[70px] flex items-center justify-start gap-8 text-[11px] font-semibold tracking-widest text-cream/90">
          </div>

          {/* Main Info Area - Tightened spacing, aligned to top with breathing room */}
          <div className="flex-grow flex flex-col justify-start pt-16 xl:pt-22 max-w-4xl pr-4">

            {/* Header name + signature overlapping upper-right portion */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
              animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease.smooth, delay: 0.3 }}
              className="relative mb-6 select-none flex items-end justify-between pr-4"
            >
              <h1 className="text-[5rem] md:text-[6.2vw] xl:text-[7.5rem] font-geist font-extrabold tracking-[-0.04em] leading-[0.9] text-cream uppercase">
                TARUN
              </h1>
              <div className="absolute right-0 top-[-20%] w-[110px] md:w-[140px] lg:w-[170px] xl:w-[200px]">
                <img
                  src={signatureImg}
                  alt="Tarun Signature"
                  className="w-full h-auto select-none pointer-events-none drop-shadow-lg invert brightness-[2.5] mix-blend-screen opacity-75 transform -rotate-6"
                />
              </div>
            </motion.div>

            {/* Profile Grid - 3-column layout */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: ease.smooth, delay: 0.5 }}
              className="flex items-center gap-6 md:gap-[40px] mb-5"
            >
              <div>
                <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">Full Name</span>
                <span className="font-poppins font-normal text-[17px] md:text-[18px] leading-[1.4] text-[#F6F1EA] block">Tarun Kumar</span>
              </div>
              <div className="h-10 w-[1px] bg-[rgba(246,241,234,0.2)]"></div>
              <div>
                <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">Education</span>
                <span className="font-poppins font-normal text-[17px] md:text-[18px] leading-[1.4] text-[#F6F1EA] block">B.Tech ECE</span>
              </div>
              <div className="h-10 w-[1px] bg-[rgba(246,241,234,0.2)]"></div>
              <div>
                <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">Available</span>
                <span className="font-poppins font-normal text-[17px] md:text-[18px] leading-[1.4] text-[#F6F1EA] block">Internships & Full-Time Roles</span>
              </div>
            </motion.div>

            {/* Catchphrase Section - placed immediately after the info row with tight spacing */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0 }}
              animate={shouldReduce ? {} : { opacity: 1 }}
              transition={{ duration: 0.6, ease: ease.smooth, delay: 0.65 }}
              className="my-4"
            >
              <p className="font-poppins font-normal text-[15px] md:text-[16px] leading-[1.6] text-cream/90 max-w-[800px] italic">
                "exploring systems , solving problems , building with intent"
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={shouldReduce ? {} : { scaleX: 0 }}
              animate={shouldReduce ? {} : { scaleX: 1 }}
              transition={{ duration: 0.8, ease: ease.inOut, delay: 0.75 }}
              className="h-[1px] bg-[rgba(246,241,234,0.2)] w-full mb-4 origin-left"
            />

            {/* About Section */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: ease.smooth, delay: 0.85 }}
              className="mt-4"
            >
              <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">About</span>
              <p className="font-poppins font-normal text-[15px] md:text-[16px] leading-[1.7] text-cream/80 max-w-[800px]">
                I enjoy working through problems that don't have obvious answers. Most of my time goes into figuring things out whether it's understanding how something works under the hood or building it from scratch until it feels right. I'm drawn to systems, logic, and clean structure, but I also care about how things look and feel when someone actually uses them. Lately, I've been focusing on improving my problem-solving skills and building projects that reflect that process.
              </p>
            </motion.div>
          </div>

          {/* Footer Area */}
          <div className="flex justify-end text-xs font-medium text-cream/60 tracking-wider">
          </div>
        </div>
      </div>

      {/* Mobile Layout (below md) - solid #8B3116 for header, rust-gradient for content */}
      <div className="md:hidden flex flex-col min-h-screen text-cream bg-rust-gradient select-none">
        {/* Mobile Header Bar - Deep Rust */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0 }}
          animate={shouldReduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.5, ease: ease.smooth }}
          className="bg-[#8B3116] flex justify-between items-center px-4 py-3 border-b border-cream/20 sticky top-0 z-30"
        >
          <div className="w-10 h-10">
          </div>

          <div className="flex items-center gap-4 text-cream/80">
            <motion.a
              href="https://github.com/tarun7kumar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduce ? {} : hover.scale}
              whileTap={shouldReduce ? {} : tap.press}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tarun7kumar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduce ? {} : hover.scale}
              whileTap={shouldReduce ? {} : tap.press}
            >
              <LinkedinIcon />
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile Image Section */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0 }}
          animate={shouldReduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.7, ease: ease.smooth, delay: 0.1 }}
          className="bg-[#F6F1EA] min-h-[340px] relative flex flex-col justify-between p-4 overflow-hidden"
        >
          {/* Mobile Photo Column Header */}
          <div className="flex items-center justify-end text-[10px] font-bold tracking-widest text-[#8B3116] z-20">
          </div>

          {/* Photo scaled larger and aligned bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[92%] flex justify-center">
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.96, y: 30 }}
              animate={shouldReduce ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-full flex justify-center origin-bottom"
            >
              <img
                src={tarunCutout}
                alt="Tarun"
                className="h-full max-w-full object-contain object-bottom filter drop-shadow-[8px_8px_16px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Details Section - bg-rust-gradient */}
        <div className="flex-1 bg-rust-gradient p-6 space-y-6">
          {/* Header */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.smooth, delay: 0.2 }}
            className="flex items-end justify-between flex-wrap gap-4 relative"
          >
            <h1 className="text-6xl font-geist font-extrabold tracking-[-3px] leading-[0.9] text-cream">
              TARUN
            </h1>
            <div className="w-[80px] md:w-[100px] relative z-20">
              <img
                src={signatureImg}
                alt="Tarun Signature"
                className="w-full h-auto select-none pointer-events-none drop-shadow-lg invert brightness-[2.5] mix-blend-screen opacity-80 transform -rotate-6"
              />
            </div>
          </motion.div>

          {/* Profile Quick Stats */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.smooth, delay: 0.35 }}
            className="grid grid-cols-2 gap-4 text-sm bg-white/5 p-4 rounded-lg border border-cream/20"
          >
            <div>
              <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">Real Name</span>
              <span className="font-poppins font-normal text-[18px] text-cream">Tarun Kumar</span>
            </div>
            <div>
              <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">Education</span>
              <span className="font-poppins font-normal text-[18px] text-cream">B.Tech ECE</span>
            </div>
            <div className="col-span-2 mt-2">
              <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">Available</span>
              <span className="font-poppins font-normal text-[18px] text-cream">Internships & Full-Time Roles</span>
            </div>
          </motion.div>

          {/* Catchphrase */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            animate={shouldReduce ? {} : { opacity: 1 }}
            transition={{ duration: 0.6, ease: ease.smooth, delay: 0.45 }}
          >
            <p className="text-xl font-poppins font-medium leading-tight bg-white/5 p-4 rounded-lg border border-cream/20 text-cream">
              exploring systems , solving problems , building with intent
            </p>
          </motion.div>

          {/* About */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.smooth, delay: 0.55 }}
          >
            <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">About</span>
            <p className="text-sm md:text-[18px] font-poppins font-normal leading-[1.8] text-cream/90 bg-white/5 p-4 rounded-lg border border-cream/20">
              I enjoy working through problems that don't have obvious answers. Most of my time goes into figuring things out whether it's understanding how something works under the hood or building it from scratch until it feels right. I'm drawn to systems, logic, and clean structure, but I also care about how things look and feel when someone actually uses them. Lately, I've been focusing on improving my problem solving skills and building projects that reflect that process.
            </p>
          </motion.div>

          {/* Footer URL */}
          <div className="pt-4 border-t border-cream/20 flex justify-center text-xs">
          </div>
        </div>
      </div>
    </section>
  );
}
