import { motion } from 'motion/react';

export default function ProductCard({ product, onOpenQuote }: { product: any, onOpenQuote: (p: any) => void }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
    >
      <div className="overflow-hidden h-64 relative">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={product.img} 
          alt={product.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">{product.description}</p>
        <div className="mb-4">
          <span className="text-xs font-semibold bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
            {product.price || 'Request quote for pricing'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onOpenQuote(product)}
            className="text-sm font-semibold text-gray-900 hover:text-orange-600 transition-colors"
          >
            Request Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}
