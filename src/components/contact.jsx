import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiDownload,
  FiMail,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DISTORTED TEXT COMPONENT
========================================================= */

function DistortedText({
  children,
  className = "",
  outline = false,
}) {
  const textRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: -500,
    y: -500,
  });

  const handleMouseMove = (event) => {
    if (!textRef.current) return;

    const rect = textRef.current.getBoundingClientRect();

    setMouse({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMouse({
      x: -500,
      y: -500,
    });
  };

  return (
    <div
      ref={textRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        "--mouse-x": `${mouse.x}px`,
        "--mouse-y": `${mouse.y}px`,
      }}
    >
      {/* NORMAL TEXT */}
      <div
        className={`relative z-10 ${
          outline ? "contact-outline" : ""
        }`}
      >
        {children}
      </div>

      {/* DISTORTED TEXT */}
      <div
        className={`contact-distorted absolute inset-0 z-20 ${
          outline ? "contact-outline" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT COMPONENT
========================================================= */

function Contact() {
  const sectionRef = useRef(null);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const togetherRef = useRef(null);
  const emailRef = useRef(null);
  const buttonsRef = useRef(null);
  const backgroundRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* -----------------------------------------------
         INITIAL STATES
      ------------------------------------------------ */

      gsap.set(labelRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(togetherRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(emailRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(buttonsRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(backgroundRef.current, {
        opacity: 0,
        y: 70,
      });

      /* -----------------------------------------------
         TIMELINE
      ------------------------------------------------ */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      // 01. Label
      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      });

      // 02. LET'S WORK
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.15"
      );

      // 03. TOGETHER
      tl.to(
        togetherRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.65"
      );

      // 04. Email
      tl.to(
        emailRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // 05. Buttons
      tl.to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // 06. Background CONTACT
      tl.to(
        backgroundRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.35"
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black px-8 pt-12 pb-28 md:px-[8vw] md:pt-16 md:pb-32"
    >
      {/* =================================================
          SVG DISTORTION FILTER
      ================================================= */}

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

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative mx-auto max-w-[1500px]">

        {/* =================================================
            SECTION LABEL
        ================================================= */}

        <div
          ref={labelRef}
          className="mb-14 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />

          <span className="text-sm tracking-[0.12em] text-[#87909f]">
            05 — GET IN TOUCH
          </span>
        </div>

        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <div className="relative max-w-[1100px]">

          {/* LET'S WORK */}
          <div ref={titleRef}>
            <DistortedText
              className="font-display text-[clamp(5rem,10vw,10rem)] leading-[0.82] tracking-[-0.02em] text-[#d8caca]"
            >
              LET&apos;S WORK
            </DistortedText>
          </div>

          {/* TOGETHER */}
          <div ref={togetherRef}>
            <DistortedText
              outline
              className="mt-5 font-display text-[clamp(5rem,10vw,10rem)] leading-[0.82] tracking-[-0.02em]"
            >
              TOGETHER.
            </DistortedText>
          </div>
        </div>

        {/* =================================================
            EMAIL
        ================================================= */}

        <div
          ref={emailRef}
          className="mt-28 border-y border-white/[0.08] py-6"
        >
          <a
            href="mailto:dalavisahil95@gmail.com"
            className="group flex items-center gap-4"
          >
            <FiMail
              size={22}
              className="shrink-0 text-orange-500 transition duration-300 group-hover:scale-110"
            />

            <span className="break-all text-lg text-[#d8caca] transition duration-300 group-hover:text-orange-500 md:text-2xl">
              dalavisahil95@gmail.com
            </span>
          </a>
        </div>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          ref={buttonsRef}
          className="mt-8 flex flex-wrap items-center gap-5"
        >
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/sahil-dalvi-47b876367/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm tracking-[0.1em] text-[#d8caca] transition duration-300 hover:border-orange-500 hover:text-orange-500"
          >
            <span>LINKEDIN</span>

            <FiArrowUpRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* DOWNLOAD CV */}
          <a
            href="/Sahil Dalavi.pdf"
            download
            className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm tracking-[0.1em] text-black transition duration-300 hover:scale-[1.03] hover:bg-orange-400"
          >
            <span>DOWNLOAD CV</span>

            <FiDownload
              size={18}
              className="transition duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>

        {/* =================================================
            BACKGROUND CONTACT
        ================================================= */}

        <div
          ref={backgroundRef}
          className="pointer-events-none absolute -bottom-16 right-[2vw] hidden select-none lg:block"
        >
          <span className="contact-background font-display text-[18vw] leading-none">
            CONTACT
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;