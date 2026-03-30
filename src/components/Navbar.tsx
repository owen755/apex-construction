import { motion } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gray-900 tracking-tighter">pins_<span className="text-orange-600">pace</span></span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">Services</a>
            <a href="#catalog" className="text-gray-600 hover:text-orange-600 transition-colors">Products</a>
            <a href="#contact" className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all">Get an Estimate</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
