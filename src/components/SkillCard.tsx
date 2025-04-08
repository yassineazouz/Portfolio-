import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  progress: number;
}

export default function SkillCard({ name, progress }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-900 rounded-xl backdrop-blur-lg bg-opacity-50"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">{name}</h3>
        <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </div>
        <p className="mt-2 text-gray-400">{progress}%</p>
      </div>
    </motion.div>
  );
}