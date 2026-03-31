import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react'; // <-- Added this to handle the "Sending..." status

export default function QuoteModal({ product, onClose }: { product: any, onClose: () => void }) {
  const [status, setStatus] = useState(''); // <-- Added state for the button text

  // 👇 Here is the Google Sheets connection logic 👇
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    
    // Optional: Let's automatically add the product they clicked to the end of their project description
    const currentProjectText = formData.get('Project');
    formData.set('Project', `[Interested in: ${product.title}] - ${currentProjectText}`);

    try {
      // ⚠️ PASTE YOUR GOOGLE WEB APP URL INSIDE THE QUOTES BELOW ⚠️
      const response = await fetch('https://script.google.com/macros/s/AKfycbxnUHPElg7fEwL8Pi2Ovvox9-saaqEvwBKls09JekW4z5D9WnNUivqUatsmbFE6ZvHG_w/exec', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Sent successfully!');
        e.target.reset(); 
        setTimeout(() => onClose(), 2000); // Closes the modal after 2 seconds
      } else {
        setStatus('Error sending.');
      }
    } catch (error) {
      console.error('Error!', error);
      setStatus('Error sending.');
    }
  };

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
          
          {/* 👇 Added the onSubmit handler here 👇 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 👇 Added the name="" attributes so Google Sheets can read them 👇 */}
            <input type="text" name="Name" placeholder="Name" className="w-full p-3 border rounded-lg text-black" required />
            <input type="email" name="Email" placeholder="Email" className="w-full p-3 border rounded-lg text-black" required />
            <input type="tel" name="Phone" placeholder="Phone" className="w-full p-3 border rounded-lg text-black" required />
            <textarea name="Project" placeholder="Project Details / Location" className="w-full p-3 border rounded-lg h-32 text-black" required></textarea>
            
            <button type="submit" className="w-full bg-gray-900 text-white p-4 rounded-lg font-semibold hover:bg-orange-600 transition-all">
              {status ? status : 'Submit Request'}
            </button>
          </form>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}