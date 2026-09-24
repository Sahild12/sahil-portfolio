import { useEffect, useRef } from "react";

function CustomCursor() {
  const ringRef = useRef(null);
  const svgRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 768px)");

    if (!mediaQuery.matches) {
      return undefined;
    }

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    const TRAIL_LEN = 40;
    const trail = Array.from({ length: TRAIL_LEN }, () => ({ x: mouse.x, y: mouse.y }));

    let isHovering = false;
    let isProjectHovering = false;
    let activeLabel = "";       // text to show inside ring
    let currentScale = 1;
    let currentLabelOpacity = 0;

    const TARGET_SCALE_HOVER = 1.7;  // slightly small magnify
    const TARGET_SCALE_NORMAL = 1;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const el = e.target.closest(
        "a, button, [role='button'], input, textarea, select, label, [tabindex], [data-cursor]"
      );
      if (el) {
        isHovering = true;
        isProjectHovering = el.hasAttribute("data-project-cursor");
        if (ringRef.current) {
          ringRef.current.classList.remove("border-gray-500/50");
          ringRef.current.classList.add("border-orange-500/80");
        }
        activeLabel = el.dataset.cursor || "";
        if (labelRef.current) labelRef.current.textContent = activeLabel;
      }
    };

    const onMouseOut = (e) => {
      const el = e.target.closest(
        "a, button, [role='button'], input, textarea, select, label, [tabindex], [data-cursor]"
      );
      if (el) {
        isHovering = false;
        isProjectHovering = false;
        if (ringRef.current) {
          ringRef.current.classList.remove("border-orange-500/80");
          ringRef.current.classList.add("border-gray-500/50");
        }
        activeLabel = "";
        if (labelRef.current) labelRef.current.textContent = "";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    let rafId;

    const tick = () => {
      // Smooth lerp toward mouse
      ring.x += (mouse.x - ring.x) * 0.09;
      ring.y += (mouse.y - ring.y) * 0.09;

      // Lerp scale
      const targetScale = isHovering ? TARGET_SCALE_HOVER : TARGET_SCALE_NORMAL;
      currentScale += (targetScale - currentScale) * 0.12;

      // Lerp label opacity — only show when there's a label text
      const targetLabelOpacity = isHovering && activeLabel ? 1 : 0;
      currentLabelOpacity += (targetLabelOpacity - currentLabelOpacity) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${currentScale.toFixed(3)})`;
        ringRef.current.style.opacity = isProjectHovering ? "0" : "1";
      }

      // Dot tracks RAW mouse instantly — no lerp, snaps ahead of the ring
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
        dotRef.current.style.opacity = isProjectHovering
          ? "0"
          : (1 - currentLabelOpacity).toFixed(3);
      }

      if (svgRef.current) {
        svgRef.current.style.opacity = isProjectHovering ? "0" : "1";
      }

      if (labelRef.current) {
        labelRef.current.style.opacity = currentLabelOpacity.toFixed(3);
      }

      // Trail
      trail.unshift({ x: ring.x, y: ring.y });
      trail.length = TRAIL_LEN;

      if (svgRef.current && trail.length > 1) {
        const circles = svgRef.current.querySelectorAll("circle");

        circles.forEach((c, i) => {
          const p = trail[i];
          if (!p) return;
          const progress = i / TRAIL_LEN;
          const radius = Math.max(0.35, 2 * (1 - progress * 0.65));
          const opacity = Math.max(0, 0.85 - progress).toFixed(2);
          c.setAttribute("cx", p.x.toFixed(1));
          c.setAttribute("cy", p.y.toFixed(1));
          c.setAttribute("r", radius.toFixed(2));
          c.setAttribute("opacity", opacity);
        });
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const TRAIL_LEN = 40;

  return (
    <>
      {/* Orange dot — separate element, tracks raw mouse instantly (no lerp) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-1 w-1 rounded-full bg-orange-500 md:block"
        style={{ willChange: "transform" }}
      />

      {/* Cursor ring — lags behind mouse with lerp */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border border-gray-500/50 transition-colors duration-300 md:flex items-center justify-center"
        style={{ willChange: "transform", transformOrigin: "center center" }}
      >
        {/* Context label — fades in on hover of data-cursor elements */}
        <span
          ref={labelRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[8px] font-bold uppercase leading-none tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          style={{ opacity: 0, whiteSpace: "nowrap" }}
        />
      </div>

      {/* Trail SVG */}
      <svg
        ref={svgRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-full w-full md:block"
        style={{ willChange: "contents" }}
      >
        {Array.from({ length: TRAIL_LEN }).map((_, i) => (
          <circle key={i} cx="0" cy="0" r="0" fill="#ff5a00" opacity="0" />
        ))}
      </svg>
    </>
  );
}

export default CustomCursor;

