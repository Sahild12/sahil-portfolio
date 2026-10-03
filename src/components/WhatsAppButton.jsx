import { FaWhatsapp } from "react-icons/fa6";
import Magnetic from "./Magnetic";

function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-[1002] sm:bottom-8 sm:right-8">
      <Magnetic pull={0.4}>
        <a
          href="https://wa.me/918149593948"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Sahil on WhatsApp"
          data-cursor="Chat"
          className="group flex h-12 w-12 items-center justify-center drop-shadow-[0_4px_10px_rgba(255,90,0,0.2)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,90,0,0.8)] sm:h-14 sm:w-14"
        >
          <div className="absolute h-8 w-8 rounded-full bg-black sm:h-9 sm:w-9" />
          <FaWhatsapp size={40} className="whatsapp-vibrate relative z-10 text-[#ff5a00] transition-colors duration-300 group-hover:text-orange-400 sm:h-[52px] sm:w-[52px]" />
        </a>
      </Magnetic>
    </div>
  );
}

export default WhatsAppButton;
