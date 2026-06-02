import React from 'react';
import { Gallery4 } from './blocks/gallery4';

const projects = [
  {
    id: "1",
    title: "Nexus Data Platform",
    category: "Data Systems",
    description: "Processed 10TB+ daily with 99.9% uptime. Built with React, Node.js, and PostgreSQL to handle massive data throughput securely in 2025.",
    href: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "2",
    title: "Aether Workflow Analytics",
    category: "Software Solutions",
    description: "Reduced operational overhead by 40% in 2024. A robust Next.js and Python application with a sleek Tailwind CSS interface for real-time analytics.",
    href: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
  },
  {
    id: "3",
    title: "Orbit API Gateway",
    category: "Infrastructure",
    description: "Scaled to 50k requests per second. Engineered using Go, Redis, and Kubernetes to provide high-performance infrastructure routing.",
    href: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034"
  },
  {
    id: "4",
    title: "Lumina Design System",
    category: "Design Architecture",
    description: "Unified UI language across 12 product lines in 2023. Built with React and Storybook, increasing frontend team velocity by 60%.",
    href: "#",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000"
  }
];

const Projects = () => {
  return (
    <div id="projects">
      <Gallery4 items={projects} />
    </div>
  );
};

export default Projects;
