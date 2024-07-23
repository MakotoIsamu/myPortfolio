import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center space-y-4 animate-fade-in-up">
        <h1 className="text-5xl font-bold animate-bounce">Hi, I'm Dhruv!</h1>
        <p className="text-2xl">A Fullstack Web Developer</p>
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
          <a href="https://drive.google.com/file/d/1TNhvC131UYMpQKOP2yNiE2-FWrUyYj9y/view?usp=sharing">View My Resume</a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
