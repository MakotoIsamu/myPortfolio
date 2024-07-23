import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-800 text-white z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Dhruv's Portfolio</div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`fixed top-0 left-0 w-full bg-gray-800 text-white p-4 md:hidden transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
        <a href="#home" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Home</a>
        <a href="#about" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>About</a>
        <a href="#skills" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Skills</a>
        <a href="#projects" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Projects</a>
        <a href="#contact" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
