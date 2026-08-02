import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, Calendar, ChevronDown, ShieldCheck } from 'lucide-react';
import { ease, duration } from '@/utils/motion';

/* ─── Extracted Certificates Data ───────────────────────────────────────────── */
const certificates = [
  {
    id: 'genai-llm',
    title: 'Generative AI with LLMs',
    fullTitle: 'Generative AI with Large Language Models',
    organization: 'DeepLearning.AI & AWS',
    platform: 'Coursera',
    date: 'July 2026',
    credentialUrl: 'https://coursera.org/verify/T5X75GFTVF90',
    accentColor: '#FF9900',
    orgLogo: 'DeepLearning.AI',
    description:
      'Authorized by DeepLearning.AI and Amazon Web Services via Coursera. Validates expertise in LLM architecture, transformer models, fine-tuning, PEFT, RLHF, and generative AI application deployment.',
  },
  {
    id: 'oracle-genai-pro',
    title: 'OCI Gen AI Professional',
    fullTitle: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    organization: 'Oracle University',
    platform: 'Oracle Certified Professional',
    date: 'October 2025',
    credentialUrl: '#',
    accentColor: '#E12A10',
    orgLogo: 'ORACLE',
    description:
      'Recognized by Oracle Corporation as Oracle Certified Professional. Demonstrates advanced competency in OCI Generative AI services, LLM customization, vector databases, and enterprise AI deployment.',
  },
  {
    id: 'oracle-ai-foundations',
    title: 'OCI AI Foundations',
    fullTitle: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    organization: 'Oracle University',
    platform: 'Oracle Certified Associate',
    date: 'September 2025',
    credentialUrl: '#',
    accentColor: '#C74634',
    orgLogo: 'ORACLE',
    description:
      'Recognized by Oracle Corporation as Oracle Certified. Validates foundational knowledge in Artificial Intelligence, Machine Learning workloads, and Oracle Cloud Infrastructure AI tools.',
  },
  {
    id: 'vlsi-ethnus',
    title: 'VLSI Design & Verification',
    fullTitle: 'VLSI Design & Verification Certification Program',
    organization: 'Ethnus Codemithra',
    platform: 'Certification Program',
    date: 'July 2025',
    credentialUrl: 'https://ethnusedu.com/certverify',
    accentColor: '#8B5CF6',
    orgLogo: 'ETHNUS',
    description:
      'Completed comprehensive training program (May 2025 – July 2025) covering digital VLSI architecture, SystemVerilog fundamentals, RTL design, and verification methodologies.',
  },
  {
    id: 'vit-python-data',
    title: 'Python for Data Analysis',
    fullTitle: 'Python for Data Analysis and Visualization (VAC2006)',
    organization: 'Vellore Institute of Technology',
    platform: 'VIT',
    date: 'February 2026',
    credentialUrl: '#',
    accentColor: '#10B981',
    orgLogo: 'VIT',
    description:
      'Value-added 32-hour course conducted by School of Electronics Engineering & School of Computer Science at VIT. Covers NumPy, Pandas, Matplotlib, Seaborn, and statistical data visualization.',
  },
];

/* ─── Stylish Brand Credential Emblem ───────────────────────────────────────── */
function CredentialEmblem({ cert }) {
  return (
    <div
      className="w-full h-full rounded-2xl flex flex-col items-center justify-between p-5 relative overflow-hidden select-none"
      style={{
        background: `linear-gradient(145deg, ${cert.accentColor}14, ${cert.accentColor}05, rgba(20,20,20,0.8))`,
        border: `1px solid ${cert.accentColor}25`,
      }}
    >
      {/* Corner indicator */}
      <div className="absolute top-3 left-3 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: `${cert.accentColor}50` }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: `${cert.accentColor}25` }} />
      </div>

      {/* Top watermark */}
      <div className="w-full flex items-center justify-between text-[10px] font-poppins font-medium text-[#F6F1EA]/30 tracking-widest uppercase pt-1">
        <span>VERIFIED CREDENTIAL</span>
        <ShieldCheck size={14} style={{ color: cert.accentColor }} />
      </div>

      {/* Center Seal Icon */}
      <div className="relative my-3 flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10"
          style={{
            background: `linear-gradient(135deg, ${cert.accentColor}25, ${cert.accentColor}0A)`,
            border: `1.5px solid ${cert.accentColor}40`,
            boxShadow: `0 8px 24px ${cert.accentColor}1A`,
          }}
        >
          <Award size={32} style={{ color: cert.accentColor }} />
        </div>
        <div
          className="mt-3 px-3 py-1 rounded-md text-[10px] font-geist font-extrabold uppercase tracking-wider text-center"
          style={{
            color: cert.accentColor,
            background: `${cert.accentColor}15`,
            border: `1px solid ${cert.accentColor}30`,
          }}
        >
          {cert.orgLogo}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full flex flex-col items-center gap-1.5">
        <div
          className="w-24 h-[2px] rounded-full"
          style={{ background: `linear-gradient(90deg, transparent, ${cert.accentColor}40, transparent)` }}
        />
        <span className="text-[9.5px] font-poppins uppercase tracking-[0.2em] text-[#F6F1EA]/25">
          {cert.platform}
        </span>
      </div>
    </div>
  );
}

