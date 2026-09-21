function Footer() {
  return (
    <footer className="bg-black">
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-8 py-6 text-center sm:flex-row sm:py-7 md:px-[8vw]">

        {/* Left */}
        <div className="text-sm text-white/50 md:text-base">
          ©2026 Sahil Dalavi.
        </div>

        {/* Center */}
        <div className="flex items-center gap-3 text-sm text-[#d8caca] md:text-base">
          <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />

          <span>
            Available for a full-time position
          </span>
        </div>

        {/* Right */}
        <div className="text-sm text-white/50 md:text-base">
          Made by Sahil Dalavi.
        </div>

      </div>
    </footer>
  );
}

export default Footer;