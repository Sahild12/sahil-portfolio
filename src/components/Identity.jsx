import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Identity() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const scrollConfig = {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      };

      /*
        FULLSTACK:
        moves slightly toward the center from the left
      */
      gsap.to(".identity-top-left", {
        x: "2.5vw",
        ease: "none",
        scrollTrigger: scrollConfig,
      });

      /*
        DEVELOPER:
        moves slightly toward the center from the right
      */
      gsap.to(".identity-top-right", {
        x: "-2.5vw",
        ease: "none",
        scrollTrigger: scrollConfig,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="identity"
      className="relative h-[70vh] min-h-[560px] overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}
        <div className="absolute left-[8vw] top-[10%] z-10 flex items-center gap-3">
          <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-orange-500" />

          <span className="font-body text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 md:text-xs">
            03 — IDENTITY
          </span>
        </div>

        {/* =====================================================
            TOP ROW
        ===================================================== */}
        <div className="absolute left-[7vw] right-[7vw] top-[28%] grid grid-cols-2 items-center gap-[6vw]">

          {/* FULLSTACK */}
          <h2
            className="
              identity-top-left
              m-0
              justify-self-start
              whitespace-nowrap
              font-display
              text-[clamp(3.5rem,7vw,7.5rem)]
              font-normal
              uppercase
              leading-[0.82]
              tracking-[-0.02em]
              text-[#d8caca]
              antialiased
            "
            style={{
              fontFamily:
                '"Bebas Neue", var(--font-display), "Arial Narrow", Impact, sans-serif',
            }}
          >
            FULLSTACK
          </h2>

          {/* DEVELOPER */}
          <h2
            className="
              identity-top-right
              m-0
              justify-self-end
              whitespace-nowrap
              text-right
              font-display
              text-[clamp(3.5rem,7vw,7.5rem)]
              font-normal
              uppercase
              leading-[0.82]
              tracking-[-0.02em]
              text-[#626b79]
              antialiased
            "
            style={{
              fontFamily:
                '"Bebas Neue", var(--font-display), "Arial Narrow", Impact, sans-serif',
            }}
          >
            DEVELOPER
          </h2>
        </div>

        {/* =====================================================
            BOTTOM ROW
        ===================================================== */}
        <div className="absolute left-[7vw] right-[7vw] top-[62%] grid grid-cols-2 items-center gap-[6vw]">

          {/* DESIGNER */}
          <h2
            className="
              m-0
              justify-self-start
              whitespace-nowrap
              font-display
              text-[clamp(3.5rem,7vw,7.5rem)]
              font-normal
              uppercase
              leading-[0.82]
              tracking-[-0.02em]
              text-[#626b79]
              antialiased
            "
            style={{
              fontFamily:
                '"Bebas Neue", var(--font-display), "Arial Narrow", Impact, sans-serif',
            }}
          >
            DESIGNER
          </h2>

          {/* WEB */}
          <h2
            className="
              m-0
              justify-self-end
              whitespace-nowrap
              text-right
              font-display
              text-[clamp(3.5rem,7vw,7.5rem)]
              font-normal
              uppercase
              leading-[0.82]
              tracking-[-0.02em]
              text-[#d8caca]
              antialiased
            "
            style={{
              fontFamily:
                '"Bebas Neue", var(--font-display), "Arial Narrow", Impact, sans-serif',
            }}
          >
            WEB
          </h2>
        </div>
      </div>

      {/* =====================================================
          BOTTOM DIVIDER
      ===================================================== */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]" />
    </section>
  );
}

export default Identity;