import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Our <span className="text-electric-blue">Packages</span> <span className="text-accent-red">&</span> <span className="text-electric-blue">Protection</span>
          </motion.h1>
          <p className="text-silver max-w-2xl mx-auto">
            From basic maintenance to full restorative protection, we have a package tailored for your vehicle's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-electric-blue font-display font-bold text-xl">{service.price}</p>
                </div>
                <p className="text-silver text-sm mb-8">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-silver">
                      <Check className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <Link
                  to="/contact"
                  className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-electric-blue hover:border-electric-blue transition-all group"
                >
                  BOOK THIS SERVICE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="mt-24 glass-card p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-silver mb-8 max-w-xl mx-auto">
            We offer bespoke detailing services for collections, fleets, and special projects. Contact us for a personalized consultation.
          </p>
          <Link
            to="/contact"
            className="px-12 py-4 bg-gradient-to-r from-electric-blue to-accent-red text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all"
          >
            GET A CUSTOM QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
}
