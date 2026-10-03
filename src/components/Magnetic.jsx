import { useRef } from "react";
import gsap from "gsap";

export default function Magnetic({ children, pull = 0.35, strength, className = "" }) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const factor = strength ?? pull ?? 0.35;

  const handleMouse = (e) => {
    if (!containerRef.current || !innerRef.current) return;
    if (
      window.innerWidth < 768 ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = containerRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    gsap.to(innerRef.current, {
      x: middleX * factor,
      y: middleY * factor,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    gsap.to(innerRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex ${className}`}
    >
      <div ref={innerRef} data-magnetic-inner className="inline-flex items-center">
        {children}
      </div>
    </div>
  );
}

