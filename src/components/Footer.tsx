import { Car, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="https://lh3.googleusercontent.com/geougc-cs/ABOP9pv7Xmlv-inkwPnb4I65-3Tkn3RiXAJ2mnzafE-v09qFBbUmtVKAzhLS0TTBMBaA8HuEgEBpsDxZU2FCMJk-Ny4V0323VZEd61YkhdWePFOwsCYbiA6ucUmy-tHp6pazdd6Zm2YiNYTnhHM=s3072-w3072-h1460-rw" 
                alt="Sensha Car Spa" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-silver text-sm leading-relaxed mb-6">
              The premier destination for luxury automotive care. We specialize in restorative detailing and long-term protection.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/kl_car.detailing_maluri?igshid=MmIzYWVlNDQ5Yg%3D%3D" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-silver">
              <li><Link to="/" className="hover:text-electric-blue transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-electric-blue transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-electric-blue transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-electric-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-silver">
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Ceramic Coating</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Paint Protection Film</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Paint Correction</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Interior Detailing</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Engine Detailing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm text-silver">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-electric-blue" />
                018-266 6058
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-electric-blue" />
                info@senshaspa.com
              </li>
              <li className="flex items-start gap-3">
                <Car className="w-4 h-4 text-electric-blue shrink-0 mt-1" />
                45, Jalan Jejaka 7, Maluri, 55100 Kuala Lumpur
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-silver/50">
            © {new Date().getFullYear()} Sensha Car Spa. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-silver/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
