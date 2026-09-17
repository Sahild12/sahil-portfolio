function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >

      {/* Right orange border */}
      <div className="absolute right-0 top-0 z-20 h-full w-[3px] bg-orange-500" />

      <div className="mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 items-center px-8 md:grid-cols-[1fr_1.1fr_1fr] md:px-[8vw]">

        {/* LEFT */}
        <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left">

          {/* Name — Bebas Neue bold uppercase like the reference */}
          <h1 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] tracking-[0.02em] text-[#d8caca]">
            SAHIL DALAVI
          </h1>

          {/* Subtitles — centered under name, smaller */}
          <div className="mt-6 flex flex-col items-center gap-2 md:items-start">
            <p className="text-xs tracking-wide text-white/60">
              Based in Kolhapur, India
            </p>

            <div className="flex items-center gap-2">
              {/* Pulsing glowing green dot */}
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]" />
              </span>
              <span className="text-xs tracking-wide text-white/60">
                Available for a full-time position
              </span>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex items-center justify-center py-16 md:py-0">

          <div className="absolute h-[310px] w-[310px] rounded-full border border-orange-700/50 sm:h-[390px] sm:w-[390px] md:h-[500px] md:w-[500px]" />

          <div className="relative h-[290px] w-[290px] overflow-hidden rounded-full border border-orange-700/80 sm:h-[370px] sm:w-[370px] md:h-[480px] md:w-[480px]">
            <img
              src="/hero.jpg"
              alt="Sahil Dalavi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="z-10 flex items-center justify-center md:justify-start md:pl-10">
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] tracking-[0.02em] text-[#d8caca]">
            Creative Fullstack
            <br />
            Developer
          </h2>
        </div>

      </div>

    </section>
  );
}

export default Hero;

