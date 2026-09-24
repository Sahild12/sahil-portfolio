const frontendSkills = [
  "React.js & Tailwind CSS",
  "GSAP & Interactive UIs",
];

const backendSkills = [
  "Java & Spring Boot",
  "MySQL & RESTful APIs",
];

function Skills() {
  return (
    <section
      id="skills"
      data-my-stuff-section
      className="relative overflow-hidden bg-black px-8 py-28 pb-0 md:px-[8vw] md:py-36 md:pb-0"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* LABEL */}
        <div
          data-my-stuff-fade
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />

          <span className="text-sm tracking-[0.12em] text-white/60">
            04 — MY STUFF
          </span>
        </div>

        {/* TOP LINE */}
        <div className="mb-14 overflow-hidden">
          <div
            data-my-stuff-line
            className="h-px w-full bg-[#d8caca]"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_1fr_1fr]">

          {/* SKILLS */}
          <div>
            <h2
              data-my-stuff-fade
              className="font-display text-6xl leading-none text-[#d8caca] md:text-7xl lg:text-8xl"
            >
              Skills
            </h2>
          </div>

          {/* FRONTEND */}
          <div>
            <h3
              data-my-stuff-fade
              className="font-body text-3xl text-[#d8caca] md:text-[2.1rem]"
            >
              Frontend Engineering
            </h3>

            <div className="mt-4 space-y-2">
              {frontendSkills.map((skill) => (
                <p
                  key={skill}
                  data-my-stuff-fade
                  className="text-base text-[#87909f] md:text-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3
              data-my-stuff-fade
              className="font-body text-3xl text-[#d8caca] md:text-[2.1rem]"
            >
              Backend Architecture
            </h3>

            <div className="mt-4 space-y-2">
              {backendSkills.map((skill) => (
                <p
                  key={skill}
                  data-my-stuff-fade
                  className="text-base text-[#87909f] md:text-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
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
  );
}

export default Skills;