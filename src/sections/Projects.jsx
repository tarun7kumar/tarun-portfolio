import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);


const projects = [
  {
    title: 'Heart Disease Prediction using Machine Learning',
    date: 'Nov 2025 – Dec 2025',
    description:
      'Engineered an end-to-end heart disease classification pipeline on a clinical dataset of 303 samples, applying EDA and preprocessing techniques to improve data quality across 14 features.',
    tech: ['Python', 'scikit-learn', 'ML'],
    github: 'https://github.com/tarun7kumar/heart-attack-risk-prediction',
    highlights: [
      'Benchmarked 4 ML models (Random Forest, SVM, MLP, XGBoost) with hyperparameter tuning',
      'Achieved 83.6% accuracy and 96.9% recall using Random Forest',
      'Minimized false negatives for real-world clinical screening applications',
    ],
  },
  {
    title: 'AI-based Network Traffic Classification',
    date: 'May 2025 – Jun 2025',
    description:
      'Developed a lightweight preprocessing and feature extraction pipeline to classify network traffic types (HTTP, DNS, FTP) using packet-level features across multiple protocols.',
    tech: ['Python', 'scikit-learn', 'Networking'],
    github: 'https://github.com/tarun7kumar/network-traffic-classification',
    highlights: [
      'Benchmarked 2 models (Random Forest, CNN) to compare efficiency and accuracy',
      'Achieved optimal classification performance through cross-validated evaluation',
      'Optimized for real-time traffic classification on network packet data',
    ],
  },
  {
    title: 'Autocomplete System using Trie Data Structure',
    date: 'Feb 2025 – Mar 2025',
    description:
      'Developed a Trie-based autocomplete engine processing a 37K+ word dictionary, enabling real-time prefix search with sub-millisecond query retrieval.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/tarun7kumar/trie-autosuggestion',
    highlights: [
      'Implemented top-K suggestion ranking at each Trie node for relevant completions',
      'Optimized traversal logic to surface results while minimizing redundant visits',
      'Designed efficient data structure pipeline for instant word suggestions',
    ],
  },
  {
    title: 'Portfolio Website',
    date: '2024 – Present',
    description:
      'A modern, high-performance developer portfolio designed to establish a strong personal brand. Built with a focus on clean aesthetics, smooth interactions, and responsive design.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    link: 'https://tarunk-portfolio.vercel.app/',
    github: 'https://github.com/tarun7kumar/portfolio',
    highlights: [
      'Custom design system with Tailwind CSS',
      'Responsive layout across all device sizes',
      'Orchestrated animations with Framer Motion',
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* Background decorative text */}
      <div className="absolute bottom-[-40px] left-[-30px] select-none pointer-events-none hidden lg:block z-0 opacity-[0.03]">
        <h2 className="text-[14rem] font-geist font-black tracking-tighter leading-none whitespace-nowrap text-white">
          PROJECTS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-extrabold text-[#F6F1EA] leading-tight tracking-[-0.03em] mb-4">
            Things I've <span className="text-[#A33614]">Built.</span>
          </h2>
          <div className="w-14 h-[3px] bg-[#A33614] mb-6" />
          <p className="font-poppins text-[16px] md:text-[17px] leading-[1.7] text-[#F6F1EA]/50 max-w-xl">
            Projects I built while learning how real systems behave.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              className="group bg-[#242424] border border-[#F6F1EA]/10 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-[#A33614]/30 hover:bg-[#2a2420] transition-all duration-400 relative overflow-hidden"
            >
              {/* Subtle corner glow on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#A33614]/0 group-hover:bg-[#A33614]/5 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Title + Date */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-geist font-bold text-[#F6F1EA] tracking-[-0.02em] group-hover:text-[#D9B7A6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="inline-block text-[12px] font-poppins font-semibold text-[#A33614] tracking-wider uppercase">
                      {project.date}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="font-poppins text-[14px] sm:text-[15px] leading-[1.7] text-[#F6F1EA]/60 max-w-2xl">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-[13px] sm:text-[14px] font-poppins text-[#F6F1EA]/50"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A33614] mt-[7px] shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] font-poppins font-medium text-[#D9B7A6]/80 uppercase tracking-wider bg-[#F6F1EA]/5 border border-[#F6F1EA]/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#A33614] text-[#F6F1EA] px-5 py-2 rounded-full text-[13px] font-poppins font-medium hover:bg-[#8B3116] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      View Project <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-poppins font-medium text-[#F6F1EA]/60 hover:text-[#D9B7A6] transition-colors duration-300"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/tarun7kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#A33614] text-[#A33614] font-poppins font-medium text-[14px] rounded-full hover:bg-[#A33614]/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            View More on GitHub <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
