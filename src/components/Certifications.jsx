import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full bg-gray-50 py-20 md:py-24 overflow-hidden">
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
              Verified
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-black/60 font-normal">
            Real, verifiable credentials — each backed by an actual certificate.
          </p>
        </motion.div>

        {/* items-start: each card's height follows its own certificate
            image's natural proportions (some are landscape scans, one is
            portrait) rather than forcing every image into one fixed
            frame, which would crop or awkwardly letterbox them. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-5 md:gap-6">
          {certifications.map((cert, idx) => (
            <motion.a
              key={cert.credentialId ?? cert.title}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="group flex flex-col bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500"
            >
              <div className="w-full bg-gray-100 p-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="block w-full h-auto rounded-xl shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5 md:p-6 flex flex-col gap-1.5 border-t border-black/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                  {cert.organization}
                </span>
                <h3 className="text-base font-black text-black leading-snug">{cert.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  {cert.date && <span className="text-xs text-black/50">{cert.date}</span>}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff2a2a]">View</span>
                </div>
                {cert.credentialId && (
                  <span className="text-[10px] text-black/40 mt-0.5">ID {cert.credentialId}</span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
