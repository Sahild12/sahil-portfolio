import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  "React.js & Tailwind CSS",
  "GSAP & Interactive UIs",
];

const backendSkills = [
  "Java & Spring Boot",
  "MySQL & RESTful APIs",
];

function Skills() {
  const sectionRef = useRef(null);

  const labelRef = useRef(null);
  const topLineRef = useRef(null);

  const titleRef = useRef(null);

  const frontendTitleRef = useRef(null);
  const frontendItemsRef = useRef([]);

  const backendTitleRef = useRef(null);
  const backendItemsRef = useRef([]);

  const bottomLineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const label = labelRef.current;
      const topLine = topLineRef.current;
      const title = titleRef.current;

      const frontendTitle = frontendTitleRef.current;
      const frontendItems = frontendItemsRef.current;

      const backendTitle = backendTitleRef.current;
      const backendItems = backendItemsRef.current;

      const bottomLine = bottomLineRef.current;

      // ------------------------------------------------
      // Initial state
      // ------------------------------------------------

      gsap.set(label, {
        opacity: 0,
        y: 20,
      });

      gsap.set(topLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(title, {
        opacity: 0,
        y: 55,
      });

      gsap.set(frontendTitle, {
        opacity: 0,
        y: 35,
      });

      gsap.set(frontendItems, {
        opacity: 0,
        y: 18,
      });

      gsap.set(backendTitle, {
        opacity: 0,
        y: 35,
      });

      gsap.set(backendItems, {
        opacity: 0,
        y: 18,
      });

      gsap.set(bottomLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // ------------------------------------------------
      // Main timeline
      // ------------------------------------------------

      const tl = gsap.timeline({
        paused: true,
      });

      tl.to(label, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      });

      tl.to(
        topLine,
        {
          scaleX: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        "-=0.20"
      );

      tl.to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.30"
      );

      tl.to(
        frontendTitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.38"
      );

      tl.to(
        frontendItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.42,
          stagger: 0.10,
          ease: "power3.out",
        },
        "-=0.30"
      );

      tl.to(
        backendTitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.25"
      );

      tl.to(
        backendItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.42,
          stagger: 0.10,
          ease: "power3.out",
        },
        "-=0.30"
      );

      tl.to(
        bottomLine,
        {
          scaleX: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        "-=0.20"
      );

      // ------------------------------------------------
      // Scroll behavior
      // ------------------------------------------------

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
      id="skills"
      className="relative overflow-hidden bg-black px-8 py-28 pb-0 md:px-[8vw] md:py-36 md:pb-0"
    >
      {/* RIGHT ORANGE LINE */}
      <div className="absolute right-0 top-0 h-full w-[3px] bg-orange-500" />

      <div className="mx-auto max-w-[1500px]">

        {/* LABEL */}
        <div
          ref={labelRef}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />

          <span className="text-sm tracking-[0.12em] text-white/60">
            04 — MY STUFF
          </span>
        </div>

        {/* TOP LINE */}
        <div className="mb-14 overflow-hidden">
          <div
            ref={topLineRef}
            className="h-px w-full bg-[#d8caca]"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_1fr_1fr]">

          {/* SKILLS */}
          <div>
            <h2
              ref={titleRef}
              className="font-display text-6xl leading-none text-[#d8caca] md:text-7xl lg:text-8xl"
            >
              Skills
            </h2>
          </div>

          {/* FRONTEND */}
          <div>
            <h3
              ref={frontendTitleRef}
              className="font-body text-3xl text-[#d8caca] md:text-[2.1rem]"
            >
              Frontend Engineering
            </h3>

            <div className="mt-4 space-y-2">
              {frontendSkills.map((skill, index) => (
                <p
                  key={skill}
                  ref={(element) => {
                    frontendItemsRef.current[index] = element;
                  }}
                  className="text-base text-[#87909f] md:text-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3
              ref={backendTitleRef}
              className="font-body text-3xl text-[#d8caca] md:text-[2.1rem]"
            >
              Backend Architecture
            </h3>

            <div className="mt-4 space-y-2">
              {backendSkills.map((skill, index) => (
                <p
                  key={skill}
                  ref={(element) => {
                    backendItemsRef.current[index] = element;
                  }}
                  className="text-base text-[#87909f] md:text-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-20 overflow-hidden">
          <div
            ref={bottomLineRef}
            className="h-px w-full bg-[#d8caca]"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;