import { motion, useReducedMotion } from 'framer-motion';
import { ease, duration, hover, tap } from '@/utils/motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: 'devicon-c-plain' },
      { name: 'C++', icon: 'devicon-cplusplus-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'scikit-learn', icon: 'devicon-python-plain' },
      { name: 'Pandas', icon: 'devicon-pandas-plain' },
      { name: 'NumPy', icon: 'devicon-numpy-plain' },
      { name: 'Matplotlib', icon: 'devicon-python-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'React.js', icon: 'devicon-react-original' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Classification', icon: 'devicon-python-plain' },
      { name: 'Feature Scaling', icon: 'devicon-python-plain' },
      { name: 'EDA', icon: 'devicon-pandas-plain' },
      { name: 'Outlier Analysis', icon: 'devicon-python-plain' },
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'DSA', icon: 'devicon-cplusplus-plain' },
      { name: 'Computer Networks', icon: 'devicon-linux-plain' },
      { name: 'Probability', icon: 'devicon-python-plain' },
    ],
  },
  {
    title: 'Engineering Tools',
    skills: [
      { name: 'Multisim', icon: 'devicon-linux-plain' },
      { name: 'Proteus', icon: 'devicon-linux-plain' },
      { name: 'ModelSim', icon: 'devicon-linux-plain' },
      { name: 'Quartus', icon: 'devicon-linux-plain' },
      { name: 'Verilog', icon: 'devicon-linux-plain' },
    ],
  },
];

// ─── Stagger Variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: ease.smooth,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: ease.smooth,
    },
  },
};

const pillContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

export default function Skills() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#F6F1EA] relative overflow-hidden"
    >
      {/* Background decorative text */}
      <div className="absolute bottom-[-40px] right-[-30px] select-none pointer-events-none hidden lg:block z-0 opacity-[0.06]">
        <h2 className="text-[14rem] font-geist font-black tracking-tighter leading-none whitespace-nowrap text-[#8B3116]">
          SKILLS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-extrabold text-[#1a1a1a] leading-tight tracking-[-0.03em] mb-4">
            Skills<span className="text-[#A33614]">.</span>
          </h2>
          <motion.div
            initial={shouldReduce ? {} : { scaleX: 0 }}
            whileInView={shouldReduce ? {} : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: duration.slow, ease: ease.inOut, delay: 0.2 }}
            className="w-14 h-[3px] bg-[#A33614] mb-6 origin-left"
          />
          <p className="font-poppins text-[16px] md:text-[17px] leading-[1.7] text-[#1a1a1a]/55 max-w-xl">
            A comprehensive toolkit for building scalable, high-performance applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={shouldReduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={shouldReduce ? {} : cardVariants}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#E4D3C7]/40 hover:border-[#D9B7A6]/60 hover:shadow-[0_8px_30px_rgba(139,49,22,0.06)] transition-all duration-300 group"
            >
              {/* Category title with left accent */}
              <h3 className="text-[17px] sm:text-[18px] font-poppins font-semibold text-[#1a1a1a] mb-5 sm:mb-6 pl-4 border-l-[3px] border-[#A33614]">
                {category.title}
              </h3>

              {/* Skill pills */}
              <motion.div
                variants={shouldReduce ? {} : pillContainerVariants}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={shouldReduce ? {} : pillVariants}
                    whileHover={shouldReduce ? {} : hover.liftSubtle}
                    className="inline-flex items-center gap-2 bg-[#F6F1EA] text-[#3a2a20] px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-poppins font-medium border border-transparent hover:border-[#A33614]/25 hover:bg-white hover:shadow-sm cursor-default transition-all duration-250 group/pill"
                  >
                    <i
                      className={`${skill.icon} text-[16px] text-[#8B3116]/60 group-hover/pill:text-[#A33614] transition-colors duration-250`}
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
