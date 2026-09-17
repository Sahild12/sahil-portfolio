import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechMarquee from "./components/TechMarquee";
import CustomCursor from "./components/CustomCursor";
import Projects from "./components/projects";
import Identity from "./components/Identity";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";
import { useCallback, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="bg-black">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      <CustomCursor />

      <Navbar />

      <Hero />

      <TechMarquee />

      <About />

      <TechMarquee
        items={[
          "Available for work",
          "Full-stack developer",
          "MERN stack expert",
          "GSAP animation",
        ]}
      />

      <Projects />

      <Identity />

      <WhatsAppButton />
    </main>
  );
}

export default App;