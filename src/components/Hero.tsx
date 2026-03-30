import { motion } from 'motion/react';
import heroPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.00.36.jpeg';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Local client hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url("${heroPhoto}")`,
          filter: 'brightness(0.55)'
        }}
      />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          pins_pace Renovation<br />Real Client Spaces, Custom Pricing.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Browse our client renovation projects, choose premium lighting and fixture solutions, and request a custom quote with transparent pricing.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#catalog"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
          >
            Browse Products
          </a>
          <a 
            href="#contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Request Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
