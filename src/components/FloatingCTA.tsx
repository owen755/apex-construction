import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      <div className="relative group">
        <a
          href="https://wa.me/0796222991"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp for a quote"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/20 transition-transform hover:-translate-y-1"
        >
          <MessageSquare size={24} />
        </a>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white opacity-0 transition-all duration-200 group-hover:block group-hover:opacity-100">
          WhatsApp
        </span>
      </div>
      <div className="relative group">
        <a
          href="tel:0796222991"
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-xl shadow-black/20 transition-transform hover:-translate-y-1"
        >
          <Phone size={24} />
        </a>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white opacity-0 transition-all duration-200 group-hover:block group-hover:opacity-100">
          Call Now
        </span>
      </div>
    </div>
  );
}
