import { motion } from 'motion/react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get a Consultation</h2>
        <p className="text-center text-gray-600 mb-8">
          Send us your room photos and product preferences to receive a tailored renovation quote from pins_pace. Custom pricing is provided after consultation.
        </p>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" required />
            <input type="email" placeholder="Email" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" required />
          </div>
          <input type="tel" placeholder="Phone" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" required />
          <textarea placeholder="Tell us about your project" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none h-40" required></textarea>
          <button type="submit" className="w-full bg-gray-900 text-white p-4 rounded-lg font-semibold hover:bg-orange-600 transition-all">
            Request Quote
          </button>
        </form>
      </div>
    </section>
  );
}
