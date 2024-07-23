import React from 'react';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={aboutVariants} 
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a passionate fullstack developer with experience in building web applications using modern technologies like React, Node.js, Express, and MongoDB. I love coding and enjoy working on challenging projects that require me to step out of my comfort zone.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
          <a href="#projects"><motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="bg-blue-600 text-white px-6 py-3 rounded-full cursor-pointer"
            >
              Projects
            </motion.div></a>
            <a href="#contact"><motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="bg-gray-800 text-white px-6 py-3 rounded-full cursor-pointer"
            >
              Contact
            </motion.div></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
