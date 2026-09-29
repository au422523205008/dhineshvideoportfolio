import React from 'react';
import { motion } from 'framer-motion';
import { internships } from '../data/portfolioData';

const Internship = () => {
  return (
    <section id="internship" className="relative w-full bg-gray-50 py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full">
              Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Internships
          </h2>
          <p className="text-sm text-black/60 font-normal">
            Hands-on experience building real applications in a team environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {internships.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-white border border-black/5 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500"
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 rounded-full px-3 py-1 mb-4">
                {item.type}
              </span>
              <h3 className="text-xl font-black text-black mb-1 tracking-tight">{item.role}</h3>
              <p className="text-sm text-black/60 font-medium">{item.company}</p>
              {item.duration && (
                <p className="text-xs text-black/40 font-medium mt-3">{item.duration}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
