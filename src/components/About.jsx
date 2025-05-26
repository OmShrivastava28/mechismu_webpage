import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <img  
          alt="Abstract background representing the club's spirit" 
          className="w-full h-full object-cover filter blur-sm"
         src="/images/back.jpg" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            About Our <span className="text-gradient-red">Club</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl"
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
           Mechismu Racing believes in Action, Progress & Growth. Our Team has achieved several milestones in its active years till now but nothing keeps us from seeking more & more. As a company we roll up our sleeves to plant roots in the formula communities that we call home. Since its formation in 2008, our team have constantly been developing and deploying innovative technologies in the field of Automotive Industry. After designing and fabrication of several internal combustion engine vehicles till 2019, Team Mechismu decided to move ahead with the market trend and demand and switched to Electric Vehicle in 2021. After series of designs and testings, we successfully designed a concept Electric Vehicle(MREX-01) in 2023 and a fully functioning Electric vehicle (MREX-02) in January 2025 As a team, we've embarked on a journey to build modern and advanced systems of electric cars with some of the most remarkable and enthusiastic formula aspirants of IIT ISM Dhanbad. Our mission is what drives us to do everything possible to expand human potential with focus on EV technology, because we dare to design the future of Electric vehicle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;