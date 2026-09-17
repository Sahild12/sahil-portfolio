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

          <h1 className="font-display text-5xl leading-[0.9] tracking-[-0.02em] text-[#d8caca] sm:text-6xl md:text-7xl lg:text-8xl">
            SAHIL DALAVI
          </h1>

          <p className="mt-8 text-sm text-white/75">
            Based in Kolhapur, India
          </p>

          <div className="mt-3 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />

            <span className="text-sm text-white/80">
              Available for a full-time position
            </span>
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
        <div className="z-10 flex justify-center md:justify-start">

          <h2 className="max-w-[500px] font-display text-5xl leading-[0.9] tracking-[-0.02em] text-[#d8caca] sm:text-6xl md:text-7xl lg:text-8xl">
            FRONTEND
            <br />
            DEVELOPER
          </h2>

        </div>
      </div>

      {/* Decorative circle */}
      <div className="absolute bottom-[29%] right-[11%] hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 md:flex">
        <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
      </div>
    </section>
  );
}

export default Hero;