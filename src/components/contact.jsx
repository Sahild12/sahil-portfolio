import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import Magnetic from "./Magnetic";

/* =========================================================
   SCRAMBLE / DECODE TEXT COMPONENT
========================================================= */

function ScrambleText({
  text,
  trigger,
  delay = 0,
  duration = 1600,
  className = "",
  style = {},
}) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const intervalTime = Math.floor(duration / 45);
    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        iteration++;

        const progress = iteration / 45;
        const revealProgress = Math.max(0, (progress - 0.25) / 0.75);
        const revealedCount = Math.floor(
          revealProgress * text.length
        );

        const randomized = text
          .split("")
          .map((char, index) =>
            char === " "
              ? " "
              : index < revealedCount
                ? text[index]
                : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("");

        setDisplayText(randomized);

        if (iteration >= 45) {
          clearInterval(intervalId);
          setDisplayText(text);
        }
      }, intervalTime);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);

      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [trigger, text, delay, duration]);

  const handleMouseEnter = () => {
    let iteration = 0;

    const intervalId = setInterval(() => {
      iteration++;

      const progress = iteration / 35;
      const revealProgress = Math.max(0, (progress - 0.25) / 0.75);
      const revealedCount = Math.floor(
        revealProgress * text.length
      );

      const randomized = text
        .split("")
        .map((char, index) =>
          char === " "
            ? " "
            : index < revealedCount
              ? text[index]
              : chars[Math.floor(Math.random() * chars.length)]
        )
        .join("");

      setDisplayText(randomized);

      if (iteration >= 35) {
        clearInterval(intervalId);
        setDisplayText(text);
      }
    }, 35);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`inline-block ${className}`}
      style={style}
    >
      {displayText}
    </span>
  );
}

/* =========================================================
   CONTACT COMPONENT
   Footer removed because it is now a separate component.
========================================================= */

function Contact() {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    amount: 0.2,
    once: false,
  });

  const [copied, setCopied] = useState(false);

  const emailAddress = "dalavisahil95@gmail.com";

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full overflow-hidden text-[#f1dada]"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-10 sm:py-24 md:px-12 lg:px-16 lg:py-28 xl:px-20">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mb-8 flex items-center gap-2.5 sm:mb-12"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#fa4a00]" />

          <span className="font-body text-xs uppercase tracking-[0.18em] text-[#f1dada80] sm:text-sm">
            05 — GET IN TOUCH
          </span>
        </motion.div>

        {/* Scramble Animated Big Headings */}
        <div className="relative z-10 mb-12 flex flex-col gap-1 sm:mb-16 md:mb-20">

          {/* LET'S WORK */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                    y: "0%",
                    opacity: 1,
                  }
                  : {
                    y: "100%",
                    opacity: 0,
                  }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="font-display text-[clamp(4rem,10.2vw,10.8rem)] font-normal uppercase leading-[0.86] tracking-[-0.025em] text-[#d7c2c2]"
            >
              <ScrambleText
                text="LET'S WORK"
                trigger={isInView}
                delay={0.2}
                duration={1600}
              />
            </motion.h1>
          </div>

          {/* TOGETHER */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                    y: "0%",
                    opacity: 1,
                  }
                  : {
                    y: "100%",
                    opacity: 0,
                  }
              }
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              style={{
                WebkitTextStroke: "1px #d7c2c2",
                color: "transparent",
              }}
              className="font-display text-[clamp(4rem,10.2vw,10.8rem)] font-normal uppercase leading-[0.86] tracking-[-0.025em]"
            >
              <ScrambleText
                text="TOGETHER."
                trigger={isInView}
                delay={0.35}
                duration={1600}
              />
            </motion.h1>
          </div>
        </div>

        {/* Email Row */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                opacity: 1,
                y: 0,
              }
              : {
                opacity: 0,
                y: 30,
              }
          }
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="relative z-10 mb-12 flex w-full items-center justify-between border-y border-[#f1dada14] py-5 sm:mb-16 sm:py-6"
        >
          <Magnetic strength={0.2}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(emailAddress);

                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 2500);
              }}
              data-cursor="copy"
              data-cursor-text={copied ? "COPIED!" : "COPY"}
              className="copyCursor group flex items-center gap-3 font-body text-base text-[#d7c2c2] transition-colors hover:text-[#f1dada] sm:text-lg md:text-xl"
            >
              <span className="text-[#fa4a00] transition-transform group-hover:scale-110">
                ✉
              </span>

              <span className="tracking-wide">
                {emailAddress}
              </span>
            </button>
          </Magnetic>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                opacity: 1,
                y: 0,
              }
              : {
                opacity: 0,
                y: 30,
              }
          }
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="relative z-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          {/* LinkedIn */}
          <Magnetic strength={0.35}>
            <a
              href="https://www.linkedin.com/in/sahil-dalvi-47b876367/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#f1dada26] px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.1em] text-[#D7C2C2] transition-all hover:border-[#fa4a00] hover:bg-[#fa4a000f] sm:px-6 sm:py-3 sm:text-sm"
            >
              <span>LINKEDIN</span>

              <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>

          {/* Download CV */}
          <Magnetic strength={0.35}>
            <a
              href="/Sahil Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#fa4a00] px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.1em] text-black transition-all hover:bg-[#ff6b1a] sm:px-6 sm:py-3 sm:text-sm"
            >
              <span>DOWNLOAD CV</span>

              <FiDownload className="text-base transition-transform group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Giant Outlined CONTACT Background Watermark */}
        <div
          aria-hidden="true"
          style={{
            WebkitTextStroke:
              "0.8px rgba(255, 255, 255, 0.08)",
            color: "transparent",
          }}
          className="pointer-events-none absolute -bottom-2 right-6 z-0 select-none font-display text-[clamp(4.5rem,12vw,13rem)] font-light uppercase leading-[0.85] tracking-[-0.03em] sm:right-10 md:right-12 lg:right-16 xl:right-20"
        >
          CONTACT
        </div>
      </div>
    </section>
  );
}

export default Contact;