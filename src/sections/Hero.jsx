import tarunCutout from '@/assets/images/tarun-cutout.png';
import signatureImg from '@/assets/images/signature.png';

export default function Hero() {
  const YoutubeIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const SearchIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  return (
    <section id="hero" className="w-full min-h-screen relative overflow-hidden bg-[#8B3116] font-poppins text-cream">
      {/* Desktop Layout (md and up) */}
      <div className="hidden md:flex h-screen w-full select-none">

        {/* Left Sidebar - 90px width, Solid deep rust */}
        <div className="w-[90px] min-w-[90px] bg-[#8B3116] flex flex-col justify-between items-center border-r border-cream/20 z-30">
          {/* Top Square Logo Box */}
          <div className="w-[90px] h-[70px] border-b border-cream/20 flex items-center justify-center">
          </div>

          {/* Social Icons - Centered vertically with consistent vertical padding */}
          <div className="flex-grow flex flex-col justify-center items-center gap-8 text-cream/85">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors duration-200">
              <YoutubeIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors duration-200">
              <XIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors duration-200">
              <InstagramIcon />
            </a>
          </div>

          {/* Bottom Back Button Box */}
          <div className="w-[90px] h-[70px] border-t border-cream/20 flex items-center justify-center">
          </div>
        </div>

        {/* Middle Image Column - 18% width */}
        <div className="w-[18%] bg-[#F6F1EA] flex flex-col justify-between relative border-r border-cream/20 z-30 overflow-visible">
          {/* Top navigation - Height aligned with sidebar top box */}
          <div className="h-[70px] flex items-center justify-end px-8 text-[11px] font-semibold tracking-widest text-[#8B3116] z-20">
            <button className="hover:opacity-80 transition-opacity cursor-pointer">
              <SearchIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Overflow Photo - scaled larger to dominate space */}
          <div className="absolute left-0 bottom-0 w-full h-[92%] overflow-visible pointer-events-none flex justify-center">
            <img
              src={tarunCutout}
              alt="Tarun"
              className="h-full w-[200%] max-w-none object-contain object-bottom select-none pointer-events-auto filter drop-shadow-[15px_10px_20px_rgba(0,0,0,0.22)] transform translate-x-[18%] scale-[1.45] origin-bottom z-30"
            />
          </div>
        </div>

        {/* Right Content Column - bg-rust-gradient */}
        <div className="flex-1 bg-rust-gradient flex flex-col justify-between pl-[100px] lg:pl-[140px] xl:pl-[180px] pr-[72px] pt-[48px] pb-[48px] text-cream relative z-20 overflow-y-auto overflow-x-hidden">
          {/* Top navigation - Align closer to the top, height matching other columns */}
          <div className="h-[70px] flex items-center justify-start gap-8 text-[11px] font-semibold tracking-widest text-cream/90">
          </div>

          {/* Main Info Area - Tightened spacing, aligned to top with breathing room */}
          <div className="flex-grow flex flex-col justify-start pt-16 xl:pt-22 max-w-4xl pr-4">

            {/* Header name + signature overlapping upper-right portion */}
            <div className="relative mb-6 select-none flex items-end justify-between pr-4">
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
            </div>

            {/* Profile Grid - 3-column layout */}
            <div className="flex items-center gap-6 md:gap-[40px] mb-5">
              <div>
                <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">Real Name</span>
                <span className="font-poppins font-medium text-[17px] md:text-[18px] leading-[1.4] text-[#F6F1EA] block">Tarun Kumar</span>
              </div>
              <div className="h-10 w-[1px] bg-[rgba(246,241,234,0.2)]"></div>
              <div>
                <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">Nickname</span>
                <span className="font-poppins font-medium text-[17px] md:text-[18px] leading-[1.4] text-[#F6F1EA] block">Tarun</span>
              </div>
              <div className="h-10 w-[1px] bg-[rgba(246,241,234,0.2)]"></div>
              <div>
                <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">Birthday</span>
                <span className="font-poppins font-medium text-[17px] md:text-[18px] leading-[1.4] text-[#F6F1EA] block">March 21, 2002</span>
              </div>
            </div>

            {/* Catchphrase Section - placed immediately after the info row with tight spacing */}
            <div className="my-4">
              <p className="font-poppins font-normal text-[15px] md:text-[16px] leading-[1.6] text-cream/90 max-w-[800px] italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[rgba(246,241,234,0.2)] w-full mb-4"></div>

            {/* About Section */}
            <div className="mt-4">
              <span className="block font-poppins font-normal text-[13px] leading-[1.5] uppercase tracking-wider text-[#D8B7A2] mb-1">About</span>
              <p className="font-poppins font-normal text-[15px] md:text-[16px] leading-[1.7] text-cream/80 max-w-[800px]">
                I enjoy working through problems that don't have obvious answers. Most of my time goes into figuring things out whether it's understanding how something works under the hood or building it from scratch until it feels right. I'm drawn to systems, logic, and clean structure, but I also care about how things look and feel when someone actually uses them. Lately, I've been focusing on improving my problem-solving skills and building projects that reflect that process.
              </p>
            </div>
          </div>

          {/* Footer Area */}
          <div className="flex justify-end text-xs font-medium text-cream/60 tracking-wider">
          </div>
        </div>
      </div>

      {/* Mobile Layout (below md) - solid #8B3116 for header, rust-gradient for content */}
      <div className="md:hidden flex flex-col min-h-screen text-cream bg-rust-gradient select-none">
        {/* Mobile Header Bar - Deep Rust */}
        <div className="bg-[#8B3116] flex justify-between items-center px-4 py-3 border-b border-cream/20 sticky top-0 z-30">
          <div className="w-10 h-10">
          </div>

          <div className="flex items-center gap-4 text-cream/80">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <XIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Mobile Image Section */}
        <div className="bg-[#F6F1EA] min-h-[340px] relative flex flex-col justify-between p-4 overflow-hidden">
          {/* Mobile Photo Column Header */}
          <div className="flex items-center justify-end text-[10px] font-bold tracking-widest text-[#8B3116] z-20">
            <button>
              <SearchIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Photo scaled larger and aligned bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[92%] flex justify-center">
            <img
              src={tarunCutout}
              alt="Tarun"
              className="h-full max-w-full object-contain object-bottom filter drop-shadow-[8px_8px_16px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>

        {/* Mobile Details Section - bg-rust-gradient */}
        <div className="flex-1 bg-rust-gradient p-6 space-y-6">
          {/* Header */}
          <div className="flex items-end justify-between flex-wrap gap-4 relative">
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
          </div>

          {/* Profile Quick Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm bg-white/5 p-4 rounded-lg border border-cream/20">
            <div>
              <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">Real Name</span>
              <span className="font-poppins font-medium text-[18px] text-cream">Tarun Kumar</span>
            </div>
            <div>
              <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">Nickname</span>
              <span className="font-poppins font-medium text-[18px] text-cream">Tarun</span>
            </div>
            <div className="col-span-2 mt-2">
              <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">Birthday</span>
              <span className="font-poppins font-medium text-[18px] text-cream">March 21, 2002</span>
            </div>
          </div>

          {/* Catchphrase */}
          <div>
            <p className="text-xl font-poppins font-medium leading-tight bg-white/5 p-4 rounded-lg border border-cream/20 text-cream">
              Design is not just what it looks like and feels like. Design is how it works.
            </p>
          </div>

          {/* About */}
          <div>
            <span className="block text-[15px] font-poppins font-normal text-muted-peach mb-1">About</span>
            <p className="text-sm md:text-[18px] font-poppins font-normal leading-[1.8] text-cream/90 bg-white/5 p-4 rounded-lg border border-cream/20">
              I enjoy working through problems that don't have obvious answers. Most of my time goes into figuring things out whether it's understanding how something works under the hood or building it from scratch until it feels right. I'm drawn to systems, logic, and clean structure, but I also care about how things look and feel when someone actually uses them. Lately, I've been focusing on improving my problem-solving skills and building projects that reflect that process.
            </p>
          </div>

          {/* Footer URL */}
          <div className="pt-4 border-t border-cream/20 flex justify-center text-xs">
          </div>
        </div>
      </div>
    </section>
  );
}
