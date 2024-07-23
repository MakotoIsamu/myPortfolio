import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block mb-2 text-sm">Name</label>
            <input type="text" className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Email</label>
            <input type="email" className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Message</label>
            <textarea className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
