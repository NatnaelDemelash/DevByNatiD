'use client';

import { EXPERIENCES } from '@/app/(constants)';
import { motion } from 'framer-motion';
import React from 'react';
import Title from './Title';

const Experience = () => {
  return (
    <div className="w-full min-h-[50vh]">
      <Title
        text="Experience 🧗"
        className="flex flex-col mb-16 justify-center items-center -rotate-6"
      />
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-20 flex flex-wrap lg:justify-center ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 mt-2 text-md text-neutral-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-[60%]"
            >
              <h6 className="mb-2 text-2xl font-semibold">
                {experience.role} -{' '}
                <span className="text-xs text-green-500">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-sm text-neutral-400">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-neutral-900 text-[#FAD7A0] rounded px-2 py-1 mr-2"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
