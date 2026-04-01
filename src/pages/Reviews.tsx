import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';
import { Link } from 'react-router-dom';

export default function Reviews() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Client <span className="text-electric-blue">Testimonials</span>
          </motion.h1>
          <p className="text-silver max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our community of luxury car owners who trust us with their prized possessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[...REVIEWS, ...REVIEWS].map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-electric-blue text-electric-blue" />
                ))}
              </div>
              <p className="text-silver italic mb-8 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-silver uppercase tracking-widest">{review.carModel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden py-20 px-12 text-center">
          <div className="absolute inset-0 bg-electric-blue opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-transparent to-charcoal-dark" />
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-6">Ready to give your car the royal treatment?</h2>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-electric-blue text-white font-bold rounded-full blue-glow hover:scale-105 transition-all"
            >
              BOOK YOUR SESSION NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
