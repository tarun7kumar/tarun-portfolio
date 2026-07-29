import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function StackingCard({
  children,
  index,
  totalSections = 3,
  id,
  className = '',
}) {
  const containerRef = useRef(null);
  const shouldReduce = useReducedMotion();

  // Track scroll progress of this card relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const isFirst = index === 0;
  const isLast = index === totalSections - 1;

  // Scale down slightly as user scrolls down and the next card stacks over this one
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce || isLast ? [1, 1] : [1, 0.93]
  );

  // Slightly dim the card as it gets covered by the next card
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    shouldReduce || isLast ? [1, 1, 1] : [1, 0.92, 0.6]
  );

  // Ascending z-index so each section stacks on top of the previous one
  const zIndex = (index + 1) * 10;

  return (
    <div
      ref={containerRef}
      id={id}
      className="sticky top-0 w-full min-h-screen"
      style={{ zIndex }}
    >
      <motion.div
        style={{
          scale: isLast || shouldReduce ? 1 : scale,
          opacity: isLast || shouldReduce ? 1 : opacity,
          transformOrigin: 'top center',
        }}
        className={`w-full min-h-screen relative overflow-hidden transition-shadow duration-300 ${
          !isFirst
            ? 'rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.35)]'
            : ''
        } ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
