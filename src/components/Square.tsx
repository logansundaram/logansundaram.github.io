import React from 'react';
import { motion } from 'framer-motion';
import type { JSX } from 'react/jsx-dev-runtime';

interface SkillCardProps {
    title: string;
    src: string;
}

const Square = ({ title, src }: SkillCardProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="justify-items-center p-5 text-center">
        <h1 className="mb-2 text-lg">{title}</h1>
        <img src={src} alt="Skill Image" className="bg-white rounded-3xl w-32 h-32" />
      </div>
    </motion.div>
  );
};

export default Square;
