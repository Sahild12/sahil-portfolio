const experiences = [
  {
    period: "2023 → Present",
    role: "Independent Web Developer",
    company: "Self-Directed Projects",
  },
  {
    period: "Aug 2022 → May 2026",
    role: "B.Tech Computer Science",
    company: "Sharad Institute of Technology",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      data-my-stuff-section
      className="relative overflow-hidden bg-black px-8 pt-8 pb-28 md:px-[8vw] md:pt-10 md:pb-36"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_1fr]">
          <h2 className="font-display text-6xl leading-none text-[#d8caca] md:text-7xl lg:text-8xl">
            Experience
          </h2>

          <div>
            {experiences.map((experience) => (
              <article
                key={experience.role}
                data-my-stuff-fade
                className="group border-b border-white/10 py-8 first:pt-0 last:border-b-0"
              >
                <h3 className="font-body text-3xl tracking-[-0.03em] text-[#d8caca] transition-colors duration-300 group-hover:text-orange-500 md:text-5xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-lg text-[#87909f]">
                  {experience.company}
                </p>

                <p className="mt-5 text-base text-orange-500">
                  {experience.period}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 overflow-hidden">
          <div
            data-my-stuff-line
            className="h-px w-full bg-[#d8caca]"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;