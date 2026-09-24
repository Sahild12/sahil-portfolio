const tools = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Java",
  "Tailwind CSS",
  "GSAP",
  "REST APIs",
  "Git",
  "Figma",
  "Vercel",
];

function Toolbox() {
  return (
    <>
      <section
        id="toolbox"
        data-my-stuff-section
        className="relative overflow-hidden bg-black px-8 py-28 pt-4 pb-0 md:px-[8vw] md:py-36 md:pt-6 md:pb-0"
      >
      <div className="mx-auto max-w-[1500px]">

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.55fr_1fr]">

          {/* TITLE */}
          <h2
            data-my-stuff-fade
            className="font-display text-7xl leading-none text-[#d8caca] md:text-8xl"
          >
            Toolbox
          </h2>

          {/* TOOLS */}
          <div className="flex flex-wrap items-start gap-y-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                data-my-stuff-fade
                className="flex items-center"
              >
                <span className="font-body text-xl text-[#d8caca] md:text-2xl">
                  {tool}
                </span>

                {index !== tools.length - 1 && (
                  <span className="mx-3 h-2 w-2 rounded-full bg-orange-500" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-20 overflow-hidden">
          <div
            data-my-stuff-line
            className="h-px w-full bg-[#d8caca]"
          />
        </div>
      </div>
      </section>
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
    </>
  );
}

export default Toolbox;