'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from './Title';
import { PROJECTS } from '@/app/(constants)';
import { SiGithub } from 'react-icons/si';
import WorkSlideBtns from './WorkSlideBtns';

const Work = () => {
  const [project, setProject] = useState(PROJECTS[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(PROJECTS[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.3, ease: 'easeInOut' },
      }}
      className="min-h-[40vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="py-10 p-5 sm:p-0">
        <Title
          text="Projects ⚒️"
          className="flex flex-col mb-14 justify-center items-center -rotate-6"
        />
      </div>
      <div className="my-10 p-5 sm:p-0">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full my-8 xl:h-[460px] flex flex-col xl:w-[50%] xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-7xl text-gray-300 leading-none font-extrabold">
                {project.num}
              </div>
              <h2 className="font-bold text-[26px] leading-none hover:text-green-400 transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.tech.map((Icon, index) => (
                  <li key={index}>
                    <Icon className="size-8" />
                  </li> // Render the icon component
                ))}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                {/* Live Project Demo */}
                <Link href={project.demo} target="_blank">
                  <BsArrowUpRightSquare
                    size={40}
                    className="bg-[#5D6D7E] hover:bg-green-400 transition-all rounded-sm p-2"
                  />
                </Link>
                {/* Github link */}
                <Link href={project.githubLink} target="_blank">
                  <SiGithub
                    size={40}
                    className="bg-[#5D6D7E] hover:bg-green-400 transition-all font-bold rounded-sm p-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[55%]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="xl:h-[520px] mb-12 cursor-pointer"
              onSlideChange={handleSlideChange}
            >
              {PROJECTS.map((project, idx) => {
                return (
                  <SwiperSlide key={idx} className="w-full">
                    <div className="h-[430px] bg-pink-50/20 relative group flex flex-col justify-center items-center">
                      {/* Overlay */}
                      <div className="absolute w-full h-full top-0 bottom-0 bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.cover}
                          fill
                          alt=""
                          className="object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-2 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#5D6D7E] text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-sm"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
