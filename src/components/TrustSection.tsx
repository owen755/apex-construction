import { ShieldCheck, Sparkles, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  {
    title: 'Renovation Expertise',
    description: 'Specialized in kitchen, bathroom, and living space upgrades with reliable local craftsmanship.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Response',
    description: 'Quick quote follow-up and project recommendations based on your submitted photos.',
    icon: Sparkles,
  },
  {
    title: 'Quality Materials',
    description: 'Built with premium lights, fixtures, and finishes selected for modern renovation work.',
    icon: Handshake,
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-[0.4em] mb-3">Trusted Renovation Partner</p>
          <h2 className="text-4xl font-bold">Why homeowners choose us</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We focus on realistic renovation work: fixtures, lighting, tile, and interior refreshes with the right expertise and responsive customer service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-slate-900/90 border border-white/10 rounded-3xl p-8 shadow-xl"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-orange-600 text-white mb-6 shadow-lg">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
