import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/mainLogo.png";

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className={`w-full ${isDarkMode ? "bg-gray-900" : "bg-[#F8F8F8]"}`}>
      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <img src={logo} alt="Mumair Logo" className="h-8" />
            <p className="ml-2 text-black text-3xl font-bold">M</p>
            <span className=" font-semibold text-gray-500 text-3xl">umair</span>
          </div>
        </div>

        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-base text-gray-900 hover:text-orange-500 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-black font-bold hover:text-orange-500 transition-colors duration-200"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className={`${isDarkMode ? "bg-[#121212]" : "bg-[#545454]"} py-4`}>
        <p className="text-center text-sm text-white">
          © {currentYear} <span className="text-orange-500">Mumair</span> All
          Rights Reserved , Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
