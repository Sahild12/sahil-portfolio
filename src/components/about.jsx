import { useEffect, useRef, useState } from "react";

const ABOUT_CHARACTERS = Array.from(`Hi, I'm Sahil — a Computer Science graduate and Frontend Developer from India. I enjoy turning ideas into clean, responsive, and meaningful web experiences. I'm passionate about learning, building real-world projects, and continuously improving as a developer.`);

function About() {
    const aboutRef = useRef(null);
    const [activeWords, setActiveWords] = useState(0);

    useEffect(() => {
        const updateTextProgress = () => {
            if (!aboutRef.current) return;

            const sectionTop = aboutRef.current.getBoundingClientRect().top;
            const startPoint = window.innerHeight * 0.72;
            const finishPoint = window.innerHeight * 0.2;
            const progress = Math.min(
                1,
                Math.max(0, (startPoint - sectionTop) / (startPoint - finishPoint))
            );

            setActiveWords(Math.ceil(progress * ABOUT_CHARACTERS.length));
        };

        updateTextProgress();
        window.addEventListener("scroll", updateTextProgress, { passive: true });
        window.addEventListener("resize", updateTextProgress);

        return () => {
            window.removeEventListener("scroll", updateTextProgress);
            window.removeEventListener("resize", updateTextProgress);
        };
    }, []);

    return (
        <section
            ref={aboutRef}
            id="about"
            className="relative bg-black px-8 py-24 md:px-[8vw] md:py-32"
        >
            <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 md:grid-cols-[120px_1fr]">

                {/* LEFT LABEL */}
                <div className="hidden md:block">
                    <div className="sticky top-32 flex items-start">
                        <span className="font-display text-sm tracking-[0.2em] text-white/40 [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                            02 — ABOUT
                        </span>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div>

                    {/* Mobile label */}
                    <div className="mb-10 flex items-center gap-3 md:hidden">
                        <span className="font-display text-sm tracking-[0.2em] text-white/40">
                            02
                        </span>

                        <span className="text-white/30">→</span>

                        <span className="font-display text-sm tracking-[0.2em] text-white/40">
                            ABOUT
                        </span>
                    </div>

                    {/* Main text */}
                    <div className="relative max-w-[1250px]">
                        <p className="font-body text-xl leading-[1.2] tracking-[-0.02em] sm:text-2xl md:text-3xl lg:text-[2.5rem]">
                            {ABOUT_CHARACTERS.map((character, characterIndex) => (
                                <span
                                    className={`transition-colors duration-300 ${characterIndex < activeWords ? "text-white" : "text-white/20"}`}
                                    key={`${character}-${characterIndex}`}
                                >
                                    {character}
                                </span>
                            ))}
                        </p>
                    </div>

                    {/* Download CV */}
                    <a
                        href="/Sahil Dalavi.pdf"
                        download
                        className="group mt-16 inline-flex items-center gap-3 text-sm tracking-[0.08em] text-[#d8cccc] transition duration-300 hover:text-orange-500"
                    >
                        <span className="h-2 w-2 rounded-full bg-orange-500 transition duration-300 group-hover:scale-125" />

                        <span className="relative">
                            DOWNLOAD CV

                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                        </span>
                    </a>

                    {/* Stats */}
                    <div className="mt-16 flex items-start gap-10 md:gap-16">

                        {/* Stat 1 */}
                        <div>
                            <div className="font-display text-5xl text-[#d8cccc] md:text-6xl">
                                1+
                            </div>

                            <div className="mt-2 text-xs tracking-[0.08em] text-[#8a91a0]">
                                INTERNSHIP
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-14 w-px bg-white/10" />

                        {/* Stat 2 */}
                        <div>
                            <div className="font-display text-5xl text-[#d8cccc] md:text-6xl">
                                3+
                            </div>

                            <div className="mt-2 text-xs tracking-[0.08em] text-[#8a91a0]">
                                PROJECTS BUILT
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;