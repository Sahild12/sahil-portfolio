import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import premierModelsImage from "../assets/premier-models.png";
import citizenGrievanceImage from "../assets/citizen-grievance.png";
import teaImage from "../assets/Tea.png";
import spaceImage from "../assets/Space.png";

const projects = [
  {
    id: "01",
    title: "Space",
    category: "FRONTEND DEVELOPMENT",
    year: "2026",
    image: spaceImage,
    link: "https://space-nine-gray.vercel.app/",
    previewBackground: "#203829",
  },
  {
    id: "02",
    title: "Premier-Models",
    category: "FRONTEND DEVELOPMENT",
    year: "2026",
    image: premierModelsImage,
    link: "https://premier-pro.vercel.app/",
    previewBackground: "#1b1b1b",
  },
  {
    id: "03",
    title: "Citizen Grievance Portal",
    category: "DEVELOPMENT & DESIGN",
    year: "2026",
    image: citizenGrievanceImage,
    link: "https://jansevaa.netlify.app/",
    previewBackground: "#24382b",
  },
  {
    id: "04",
    title: "TEA-Luxury-Scroll-Driven-Website",
    category: "FRONTEND DEVELOPMENT",
    year: "2026",
    image: teaImage,
    link: "https://tea-luxury-scroll-driven-website.vercel.app/",
    previewBackground: "#706d63",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const previewScaleTween = useRef(null);
  const xQuickTo = useRef(null);
  const yQuickTo = useRef(null);

  const [activeProject, setActiveProject] = useState({ active: false, index: 0 });

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return undefined;

    xQuickTo.current = gsap.quickTo(preview, "left", {
      duration: 0.8,
      ease: "power3.out",
    });

    yQuickTo.current = gsap.quickTo(preview, "top", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMouseMove = (event) => {
      xQuickTo.current?.(event.clientX);
      yQuickTo.current?.(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      xQuickTo.current = null;
      yQuickTo.current = null;
      previewScaleTween.current?.kill();
    };
  }, []);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    previewScaleTween.current?.kill();

    previewScaleTween.current = gsap.to(preview, {
      scale: activeProject.active ? 1 : 0,
      duration: 0.4,
      ease: activeProject.active
        ? "power4.out"
        : "power4.in",
      overwrite: true,
    });
  }, [activeProject.active]);

  const handleMouseEnter = (index) => {
    setActiveProject({ active: true, index });
  };

  const handleMouseLeave = () => {
    setActiveProject((current) => ({
      ...current,
      active: false,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-visible bg-black px-5 py-20 text-white sm:px-8 md:px-[8vw] md:py-28"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-xs tracking-[0.14em] text-white/60 sm:text-sm">
              03 — SELECTED WORK
            </span>
          </div>

          <h2 className="font-display text-[4.2rem] leading-[0.9] tracking-[-0.04em] text-[#d8caca] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]">
            PROJECTS
          </h2>
        </div>

        {/* Reference-style project list */}
        <div className="w-full">
          {projects.map((project, index) => {
            const isActive = activeProject.active && activeProject.index === index;

            return (
              <a
                key={project.id}
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noreferrer" : undefined}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 border-t border-white/20 px-0 py-7 transition-colors duration-300 last:border-b md:px-0 md:py-8"
              >
                <div className="min-w-0 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-2.5">
                  <div className="mb-2 flex items-center gap-4">
                    <span className="text-xs tracking-[0.12em] text-white/40">
                      {project.id}
                    </span>
                    <span className="h-px w-7 bg-white/10" />
                  </div>

                  <h3 className="font-body text-[1.8rem] font-normal leading-[0.95] tracking-[-0.025em] text-[#d8caca] transition-colors duration-300 group-hover:text-orange-500 sm:text-[2.15rem] md:text-[2.65rem] lg:text-[3.05rem]">
                    {project.title}
                  </h3>

                </div>

                <div className="flex shrink-0 items-center gap-6 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-2.5">
                  <p className="hidden text-right text-xs font-light tracking-[0.08em] text-white/45 sm:block md:min-w-[190px]">
                    {project.category}
                  </p>
                  <span className="hidden text-xs text-white/35 md:block">
                    {project.year}
                  </span>
                  <span className="font-display text-2xl leading-none text-white/35 transition-colors duration-300 group-hover:text-orange-500 sm:text-3xl" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Cursor-following stacked image preview, based on the uploaded reference */}
      <div
        ref={previewRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[350px] w-[400px] -translate-x-1/2 -translate-y-1/2 overflow-hidden md:flex"
        style={{
          scale: 0,
          transformOrigin: "center center",
        }}
        aria-hidden="true"
      >
        <div
          className="absolute left-0 top-0 h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            top: `${activeProject.index * -100}%`,
          }}
        >
          {projects.map((project) => (
            <div
              key={`${project.id}-preview`}
              className="flex h-full w-full items-center justify-center p-8"
              style={{ backgroundColor: project.previewBackground }}
            >
              <img
                src={project.image}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
