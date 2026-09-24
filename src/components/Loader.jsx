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
    const progressBarRef = useRef(null);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const counter = useRef({ value: 0 });

    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const greetingTimer = setInterval(() => {
            setGreetingIndex((i) => (i + 1) % GREETINGS.length);
        }, prefersReduced ? 1 : 260);

        const tl = gsap.timeline({
            delay: 0.2,
            onComplete: () => {
                clearInterval(greetingTimer);
                gsap.to(rootRef.current, {
                    clipPath: "circle(0% at 50% 50%)",
                    duration: 0.9,
                    ease: "power4.inOut",
                    onComplete,
                });
            },
        });

        tl.to(counter.current, {
            value: 100,
            duration: prefersReduced ? 0.2 : 2.1,
            ease: "power2.inOut",
            onUpdate: () => {
                const currentValue = Math.floor(counter.current.value);

                if (percentRef.current) {
                    percentRef.current.textContent = currentValue;
                }

                if (progressBarRef.current) {
                    progressBarRef.current.style.width = `${currentValue}%`;
                }
            },
        });

        return () => {
            clearInterval(greetingTimer);
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={rootRef}
            className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[var(--bg)]"
            style={{
                backgroundColor: "#000",
                clipPath: "circle(150% at 50% 50%)",
                color: "#d8caca",
            }}
        >
            <p className="font-serif italic text-2xl md:text-4xl text-[var(--ink)]">
                {GREETINGS[greetingIndex]}
            </p>
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-end font-display text-6xl font-light tracking-[0.02em] md:text-8xl text-[var(--ink)]" style={{ textShadow: "none" }}>
                <span ref={percentRef} style={{ textShadow: "none" }}>0</span>
                <span className="text-2xl md:text-3xl ml-1 mb-1" style={{ textShadow: "none" }}>%</span>
            </div>
            <div className="absolute bottom-12 left-8 md:bottom-16 md:left-12 text-xs tracking-[0.3em] text-[var(--ink-dim)]">
                LOADING PORTFOLIO
            </div>

            <div className="absolute bottom-8 left-8 right-8 h-[2px] overflow-hidden bg-white/10 md:bottom-12 md:left-12 md:right-12">
                <div
                    ref={progressBarRef}
                    className="h-full bg-orange-500 transition-[width] duration-75 ease-linear"
                    style={{ width: "0%" }}
                />
            </div>
        </div>
    );
}
