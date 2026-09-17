import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "BoardBridge",
    category: "DEVELOPMENT - DESIGN",
    year: "2026",
    image: "/projects/boardbridge.jpg",
    link: "#",
  },
  {
    id: "02",
    title: "AI Interview System",
    category: "DEVELOPMENT - AI",
    year: "2026",
    image: "/projects/interview-system.jpg",
    link: "#",
  },
  {
    id: "03",
    title: "FinPilot AI",
    category: "DEVELOPMENT - DESIGN",
    year: "2026",
    image: "/projects/finpilot.jpg",
    link: "#",
  },
  {
    id: "04",
    title: "Nirmal Developers",
    category: "DESIGN - DEVELOPMENT",
    year: "2026",
    image: "/projects/nirmal-developers.jpg",
    link: "#",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black px-8 py-28 md:px-[8vw] md:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Section heading */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-sm tracking-[0.08em] text-white/70">
              03 — SELECTED WORK
            </span>
          </div>

          <h2 className="font-display text-7xl leading-none tracking-tight text-[#d8caca] md:text-8xl lg:text-[8rem]">
            PROJECTS
          </h2>
        </div>

        {/* Project list */}
        <div className="border-t border-white/[0.08]">
          {projects.map((project) => {
            const isActive = activeProject?.id === project.id;

            return (
              <a
                key={project.id}
                href={project.link}
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
                onMouseMove={handleMouseMove}
                data-project-cursor
                className="group relative grid min-h-[128px] grid-cols-[50px_1fr_auto_60px] items-center gap-4 border-b border-white/[0.08] transition-colors duration-300 md:grid-cols-[55px_1fr_240px_80px]"
              >
                {/* Number */}
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-white/50"
                  }`}
                >
                  {project.id}
                </span>

                {/* Project title */}
                <span
                    className={`font-body text-2xl tracking-[-0.02em] transition-all duration-300 md:text-4xl lg:text-5xl ${
                    isActive
                      ? "translate-x-2 text-orange-500"
                      : "text-[#d8caca]"
                  }`}
                >
                  {project.title}
                </span>

                {/* Category + year */}
                <div className="hidden items-center justify-between gap-10 md:flex">
                  <span
                    className={`text-xs tracking-[0.08em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#d8caca]"
                        : "text-[#667080]"
                    }`}
                  >
                    {project.category}
                  </span>

                  <span
                    className={`text-xs transition-colors duration-300 ${
                      isActive
                        ? "text-[#d8caca]"
                        : "text-[#667080]"
                    }`}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Arrow */}
                <span
                  className={`text-3xl transition-all duration-300 ${
                    isActive
                      ? "translate-x-1 text-orange-500"
                      : "text-white/30"
                  }`}
                >
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating project preview */}
      {activeProject && (
        <div
          className="pointer-events-none fixed z-[80] hidden md:block"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-[360px] overflow-hidden bg-[#203829] p-6 shadow-2xl">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="block aspect-[16/10] w-full object-cover"
            />

            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;