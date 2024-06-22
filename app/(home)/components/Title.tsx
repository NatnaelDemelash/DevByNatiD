import { motion } from 'framer-motion';
import React from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <div className={className}>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-18 text-center text-4xl"
      >
        {text}
        <div className="h-1 w-32 bg-green-500 rounded-full" />
        <div className="h-1 w-32 bg-indigo-500 rounded-full translate-x-2" />
      </motion.h1>
    </div>
  );
};

export default Title;
