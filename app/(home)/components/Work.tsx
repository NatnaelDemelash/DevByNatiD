'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';
import 'swiper/swiper-bundle.css';

import {
    SiGithub,
    SiNextdotjs,
    SiReact,
    SiReactquery,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
  } from 'react-icons/si';
  import { BsArrowUpRightSquare } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';


  const projects = [
    {
      num: '01',  
      category: 'frontend',
      title: 'Puluk Travel',
      tech: [SiReact, SiTypescript, SiTailwindcss] as IconType[],
      link: 'puluk-travel.vercel.app',
      cover: '/Project-1.png',
      background: 'bg-[#CD6155]',
    },
    {
      num: '02',  
      category: 'frontend',
      title: 'Pizzeria Pizza',
      tech: [SiReact, SiReactquery, SiTailwindcss] as IconType[],
      link: 'pizzeria101.netlify.app/',
      cover: '/Project-2.png',
      background: 'bg-[#512E5F]',
    },
    {
      num: '03',
      category: 'frontend',
      title: 'Portfolio Website',
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss] as IconType[],
      link: 'https://localhost:300',
      cover: '/Project-3.png',
      background: 'bg-indigo-500',
    },
    {
      num: '04',
      category: 'frontend',
      title: 'Aurora Aisel',
      tech: [SiReact, SiRedux, SiTailwindcss, SiReactquery] as IconType[],
      link: 'aurora-aisel-shop.vercel.app',
      cover: '/Project-4.png',
      background: 'bg-[#F0B27A]',
    },
];

const Work = () => {
  const [project, setProject] = useState(projects[0])
   
  const handleSlideChange = (swiper: { activeIndex: any; }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity:1}} className='min-h-[40vh] flex flex-col justify-center py-12 xl:px-0'>
        <div className='py-10 p-5 sm:p-0'>
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                <div className='w-full xl:h-[460px] flex flex-col xl:w-[50%] xl:justify-between order-2 xl:order-none'>
                    <div className='flex flex-col gap-[30px] h-[50%]'>
                        <div className='text-6xl text-white leading-none font-extrabold'>{project.num }</div>
                        <h2 className='font-bold text-[22px] leading-none hover:text-green-400 transition-all duration-500 capitalize'>{project.category} project</h2>
                        <ul className='flex gap-4'>
                            {project.tech.map((Icon, index) => (
                                <li key={index}><Icon className='size-8'/></li> // Render the icon component
                            ))}
                        </ul>
                        <div className='border border-white/20'/>
                        <div className='flex items-center gap-4'>
                            {/* Live Project Demo */}
                            <Link href='#'>
                                <BsArrowUpRightSquare size={40} className='bg-green-500 rounded-sm p-2'/>
                            </Link>
                            {/* Github link */}
                            <Link href='#'>
                                <SiGithub size={40} className='bg-green-500 rounded-sm p-2'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-[50%]'>
                    <Swiper  slidesPerView={1} spaceBetween={30} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                      {projects.map((project, idx) => {
                        return <SwiperSlide key={idx} className='w-full'>
                          <div className='h-[460px] bg-pink-50/20 relative group flex justify-center items-center'></div>
                        </SwiperSlide>
                      })}
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section> 
  )
}

export default Work 