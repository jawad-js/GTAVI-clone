import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-black bg-opacity-60 text-white px-6 py-4 fixed top-0 left-0 z-50 flex justify-between items-center bg-black/0 backdrop">
      <h1 className="text-2xl font-bold tracking-widest text-teal-500 font-sans transform transition-transform duration-200 hover:scale-110">
        GTA<span className="text-teal-300">VI</span>
      </h1>

      <ul className="hidden md:flex gap-8 text-m font-medium tracking-wide">
        <li className="hover:text-teal-400 cursor-pointer transition transform duration-200 hover:scale-110">Overview</li>
        <li className="hover:text-teal-400 cursor-pointer transition transform duration-200 hover:scale-110">GTA Online</li>
        <li className="hover:text-teal-400 cursor-pointer transition transform duration-200 hover:scale-110">Story</li>
        <li className="hover:text-teal-400 cursor-pointer transition transform duration-200 hover:scale-110">GTA+</li>
        <li className="hover:text-teal-400 cursor-pointer transition transform duration-200 hover:scale-110">Community</li>
        <li className="hover:text-teal-400 cursor-pointer transition transform duration-200 hover:scale-110">Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;
