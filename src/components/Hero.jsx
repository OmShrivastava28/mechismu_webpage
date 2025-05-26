import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const logoUrl = "/images/logo.jpg";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 hero-gradient-red -z-10 opacity-30 dark:opacity-50"></div>
      
      <motion.div 
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="mb-6 flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={logoUrl}
            alt="E-mobility club Logo"
            className="h-250 md:h-auto w-500 bg-white/50 dark:bg-black/30 p-3 rounded-lg shadow-xl"
          />
        </motion.div>
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Mechismu Racing <span className="text-gradient-red">Electric</span>
        </motion.h1>
        <motion.p
          className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Electric mobility club of IIT(ISM) Dhanbad
        </motion.p>
        <motion.p
          className="mt-4 text-2xl md:text-3xl font-semibold text-gradient-red italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          "Racing is Religion"
        </motion.p>
      </motion.div>
      
      <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-red-500/5 dark:bg-red-500/3 rounded-full filter blur-xl animate-float opacity-30 dark:opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 md:w-40 md:h-40 bg-red-500/5 dark:bg-red-500/3 rounded-lg filter blur-2xl animate-float opacity-30 dark:opacity-50" style={{ animationDelay: "1.5s" }}></div>
    </section>
  );
};

export default Hero;