import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-8 px-6 md:px-12 lg:px-24 flex justify-between items-center fixed top-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <div className="text-xl font-heading font-bold uppercase tracking-widest text-primary">
        Ephraim
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-secondary">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="px-5 py-2 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors">
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
