import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const [points, setPoints] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setPoints((prev) => [
        ...prev.slice(-18),
        {
          x: event.clientX,
          y: event.clientY,
        },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      {/* Cursor ring */}
      <div
        className="pointer-events-none fixed z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/40 md:block"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500" />
      </div>

      {/* Flexible trail */}
      <svg
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-full w-full md:block"
      >
        <path
          d={
            points.length > 1
              ? `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`
              : ""
          }
          fill="none"
          stroke="#ff5a00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 7"
          opacity="0.8"
        />

        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={Math.max(1, index / 5)}
            fill="#ff5a00"
            opacity={index / points.length}
          />
        ))}
      </svg>
    </>
  );
}

export default CustomCursor;