/* ─── Desktop Card Component ────────────────────────────────────────────────── */
function DesktopCard({ cert, index, isActive, hasActive, onMouseEnter, shouldReduce }) {
  const isInactive = hasActive && !isActive;
  const padNum = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      animate={
        shouldReduce
          ? {}
          : {
              flex: isActive ? 3.6 : isInactive ? 0.7 : 1,
              opacity: isInactive ? 0.55 : 1,
            }
      }
      transition={
        shouldReduce
          ? {}
          : { type: 'spring', stiffness: 220, damping: 26 }
      }
      className="relative h-[450px] rounded-[22px] overflow-hidden cursor-pointer group select-none"
      style={{ flex: 1, minWidth: 0 }}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
    >
      {/* Background card container */}
      <div
        className={`absolute inset-0 rounded-[22px] transition-all duration-500 border ${
          isActive
            ? 'bg-[#1c1c1c] border-[#A33614]/30 shadow-[0_16px_50px_rgba(0,0,0,0.5),0_0_24px_rgba(163,54,20,0.12)]'
            : 'bg-[#161616] border-[#F6F1EA]/[0.05] group-hover:border-[#A33614]/20'
        }`}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${cert.accentColor}, ${cert.accentColor}40, transparent)`,
          opacity: isActive ? 1 : 0.35,
        }}
      />

      {/* Subtle radial glow when active */}
      {isActive && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${cert.accentColor}0E, transparent 70%)`,
          }}
        />
      )}

      {/* ── COLLAPSED VIEW (Clean: Number + Vertical Title + Org Badge) ──── */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-between py-7 px-3 z-10 pointer-events-none"
        animate={{ opacity: isActive ? 0 : 1, scale: isActive ? 0.94 : 1 }}
        transition={{ duration: 0.25 }}
      >
        {/* Index Number */}
        <span
          className="text-[14px] font-geist font-extrabold tracking-wider select-none transition-colors duration-300"
          style={{ color: `${cert.accentColor}90` }}
        >
          {padNum}
        </span>

        {/* Vertical Certificate Title */}
        <span
          className="text-[12px] font-poppins font-semibold text-[#F6F1EA]/50 tracking-[0.12em] uppercase select-none"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            whiteSpace: 'nowrap',
          }}
        >
          {cert.title}
        </span>

        {/* Issuing Body Name Badge */}
        <div
          className="px-2.5 py-1 rounded-full text-[9px] font-geist font-bold uppercase tracking-wider select-none shrink-0 max-w-full truncate"
          style={{
            color: cert.accentColor,
            background: `${cert.accentColor}12`,
            border: `1px solid ${cert.accentColor}25`,
          }}
        >
          {cert.orgLogo}
        </div>
      </motion.div>

      {/* ── EXPANDED VIEW ──────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 flex gap-5 p-6 z-10 items-stretch"
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, delay: isActive ? 0.12 : 0 }}
        style={{ pointerEvents: isActive ? 'auto' : 'none' }}
      >
        {/* Credential Emblem */}
        <div className="w-[170px] lg:w-[210px] shrink-0">
          <CredentialEmblem cert={cert} />
        </div>

        {/* Text Details */}
        <div className="flex flex-col justify-between min-w-0 flex-1 py-1">
          <div>
            <h3 className="text-[20px] lg:text-[22px] font-geist font-bold text-[#F6F1EA] tracking-[-0.02em] leading-[1.25] mb-1.5">
              {cert.fullTitle}
            </h3>

            <p
              className="text-[13.5px] font-poppins font-semibold mb-1"
              style={{ color: cert.accentColor }}
            >
              {cert.organization}
            </p>

            {/* Date right below issuing body name */}
            <div className="flex items-center gap-1.5 text-[#F6F1EA]/40 text-[12px] font-poppins mb-3">
              <Calendar size={13} />
              <span>{cert.date}</span>
            </div>

            <p className="text-[12.5px] font-poppins leading-[1.65] text-[#F6F1EA]/50">
              {cert.description}
            </p>
          </div>

          <div className="pt-3">
            <motion.a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-poppins font-medium transition-colors duration-200"
              style={{
                background: `${cert.accentColor}18`,
                color: '#F6F1EA',
                border: `1px solid ${cert.accentColor}35`,
              }}
              whileHover={
                shouldReduce
                  ? {}
                  : {
                      scale: 1.03,
                      y: -1,
                      boxShadow: `0 6px 20px ${cert.accentColor}20`,
                    }
              }
              whileTap={shouldReduce ? {} : { scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              View Certificate
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Mobile Card Component ─────────────────────────────────────────────────── */
function MobileCard({ cert, index, isActive, onTap, shouldReduce }) {
  const padNum = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className="rounded-[18px] overflow-hidden bg-[#161616] border transition-colors duration-300"
      style={{
        borderColor: isActive ? `${cert.accentColor}40` : 'rgba(246,241,234,0.06)',
      }}
    >
      {/* Top accent line */}
      <div
        className="h-[2.5px] transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${cert.accentColor}, ${cert.accentColor}40, transparent)`,
          opacity: isActive ? 1 : 0.3,
        }}
      />

      {/* Header button */}
      <button
        className="w-full flex items-center gap-3.5 p-4 text-left bg-transparent cursor-pointer"
        onClick={onTap}
        aria-expanded={isActive}
      >
        <span
          className="text-[13px] font-geist font-extrabold shrink-0"
          style={{ color: cert.accentColor }}
        >
          {padNum}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-geist font-bold text-[#F6F1EA] truncate">
            {cert.fullTitle}
          </h3>
          <p
            className="text-[12px] font-poppins font-medium"
            style={{ color: cert.accentColor }}
          >
            {cert.organization}
          </p>
        </div>
        <motion.div
          animate={shouldReduce ? {} : { rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-[#F6F1EA]/40" />
        </motion.div>
      </button>

      {/* Expanded view on mobile */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pt-1">
              <div className="h-[1px] bg-[#F6F1EA]/8 mb-4" />

              <div className="h-[140px] mb-4">
                <CredentialEmblem cert={cert} />
              </div>

              <div className="flex items-center gap-1.5 text-[#F6F1EA]/40 text-[12px] font-poppins mb-3">
                <Calendar size={13} />
                <span>{cert.date}</span>
              </div>

              <p className="text-[13px] font-poppins leading-[1.65] text-[#F6F1EA]/60 mb-4">
                {cert.description}
              </p>

              <div className="flex justify-end pt-1">
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12.5px] font-poppins font-medium"
                  style={{
                    background: `${cert.accentColor}18`,
                    color: '#F6F1EA',
                    border: `1px solid ${cert.accentColor}35`,
                  }}
                  whileTap={shouldReduce ? {} : { scale: 0.96 }}
                >
                  View Certificate
                  <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Certificates Section ─────────────────────────────────────────────── */
export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(null); // No card active by default
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-[#141414] relative overflow-hidden">
      {/* Background watermark text */}
      <div className="absolute bottom-[-40px] left-[-30px] select-none pointer-events-none hidden lg:block z-0 opacity-[0.03]">
        <h2 className="text-[14rem] font-geist font-black tracking-tighter leading-none whitespace-nowrap text-white">
          CERTIFICATIONS
        </h2>
      </div>

      {/* Soft background ambient radial lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#A33614]/[0.035] blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#A33614]/[0.025] blur-[110px] pointer-events-none select-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 28 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-extrabold text-[#F6F1EA] leading-tight tracking-[-0.03em] mb-4">
            Certifications.
          </h2>
          <motion.div
            initial={shouldReduce ? {} : { scaleX: 0 }}
            whileInView={shouldReduce ? {} : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: duration.slow,
              ease: ease.inOut,
              delay: 0.2,
            }}
            className="w-14 h-[3px] bg-[#A33614] mb-5 origin-left"
          />
          <p className="font-poppins text-[16px] md:text-[17px] leading-[1.7] text-[#F6F1EA]/50 max-w-xl">
            Industry Certifications &amp; Professional Credentials
          </p>
        </motion.div>

        {/* Desktop Layout: Interactive Horizontal Expander */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="hidden md:flex gap-3.5"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {certificates.map((cert, i) => (
            <DesktopCard
              key={cert.id}
              cert={cert}
              index={i}
              isActive={activeIndex === i}
              hasActive={activeIndex !== null}
              onMouseEnter={() => setActiveIndex(i)}
              shouldReduce={shouldReduce}
            />
          ))}
        </motion.div>

        {/* Mobile Layout: Clean Accordion Stack */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="md:hidden flex flex-col gap-3"
        >
          {certificates.map((cert, i) => (
            <MobileCard
              key={cert.id}
              cert={cert}
              index={i}
              isActive={activeIndex === i}
              onTap={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
              shouldReduce={shouldReduce}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
