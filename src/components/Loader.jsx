import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const GREETINGS = [
  "स्वागत है",
  "Hello",
  "Olá",
  "Guten Tag",
  "Bonjour",
  "こんにちは",
];

export default function Loader({ onComplete }) {
  const rootRef = useRef(null);
  const percentRef = useRef(null);
  const progressRef = useRef(null);
  const counter = useRef({ value: 0 });
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      if (percentRef.current) percentRef.current.textContent = "100";
      if (progressRef.current) progressRef.current.style.transform = "scaleX(1)";

      gsap.to(rootRef.current, {
        yPercent: -100,
        duration: 0.15,
        ease: "none",
        onComplete: onComplete,
      });

      return undefined;
    }

    // The reference animation keeps the greeting changing while the
    // percentage climbs smoothly to 100.
    const greetingTimer = window.setInterval(() => {
      setGreetingIndex((current) => (current + 1) % GREETINGS.length);
    }, 440);

    const tl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        window.clearInterval(greetingTimer);

        // 100% reached: slide the loader panel from bottom to top.
        // The hero is already underneath, so this creates a clean vertical
        // page transition before Hero starts its own entrance animation.
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 1.05,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });

    tl.to(counter.current, {
      value: 100,
      duration: 2.85,
      ease: "power2.inOut",
      onUpdate: () => {
        const currentValue = Math.min(
          100,
          Math.floor(counter.current.value)
        );

        if (percentRef.current) {
          percentRef.current.textContent = currentValue;
        }

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${currentValue / 100})`;
        }
      },
    });

    return () => {
      window.clearInterval(greetingTimer);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black text-[#d8caca]"
      style={{
        transform: "translateY(0%)",
        willChange: "transform",
      }}
    >
      <p className="font-display text-[clamp(2.7rem,4vw,4.2rem)] leading-none tracking-[-0.03em]">
        {GREETINGS[greetingIndex]}
      </p>

      <div className="absolute bottom-[4.1rem] right-[4.2rem] flex items-end font-display font-light leading-none md:bottom-[4.4rem] md:right-[4.7rem]">
        <span
          ref={percentRef}
          className="text-[clamp(3.2rem,5vw,5.4rem)] tracking-[-0.04em]"
        >
          0
        </span>
        <span className="mb-[0.18rem] ml-1 text-[clamp(1.1rem,1.8vw,2rem)] font-normal">
          %
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-transparent">
        <div
          ref={progressRef}
          className="h-full origin-left bg-[#ff4b08]"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
