const technologies = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
];

const TechMarquee = ({ items: marqueeItems = technologies }) => {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Technologies I work with"
      className="overflow-hidden border-y border-white/10 bg-[#070707] py-8 text-white"
    >

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070707] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070707] to-transparent" />

        <div className="marquee-track flex items-center" aria-hidden="true">
          {items.map((technology, index) => (
            <span
              className="flex shrink-0 items-center gap-8 px-6 font-display text-3xl tracking-[0.04em] text-[#d8caca] sm:text-4xl"
              key={`${technology}-${index}`}
            >
              {technology}
             
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-orange-500"
              />
           
           
            </span>
          ))}

        </div>

      </div>

    </section>

  );
  
};

export default TechMarquee;
