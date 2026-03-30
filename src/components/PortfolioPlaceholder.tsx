import { motion } from 'motion/react';
import chandelierShowcase from '../assets/WhatsApp Image 2026-03-30 at 14.00.35.jpeg';
import ringChandelier from '../assets/WhatsApp Image 2026-03-30 at 14.00.36.jpeg';
import roomSetup from '../assets/WhatsApp Image 2026-03-30 at 14.02.07.jpeg';
import bedroomDisplay from '../assets/WhatsApp Image 2026-03-30 at 14.02.08 (1).jpeg';
import kitchenAccent from '../assets/WhatsApp Image 2026-03-30 at 14.02.08 (2).jpeg';
import openPlanLighting from '../assets/WhatsApp Image 2026-03-30 at 14.02.08 (3).jpeg';

const showcaseItems = [
  { title: 'Signature Crystal Chandelier', description: 'Premium ceiling lighting that makes a bold statement in luxury interiors.', img: chandelierShowcase },
  { title: 'Modern Ring Suspension', description: 'A sculptural hanging chandelier designed for upscale living and dining spaces.', img: ringChandelier },
  { title: 'Minimalist Room Upgrade', description: 'A clean, polished room setup highlighting refined lighting and design accents.', img: roomSetup },
  { title: 'Luxury Bedroom Display', description: 'Bedroom lighting and fixtures styled to create an inviting, premium retreat.', img: bedroomDisplay },
  { title: 'Kitchen Accent Lighting', description: 'Contemporary kitchen lighting with modern fixtures and polished finishes.', img: kitchenAccent },
  { title: 'Open Plan Accent Lighting', description: 'Stylish lighting installations for dynamic living and dining areas.', img: openPlanLighting },
];

export default function PortfolioPlaceholder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold uppercase tracking-[0.35em] mb-3">Featured product showcase</p>
          <h2 className="text-4xl font-bold text-gray-900">Best-selling lighting and fixtures</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            These images present premium lighting products and installation inspiration from pins_pace. We are displaying product visuals with customer-focused names instead of raw file labels.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            These product imagery blocks are designed to help customers explore pins_pace fixtures and lighting setups with attractive product-style names.
          </p>
        </div>
      </div>
    </section>
  );
}
