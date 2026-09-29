import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-20 md:py-24 overflow-hidden">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Projects
          </h2>
          <p className="text-sm text-black/60 font-normal">
            Real, verifiable work — live deployments and builds in progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
          {projects.map((project, idx) => {
            const isLive = project.status.toLowerCase().startsWith('live');
            return (
              <motion.div
                key={project.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="flex flex-col bg-white border border-black/5 rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500 h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif italic text-xl text-gray-300">{project.index}</span>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 ${
                      isLive ? 'bg-green-500/10 text-green-700' : 'bg-black/5 text-black/50'
                    }`}
                  >
                    {isLive ? 'Live' : 'In Progress'}
                  </span>
                </div>

                <h3 className="text-lg font-black text-black mb-2 tracking-tight leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-black/60 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-medium text-black/70 bg-black/3 border border-black/5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#ff2a2a] hover:underline mt-auto"
                  >
                    View Live
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
