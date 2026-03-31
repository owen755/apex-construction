import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(''); 
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.target;
    const formData = new FormData(form);
    
    // 🔥 THE FIX: Google Apps Script needs the data formatted as URL parameters!
    // If we don't do this, Google rejects it and the sheet stays empty.
    const formBody = new URLSearchParams(formData as any).toString();

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxnUHPElg7fEwL8Pi2Ovvox9-saaqEvwBKls09JekW4z5D9WnNUivqUatsmbFE6ZvHG_w/exec', {
        method: 'POST',
        mode: 'no-cors', // Bypasses the strict browser security
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      // Because 'no-cors' hides the response, we just trigger success immediately
      setStatus(''); 
      setShowSuccess(true); 
      form.reset(); 

    } catch (error) {
      console.error('Error!', error);
      setStatus('Error sending.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get a Consultation</h2>
        <p className="text-center text-gray-600 mb-8">
          Send us your room photos and product preferences to receive a tailored renovation quote from pins_pace. Custom pricing is provided after consultation.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="Name" placeholder="Name" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-black" required />
            <input type="email" name="Email" placeholder="Email" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-black" required />
          </div>
          <input type="tel" name="Phone" placeholder="Phone" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-black" required />
          <textarea name="Project" placeholder="Tell us about your project" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none h-40 text-black" required></textarea>
          
          <button type="submit" className="w-full bg-gray-900 text-white p-4 rounded-lg font-semibold hover:bg-orange-600 transition-all flex justify-center items-center disabled:opacity-70">
             {status ? status : 'Request Quote'}
          </button>
        </form>
      </div>

      {/* The Animated Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Sent Successfully!</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Thank you for reaching out. Expect us to contact you shortly through our Gmail or phone number to discuss your project.
              </p>
              
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full bg-orange-500 text-white p-4 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}