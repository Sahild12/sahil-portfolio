import { useRef, useState } from "react";

export default function Magnetic({ children, pull = 0.3 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * pull, y: middleY * pull });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition:
          position.x === 0 && position.y === 0
            ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
            : "transform 0.1s linear",
      }}
      className="inline-flex"
    >
      {children}
    </div>
  );
}
