import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import WordReveal from "./WordReveal";

const frontendSkills = [
  "React.js & Tailwind CSS",
  "GSAP & Interactive UIs",
];

const backendSkills = [
  "Java & Spring Boot",
  "MySQL & RESTful APIs",
];

function AboutRule({ progress, bottom = false }) {
  const scaleX = useTransform(
    progress,
    bottom ? [0.2, 0.7, 1] : [0, 0.28, 0.68],
    bottom ? [0, 1, 1] : [0, 1, 1]
  );

  return (
    <div className={`flex items-center gap-4 ${bottom ? "mt-16" : "mb-14"}`}>
      <span className="shrink-0 text-xs tracking-[0.08em] text-[#87909f]">
        ABOUT
      </span>
      <div className="h-px flex-1 overflow-hidden bg-white/10">
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="h-full w-full bg-[#d8caca]"
        />
      </div>
    </div>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 88%", "end 20%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.45,
  });

  const contentOpacity = useTransform(progress, [0, 0.3, 0.6], [0, 0.8, 1]);
  const labelY = useTransform(progress, [0, 0.35], [28, 0]);
  const labelOpacity = useTransform(progress, [0, 0.28], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-black px-8 py-24 pb-0 text-white md:px-[8vw] md:py-28 md:pb-0"
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          style={{ y: labelY, opacity: labelOpacity }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          <span className="text-sm tracking-[0.12em] text-white/60">
            04 — MY STUFF
          </span>
        </motion.div>

        <AboutRule progress={progress} />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_1fr_1fr] md:gap-10"
        >
          <div>
            <WordReveal
              as="h2"
              className="font-display text-6xl leading-none tracking-[-0.03em] text-[#d8caca] md:text-7xl lg:text-8xl"
            >
              Skills
            </WordReveal>
          </div>

          <div>
            <WordReveal
              as="h3"
              className="font-body text-3xl tracking-[-0.03em] text-[#d8caca] md:text-[2.15rem]"
            >
              Frontend Engineering
            </WordReveal>
            <div className="mt-4 space-y-2">
              {frontendSkills.map((skill) => (
                <WordReveal
                  as="p"
                  key={skill}
                  className="text-base text-[#87909f] md:text-lg"
                >
                  {skill}
                </WordReveal>
              ))}
            </div>
          </div>

          <div>
            <WordReveal
              as="h3"
              className="font-body text-3xl tracking-[-0.03em] text-[#d8caca] md:text-[2.15rem]"
            >
              Backend Architecture
            </WordReveal>
            <div className="mt-4 space-y-2">
              {backendSkills.map((skill) => (
                <WordReveal
                  as="p"
                  key={skill}
                  className="text-base text-[#87909f] md:text-lg"
                >
                  {skill}
                </WordReveal>
              ))}
            </div>
          </div>
        </motion.div>

        <AboutRule progress={progress} bottom />
      </div>
    </section>
  );
}

export default Skills;
