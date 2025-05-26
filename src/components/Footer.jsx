import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/mechismu-racing/", label: "LinkedIn" },
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/mechismu/", label: "Facebook" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/mechismuracing/?hl=en", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;