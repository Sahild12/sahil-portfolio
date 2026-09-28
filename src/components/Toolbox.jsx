import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import WordReveal from "./WordReveal";

const tools = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Java",
  "Tailwind CSS",
  "GSAP",
  "REST APIs",
  "Git",
  "Figma",
  "Vercel",
];

function ToolboxDivider({ progress }) {
  const scaleX = useTransform(progress, [0.2, 0.7, 1], [0, 1, 1]);

  return (
    <div className="mt-16 flex items-center gap-4">
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

function Toolbox() {
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

  const contentOpacity = useTransform(progress, [0, 0.28, 0.62], [0, 0.82, 1]);

  return (
    <section
      ref={sectionRef}
      id="toolbox"
      className="relative overflow-hidden bg-black px-8 pt-16 pb-0 md:px-[8vw] md:pt-16 md:pb-0"
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          style={{ opacity: contentOpacity }}
          className="grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_1fr] md:gap-10"
        >
          <WordReveal
            as="h2"
            className="font-display text-7xl leading-none tracking-[-0.03em] text-[#d8caca] md:text-8xl"
          >
            Toolbox
          </WordReveal>

          <motion.div
            className="flex max-w-[940px] flex-wrap items-start gap-x-3 gap-y-2"
          >
            {tools.map((tool, index) => (
              <span key={tool} className="inline-flex items-center">
                <WordReveal
                  as="span"
                  className="font-body text-2xl leading-[1.15] tracking-[-0.02em] text-[#d8caca] md:text-[2.1rem]"
                >
                  {tool}
                </WordReveal>
                {index !== tools.length - 1 && (
                  <span className="mx-2 h-2 w-2 shrink-0 rounded-full bg-orange-500 md:mx-3" />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <ToolboxDivider progress={progress} />
      </div>
    </section>
  );
}

export default Toolbox;
