import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Briefcase, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MREX-01, first concept Electric vehicle",
      description: "Designed first concept Electric vehicle to participate in Pi-EV competition. Conceptualization and technical design of the vehicle was followed by procurement and cost planning along with Possible faults management report.",
      image: "/images/Pi_EV.jpg",
    },
    {
      title: "MREX-02, first Electric vehicle of IIT(ISM) Dhanbad",
      description: "Manufactured first ever Electic Vehicle of IIT(ISM) Dhanbad to participate in Formula Bharat 2025 and embarking on a journey of further development and progress in the field of Electric vehicles.",
      image: "/images/MREX.png",
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
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Our <span className="text-gradient-red">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore the innovative projects developed by our talented club members. Each project reflects our commitment to learning and practical application of technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col bg-white dark:bg-gray-700 rounded-xl">
                <div className="relative overflow-hidden h-64 md:h-72">
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                   />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors text-gray-800 dark:text-white text-xl md:text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">{project.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;