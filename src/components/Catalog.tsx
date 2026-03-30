import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import QuoteModal from './QuoteModal';
import tieredChandelierPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.00.29.jpeg';
import rectangularPendantPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.00.30.jpeg';
import crystalSconcePhoto from '../assets/WhatsApp Image 2026-03-30 at 14.00.31.jpeg';
import bedroomLightingPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.02.08.jpeg';
import livingRoomLightingPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.00.33.jpeg';
import ringChandelierPhoto from '../assets/WhatsApp Image 2026-03-30 at 14.00.34.jpeg';

const products = [
  { id: 1, title: "Tiered Crystal Chandelier", description: "Tiered crystal ceiling lighting designed for elegant entryways, lounges, and luxury living spaces. Custom pricing available — request a quote today.", img: tieredChandelierPhoto, category: "Lighting", price: "Custom quote after consultation" },
  { id: 2, title: "Rectangular Pendant Light", description: "A modern pendant fixture with crystal accents, ideal for dining areas and statement interiors. Custom pricing available — request a quote today.", img: rectangularPendantPhoto, category: "Lighting", price: "Custom quote after consultation" },
  { id: 3, title: "Crystal Wall Sconce Pair", description: "Polished wall sconces with luxury crystal detail for bedrooms, hallways, and accent walls. Custom pricing available — request a quote today.", img: crystalSconcePhoto, category: "Fixtures", price: "Custom quote after consultation" },
  { id: 4, title: "Bedroom Lighting Package", description: "A curated bedroom lighting package featuring premium fixtures and warm ambient illumination. Custom pricing available — request a quote today.", img: bedroomLightingPhoto, category: "Fixtures", price: "Custom quote after consultation" },
  { id: 5, title: "Living Room Accent Lighting", description: "Designer lighting and fixture styling tailored for living room feature walls and entertainment spaces. Custom pricing available — request a quote today.", img: livingRoomLightingPhoto, category: "Fixtures", price: "Custom quote after consultation" },
  { id: 6, title: "Modern Ring Ceiling Chandelier", description: "Contemporary ring chandelier lighting built for modern renovations and premium interiors. Custom pricing available — request a quote today.", img: ringChandelierPhoto, category: "Renovation", price: "Custom quote after consultation" },
];

const categories = ['All', 'Lighting', 'Fixtures', 'Renovation'];

export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <section className="py-24 bg-gray-50 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </section>
    );
  }

  return (
    <section id="catalog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Lighting & Fixture Products</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12">
          Browse premium renovation lighting and fixtures. Every proposal is custom — request a quote and receive transparent pricing after a short consultation.
        </p>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onOpenQuote={setSelectedProduct} />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <QuoteModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
