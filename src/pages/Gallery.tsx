import { motion } from 'motion/react';
import { GALLERY } from '../constants';

const BEFORE_AFTER_EXAMPLES = [
  {
    id: 'seat-restoration',
    before: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweq5kTE3A6jWIwwRv38GL1lokFRYkEyib-g_I85izeL_nRtgyIqA_bdos_cHIdN4MC9iMxCFZXYQfxrg1alYS4RNSgm4znIQo-yBdIJ5I69JYXNacvCZZ2hj0ugSkKvsK78JxuWg=s1360-w1360-h1020-rw',
    after: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqjAQUYYU2AOBs-uFhc46SuCz5xXIJJl0BCZyBAIkUlHegh5T07tbrCPYjb1Pe1Nkn0BRuuLCz62xLuPwCsjUsZCVNxFG6cg1cei9QtS7PySNeWZGy2Pts1SDwYfjgMnzjX3XdP-Q=s1360-w1360-h1020-rw',
    title: 'Seat Restoration'
  }
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Visual <span className="text-electric-blue">Show</span><span className="text-accent-red">case</span>
          </motion.h1>
          <p className="text-silver max-w-2xl mx-auto">
            Witness the transformation. Our gallery features some of the finest vehicles treated with our signature care.
          </p>
        </div>

        {/* Before & After Side-by-Side */}
        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">The Transformation</h2>
          <div className="max-w-6xl mx-auto space-y-12">
            {BEFORE_AFTER_EXAMPLES.map((example) => (
              <div key={example.id} className="space-y-6">
                <p className="text-center font-bold text-white uppercase tracking-widest text-xl">{example.title}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                    <img 
                      src={example.before} 
                      alt="Before" 
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] uppercase tracking-widest text-white font-bold">Before</div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                    <img 
                      src={example.after} 
                      alt="After" 
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-electric-blue/60 backdrop-blur-md px-3 py-1 rounded text-[10px] uppercase tracking-widest text-white font-bold">After</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">{item.title}</p>
                <p className="text-electric-blue text-xs uppercase tracking-widest">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
