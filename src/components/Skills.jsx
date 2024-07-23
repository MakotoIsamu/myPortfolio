import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaGithub, FaGit, FaDocker, FaFigma, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiPostman, SiFirebase, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Postman', icon: <SiPostman className="text-red-500" /> },
  { name: 'Git', icon: <FaGit className="text-orange-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
];

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      staggerChildren: 0.2
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={skillVariants} 
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={skillItemVariants} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col items-center"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
