import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(String(start));
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const MetricsCounter = () => {
  const metrics = [
    { label: "Years Experience", value: "5", suffix: "+" },
    { label: "Projects Delivered", value: "50", suffix: "+" },
    { label: "Clients Served", value: "20", suffix: "+" },
    { label: "Project Satisfaction", value: "99", suffix: "%" },
  ];

  return (
    <div className="flex flex-col gap-10 items-end text-right">
      {metrics.map((metric, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
          className="flex flex-col"
        >
          <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
            <Counter value={metric.value} suffix={metric.suffix} />
          </div>
          <div className="text-sm text-secondary uppercase tracking-wider mt-2">
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MetricsCounter;
