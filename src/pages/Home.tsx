import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { SERVICES, REVIEWS } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipOQLXAEgmahenHVd9pG1Rbso2-4xt3v8ePISLYK=s1360-w1360-h1020-rw"
            alt="Luxury Car"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/20 via-charcoal-dark/50 to-charcoal-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-tight">
              The Ultimate <span className="text-electric-blue">Reflection</span><br />
              of <span className="text-accent-red">Perfection</span>
            </h1>
            <p className="text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10">
              Premium automotive detailing and paint protection for those who demand nothing but the best. Restore, protect, and elevate your investment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-electric-blue to-accent-red text-white font-bold rounded-lg shadow-xl hover:scale-105 transition-all"
              >
                BOOK NOW
              </Link>
              <a
                href="https://wa.me/60182666058"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg border border-white/10 hover:bg-white/20 transition-all"
              >
                WHATSAPP US
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">Unmatched Precision in Every Detail</h2>
            <p className="text-silver mb-8 leading-relaxed">
              At Sensha Car Spa, we don't just wash cars; we perform automotive rejuvenation. Our team of certified specialists uses the world's most advanced ceramic coatings and PPF technology to ensure your vehicle remains in showroom condition, regardless of the elements.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Certified Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Rapid Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Premium Products</span>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepCs9t8N4BeeybSrXvPD4kgpUfhAFN4KnhqwmJIoQF1u2AaAOLPl1jDBz3czgvyvWngCMtsc02RxgYfuNOcahizw5b37OGnl-LOqj2uruxzOUwoAZuaPDVrhzb4Umta-7T1Sd0=s1360-w1360-h1020-rw"
              alt="Detailing Process"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-electric-blue p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-xs text-white/80 uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Our Signature Services</h2>
              <p className="text-silver">Explore our range of premium detailing packages.</p>
            </div>
            <Link to="/services" className="text-electric-blue flex items-center gap-2 hover:underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(1, 4).map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-silver text-sm mb-6 line-clamp-2">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-white font-bold text-sm flex items-center gap-2 group-hover:text-electric-blue transition-colors"
                  >
                    LEARN MORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Snippet */}
      <section className="py-24 px-6 bg-charcoal-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-16">Trusted by Enthusiasts</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {REVIEWS.map((review) => (
              <div key={review.id} className="glass-card p-8 rounded-2xl text-left">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-electric-blue text-electric-blue" />
                  ))}
                </div>
                <p className="text-silver italic mb-6">"{review.comment}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <p className="text-xs text-silver">{review.carModel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/reviews" className="px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all">
            Read More Reviews
          </Link>
        </div>
      </section>
    </div>
  );
}
