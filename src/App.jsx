import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about"
import TechMarquee from "./components/TechMarquee";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-black">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

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

      <WhatsAppButton />
    </main>
  );
}

export default App;