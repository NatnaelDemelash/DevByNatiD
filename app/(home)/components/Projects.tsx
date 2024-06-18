import React from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/app/ui/direction-aware-hover';

const Projects = () => {
  const projects = [
    {
      title: 'Puluk Travel',
      tech: [SiReact, SiTypescript, SiTailwindcss],
      link: 'puluk-travel.vercel.app',
      cover: '/Project-1.png',
      background: 'bg-[#CD6155]',
    },
    {
      title: 'Pizzeria Pizza',
      tech: [SiReact, SiReactquery, SiTailwindcss],
      link: 'pizzeria101.netlify.app/',
      cover: '/Project-2.png',
      background: 'bg-[#512E5F]',
    },
    {
      title: 'Portfolio Website',
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: 'https://localhost:300',
      cover: '/Project-3.png',
      background: 'bg-indigo-500',
    },
    {
      title: 'Aurora Aisel',
      tech: [SiReact, SiRedux, SiTailwindcss, SiReactquery],
      link: 'aurora-aisel-shop.vercel.app',
      cover: '/Project-4.png',
      background: 'bg-[#F0B27A]',
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects ⚒️"
        className="flex flex-col justify-center items-center rotate-6"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-20">
        {projects.map((project, idx) => {
          return (
            <Link key={idx} href={project.link} target="_blank">
              <div className={cn('p-1 rounded-lg', project.background)}>
                <DirectionAwareHover imageUrl={project.cover} className="w-ful">
                  <div className=" space-y-5">
                    <h1 className="text-2xl bg-[#292929] px-3 py-1 rounded-sm font-bold">
                      {project.title}
                    </h1>

                    <div className="flex gap-3 bg-[#292929] px-3 py-1 rounded-sm">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="size-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
