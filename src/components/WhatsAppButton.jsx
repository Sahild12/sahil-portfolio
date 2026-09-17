import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppButton() {
  return (
    <a
      href="#contact"
      aria-label="Contact Sahil on WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5a00] text-black shadow-[0_0_25px_rgba(255,90,0,0.25)] transition duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(255,90,0,0.45)]"
    >
      <FaWhatsapp size={31} />
    </a>
  );
}

export default WhatsAppButton;