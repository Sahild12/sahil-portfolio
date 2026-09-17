import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full px-8 py-8 md:px-20">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="rounded-md bg-[#080808] px-4 py-3 font-heading text-lg tracking-[0.15em] text-[#d6c7c7] transition duration-300 hover:text-orange-500"
          >
            SAHIL DALAVI
            <span className="text-orange-500">.</span>
          </a>

          {/* Available for work */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 md:flex">
            <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]"></span>

            <span className="text-xs font-medium tracking-[0.12em] text-white/70">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-orange-500"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white transition duration-300 group-hover:bg-orange-500"></span>
              <span className="block h-0.5 w-5 bg-white transition duration-300 group-hover:bg-orange-500"></span>
              <span className="block h-0.5 w-5 bg-white transition duration-300 group-hover:bg-orange-500"></span>
            </div>
          </button>

        </div>
      </nav>

      {/* Menu */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black transition duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 font-heading text-4xl">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-white transition hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-white transition hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="text-white transition hover:text-orange-500"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-white transition hover:text-orange-500"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-white transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;