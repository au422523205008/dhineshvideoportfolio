import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/herovideo.mp4';
import { cvUrl } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Try to autoplay with real sound. Browsers that block unmuted
  // autoplay will reject the play() call, so we fall back to a muted
  // start and unmute on the visitor's first genuine interaction with
  // the page instead — no visible mute/unmute control either way.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const unmuteOnGesture = () => {
      video.muted = false;
    };

    const tryPlayWithSound = async () => {
      try {
        video.muted = false;
        await video.play();
      } catch {
        video.muted = true;
        video.play().catch(() => {});
        window.addEventListener('pointerdown', unmuteOnGesture, { once: true });
        window.addEventListener('keydown', unmuteOnGesture, { once: true });
      }
    };
    tryPlayWithSound();

    return () => {
      window.removeEventListener('pointerdown', unmuteOnGesture);
      window.removeEventListener('keydown', unmuteOnGesture);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video — plays once on load, with sound, then holds its final frame. No mute/unmute control. */}
      <video
        ref={videoRef}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay factor for optimized readability without completely muddying up the red tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container - UPDATED: Changed items-center to items-start and added responsive top padding (pt-28 / md:pt-[12%]) to lift content below the navbar */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-28 md:pt-[12%]">
        
        {/* Left Side: Text and Buttons - Shifted higher up */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I’m a <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Full Stack Web Developer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            I build fast, responsive and modern web applications using React, Node.js and SQL databases.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>

            {/* Resume Download */}
            <a 
              href={cvUrl}
              download
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full border border-white/40 text-white/90 font-bold hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right side intentionally left clear — no audio controller */}
        <div className="hidden md:block" />
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white opacity-70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;