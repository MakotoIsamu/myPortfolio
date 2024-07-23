import React from 'react';

function Footer() {
  return (
    <footer className="py-4 bg-gray-900 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Dhruv's Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
