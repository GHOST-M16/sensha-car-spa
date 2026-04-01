import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Get in <span className="text-electric-blue">Touch</span>
          </motion.h1>
          <p className="text-silver max-w-2xl mx-auto">
            Ready to elevate your vehicle? Fill out the form below or reach out directly to our specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 rounded-3xl"
          >
            <h2 className="text-2xl font-display font-bold mb-8">Book Your Appointment</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-silver font-bold">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-blue outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-silver font-bold">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-blue outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-silver font-bold">Car Model</label>
                  <input
                    type="text"
                    placeholder="Porsche 911"
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-blue outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-silver font-bold">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-blue outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-silver font-bold">Service Required</label>
                <select className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-blue outline-none transition-colors">
                  <option>Basic Detail</option>
                  <option>Executive Spa</option>
                  <option>Ultra Premium Coating</option>
                  <option>Paint Protection Film</option>
                  <option>Custom Request</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-silver font-bold">Message (Optional)</label>
                <textarea
                  placeholder="Tell us more about your car..."
                  rows={4}
                  className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-blue outline-none transition-colors"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-electric-blue to-accent-red text-white font-bold rounded-xl shadow-xl hover:scale-[1.02] transition-all">
                SUBMIT BOOKING REQUEST
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-card p-10 rounded-3xl space-y-8">
              <h2 className="text-2xl font-display font-bold mb-2">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-electric-blue shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Our Location</p>
                    <p className="text-silver text-sm">45, Jalan Jejaka 7, Maluri, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-electric-blue shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Phone Number</p>
                    <p className="text-silver text-sm">018-266 6058</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-electric-blue shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Opening Hours</p>
                    <p className="text-silver text-sm">Mon - Sat: 9:00 AM - 7:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/60182666058"
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> CHAT ON WHATSAPP
              </a>
            </div>

            {/* Mock Google Map */}
            <div className="glass-card h-64 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-charcoal-light flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-electric-blue mx-auto mb-2" />
                  <p className="text-silver text-sm font-bold">Interactive Map Loading...</p>
                </div>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=45,%20Jalan%20Jejaka%207,%20Maluri,%2055100%20Kuala%20Lumpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
