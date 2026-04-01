import { MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StickyButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      <a
        href="https://wa.me/60182666058"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-charcoal-light px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp Us
        </span>
      </a>
      <Link
        to="/contact"
        className="w-14 h-14 bg-gradient-to-br from-electric-blue to-accent-red text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <Calendar className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-charcoal-light px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Book Now
        </span>
      </Link>
    </div>
  );
}
