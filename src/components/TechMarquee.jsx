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

const TechMarquee = ({ items: marqueeItems = technologies, direction = "left" }) => {
  const items = [...marqueeItems, ...marqueeItems];
  const isReverse = direction === "right";

  return (
    <section
      aria-label="Technologies I work with"
      className="overflow-hidden border-y border-white/10 bg-[#070707] py-4 text-white sm:py-8"
    >

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070707] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070707] to-transparent" />

        <div className={`marquee-track ${isReverse ? "marquee-track-reverse" : ""} flex items-center`} aria-hidden="true">
          {items.map((technology, index) => (
            <span
              className="flex shrink-0 items-center gap-5 px-5 font-display text-xl tracking-[0.04em] text-white sm:gap-8 sm:px-6 sm:text-4xl"
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
