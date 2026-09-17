import { FaWhatsapp } from "react-icons/fa6";
import Magnetic from "./Magnetic";

function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Magnetic pull={0.4}>
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Sahil on WhatsApp"
          data-cursor="Chat"
          className="group flex items-center justify-center drop-shadow-[0_4px_10px_rgba(255,90,0,0.2)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,90,0,0.8)]"
        >
          <div className="absolute h-8 w-8 rounded-full bg-black" />
          <FaWhatsapp size={52} className="relative z-10 text-[#ff5a00] transition-colors duration-300 group-hover:text-orange-400" />
        </a>
      </Magnetic>
    </div>
  );
}

export default WhatsAppButton;