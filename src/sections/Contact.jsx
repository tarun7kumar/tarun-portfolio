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
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-[#F6F1EA]"
    >
      {/* Background decorative text */}
      <div className="absolute top-1/2 left-[-40px] -translate-y-1/2 select-none pointer-events-none hidden lg:block z-0 opacity-[0.03]">
        <h2 className="text-[14rem] font-geist font-black tracking-tighter leading-none -rotate-90 whitespace-nowrap text-[#8B3116]">
          CONTACT
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="flex flex-col items-center"
        >
          {/* Folder Tab */}
          <div className="w-28 sm:w-36 md:w-48 h-5 sm:h-6 md:h-8 bg-[#1a1a1a] rounded-t-xl relative z-20 translate-y-[1px]" />

          {/* Folder Body */}
          <div className="w-full bg-[#1a1a1a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative z-10">
            {/* Header */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: duration.normal, ease: ease.smooth, delay: 0.1 }}
              className="text-center mb-10 sm:mb-14 md:mb-16"
            >
              <span className="inline-block text-[12px] font-poppins font-semibold text-[#A33614] tracking-wider uppercase mb-4">
                Let's Get Connected
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist font-extrabold text-[#F6F1EA] tracking-[-0.03em]">
                Let's Build Something Together
              </h2>
            </motion.div>

            {/* Split Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-start">
              {/* Left Side: Contact Info */}
              <motion.div
                initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
                whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: duration.normal, ease: ease.smooth, delay: 0.15 }}
                className="flex flex-col justify-center space-y-10 lg:pr-8"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-geist font-bold text-[#F6F1EA] mb-3">
                    Let's Talk
                  </h3>
                  <p className="font-poppins text-[14px] sm:text-[15px] leading-[1.7] text-[#F6F1EA]/55 mb-6">
                    Whether you have a question, a project in mind, or just want
                    to say hi — I'll try my best to get back to you!
                  </p>
                  <a
                    href="mailto:tkofficial2004@gmail.com"
                    className="inline-flex items-center gap-2 text-[16px] sm:text-[18px] font-poppins font-semibold text-[#A33614] hover:text-[#D9B7A6] transition-colors duration-300 border-b border-[#A33614]/30 hover:border-[#D9B7A6]/40 pb-1 break-all sm:break-normal"
                  >
                    <MailIcon />
                    tkofficial2004@gmail.com
                  </a>
                </div>

                <div>
                  <span className="block text-[12px] font-poppins font-semibold uppercase tracking-wider text-[#F6F1EA]/40 mb-5">
                    Connect
                  </span>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href="https://github.com/tarun7kumar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full border border-[#F6F1EA]/15 text-[#F6F1EA]/60 hover:text-[#A33614] hover:border-[#A33614]/40 hover:bg-[#A33614]/10 transition-all duration-300"
                      whileHover={shouldReduce ? {} : hover.scale}
                      whileTap={shouldReduce ? {} : tap.press}
                    >
                      <GithubIcon />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/tarun7kumar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full border border-[#F6F1EA]/15 text-[#F6F1EA]/60 hover:text-[#A33614] hover:border-[#A33614]/40 hover:bg-[#A33614]/10 transition-all duration-300"
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
                className="bg-[#F6F1EA]/[0.04] border border-[#F6F1EA]/10 rounded-2xl p-5 sm:p-6 md:p-8"
              >
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                    <label className="block font-poppins text-[13px] font-semibold text-[#F6F1EA]/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Who am I speaking with?"
                      className="w-full bg-[#F6F1EA] text-[#1a1a1a] placeholder-[#1a1a1a]/35 rounded-lg px-4 py-3 font-poppins text-[14px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                    <label className="block font-poppins text-[13px] font-semibold text-[#F6F1EA]/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Where should I send the magic?"
                      className="w-full bg-[#F6F1EA] text-[#1a1a1a] placeholder-[#1a1a1a]/35 rounded-lg px-4 py-3 font-poppins text-[14px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                    <label className="block font-poppins text-[13px] font-semibold text-[#F6F1EA]/80 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What's this about?"
                      className="w-full bg-[#F6F1EA] text-[#1a1a1a] placeholder-[#1a1a1a]/35 rounded-lg px-4 py-3 font-poppins text-[14px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                    <label className="block font-poppins text-[13px] font-semibold text-[#F6F1EA]/80 mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me everything. I love context."
                      className="w-full bg-[#F6F1EA] text-[#1a1a1a] placeholder-[#1a1a1a]/35 rounded-lg px-4 py-3 font-poppins text-[14px] outline-none focus:ring-2 focus:ring-[#A33614] transition-all duration-300 h-32 resize-none"
                    />
                  </motion.div>

                  <motion.div variants={shouldReduce ? {} : formFieldVariants}>
                    <motion.button
                      type="submit"
                      className="w-full bg-[#A33614] text-[#F6F1EA] font-poppins font-semibold text-[14px] py-3.5 rounded-lg hover:bg-[#8B3116] transition-all duration-300 cursor-pointer"
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
              className="mt-14 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-[#F6F1EA]/10 text-center"
            >
              <p className="font-poppins text-[12px] text-[#F6F1EA]/30 uppercase tracking-[0.15em] font-medium">
                © {new Date().getFullYear()} Tarun Kumar. Crafted with Heritage
                & Tech.
              </p>
            </motion.footer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
