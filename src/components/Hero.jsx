import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

import heroImage from "../assets/Sahil.png";

const nameCharacters = Array.from("SAHIL DALAVI");
const roleLines = ["CREATIVE", "FULLSTACK", "DEVELOPER"];

function Hero({ isReady }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!isReady) return undefined;

    const ctx = gsap.context(() => {
      const nameChars = gsap.utils.toArray(".hero-name-char");
      const roleChars = gsap.utils.toArray(".hero-role-char");

      gsap.set([...nameChars, ...roleChars], {
        yPercent: 118,
        rotate: 3.5,
        opacity: 0,
      });

      gsap.set(".hero-detail", {
        y: 14,
        opacity: 0,
      });

      const timeline = gsap.timeline();

      timeline
        .to({}, { duration: 0.26 })
        .to(
          nameChars,
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.035,
            ease: "power4.out",
          },
          "-=0.1"
        )
        .to(
          roleChars,
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.035,
            ease: "power4.out",
          },
          "-=0.78"
        )
        .to(
          ".hero-detail",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.42"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
      style={{ visibility: isReady ? "visible" : "hidden" }}
    >
      <div
        className="
          mx-auto grid min-h-screen max-w-[1800px]
          grid-cols-1 items-center
          px-4 sm:px-8
          md:grid-cols-[minmax(0,1.1fr)_minmax(320px,520px)_minmax(0,1.1fr)]
          md:gap-5 md:px-[6vw]
          lg:gap-7
        "
      >
        {/* LEFT */}
        <div className="z-10 flex flex-col items-center text-center md:items-start md:justify-self-end md:pr-8 md:text-left">
          <h1
            aria-label="Sahil Dalavi"
            className="
              hero-name whitespace-nowrap
              font-display
              text-[clamp(2.8rem,5vw,5.3rem)]
              leading-[0.88]
              tracking-[0.02em]
              text-[#d8caca]
            "
          >
            {nameCharacters.map((character, index) => (
              <span
                className="inline-block overflow-hidden"
                key={`${character}-${index}`}
              >
                <span
                  aria-hidden="true"
                  className="hero-name-char inline-block will-change-transform"
                >
                  {character === " " ? "\u00a0" : character}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-6 flex flex-col items-center gap-2 md:items-start">
            <p className="hero-detail text-xs tracking-wide text-white/60 sm:text-sm">
              Based in Kolhapur, India
            </p>

            <div className="hero-detail flex items-center gap-2">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]" />
              </span>

              <span className="text-xs tracking-wide text-white/60 sm:text-sm">
                Available for a full-time position
              </span>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="order-2 flex w-full items-center justify-center py-8 sm:py-10 md:col-start-2 md:row-start-1 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isReady
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 1.05,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2,
            }}
            className="
      group relative z-10
      aspect-square
      h-64 w-64
      sm:h-80 sm:w-80
      md:h-[380px] md:w-[380px]
      lg:h-[440px] lg:w-[440px]
      xl:h-[500px] xl:w-[500px]
      2xl:h-[560px] 2xl:w-[560px]
      overflow-hidden
      rounded-full
      bg-zinc-900
      cursor-pointer
    "
          >
            <img
              src={heroImage}
              alt="Sahil Dalavi - Creative Fullstack Web Developer Profile"
              width={1000}
              height={1000}
              fetchPriority="high"
              className="
        absolute inset-0
        h-full w-full
        object-cover
        object-center
        scale-100
        transition-transform
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-110
      "
            />

            {/* subtle hover effect */}
            <div
              className="
        pointer-events-none
        absolute inset-0
        rounded-full
        bg-black/0
        transition-colors
        duration-500
        group-hover:bg-black/5
      "
            />
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="z-10 flex items-center justify-center md:justify-self-start md:pl-8">
          <h2
            aria-label="Creative Fullstack Developer"
            className="
              font-display
              text-[clamp(2.8rem,5vw,5.3rem)]
              leading-[0.88]
              tracking-[0.02em]
              text-[#d8caca]
              text-center
              md:text-left
            "
          >
            {roleLines.map((line) => (
              <span
                className="hero-role-line block overflow-hidden"
                key={line}
              >
                {Array.from(line).map((character, index) => (
                  <span
                    className="inline-block overflow-hidden"
                    key={`${line}-${character}-${index}`}
                  >
                    <span
                      aria-hidden="true"
                      className="hero-role-char inline-block will-change-transform"
                    >
                      {character === " " ? "\u00a0" : character}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;