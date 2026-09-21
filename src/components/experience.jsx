import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const rowsRef = useRef([]);
  const bottomLineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(rowsRef.current, {
        opacity: 0,
        y: 55,
      });

      gsap.set(bottomLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Timeline
      const tl = gsap.timeline({
        paused: true,
      });

      // Experience rows
      tl.to(
        rowsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.16,
          ease: "power3.out",
        },
        "-=0.30"
      );

      // Bottom line
      tl.to(
        bottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        "-=0.20"
      );

      // Scroll behavior
      const animationTrigger =
        sectionRef.current.closest("[data-synchronized-sections]") ||
        sectionRef.current;

      ScrollTrigger.create({
        trigger: animationTrigger,
        start: "top 75%",
        end: "bottom 25%",

        onEnter: () => {
          tl.restart();
        },

        onEnterBack: () => {
          tl.restart();
        },

        onLeaveBack: () => {
          tl.reverse();
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-black px-8 pt-8 pb-28 md:px-[8vw] md:pt-10 md:pb-36"
    >
      {/* RIGHT ORANGE LINE */}
      <div className="absolute right-0 top-0 h-full w-[3px] bg-orange-500" />

      <div className="mx-auto max-w-[1500px]">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_1fr]">
          <h2 className="font-display text-6xl leading-none text-[#d8caca] md:text-7xl lg:text-8xl">
            Experience
          </h2>

          <div>
            {experiences.map((experience, index) => (
              <article
                key={experience.role}
                ref={(element) => {
                  rowsRef.current[index] = element;
                }}
                className="group border-b border-white/10 py-8 first:pt-0 last:border-b-0"
              >
                <h3 className="font-body text-3xl tracking-[-0.03em] text-[#d8caca] transition-colors duration-300 group-hover:text-orange-500 md:text-5xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-lg text-[#87909f]">
                  {experience.company}
                </p>

                <p className="mt-5 text-base text-orange-500">
                  {experience.period}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 overflow-hidden">
          <div
            ref={bottomLineRef}
            className="h-px w-full bg-[#d8caca]"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;