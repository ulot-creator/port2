import React from 'react';
import { motion } from 'framer-motion';
import DistortionImage from './DistortionImage';
import MetricsCounter from './MetricsCounter';
import heroImg from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
        
        {/* Left Col: Text Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-secondary"
          >
            Ephraim Orimolade
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tighter"
          >
            Data Systems<br/>
            <span className="text-secondary italic font-light">&</span> Software<br/>
            Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-secondary max-w-md leading-relaxed mt-4"
          >
            Helping businesses transform complex data into scalable digital solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6"
          >
            <a 
              href="#projects" 
              className="inline-block px-8 py-4 bg-primary text-background rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Center Col: Hero Image with Distortion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center w-full h-[60vh] lg:h-[80vh] bg-[#E8E7E4] rounded-t-full overflow-hidden relative"
        >
          <DistortionImage 
            src={heroImg} 
            alt="Ephraim Orimolade Portrait" 
            className="w-full h-full mix-blend-multiply"
          />
        </motion.div>

        {/* Right Col: Metrics */}
        <div className="order-3 lg:order-3 flex justify-end">
          <MetricsCounter />
        </div>

      </div>
    </section>
  );
};

export default Hero;
