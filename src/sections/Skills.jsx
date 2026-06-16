import { motion } from 'framer-motion';

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#F6F1EA] relative overflow-hidden"
    >
      {/* Background decorative text */}
      <div className="absolute bottom-[-40px] right-[-30px] select-none pointer-events-none hidden lg:block z-0 opacity-[0.03]">
        <h2 className="text-[14rem] font-geist font-black tracking-tighter leading-none whitespace-nowrap text-[#8B3116]">
          SKILLS
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-extrabold text-[#1a1a1a] leading-tight tracking-[-0.03em] mb-4">
            Skills<span className="text-[#A33614]">.</span>
          </h2>
          <div className="w-14 h-[3px] bg-[#A33614] mb-6" />
          <p className="font-poppins text-[16px] md:text-[17px] leading-[1.7] text-[#1a1a1a]/55 max-w-xl">
            A comprehensive toolkit for building scalable, high-performance applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: catIndex * 0.08,
                ease: 'easeOut',
              }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#E4D3C7]/40 hover:border-[#D9B7A6]/60 hover:shadow-[0_8px_30px_rgba(139,49,22,0.06)] transition-all duration-300 group"
            >
              {/* Category title with left accent */}
              <h3 className="text-[17px] sm:text-[18px] font-poppins font-semibold text-[#1a1a1a] mb-5 sm:mb-6 pl-4 border-l-[3px] border-[#A33614]">
                {category.title}
              </h3>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.06 + index * 0.03,
                    }}
                    className="inline-flex items-center gap-2 bg-[#F6F1EA] text-[#3a2a20] px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-poppins font-medium border border-transparent hover:border-[#A33614]/25 hover:bg-white hover:shadow-sm cursor-default transition-all duration-250 group/pill"
                  >
                    <i
                      className={`${skill.icon} text-[16px] text-[#8B3116]/60 group-hover/pill:text-[#A33614] transition-colors duration-250`}
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
