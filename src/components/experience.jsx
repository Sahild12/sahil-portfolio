import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import WordReveal from "./WordReveal";

const experiences = [
  {
    period: "2023 → Present",
    role: "Independent Web Developer",
    company: "Self-Directed Projects",
  },
  {
    period: "Aug 2022 → May 2026",
    role: "B.Tech Computer Science",
    company: "Sharad Institute of Technology",
  },
];

function Experience() {
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
  const firstItemOpacity = useTransform(progress, [0, 0.34], [0, 1]);
  const secondItemOpacity = useTransform(progress, [0, 0.42], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-black px-8 pt-16 pb-28 text-white md:px-[8vw] md:pt-16 md:pb-36"
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          style={{ opacity: contentOpacity }}
          className="grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_1fr] md:gap-10"
        >
          <WordReveal
            as="h2"
            className="font-display text-6xl leading-none tracking-[-0.03em] text-[#d8caca] md:text-7xl lg:text-8xl"
          >
            Experience
          </WordReveal>

          <div>
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.company}`}
                style={index === 0 ? { opacity: firstItemOpacity } : { opacity: secondItemOpacity }}
                className={`group py-2 ${index === 0 ? "pt-0" : "pt-10"} ${index !== experiences.length - 1 ? "border-b border-white/10 pb-8" : "pb-2"}`}
              >
                <WordReveal
                  as="h3"
                  className="font-body text-3xl tracking-[-0.03em] text-[#d8caca] transition-colors duration-300 group-hover:text-orange-500 md:text-[2.35rem]"
                >
                  {experience.role}
                </WordReveal>
                <WordReveal
                  as="p"
                  className="mt-1 text-base text-[#87909f] md:text-lg"
                >
                  {experience.company}
                </WordReveal>
                <WordReveal
                  as="p"
                  className="mt-4 text-sm text-orange-500 md:text-base"
                >
                  {experience.period}
                </WordReveal>
              </motion.article>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
