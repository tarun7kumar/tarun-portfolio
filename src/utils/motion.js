/**
 * Centralized animation utilities for the portfolio.
 * All animations use only transform + opacity (GPU-composited properties).
 */

// ─── Easing ──────────────────────────────────────────────────────────────────
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1.0],
  out: [0.0, 0.0, 0.2, 1.0],
  inOut: [0.4, 0.0, 0.2, 1.0],
};

// ─── Duration presets ────────────────────────────────────────────────────────
export const duration = {
  fast: 0.4,
  normal: 0.6,
  slow: 0.8,
};

// ─── Viewport config ─────────────────────────────────────────────────────────
export const viewport = {
  once: true,
  amount: 0.2,
};

export const viewportTight = {
  once: true,
  amount: 0.3,
};

// ─── Fade Up — primary reveal pattern ────────────────────────────────────────
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: duration.normal,
    ease: ease.smooth,
    delay,
  },
});

// ─── Fade In — opacity only ──────────────────────────────────────────────────
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  whileInView: { opacity: 1 },
  transition: {
    duration: duration.normal,
    ease: ease.smooth,
    delay,
  },
});

// ─── Scale Reveal — image/card scale down effect ─────────────────────────────
export const scaleReveal = (delay = 0) => ({
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: duration.slow,
    ease: ease.smooth,
    delay,
  },
});

// ─── Line Expand — for accent lines / dividers ──────────────────────────────
export const lineExpand = (delay = 0) => ({
  initial: { scaleX: 0, originX: 0 },
  animate: { scaleX: 1 },
  whileInView: { scaleX: 1 },
  transition: {
    duration: duration.slow,
    ease: ease.inOut,
    delay,
  },
});

// ─── Stagger Container ──────────────────────────────────────────────────────
export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
  whileInView: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// ─── Stagger Child — used inside stagger containers ─────────────────────────
export const staggerChild = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: duration.normal,
    ease: ease.smooth,
  },
};

// ─── Micro-interaction presets ───────────────────────────────────────────────
export const hover = {
  lift: { y: -3, transition: { duration: 0.25, ease: ease.out } },
  liftSubtle: { y: -2, transition: { duration: 0.2, ease: ease.out } },
  scale: { scale: 1.04, transition: { duration: 0.25, ease: ease.out } },
  cardLift: { y: -4, transition: { duration: 0.3, ease: ease.out } },
};

export const tap = {
  press: { scale: 0.97, transition: { duration: 0.1 } },
  pressSubtle: { scale: 0.98, transition: { duration: 0.1 } },
};

// ─── Reduced Motion helpers ─────────────────────────────────────────────────
// When prefers-reduced-motion is active, return static props (no animation)
export const getReducedMotionProps = (shouldReduce) => {
  if (!shouldReduce) return {};
  return {
    initial: { opacity: 1, y: 0, scale: 1, scaleX: 1 },
    animate: { opacity: 1, y: 0, scale: 1, scaleX: 1 },
    whileInView: { opacity: 1, y: 0, scale: 1, scaleX: 1 },
    transition: { duration: 0 },
  };
};

/**
 * Helper to merge animation props with reduced-motion override.
 * Usage: <motion.div {...motionProps(fadeUp(0.1), shouldReduce)} />
 */
export const motionProps = (variant, shouldReduce = false) => {
  if (shouldReduce) {
    return {
      initial: { opacity: 1, y: 0, scale: 1, scaleX: 1 },
      animate: { opacity: 1, y: 0, scale: 1, scaleX: 1 },
      whileInView: { opacity: 1, y: 0, scale: 1, scaleX: 1 },
      transition: { duration: 0 },
    };
  }
  return variant;
};
