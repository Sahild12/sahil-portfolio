import { useState } from "react";
import Magnetic from "./Magnetic";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-[100] w-full px-4 py-3 sm:px-8 md:px-[5vw] bg-black/70 backdrop-blur-md">
        <div className="relative flex items-center justify-between gap-3">

          {/* LOGO */}
          <Magnetic pull={0.4}>
            <a
              href="#home"
              className="bg-[#070707] px-3 py-2.5 font-display text-sm tracking-[0.12em] text-[#d8caca] transition duration-300 hover:text-orange-500 sm:px-4 sm:py-3 sm:text-lg"
            >
              SAHIL DALAVI<span className="text-orange-500">.</span>
            </a>
          </Magnetic>

          {/* AVAILABLE */}
          <div className="group absolute left-1/2 hidden -translate-x-1/2 cursor-default items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/5 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]" />
            </span>

            <span className="text-[10px] tracking-[0.1em] text-white/70 transition-colors duration-300 group-hover:text-green-400">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* HAMBURGER */}
          <Magnetic pull={0.4}>
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-orange-500 sm:h-12 sm:w-12"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span className="h-[2px] w-5 bg-white transition duration-300 group-hover:bg-orange-500" />
                <span className="h-[2px] w-5 bg-white transition duration-300 group-hover:bg-orange-500" />
                <span className="h-[2px] w-5 bg-white transition duration-300 group-hover:bg-orange-500" />
              </div>
            </button>
          </Magnetic>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[200] flex flex-col bg-black transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative z-10 flex h-full flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-6 sm:px-8 sm:py-8 md:px-[5vw]">
            <div className="bg-[#070707] px-3 py-2.5 font-display text-sm tracking-[0.12em] text-[#d8caca] sm:px-4 sm:py-3 sm:text-lg">
              SAHIL DALAVI<span className="text-orange-500">.</span>
            </div>

            <div className="group absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/5 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] md:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]" />
              </span>

              <span className="text-[10px] tracking-[0.1em] text-white/70 transition-colors duration-300 group-hover:text-green-400">
                AVAILABLE FOR WORK
              </span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-orange-500 sm:h-12 sm:w-12"
              aria-label="Close menu"
            >
              <span className="text-2xl text-white transition group-hover:text-orange-500">
                ×
              </span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 px-4 sm:px-8 md:px-[6vw]">
            {[
              ["01", "WORK", "#projects"],
              ["02", "ABOUT", "#about"],
              ["03", "CONTACT", "#contact"],
            ].map(([number, label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group relative flex items-center border-b border-white/10 py-6 transition-all duration-300 hover:pl-2 sm:py-8"
              >
                <span className="w-8 text-xs text-white/40 sm:w-12 sm:text-sm">{number}</span>

                <span className="font-display text-4xl text-[#d8caca] transition-all duration-300 group-hover:text-orange-500 sm:text-5xl md:text-7xl">
                  {label}
                </span>

                <span className="ml-auto text-lg text-white/40 transition duration-300 group-hover:text-orange-500 sm:text-xl">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="mt-auto px-4 pb-6 sm:px-8 sm:pb-7 md:px-[5vw] md:pb-8">
            <div className="mb-6 h-px w-full bg-white/15" />

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[#87909f] transition-all duration-300 hover:text-white sm:gap-3 sm:text-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-125" />

                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100">
                    LINKEDIN
                  </span>
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[#87909f] transition-all duration-300 hover:text-white sm:gap-3 sm:text-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-125" />

                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100">
                    GITHUB
                  </span>
                </a>

                <a
                  href="https://x.com/SahilDalav43902"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[#87909f] transition-all duration-300 hover:text-white sm:gap-3 sm:text-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-125" />

                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100">
                    TWITTER
                  </span>
                </a>
              </div>

              <div className="text-left md:text-right">
                <a
                  href="mailto:dalavisahil95@gmail.com"
                  className="block break-all text-xs text-[#ff8a3d] transition duration-300 hover:text-orange-500 sm:text-sm"
                >
                  dalavisahil95@gmail.com
                </a>

                <p className="mt-2 text-[10px] text-white/35 sm:text-xs">© 2026 Sahil Dalavi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
