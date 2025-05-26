import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, CheckCircle } from "lucide-react";

const Achievements = () => {
  const achievementsList = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Secured 3rd overall rank internationally in Pi-EV 2023",
      description: "Determination towards making an internatinal stanard formula student car helped us to secure 3rd overall rank internationally at Pi-EV 2023 along with securing 1st rank in Fault management(FMEA) report.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "12th in EDP at FB 25",
      description: "Achieved a commendable 12th position among 47 teams in the highly competitive Engineering Design Presentation (EDP) competition showcasing innovation and technical excellence.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "6th IIT to Build a Working EV",
      description: "Pioneering sustainable Formula Student vehicle, our team successfully designed and built a fully functional electric vehicle, marking a significant milestone in our journey.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Cleared Pre-Tech Inspection at Formula Bharat 2025",
      description: "Successfully passed the rigorous Pre-technical inspection at Formula Bharat 2025, demonstrating adherence to high engineering standards and safety protocols.",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Our <span className="text-gradient-red">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are proud of our accomplishments and the recognition our members have earned through hard work and dedication.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievementsList.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group bg-white dark:bg-gray-700 rounded-xl">
                <CardHeader className="flex flex-col items-center text-center p-6">
                  <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors text-gray-800 dark:text-white">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;