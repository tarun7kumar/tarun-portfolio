import { useState, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { ease, duration, hover, tap } from '@/utils/motion';

import campusflowPreview from '@/assets/images/campusflow-preview.png';
import researchmindPreview from '@/assets/images/researchmind-preview.png';
import heartDiseasePreview from '@/assets/images/heart-disease-preview.png';
import networkTrafficPreview from '@/assets/images/network-traffic-preview.png';
import trieAutocompletePreview from '@/assets/images/trie-autocomplete-preview.png';

import { Link } from 'react-router-dom';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const projects = [
  {
    title: 'CampusFlow',
    tagline: 'AI-Powered Student Productivity Platform',
    description:
      'An all-in-one dashboard that centralizes placement updates, deadlines, campus events, and emails powered by AI.',
    tech: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Gemini AI', icon: '✦' },
      { name: 'Gmail API', icon: '✉️' },
      { name: 'REST API', icon: '🔗' },
    ],
    github: 'https://github.com/tarun7kumar/CampusFlow',
    link: 'https://campus-flow-ruddy.vercel.app/',
    image: campusflowPreview,
    highlights: [
      'Built a full-stack platform using React.js and FastAPI with 4+ integrated student productivity modules.',
      'Developed an AI-powered email intelligence pipeline using Gmail API and Gemini AI to classify emails into 5 categories while extracting summaries, important dates, and action items.',
      'Designed and implemented 6+ REST API endpoints powering a real-time dashboard with task tracking, prioritized updates, and AI-assisted productivity.',
    ],
  },
  {
    title: 'ResearchMind',
    tagline: 'Multi-Agent AI Research System',
    description:
      'An end-to-end multi-agent AI research system orchestrating a 4-stage pipeline for web search, content extraction, report generation, and quality review.',
    tech: [
      { name: 'Python', icon: '🐍' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'LangGraph', icon: '📊' },
      { name: 'Mistral AI', icon: '🤖' },
      { name: 'Streamlit', icon: '🎯' },
    ],
    github: 'https://github.com/tarun7kumar/ResearchMind',
    link: 'https://research-x-mind.streamlit.app/',
    image: researchmindPreview,
    highlights: [
      'Built an end-to-end multi-agent AI research system using LangChain and Mistral AI, orchestrating a 4-stage pipeline for web search, content extraction, report generation, and automated quality review.',
      'Developed 2 AI agents integrated with Tavily Search API and BeautifulSoup to retrieve, filter, and extract relevant information from the top 5 web sources.',
      'Engineered structured Writer and Critic LLM chains with Streamlit deployment, generating professional research reports with source citations and automated evaluation.',
    ],
  },
  {
    title: 'Heart Disease Prediction',
    tagline: 'Machine Learning Classification Pipeline',
    description:
      'Engineered an end-to-end heart disease classification pipeline on a clinical dataset of 303 samples, applying EDA and preprocessing techniques across 14 features.',
    tech: [
      { name: 'Python', icon: '🐍' },
      { name: 'scikit-learn', icon: '🧠' },
      { name: 'ML', icon: '📈' },
    ],
    github: 'https://github.com/tarun7kumar/heart-attack-risk-prediction',
    image: heartDiseasePreview,
    highlights: [
      'Benchmarked 4 ML models (Random Forest, SVM, MLP, XGBoost) with hyperparameter tuning',
      'Achieved 83.6% accuracy and 96.9% recall using Random Forest',
      'Minimized false negatives for real-world clinical screening applications',
    ],
  },
  {
    title: 'Network Traffic Classification',
    tagline: 'AI-Based Packet Analysis System',
    description:
      'Developed a lightweight preprocessing and feature extraction pipeline to classify network traffic types (HTTP, DNS, FTP) using packet-level features.',
    tech: [
      { name: 'Python', icon: '🐍' },
      { name: 'scikit-learn', icon: '🧠' },
      { name: 'Networking', icon: '🌐' },
    ],
    github: 'https://github.com/tarun7kumar/network-traffic-classification',
    image: networkTrafficPreview,
    highlights: [
      'Benchmarked 2 models (Random Forest, CNN) to compare efficiency and accuracy',
      'Achieved optimal classification performance through cross-validated evaluation',
      'Optimized for real-time traffic classification on network packet data',
    ],
  },
  {
    title: 'Autocomplete System',
    tagline: 'Trie Data Structure Engine',
    description:
      'Developed a Trie-based autocomplete engine processing a 37K+ word dictionary, enabling real-time prefix search with sub-millisecond query retrieval.',
    tech: [
      { name: 'C++', icon: '⚙️' },
      { name: 'Data Structures', icon: '🏗️' },
      { name: 'Algorithms', icon: '🔍' },
    ],
    github: 'https://github.com/tarun7kumar/trie-autosuggestion',
    image: trieAutocompletePreview,
    highlights: [
      'Implemented top-K suggestion ranking at each Trie node for relevant completions',
      'Optimized traversal logic to surface results while minimizing redundant visits',
      'Designed efficient data structure pipeline for instant word suggestions',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: ease.smooth,
    },
  },
};

const accentLineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: ease.inOut,
      delay: 0.1,
    },
  },
};

/* ─── Project Card ─────────────────────────────────────────────────────────── */

export function ProjectCard({ project, index, shouldReduce }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (shouldReduce || isFlipped) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(320px circle at ${x}px ${y}px, rgba(163,54,20,0.06), transparent 60%)`
  );

  const padIndex = String(index + 1).padStart(2, '0');

  const handleFlip = () => setIsFlipped(true);
  const handleFlipBack = () => setIsFlipped(false);

  return (
    <motion.div
      ref={cardRef}
      variants={shouldReduce ? {} : cardVariants}
      onMouseMove={handleMouseMove}
      whileHover={
        shouldReduce || isFlipped
          ? {}
          : {
            y: -5,
            transition: { duration: 0.3, ease: ease.out },
          }
      }
      className="group relative perspective-1200"
    >
      {/* ── Flip Inner Container ──────────────────────────────────────────── */}
      <div
        className={`relative w-full preserve-3d ${shouldReduce ? '' : 'flip-transition'}`}
        style={{
          transform: isFlipped ? 'rotateX(-180deg)' : 'rotateX(0deg)',
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════════
            FRONT FACE
            ═══════════════════════════════════════════════════════════════════ */}
        <div className={`relative w-full backface-hidden rounded-2xl overflow-hidden ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          {/* Accent line */}
          <motion.div
            variants={shouldReduce ? {} : accentLineVariants}
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A33614] via-[#D9B7A6]/60 to-transparent origin-left z-20"
          />

          {/* Radial hover glow */}
          {!shouldReduce && (
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background }}
            />
          )}

          <div className="relative z-10 bg-[#161616] border border-[#F6F1EA]/5 rounded-2xl p-6 sm:p-8 lg:p-10 group-hover:border-[#A33614]/25 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_2px_8px_rgba(163,54,20,0.1)] transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">

              {/* ── Left Column: Number, Lines & Text ─────────────────────── */}
              <div className="w-full md:w-[45%] relative flex flex-col min-h-full">

                {/* Number & Decorative Lines Container */}
                <div className="relative mb-6 pt-4">
                  {/* Decorative Horizontal Line */}
                  <div className="absolute left-[-2.5rem] right-0 top-[70%] h-[1px] bg-gradient-to-r from-transparent via-[#F6F1EA]/20 to-[#F6F1EA]/5 z-0" />

                  {/* Decorative Vertical Line */}
                  <div className="absolute left-[3rem] top-[40%] bottom-[-100vh] w-[1px] bg-gradient-to-b from-[#F6F1EA]/20 via-[#F6F1EA]/10 to-transparent z-0 hidden md:block" />

                  {/* Large Number */}
                  <div className="relative z-10 pl-[1rem]">
                    <span className="text-[6rem] sm:text-[7.5rem] lg:text-[9rem] font-geist font-black leading-[0.8] bg-clip-text text-transparent bg-rust-gradient select-none tracking-tighter">
                      {padIndex}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 md:pl-[4.5rem] flex flex-col flex-grow pt-4 md:pt-8">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[42px] font-geist font-bold text-[#F6F1EA] tracking-[-0.03em] leading-[1.1] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-medium text-[#A33614] mb-6 tracking-wide">
                    {project.tagline}
                  </p>

                  <p className="font-poppins text-[14px] sm:text-[15px] leading-[1.8] text-[#F6F1EA]/60 mb-8">
                    {project.description}
                  </p>

                  {/* Extra Info (if present) */}
                  {project.extraInfo && (
                    <div className="mt-auto pt-5 border-t border-[#F6F1EA]/10">
                      <p className="text-[13px] sm:text-[14px] font-poppins text-[#F6F1EA]/50">
                        <span className="text-[#A33614] font-medium mr-1.5">{project.extraInfo.label}</span>
                        {project.extraInfo.value}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Right Column: Image & Buttons ─────────────────────────── */}
              <div className="w-full md:w-[55%] flex flex-col justify-between pt-4">
                {/* Screenshot */}
                <div className="relative overflow-hidden rounded-xl border border-[#F6F1EA]/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[#1a1a1a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500 select-none pointer-events-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-start md:justify-end gap-3 lg:gap-4 mt-8 md:mt-10">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 bg-[#A33614] text-[#F6F1EA] px-6 py-3 rounded-xl text-[14px] font-poppins font-medium hover:bg-[#8B3116] transition-colors duration-200"
                      whileHover={
                        shouldReduce
                          ? {}
                          : {
                            scale: 1.03,
                            y: -2,
                            boxShadow: '0 8px 20px rgba(163, 54, 20, 0.3)',
                            transition: { type: 'spring', stiffness: 400, damping: 20 },
                          }
                      }
                      whileTap={shouldReduce ? {} : { scale: 0.96 }}
                    >
                      Live Demo
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-200 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]"
                      />
                    </motion.a>
                  )}

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/git flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[14px] font-poppins font-medium text-[#F6F1EA]/60 border border-[#F6F1EA]/10 hover:border-[#F6F1EA]/25 hover:text-[#F6F1EA] hover:bg-[#F6F1EA]/[0.03] transition-colors duration-200"
                    whileHover={
                      shouldReduce
                        ? {}
                        : {
                          scale: 1.03,
                          y: -2,
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                          transition: { type: 'spring', stiffness: 400, damping: 20 },
                        }
                    }
                    whileTap={shouldReduce ? {} : { scale: 0.96 }}
                  >
                    <GithubIcon size={18} />
                    <span className="transition-transform duration-200 group-hover/git:translate-x-[1px]">
                      GitHub
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -ml-1 group-hover/git:opacity-60 group-hover/git:translate-x-[2px] group-hover/git:-translate-y-[2px] transition-all duration-200"
                    />
                  </motion.a>

                  <motion.button
                    onClick={handleFlip}
                    className="group/det flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[14px] font-poppins font-medium text-[#F6F1EA]/60 border border-[#F6F1EA]/10 hover:border-[#F6F1EA]/25 hover:text-[#F6F1EA] hover:bg-[#F6F1EA]/[0.03] transition-colors duration-200 cursor-pointer"
                    whileHover={
                      shouldReduce
                        ? {}
                        : {
                          scale: 1.03,
                          y: -2,
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                          transition: { type: 'spring', stiffness: 400, damping: 20 },
                        }
                    }
                    whileTap={shouldReduce ? {} : { scale: 0.96 }}
                  >
                    Details
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover/det:translate-x-[3px]"
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BACK FACE
            ═══════════════════════════════════════════════════════════════════ */}
        <div
          className={`absolute inset-0 w-full backface-hidden rounded-2xl overflow-hidden ${isFlipped ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ transform: 'rotateX(180deg)' }}
        >
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A33614] via-[#D9B7A6]/60 to-transparent z-20" />

          <div className="relative z-10 bg-[#242424] border border-[#A33614]/25 rounded-2xl p-6 sm:p-8 md:p-10 h-full shadow-[0_16px_48px_rgba(0,0,0,0.25),0_2px_8px_rgba(163,54,20,0.08)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[2rem] sm:text-[2.5rem] font-geist font-black leading-none text-[#A33614]/20 select-none tracking-tighter">
                  {padIndex}
                </span>
                <div>
                  <h3 className="text-[18px] sm:text-[22px] font-geist font-bold text-[#F6F1EA] tracking-[-0.025em] leading-[1.2]">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-[12px] font-poppins font-medium text-[#A33614] tracking-wide">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <motion.button
                onClick={handleFlipBack}
                className="group/back inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-poppins font-medium text-[#F6F1EA]/50 border border-[#F6F1EA]/10 hover:border-[#A33614]/30 hover:text-[#F6F1EA]/80 hover:bg-[#A33614]/[0.05] transition-colors duration-200 cursor-pointer shrink-0"
                whileHover={
                  shouldReduce
                    ? {}
                    : {
                      scale: 1.05,
                      y: -2,
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 18,
                      },
                    }
                }
                whileTap={shouldReduce ? {} : { scale: 0.96 }}
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-200 group-hover/back:-translate-x-[3px]"
                />
                Back
              </motion.button>
            </div>

            <div className="h-[1px] bg-[#F6F1EA]/8 w-full mb-6" />

            {/* Content Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Key Highlights */}
              <div>
                <h4 className="text-[13px] font-poppins font-semibold text-[#F6F1EA]/70 uppercase tracking-[0.12em] mb-4 flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#A33614] inline-block" />
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-[13px] sm:text-[13.5px] font-poppins text-[#F6F1EA]/50 leading-[1.65]"
                    >
                      <span className="w-[6px] h-[6px] rounded-[2px] bg-[#A33614]/70 mt-[7px] shrink-0 rotate-45" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placeholder Sections */}
              <div className="space-y-6">
                {/* Architecture Placeholder */}
                <div>
                  <h4 className="text-[13px] font-poppins font-semibold text-[#F6F1EA]/70 uppercase tracking-[0.12em] mb-3 flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#A33614] inline-block" />
                    Architecture
                  </h4>
                  <div className="bg-[#1a1a1a]/80 border border-[#F6F1EA]/6 rounded-xl p-5 min-h-[100px] flex items-center justify-center">
                    <p className="text-[12px] font-poppins text-[#F6F1EA]/25 italic">
                      Architecture diagram coming soon
                    </p>
                  </div>
                </div>

                {/* My Role Placeholder */}
                <div>
                  <h4 className="text-[13px] font-poppins font-semibold text-[#F6F1EA]/70 uppercase tracking-[0.12em] mb-3 flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#A33614] inline-block" />
                    My Role
                  </h4>
                  <div className="bg-[#1a1a1a]/80 border border-[#F6F1EA]/6 rounded-xl p-5">
                    <p className="text-[12px] font-poppins text-[#F6F1EA]/25 italic">
                      Role details coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Pills (bottom) */}
            <div className="mt-6 pt-5 border-t border-[#F6F1EA]/8">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 text-[11px] font-poppins font-medium text-[#D9B7A6] uppercase tracking-[0.08em] bg-[#F6F1EA]/[0.03] border border-[#A33614]/30 px-3.5 py-1.5 rounded-full bg-[#A33614]/[0.04] cursor-default"
                  >
                    <span className="text-[12px] not-italic">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden min-h-screen">
      <div className="absolute bottom-[-40px] left-[-30px] select-none pointer-events-none hidden lg:block z-0 opacity-[0.03]">
        <h2 className="text-[14rem] font-geist font-black tracking-tighter leading-none whitespace-nowrap text-white">
          PROJECTS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-extrabold text-[#F6F1EA] leading-tight tracking-[-0.03em] mb-4">
            Things I've <span className="text-[#A33614]">Built.</span>
          </h2>
          <motion.div
            initial={shouldReduce ? {} : { scaleX: 0 }}
            whileInView={shouldReduce ? {} : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: duration.slow, ease: ease.inOut, delay: 0.2 }}
            className="w-14 h-[3px] bg-[#A33614] mb-6 origin-left"
          />
          <p className="font-poppins text-[16px] md:text-[17px] leading-[1.7] text-[#F6F1EA]/50 max-w-xl">
            Projects I built while learning how real systems behave.
          </p>
        </motion.div>

        <motion.div
          variants={shouldReduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="flex flex-col gap-7 lg:gap-9"
        >
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              shouldReduce={shouldReduce}
            />
          ))}
        </motion.div>

        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: duration.normal, ease: ease.smooth, delay: 0.15 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/projects">
              <motion.div
                className="group/more inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#A33614] text-[#F6F1EA] font-poppins font-medium text-[14px] rounded-full hover:bg-[#8B3116] transition-all duration-300 shadow-[0_8px_32px_rgba(163,54,20,0.25)]"
                whileHover={shouldReduce ? {} : { y: -2, transition: { duration: 0.25, ease: ease.out } }}
                whileTap={shouldReduce ? {} : tap.press}
              >
                View All Projects
                <ArrowRight size={16} className="transition-transform duration-200 group-hover/more:translate-x-[4px]" />
              </motion.div>
            </Link>
            <motion.a
              href="https://github.com/tarun7kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group/github inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#A33614] text-[#A33614] font-poppins font-medium text-[14px] rounded-full hover:bg-[#A33614]/10 transition-all duration-300"
              whileHover={shouldReduce ? {} : { y: -2, transition: { duration: 0.25, ease: ease.out } }}
              whileTap={shouldReduce ? {} : tap.press}
            >
              View GitHub
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover/github:translate-x-[2px] group-hover/github:-translate-y-[2px]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
