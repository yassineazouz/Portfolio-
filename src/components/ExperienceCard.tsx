import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  tech: string[];
}

export default function ExperienceCard({
  company,
  position,
  period,
  description,
  tech,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 bg-gray-900 rounded-xl backdrop-blur-lg bg-opacity-50"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-cyan-300">{company}</h3>
          <p className="text-gray-400">{position}</p>
        </div>
        <p className="text-cyan-400 mt-2 md:mt-0">{period}</p>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm bg-gray-800 rounded-full text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}