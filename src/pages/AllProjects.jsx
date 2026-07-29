import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects, ProjectCard } from '@/sections/Projects';
import { ease, duration, tap } from '@/utils/motion';

export default function AllProjects() {
  const shouldReduce = useReducedMotion();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background text decoration */}
      <div className="absolute top-1/4 right-[-5%] select-none pointer-events-none hidden lg:block z-0 opacity-[0.03] rotate-90 origin-right">
        <h2 className="text-[14rem] font-geist font-black tracking-tighter leading-none whitespace-nowrap text-white">
          ARCHIVE
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-10 md:pt-16">
        <div className="mb-12">
          <Link to="/#projects">
            <motion.div
              className="inline-flex items-center gap-2 text-[#A33614] font-poppins font-medium text-[14px] hover:text-[#D9B7A6] transition-colors duration-200 mb-8 cursor-pointer"
              whileHover={shouldReduce ? {} : { x: -4 }}
              whileTap={shouldReduce ? {} : { scale: 0.96 }}
            >
              <ArrowLeft size={16} />
              Back to Projects
            </motion.div>
          </Link>

          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
            animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: duration.normal, ease: ease.smooth }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-geist font-extrabold text-[#F6F1EA] leading-tight tracking-[-0.03em] mb-4">
              All <span className="text-[#A33614]">Projects.</span>
            </h1>
            <motion.div
              initial={shouldReduce ? {} : { scaleX: 0 }}
              animate={shouldReduce ? {} : { scaleX: 1 }}
              transition={{ duration: duration.slow, ease: ease.inOut, delay: 0.2 }}
              className="w-14 h-[3px] bg-[#A33614] mb-6 origin-left"
            />
            <p className="font-poppins text-[16px] md:text-[17px] leading-[1.7] text-[#F6F1EA]/50 max-w-xl">
              A complete archive of everything I've built, exploring different technologies and problem spaces.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={shouldReduce ? {} : containerVariants}
          initial="hidden"
          animate="visible"
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
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="mt-16 border-t border-[#F6F1EA]/10 pt-8"
        >
          <Link to="/#projects">
            <motion.div
              className="inline-flex items-center gap-2 text-[#A33614] font-poppins font-medium text-[14px] hover:text-[#D9B7A6] transition-colors duration-200 cursor-pointer"
              whileHover={shouldReduce ? {} : { x: -4 }}
              whileTap={shouldReduce ? {} : { scale: 0.96 }}
            >
              <ArrowLeft size={16} />
              Back to Projects
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
