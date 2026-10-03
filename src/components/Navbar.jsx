import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiX } from "react-icons/fi";
import Magnetic from "./Magnetic";

const menuBrandCharacters = Array.from("SAHIL DALAVI");

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBrandRef = useRef(null);

  useLayoutEffect(() => {
    if (!menuOpen || !menuBrandRef.current) return undefined;

    const characters = menuBrandRef.current.querySelectorAll(
      ".menu-brand-char"
    );

    const context = gsap.context(() => {
      gsap.fromTo(
        characters,
        {
          yPercent: 118,
          rotate: 3.5,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.035,
          ease: "power4.out",
          delay: 0.12,
        }
      );
    }, menuBrandRef);

    return () => context.revert();
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-[999] w-full isolate bg-black/95 px-4 py-3.5 backdrop-blur-md sm:px-8 md:bg-black/70 md:px-[5vw]">
        <div className="relative mx-auto flex max-w-[1800px] items-center justify-between gap-3">
          {/* LOGO */}
          <Magnetic pull={0.45} className="p-3 -m-3">
            <a
              href="#home"
              className="group inline-flex items-center py-2 font-display text-lg tracking-[0.14em] text-[#d8caca] transition-colors duration-300 hover:text-orange-500 sm:text-2xl cursor-pointer"
              onClick={closeMenu}
            >
              SAHIL DALAVI
              <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-0.5">
                .
              </span>
            </a>
          </Magnetic>

          {/* AVAILABLE */}
          <div className="group absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/5 md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]" />
            </span>

            <span className="text-[10px] tracking-[0.1em] text-white/70 transition-colors duration-300 group-hover:text-green-400">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* HAMBURGER */}
          <Magnetic pull={0.35}>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#070707]/90 backdrop-blur-xl transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] sm:h-12 sm:w-12"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col gap-[5px]">
                <span className="block h-[2px] w-5 bg-white transition-colors duration-300 group-hover:bg-orange-500" />
                <span className="block h-[2px] w-5 bg-white transition-colors duration-300 group-hover:bg-orange-500" />
                <span className="block h-[2px] w-5 bg-white transition-colors duration-300 group-hover:bg-orange-500" />
              </div>
            </button>
          </Magnetic>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[1001] flex flex-col bg-black transition-all duration-500 ${menuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="relative z-10 flex h-full flex-col overflow-y-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-8 md:px-[5vw]">
            <Magnetic pull={0.45} className="p-3 -m-3">
              <a
                href="#home"
                onClick={closeMenu}
                ref={menuBrandRef}
                aria-label="Sahil Dalavi"
                className="group flex items-center overflow-hidden py-2 font-display text-lg tracking-[0.14em] text-[#d8caca] transition-colors duration-300 hover:text-orange-500 sm:text-2xl cursor-pointer"
              >
                {menuBrandCharacters.map((character, index) => (
                  <span
                    className="inline-block overflow-hidden"
                    key={`${character}-${index}`}
                    aria-hidden="true"
                  >
                    <span className="menu-brand-char inline-block">
                      {character === " " ? "\u00a0" : character}
                    </span>
                  </span>
                ))}
                <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-0.5">.</span>
              </a>
            </Magnetic>

            <div className="group absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/5 md:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]" />
              </span>

              <span className="text-[10px] tracking-[0.1em] text-white/70 transition-colors duration-300 group-hover:text-green-400">
                AVAILABLE FOR WORK
              </span>
            </div>

            <Magnetic pull={0.35}>
              <button
                type="button"
                onClick={closeMenu}
                className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#070707] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] sm:h-12 sm:w-12"
                aria-label="Close menu"
              >
                <FiX
                  size={22}
                  className="text-white transition duration-300 group-hover:rotate-90 group-hover:text-orange-500"
                />
              </button>
            </Magnetic>
          </div>

          {/* MENU ITEMS */}
          <div className="flex-1 px-5 sm:px-8 md:px-[6vw]">
            {[
              ["01", "WORK", "#projects"],
              ["02", "ABOUT", "#about"],
              ["03", "CONTACT", "#contact"],
            ].map(([number, label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="group relative flex items-center border-b border-white/10 py-4 transition-all duration-300 hover:pl-2 sm:py-8"
              >
                <span className="w-8 text-xs text-white/40 sm:w-12 sm:text-sm">
                  {number}
                </span>

                <span className="font-display text-[1.75rem] text-[#d8caca] transition-all duration-300 group-hover:text-orange-500 sm:text-5xl md:text-7xl">
                  {label}
                </span>

                <span className="ml-auto text-lg text-white/40 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-500 sm:text-xl">
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* MENU FOOTER */}
          <div className="mt-auto px-5 pb-6 sm:px-8 sm:pb-7 md:px-[5vw] md:pb-8">
            <div className="mb-6 h-px w-full bg-white/15" />

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="grid grid-cols-2 items-center gap-x-4 gap-y-6 sm:flex sm:flex-wrap sm:gap-5">
                <a
                  href="https://www.linkedin.com/in/sahil-dalvi-47b876367/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[#87909f] transition-all duration-300 hover:text-white sm:gap-3 sm:text-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-125" />
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    LINKEDIN
                  </span>
                </a>

                <a
                  href="https://github.com/Sahild12"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[#87909f] transition-all duration-300 hover:text-white sm:gap-3 sm:text-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-125" />
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
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
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
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

                <p className="mt-2 text-[10px] text-white/35 sm:text-xs">
                  © 2026 Sahil Dalavi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
