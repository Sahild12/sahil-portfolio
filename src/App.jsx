import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <main className="bg-black">
      <CustomCursor />
      <Navbar />
      <Hero />
      <WhatsAppButton />
    </main>
  );
}

export default App;