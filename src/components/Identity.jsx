import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function Identity() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });
  const leftX = useTransform(smoothProgress, [0, 0.5, 1], [-180, 0, -180]);
  const rightX = useTransform(smoothProgress, [0, 0.5, 1], [180, 0, 180]);
  const wordOpacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.7, 1, 0.7, 0]);

  return (
    <section
      ref={sectionRef}
      id="identity"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Section label */}
      <div className="absolute left-[8vw] top-20 z-10 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-orange-500" />

        <span className="text-sm tracking-[0.12em] text-white/60">
          04 — IDENTITY
        </span>
      </div>

      {/* Identity words */}
      <div className="relative min-h-screen">

        {/* FULLSTACK */}
        <motion.h2
          style={{ x: leftX, opacity: wordOpacity }}
          className="absolute left-[8vw] top-[28%] font-display text-[clamp(4rem,8vw,8rem)] leading-none tracking-[-0.02em] text-[#d8caca]"
        >
          FULLSTACK
        </motion.h2>

        {/* DEVELOPER */}
        <motion.h2
          style={{ x: rightX, opacity: wordOpacity }}
          className="absolute right-[8vw] top-[28%] font-display text-[clamp(4rem,8vw,8rem)] leading-none tracking-[-0.02em] text-[#626b79]"
        >
          DEVELOPER
        </motion.h2>

        {/* DESIGNER */}
        <motion.h2
          style={{ x: leftX, opacity: wordOpacity }}
          className="absolute left-[4vw] top-[52%] font-display text-[clamp(4rem,8vw,8rem)] leading-none tracking-[-0.02em] text-[#626b79]"
        >
          DESIGNER
        </motion.h2>

        {/* WEB */}
        <motion.h2
          style={{ x: rightX, opacity: wordOpacity }}
          className="absolute right-[7vw] top-[52%] font-display text-[clamp(4rem,8vw,8rem)] leading-none tracking-[-0.02em] text-[#d8caca]"
        >
          WEB
        </motion.h2>
      </div>
    </section>
  );
}

export default Identity;