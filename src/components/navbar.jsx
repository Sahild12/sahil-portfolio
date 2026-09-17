import { useState } from "react";
import Magnetic from "./Magnetic";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-[100] w-full px-8 py-4 md:px-[5vw] bg-black/70 backdrop-blur-md">
        <div className="relative flex items-center justify-between">

          {/* LOGO */}
          <Magnetic pull={0.4}>
            <a
              href="#home"
              className="bg-[#070707] px-4 py-3 font-display text-lg tracking-[0.12em] text-[#d8caca] transition duration-300 hover:text-orange-500"
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
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-orange-500"
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
        className={`fixed inset-0 z-[200] bg-black transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-8 md:px-[5vw]">

          <div className="bg-[#070707] px-4 py-3 font-display text-lg tracking-[0.12em] text-[#d8caca]">
            SAHIL DALAVI<span className="text-orange-500">.</span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-orange-500"
          >
            <span className="text-2xl text-white transition group-hover:text-orange-500">
              ×
            </span>
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-8 md:px-[6vw]">

          {[
            ["01", "WORK", "#projects"],
            ["02", "ABOUT", "#about"],
            ["03", "CONTACT", "#contact"],
          ].map(([number, label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center border-b border-white/10 py-8"
            >
              <span className="w-12 text-sm text-white/40">
                {number}
              </span>

              <span className="font-display text-5xl text-[#d8caca] transition duration-300 group-hover:translate-x-3 group-hover:text-orange-500 md:text-7xl">
                {label}
              </span>

              <span className="ml-auto text-xl text-white/40 transition duration-300 group-hover:translate-x-2 group-hover:text-orange-500">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;