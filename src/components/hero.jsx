import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "../assets/Sahil.png";

const nameCharacters = Array.from("SAHIL DALAVI");
const roleLines = ["CREATIVE", "FULLSTACK", "DEVELOPER"];

function Hero({ isReady }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!isReady) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-name-char", {
          yPercent: 115,
          rotate: 4,
          opacity: 0,
          duration: 0.8,
          stagger: 0.045,
          ease: "power4.out",
        })
        .from(
          ".hero-detail",
          {
            x: -24,
            y: 12,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.45"
        )
        .from(
          ".hero-role-char",
          {
            yPercent: 115,
            rotate: 4,
            opacity: 0,
            duration: 0.8,
            stagger: 0.035,
            ease: "power4.out",
          },
          "-=0.62"
        )
        .to(
          ".hero-image-shell",
          {
            clipPath: "circle(75% at 50% 50%)",
            duration: 1.25,
            ease: "power4.inOut",
          },
          "-=1.05"
        )
        .from(
          ".hero-image",
          {
            scale: 1.45,
            duration: 1.25,
            ease: "power4.out",
          },
          "<"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 items-center px-4 sm:px-8 md:grid-cols-[minmax(0,1.1fr)_minmax(300px,540px)_minmax(0,1.1fr)] md:gap-4 md:px-[6vw] lg:gap-6">

        {/* LEFT */}
        <div className="z-10 flex flex-col items-center text-center md:items-start md:justify-self-end md:pr-8 md:text-left">

          <h1
            aria-label="Sahil Dalavi"
            className="hero-name whitespace-nowrap font-display text-[clamp(2.8rem,5vw,5.3rem)] leading-[0.88] tracking-[0.02em] text-[#d8caca]"
          >
            {nameCharacters.map((character, index) => (
              <span
                aria-hidden="true"
                className="hero-name-char inline-block overflow-hidden"
                key={`${character}-${index}`}
              >
                {character === " " ? "\u00a0" : character}
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
        <div className="relative flex items-center justify-center py-10 md:py-0">
          <div className="group relative h-[66vw] max-h-[520px] min-h-[260px] w-[66vw] max-w-[520px] min-w-[260px] overflow-hidden rounded-full border border-orange-700/80 bg-black">
            <div className="hero-image-shell relative h-full w-full overflow-hidden rounded-full bg-[#ff4b08]">
              <img
                src={heroImage}
                alt="Sahil Dalavi"
                className="hero-image h-full w-full scale-[1.36] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.43]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="z-10 flex items-center justify-center md:justify-self-start md:pl-8">
          <h2
            aria-label="Creative Fullstack Developer"
            className="font-display text-[clamp(2.8rem,5vw,5.3rem)] leading-[0.88] tracking-[0.02em] text-[#d8caca] text-center md:text-left"
          >
            {roleLines.map((line) => (
              <span className="hero-role-line block overflow-hidden" key={line}>
                {Array.from(line).map((character, index) => (
                  <span
                    aria-hidden="true"
                    className="hero-role-char inline-block"
                    key={`${line}-${character}-${index}`}
                  >
                    {character === " " ? "\u00a0" : character}
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

