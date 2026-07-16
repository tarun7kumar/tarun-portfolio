import { useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ease, duration, hover, tap } from '@/utils/motion';

import campusflowPreview from '@/assets/images/campusflow-preview.png';
import heartDiseasePreview from '@/assets/images/heart-disease-preview.png';
import networkTrafficPreview from '@/assets/images/network-traffic-preview.png';
import trieAutocompletePreview from '@/assets/images/trie-autocomplete-preview.png';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: 'CampusFlow',
    description:
      'Built a full-stack AI-powered student productivity platform that centralizes placement updates, academic deadlines, campus events, and intelligent email management into a single unified dashboard.',
    tech: ['React.js', 'FastAPI', 'Gemini AI', 'Gmail API', 'REST API'],
    github: 'https://github.com/tarun7kumar/campus-flow',
    link: 'https://campus-flow-ruddy.vercel.app/',
    image: campusflowPreview,
    aspect: 'aspect-[1024/490]',
    highlights: [
      'Built a full-stack platform using React.js and FastAPI with 4+ integrated student productivity modules.',
      'Developed an AI-powered email intelligence pipeline using Gmail API and Gemini AI to classify emails into 5 categories while extracting summaries, important dates, and action items.',
      'Designed and implemented 6+ REST API endpoints powering a real-time dashboard with task tracking, prioritized updates, and AI-assisted productivity.',
    ],
  },
  {
    title: 'Heart Disease Prediction using Machine Learning',
    description:
      'Engineered an end-to-end heart disease classification pipeline on a clinical dataset of 303 samples, applying EDA and preprocessing techniques to improve data quality across 14 features.',
    tech: ['Python', 'scikit-learn', 'ML'],
    github: 'https://github.com/tarun7kumar/heart-attack-risk-prediction',
    image: heartDiseasePreview,
    aspect: 'aspect-[16/10]',
    highlights: [
      'Benchmarked 4 ML models (Random Forest, SVM, MLP, XGBoost) with hyperparameter tuning',
      'Achieved 83.6% accuracy and 96.9% recall using Random Forest',
      'Minimized false negatives for real-world clinical screening applications',
    ],
  },
  {
    title: 'AI-based Network Traffic Classification',
    description:
      'Developed a lightweight preprocessing and feature extraction pipeline to classify network traffic types (HTTP, DNS, FTP) using packet-level features across multiple protocols.',
    tech: ['Python', 'scikit-learn', 'Networking'],
    github: 'https://github.com/tarun7kumar/network-traffic-classification',
    image: networkTrafficPreview,
    aspect: 'aspect-[16/10]',
    highlights: [
      'Benchmarked 2 models (Random Forest, CNN) to compare efficiency and accuracy',
      'Achieved optimal classification performance through cross-validated evaluation',
      'Optimized for real-time traffic classification on network packet data',
    ],
  },
  {
    title: 'Autocomplete System using Trie Data Structure',
    description:
      'Developed a Trie-based autocomplete engine processing a 37K+ word dictionary, enabling real-time prefix search with sub-millisecond query retrieval.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/tarun7kumar/trie-autosuggestion',
    image: trieAutocompletePreview,
    aspect: 'aspect-[16/10]',
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

const highlightContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const highlightItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: ease.smooth,
    },
  },
};

