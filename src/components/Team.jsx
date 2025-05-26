import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Briefcase, ExternalLink } from "lucide-react";

const Team = () => {
  const facultyAdvisors = [
    {
      name: "Prof. Anirban Ghoshal",
      role: "Faculty-in-Charge (FIC)",
      //image: "https://lh3.googleusercontent.com/d/1a-FqARY-Drr7bhfmEHCkl6C7ATPnnOep",//
      image: "/images/fic.png",
      profileLink: "https://www.iitism.ac.in/faculty-details?faculty=anirbanghoshal",
      department: "Department of Electrical Engineering",
      email: "anirbanghoshal@iitism.ac.in"
    },
    {
      name: "Prof. V.L Srinivas",
      role: "Co-Faculty-in-Charge (Co-FIC)",
      //image: "https://lh3.googleusercontent.com/d/1KXFxF4TIYCcGaIl4XZziBFOa1u6QJlOr",//
      image: "/images/cofic.png",
      profileLink: "https://www.iitism.ac.in/faculty-details?faculty=vlsrinivas",
      department: "Department of Electrical Engineering",
      email: "vlsrinivas@iitism.ac.in"
    },
  ];

  const studentLeads = [
    {
      name: "Om Shrivastava",
      role: "Team Captain",
      //image: "https://lh3.googleusercontent.com/d/1lCpyToyIG-3NqpPxHN4zS-UQNCq1YBKU",//
      image: "/images/om.jpg",
      bio: "Powertrain",
      email: "22je0651@iitism.ac.in"
    },
    {
      name: "Aaromal S Ram",
      role: "Technical Integration Engineer",
     // image: "https://lh3.googleusercontent.com/d/1fWq3utjSwDOsfoTUPxsk1hafRyv3wpXA",//
      image: "/images/aaromal.jpg",
      bio: "Mechanical Engineering",
      email: "22je0006@iitism.ac.in"
    },
    {
      name: "Nitish Kumar",
      role: "Team Operations Lead",
      //image: "https://lh3.googleusercontent.com/d/1zeMuS2gVZ_zUbv-uVAhqh2286jxXOEAH",//
      image: "/images/nitish.jpg",
      bio: "Electrical Engineering",
      email: "22je0640@iitism.ac.in"
    },
  ];

  const activeMembers = [
    {
      name: "Kaushan Dey",
      email: "21je0460.iitism.ac.in",
      department: "Mechanical design" 
    },
    {
      name: "Aman Yadav",
      email: "22je1092.iitism.ac.in",
      department: "Operations and Sponsorship" 
    },
    {
      name: "Gudiwada Kartheek",
      email: "22je0367.iitism.ac.in",
      department: "Mechanical Design" 
    },
    {
      name: "Jonathan John",
      email: "22je0435.iitism.ac.in",
      department: "Mechanical Design" 
    },
    {
      name: "Joy Vithayathil",
      email: "22je0438.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Roma Singh",
      email: "22je0823.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Shruti Sinha",
      email: "22je0932.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Aadi Dev Pandey",
      email: "23je0002.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Akash Kumar Shaw",
      email: "23je0066.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Arindam Jha",
      email: "23je0144.iitism.ac.in",
      department: "Mechanical Design" 
    },
    {
      name: "Justin George",
      email: "23je0438.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Maninder Singh",
      email: "23je0552.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Mohar Mondal",
      email: "23je0596.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Nandagopal V",
      email: "23je0629.iitism.ac.in",
      department: "Mechanical Design" 
    },
    {
      name: "Sahil Kumar",
      email: "23je0842.iitism.ac.in",
      department: "Powertrain" 
    },
    {
      name: "Sangeeth M Ajith",
      email: "23je0865.iitism.ac.in",
      department: "Mechanical Design"   
    },
    {
      name: "Yash Rao",
      email: "23je1112@iitism.ac.in",
      department: "Mechanical Design"
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="members" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Meet Our <span className="text-gradient-red">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The dedicated individuals driving our club's innovation and success.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-primary dark:text-primary">Faculty Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {facultyAdvisors.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <CardContent className="p-6 flex flex-col sm:flex-row items-center text-center sm:text-left">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6 border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                    />
                    <div>
                      <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="text-xl font-bold group-hover:text-primary transition-colors text-gray-800 dark:text-white hover:underline flex items-center justify-center sm:justify-start">
                        {member.name} <ExternalLink size={16} className="ml-2 opacity-70 group-hover:opacity-100" />
                      </a>
                      <p className="text-md font-medium text-primary mb-1">{member.role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start">
                        <Briefcase size={14} className="mr-2" /> {member.department}
                      </p>
                      <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                        {member.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-primary dark:text-primary">Student Leads</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {studentLeads.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group text-center bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <CardContent className="p-6 flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                    />
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors text-gray-800 dark:text-white">{member.name}</h4>
                    <p className="text-md font-medium text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                    <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                              {member.email}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-primary dark:text-primary">Active Members</h3>
          <motion.div variants={itemVariants}>
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-white">Our Dedicated Team</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">The backbone of our club's activities and projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                      <tr>
                        <th scope="col" className="px-4 py-3">Name</th>
                        <th scope="col" className="px-4 py-3">Department</th>
                        <th scope="col" className="px-4 py-3">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeMembers.map((member, index) => (
                        <tr key={index} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors">
                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{member.name}</td>
                          <td className="px-4 py-3">{member.department}</td>
                          <td className="px-4 py-3">
                            <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                              {member.email}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;