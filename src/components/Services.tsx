import { motion } from 'motion/react';
import homePhoto from '../assets/WhatsApp Image 2026-03-30 at 14.02.07.jpeg';
import commercialPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.02.08 (1).jpeg';
import remodelPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.02.08 (2).jpeg';

const services = [
  { title: "Home Renovations", description: "Refresh kitchens, bathrooms, and living spaces with precision renovation craftsmanship.", img: homePhoto },
  { title: "Commercial Refresh", description: "Modernize offices, retail spaces, and hospitality interiors without major downtime.", img: commercialPhoto },
  { title: "Complete Remodel", description: "Turn existing rooms into functional, modern spaces through expert renovation planning.", img: remodelPhoto },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
