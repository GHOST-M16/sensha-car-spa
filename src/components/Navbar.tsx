import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-charcoal-dark/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://lh3.googleusercontent.com/geougc-cs/ABOP9pv7Xmlv-inkwPnb4I65-3Tkn3RiXAJ2mnzafE-v09qFBbUmtVKAzhLS0TTBMBaA8HuEgEBpsDxZU2FCMJk-Ny4V0323VZEd61YkhdWePFOwsCYbiA6ucUmy-tHp6pazdd6Zm2YiNYTnhHM=s3072-w3072-h1460-rw" 
            alt="Sensha Car Spa" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-electric-blue',
                location.pathname === link.path ? 'text-electric-blue' : 'text-silver'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-gradient-to-r from-electric-blue to-accent-red text-white text-sm font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium',
                  location.pathname === link.path ? 'text-electric-blue' : 'text-silver'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-electric-blue text-white text-center font-bold rounded-lg"
            >
              BOOK NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
