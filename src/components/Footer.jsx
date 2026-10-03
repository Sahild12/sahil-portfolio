function Footer() {
  return (
    <footer className="bg-black">
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-2 px-5 py-5 text-center sm:flex-row sm:gap-4 sm:px-8 sm:py-7 md:px-[8vw]">

        {/* Left */}
        <div className="order-2 text-xs text-white/50 sm:order-1 sm:text-sm md:text-base">
          ©2026 Sahil Dalavi.
        </div>

        {/* Center */}
        <div className="order-1 flex items-center gap-3 text-xs text-[#d8caca] sm:order-2 sm:text-sm md:text-base">
          <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />

          <span>
            Available for a full-time position
          </span>
        </div>

        {/* Right */}
        <div className="order-3 text-xs text-white/50 sm:text-sm md:text-base">
          Made by Sahil Dalavi.
        </div>

      </div>
    </footer>
  );
}

export default Footer;