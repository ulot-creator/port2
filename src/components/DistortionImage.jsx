import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const DistortionImage = ({ src, alt, className = "" }) => {
  const containerRef = useRef(null);
  const slicesRef = useRef([]);
  const numSlices = 10;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - top) / height; // 0 to 1

      slicesRef.current.forEach((slice, index) => {
        // Bottom slices move more
        const depth = index / numSlices;
        const multiplier = depth > 0.6 ? (depth * 2) : (depth * 0.5);
        
        // Only distort heavily if mouse is over the container
        // and add some organic feel based on Y position
        const distance = Math.abs(y - (index / numSlices));
        const activeMultiplier = Math.max(0, 1 - distance * 2);
        
        gsap.to(slice, {
          x: x * 30 * multiplier * activeMultiplier,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    };

    const handleMouseLeave = () => {
      slicesRef.current.forEach((slice) => {
        gsap.to(slice, {
          x: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)"
        });
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      {Array.from({ length: numSlices }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (slicesRef.current[i] = el)}
          className="absolute inset-0"
          style={{
            clipPath: `inset(${(i * 100) / numSlices}% 0 ${100 - ((i + 1) * 100) / numSlices}% 0)`,
          }}
        >
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover object-center" 
          />
        </div>
      ))}
      {/* Base image to ensure no gaps */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover object-center opacity-0" 
      />
    </div>
  );
};

export default DistortionImage;
