import { motion } from 'motion/react';

export default function QuoteProcess() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">Professional Pricing Tailored to Your Project</h2>
        <p className="text-xl text-gray-300 mb-16 leading-relaxed">
          Every project is unique. Our pricing is built around your exact scope, materials, and schedule so you receive a clear, professional proposal that reflects the true value of your build.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
        >
          Request a Personalized Estimate
        </motion.a>
      </div>
    </section>
  );
}
