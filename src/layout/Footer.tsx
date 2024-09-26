import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 text-white text-center">
      <div className="container mx-auto px-6">
        <p className="mt-2">Связаться с нами:</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://wa.me/996990808637"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition transform hover:scale-105"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://www.instagram.com/itfest.kg?igsh=enBpcmx3MHpzdnZk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition transform hover:scale-105"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
