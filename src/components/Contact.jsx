import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-primary text-background flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-4xl gap-12"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight tracking-tighter">
          Let's Build Something <span className="italic font-light opacity-80">Meaningful</span>
        </h2>
        
        <a 
          href="mailto:hello@example.com"
          className="px-10 py-5 bg-background text-primary rounded-full text-lg font-medium hover:bg-background/90 hover:scale-105 transition-all active:scale-95"
        >
          Start a Conversation
        </a>
        
        <div className="flex gap-8 mt-12 text-background/60 text-sm tracking-wider uppercase">
          <a href="#" className="hover:text-background transition-colors">Email</a>
          <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-background transition-colors">GitHub</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
