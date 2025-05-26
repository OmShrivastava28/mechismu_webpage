import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const contactDetails = [
    {
      icon: <Mail className="h-7 w-7 text-primary" />,
      title: "Email Us",
      details: "mechismu@iitism.ac.in",
      href: "mailto:mechismu@iitism.ac.in",
    },
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      title: "Om Shrivastava (Team Captain)",
      details: "+91 7523816607", 
      href: "tel:+917523816607",
    },
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      title: "Aaromal S Ram (Technical Integration Engineer)",
      details: "+91 9895163660", 
      href: "tel:+919895163660",
    },
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      title: "Nitish Kumar (Team Operations Lead)",
      details: "+91 6202575695", 
      href: "tel:+916202575695",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Get in <span className="text-gradient-red">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're always excited to hear from fellow enthusiasts, potential collaborators, and anyone interested in e-mobility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-6 md:p-10 rounded-xl shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-md md:text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                  <a 
                    href={item.href}
                    className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-primary transition-colors break-all"
                  >
                    {item.details}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;