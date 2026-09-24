import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechMarquee from "./components/TechMarquee";
import CustomCursor from "./components/CustomCursor";
import Projects from "./components/Projects";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";
import Skills from "./components/Skills";
import Toolbox from "./components/Toolbox";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const synchronizedSectionsRef = useRef(null);
  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const fadeItems = gsap.utils.toArray("[data-my-stuff-fade]");
      const lines = gsap.utils.toArray("[data-my-stuff-line]");

      gsap.set(fadeItems, { opacity: 0, y: 40 });
      gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

      const timeline = gsap.timeline({ paused: true });

      timeline.to(fadeItems, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
      });

      timeline.to(
        lines,
        {
          scaleX: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.inOut",
        },
        "-=0.35"
      );

      ScrollTrigger.create({
        trigger: synchronizedSectionsRef.current,
        start: "top 78%",
        end: "bottom 22%",
        onEnter: () => timeline.restart(),
        onEnterBack: () => timeline.restart(),
        onLeaveBack: () => timeline.reverse(),
      });
    }, synchronizedSectionsRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      <CustomCursor />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <Hero isReady={!isLoading} />

        <TechMarquee />

        <About />

        <TechMarquee
          direction="right"
          items={[
            "Designer",
            "Web Designer",
            "Static Websites",
            "Full-Stack Developer",
          ]}
        />
        <Projects />
        <div ref={synchronizedSectionsRef} data-synchronized-sections>
          <Skills />
          <Toolbox />
          <Experience />
        </div>
        <Contact />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;