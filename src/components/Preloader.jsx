import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [stage, setStage] = useState(0); // 0 = "G" appears, 1 = name water-fills in
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 350),
      // Wait for the water fill animation + a small pause before the
      // shutter goes up smoothly.
      setTimeout(() => setIsLoading(false), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-black z-[100000] flex items-center justify-center"
        >
          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex items-baseline justify-center gap-1 md:gap-2 flex-wrap px-6"
          >
            {/* "G" — appears first, in the brand red */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: stage >= 1 ? 1.08 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-[#ff2a2a] leading-none"
            >
              G
            </motion.span>

            {/* ". Dhinesh Kumar" — water-fills in white once the G has settled */}
            <AnimatePresence>
              {stage >= 1 && (
                <span className="relative text-3xl md:text-5xl font-black tracking-tighter leading-none whitespace-nowrap">
                  {/* Background text (empty state) */}
                  <span className="text-white/10">. Dhinesh Kumar</span>

                  {/* Foreground text (water fill state) */}
                  <motion.span
                    className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
                    initial={{ clipPath: 'inset(100% 0 0 0)' }}
                    animate={{ clipPath: 'inset(0% 0 0 0)' }}
                    transition={{ duration: 1.4, ease: "easeInOut", delay: 0.15 }}
                  >
                    . Dhinesh Kumar
                  </motion.span>
                </span>
              )}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
