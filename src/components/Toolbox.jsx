import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

function Toolbox() {
  const sectionRef = useRef(null);

  const titleRef = useRef(null);
  const toolsRef = useRef([]);
  const bottomLineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Initial state
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 55,
      });

      gsap.set(toolsRef.current, {
        opacity: 0,
        y: 18,
      });

      gsap.set(bottomLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Timeline
      const tl = gsap.timeline({
        paused: true,
      });

      // Toolbox heading
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.30"
      );

      // Toolbox items
      tl.to(
        toolsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.42,
          stagger: 0.065,
          ease: "power3.out",
        },
        "-=0.35"
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
    <>
      <section
        ref={sectionRef}
        id="toolbox"
        className="relative overflow-hidden bg-black px-8 py-28 pt-4 pb-0 md:px-[8vw] md:py-36 md:pt-6 md:pb-0"
      >
      {/* RIGHT ORANGE LINE */}
      <div className="absolute right-0 top-0 h-full w-[3px] bg-orange-500" />

      <div className="mx-auto max-w-[1500px]">

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.55fr_1fr]">

          {/* TITLE */}
          <h2
            ref={titleRef}
            className="font-display text-7xl leading-none text-[#d8caca] md:text-8xl"
          >
            Toolbox
          </h2>

          {/* TOOLS */}
          <div className="flex flex-wrap items-start gap-y-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                ref={(element) => {
                  toolsRef.current[index] = element;
                }}
                className="flex items-center"
              >
                <span className="font-body text-xl text-[#d8caca] md:text-2xl">
                  {tool}
                </span>

                {index !== tools.length - 1 && (
                  <span className="mx-3 h-2 w-2 rounded-full bg-orange-500" />
                )}
              </span>
            ))}
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
      <svg
        className="pointer-events-none absolute h-0 w-0"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="contact-distortion"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.08"
              numOctaves="2"
              seed="4"
              result="noise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default Toolbox;