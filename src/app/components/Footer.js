import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white mb-6 md:mb-0">
          <Link href="/">SINOLINK</Link>
        </div>

        {/* Copyright (Flipped on mobile) */}
        <div className="text-white text-sm mb-6 order-2 md:order-1 mt-0 md:mt-6">
          © 2025 SINOLINK. جميع الحقوق محفوظة.
        </div>

        {/* Social Media Links (Flipped on mobile) */}
        <div className="flex justify-center md:justify-end gap-4 order-1 md:order-2 mb-6 md:mb-0">
          <a
            href="https://instagram.com/sinolinker"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://wa.me/212628109552"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:contact@sinolink.info"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
