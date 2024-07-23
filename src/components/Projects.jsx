import React, { useState } from 'react';
import { motion } from 'framer-motion';
import comfyStoreImg from '../assets/ComfyStore.png';
import jobsterImg from '../assets/Jobster.png';

const projects = [
  {
    image: comfyStoreImg,
    title: "Comfy Store",
    description: "An online store built with React and Vite.",
    link: "https://react-vite-comfy-store-v2.netlify.app"
  },
  {
    image: jobsterImg,
    title: "Jobster",
    description: "A job search platform built with Redux Toolkit.",
    link: "https://redux-toolkit-jobster.netlify.app"
  },
  // Add more projects as needed
];

const projectVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
  };

  const handleNext = () => {
    setCurrentProject((prevProject) =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="relative">
          <motion.div
            key={currentProject}
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-[55vh] object-cover object-top mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-2">{projects[currentProject].title}</h3>
            <p className="mb-4 text-center">{projects[currentProject].description}</p>
            <a
              href={projects[currentProject].link}
              target='_blank'
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </motion.div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