function ProjectCard({ project, index, shouldReduce }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (shouldReduce) return;
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

  return (
    <motion.div
      ref={cardRef}
      variants={shouldReduce ? {} : cardVariants}
      onMouseMove={handleMouseMove}
      whileHover={
        shouldReduce
          ? {}
          : {
              y: -5,
              transition: { duration: 0.3, ease: ease.out },
            }
      }
      className="group relative rounded-2xl overflow-hidden"
    >
      <motion.div
        variants={shouldReduce ? {} : accentLineVariants}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A33614] via-[#D9B7A6]/60 to-transparent origin-left z-20"
      />

      {!shouldReduce && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />
      )}

      <div className="relative z-10 bg-[#242424] border border-[#F6F1EA]/8 rounded-2xl p-6 sm:p-8 md:p-10 group-hover:border-[#A33614]/25 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.25),0_2px_8px_rgba(163,54,20,0.08)] transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
          {/* Details Column (60%) */}
          <div
            className={`w-full md:w-[58%] space-y-5 order-2 ${
              index % 2 === 0 ? 'md:order-1' : 'md:order-2'
            }`}
          >
            <div className="space-y-2">
              <h3 className="text-[22px] sm:text-[25px] font-geist font-bold text-[#F6F1EA] tracking-[-0.025em] leading-[1.2] transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            <p className="font-poppins text-[13.5px] sm:text-[14.5px] leading-[1.75] text-[#F6F1EA]/45">
              {project.description}
            </p>

            {project.highlights && (
              <motion.ul
                variants={shouldReduce ? {} : highlightContainerVariants}
                className="space-y-2.5 pt-1"
              >
                {project.highlights.map((highlight, hIndex) => (
                  <motion.li
                    key={hIndex}
                    variants={shouldReduce ? {} : highlightItemVariants}
                    className="flex items-start gap-3 text-[13px] sm:text-[14px] font-poppins text-[#F6F1EA]/50 leading-[1.6]"
                  >
                    <span className="w-[6px] h-[6px] rounded-[2px] bg-[#A33614]/70 mt-[7px] shrink-0 rotate-45" />
                    {highlight}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Screenshot & Tech Stack Column (42%) */}
          <div
            className={`w-full md:w-[42%] flex flex-col order-1 ${
              index % 2 === 0 ? 'md:order-2' : 'md:order-1'
            }`}
          >
            <div 
              className={`relative overflow-hidden rounded-2xl border border-[#F6F1EA]/10 shadow-md ${project.aspect || 'aspect-[16/10]'}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 select-none pointer-events-none"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={
                    shouldReduce
                      ? {}
                      : {
                          y: -2,
                          transition: { duration: 0.2, ease: ease.out },
                        }
                  }
                  className="text-[11px] font-poppins font-medium text-[#D9B7A6]/60 group-hover:text-[#D9B7A6] uppercase tracking-[0.08em] bg-[#F6F1EA]/[0.03] border border-[#F6F1EA]/8 px-3.5 py-1.5 rounded-full group-hover:border-[#A33614]/30 group-hover:bg-[#A33614]/[0.04] transition-all duration-250 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-[#F6F1EA]/8 w-full my-6" />

        {/* Action Buttons Footer */}
        <div className="flex flex-wrap items-center gap-3">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 bg-[#A33614] text-[#F6F1EA] px-5 py-2.5 rounded-full text-[13px] font-poppins font-medium hover:bg-[#8B3116] transition-colors duration-200"
              whileHover={
                shouldReduce
                  ? {}
                  : {
                      scale: 1.05,
                      y: -3,
                      boxShadow:
                        '0 8px 20px rgba(163, 54, 20, 0.25), 0 2px 6px rgba(163, 54, 20, 0.15)',
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 18,
                      },
                    }
              }
              whileTap={shouldReduce ? {} : { scale: 0.96 }}
            >
              Live Demo
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]" />
            </motion.a>
          )}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/git inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-poppins font-medium text-[#F6F1EA]/50 border border-[#F6F1EA]/10 hover:border-[#F6F1EA]/20 hover:text-[#F6F1EA]/80 hover:bg-[#F6F1EA]/[0.03] transition-colors duration-200"
            whileHover={
              shouldReduce
                ? {}
                : {
                    scale: 1.05,
                    y: -3,
                    boxShadow:
                      '0 8px 20px rgba(246, 241, 234, 0.05), 0 2px 6px rgba(246, 241, 234, 0.03)',
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 18,
                      mass: 0.8
                    }
                  }
            }
            whileTap={shouldReduce ? {} : { scale: 0.96 }}
          >
            <GithubIcon size={15} />
            <span className="transition-transform duration-200 group-hover/git:translate-x-[1px]">GitHub</span>
            <ArrowUpRight size={12} className="opacity-0 -ml-1 group-hover/git:opacity-60 group-hover/git:translate-x-[1px] group-hover/git:-translate-y-[1px] transition-all duration-200" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden"
    >
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
          {projects.map((project, index) => (
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
          <motion.a
            href="https://github.com/tarun7kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="group/more inline-flex items-center gap-2 px-8 py-3 border border-[#A33614] text-[#A33614] font-poppins font-medium text-[14px] rounded-full hover:bg-[#A33614]/10 transition-all duration-300"
            whileHover={shouldReduce ? {} : { y: -2, transition: { duration: 0.25, ease: ease.out } }}
            whileTap={shouldReduce ? {} : tap.press}
          >
            View More on GitHub
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover/more:translate-x-[2px] group-hover/more:-translate-y-[2px]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
