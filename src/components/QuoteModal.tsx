import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function QuoteModal({ product, onClose }: { product: any, onClose: () => void }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-2">Request a Custom Quote</h2>
          <p className="text-gray-600 mb-6">For: <span className="font-semibold">{product.title}</span></p>
          <p className="text-gray-600 mb-6">Our team will review your project details and provide custom pricing after consultation. Request a quote to receive a tailored renovation proposal.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" required />
            <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-lg" required />
            <textarea placeholder="Project Details / Location" className="w-full p-3 border rounded-lg h-32" required></textarea>
            <button type="submit" className="w-full bg-gray-900 text-white p-4 rounded-lg font-semibold hover:bg-orange-600 transition-all">
              Submit Request
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
