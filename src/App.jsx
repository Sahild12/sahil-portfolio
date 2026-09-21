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
import { useCallback, useState } from "react";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        direction="right"
        items={[
          "Designer",
          "Web Designer",
          "Static Websites",
          "Full-Stack Developer",
        ]}
      />
      <Projects />
      <div data-synchronized-sections>
        <Skills />
        <Toolbox />
        <Experience />
      </div>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;