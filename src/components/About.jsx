import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight">
            Building <span className="italic font-light text-secondary">meaningful</span> systems through data and technology.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-8 text-lg text-secondary leading-relaxed"
        >
          <p>
            I believe that the best software doesn't just process information—it transforms it into clarity. My approach bridges the gap between raw data systems and intuitive digital experiences.
          </p>
          <p>
            Over the years, I've partnered with organizations to untangle complex workflows, migrating legacy architectures into scalable, resilient solutions. It's not just about writing code; it's about understanding the business impact behind every technical decision.
          </p>
          <p>
            Whether orchestrating data pipelines or crafting the final user interface, my goal remains the same: delivering technical excellence with thoughtful, human-centered design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
