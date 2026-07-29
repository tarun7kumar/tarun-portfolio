import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ease, duration, hover, tap } from '@/utils/motion';

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ─── Stagger Variants ────────────────────────────────────────────────────────
const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: ease.smooth,
    },
  },
};

const formContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const shouldReduce = useReducedMotion();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const mailSubject = encodeURIComponent(subject || `Message from ${name}`);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.open(
      `mailto:tkofficial2004@gmail.com?subject=${mailSubject}&body=${mailBody}`,
      '_self'
    );
  };

  return (
    <section className="min-h-screen pt-[80px] pb-12 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/video/0_Sunset_Mountains_1280x720.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay around 30% opacity */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Subtle Warm Orange Gradient near bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#A33614]/20 via-transparent to-transparent pointer-events-none" />

      {/* Main Container - Centered floating glassmorphism card (60-70% width on desktop) */}
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 mx-auto my-auto">
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="w-full bg-[#111111]/45 backdrop-blur-[18px] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(163,54,20,0.15)] rounded-[22px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 relative overflow-hidden"
          style={{ backgroundColor: 'rgba(17, 17, 17, 0.45)' }}
        >
          {/* Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left Side: Contact Info */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: duration.normal, ease: ease.smooth, delay: 0.15 }}
              className="flex flex-col justify-between h-full space-y-6"
            >
              <div>
                <span className="inline-block text-[12px] font-poppins font-semibold text-white tracking-wider uppercase mb-2">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-geist font-extrabold text-[#F6F1EA] tracking-[-0.03em] mb-4">
                  Open to Opportunities.
                </h2>
                <h3 className="text-lg font-geist font-bold text-[#F6F1EA]/90 mb-2">
                  Let's Talk
                </h3>
                <p className="font-poppins text-[13px] sm:text-[14px] leading-[1.6] text-[#F6F1EA]/65 mb-5">
                  Open to internships, full-time opportunities, and exciting projects. If you'd like to collaborate or just say hello, I'd love to hear from you.
                </p>
                <a
                  href="mailto:tkofficial2004@gmail.com"
                  className="inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-poppins font-semibold text-[#D9B7A6] hover:text-white transition-colors duration-300 border-b border-[#D9B7A6]/30 hover:border-white/50 pb-1 break-all sm:break-normal"
                >
                  <MailIcon />
                  tkofficial2004@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-poppins font-semibold uppercase tracking-wider text-[#F6F1EA]/40 mb-3">
                  Connect
                </span>
                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://github.com/tarun7kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[#F6F1EA]/15 text-[#F6F1EA]/70 hover:text-[#A33614] hover:border-[#A33614]/40 hover:bg-[#A33614]/10 transition-all duration-300"
                    whileHover={shouldReduce ? {} : hover.scale}
                    whileTap={shouldReduce ? {} : tap.press}
                  >
                    <GithubIcon />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/tarun7kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[#F6F1EA]/15 text-[#F6F1EA]/70 hover:text-[#A33614] hover:border-[#A33614]/40 hover:bg-[#A33614]/10 transition-all duration-300"
                    whileHover={shouldReduce ? {} : hover.scale}
                    whileTap={shouldReduce ? {} : tap.press}
                  >
                    <LinkedinIcon />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              variants={shouldReduce ? {} : formContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-black/20 border border-white/[0.06] rounded-xl sm:rounded-2xl p-4 sm:p-5"
            >
              <form className="space-y-3.5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                    <label className="block font-poppins text-[12px] font-semibold text-[#F6F1EA]/80 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Who am I speaking with?"
                      className="w-full bg-[#F6F1EA]/95 text-[#1a1a1a] placeholder-[#1a1a1a]/40 rounded-lg px-3.5 py-2 font-poppins text-[13px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                    <label className="block font-poppins text-[12px] font-semibold text-[#F6F1EA]/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-[#F6F1EA]/95 text-[#1a1a1a] placeholder-[#1a1a1a]/40 rounded-lg px-3.5 py-2 font-poppins text-[13px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                  <label className="block font-poppins text-[12px] font-semibold text-[#F6F1EA]/80 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    className="w-full bg-[#F6F1EA]/95 text-[#1a1a1a] placeholder-[#1a1a1a]/40 rounded-lg px-3.5 py-2 font-poppins text-[13px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                  <label className="block font-poppins text-[12px] font-semibold text-[#F6F1EA]/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me everything. I love context."
                    className="w-full bg-[#F6F1EA]/95 text-[#1a1a1a] placeholder-[#1a1a1a]/40 rounded-lg px-3.5 py-2 font-poppins text-[13px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300 h-24 resize-none"
                  />
                </motion.div>

                <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                  <motion.button
                    type="submit"
                    className="w-full bg-[#A33614] text-[#F6F1EA] font-poppins font-semibold text-[14px] py-2.5 rounded-lg hover:bg-[#8B3116] transition-all duration-300 cursor-pointer"
                    whileHover={shouldReduce ? {} : { y: -2, boxShadow: '0 8px 24px rgba(163, 54, 20, 0.25)', transition: { duration: 0.25, ease: ease.out } }}
                    whileTap={shouldReduce ? {} : tap.press}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={shouldReduce ? {} : { opacity: 0 }}
            whileInView={shouldReduce ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration.slow, ease: ease.smooth, delay: 0.3 }}
            className="mt-6 pt-4 border-t border-white/[0.08] text-center"
          >
            <p className="font-poppins text-[11px] text-[#F6F1EA]/40 uppercase tracking-[0.15em] font-medium">
              © {new Date().getFullYear()} Tarun Kumar.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}
