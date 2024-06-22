'use client';

import Title from './Title';
import { HoverEffect } from '@/app/ui/card-hover-effect';
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      text: 'React',
      icon: SiReact,
    },
    {
      text: 'Next.js',
      icon: SiNextdotjs,
    },
    {
      text: 'TailwindCSS',
      icon: SiTailwindcss,
    },
    {
      text: 'Vue',
      icon: SiVuedotjs,
    },
    {
      text: 'JavaScript',
      icon: SiJavascript,
    },
    {
      text: 'Git',
      icon: SiGit,
    },
    {
      text: 'TypeScript',
      icon: SiTypescript,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mb-20">
      <Title
        text="Skills ⛷️"
        className="flex flex-col justify-center items-center rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
