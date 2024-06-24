"use client"

import { BackgroundGradient } from '@/app/ui/background-gradient';
import React, { useState } from 'react';
import Accordion from './Accordion';

const ChatBox = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

  return (
    <div className='flex flex-col gap-2 justify-center items-end '>    
        {isModalOpen && <BackgroundGradient className='h-[75vh] w-[400px] p-3 overflow-y-auto'>
            <div className='flex justify-between items-center border-b border-white px-3 py-2'>
                <h1 className='text-3xl font-bold'>Chat</h1>

                <div className='text-xl cursor-pointer' onClick={handleCloseModal}>󠀥󠀥󠀽✖️</div>
            </div>

            <h1 className='text-green-400 px-2 py-1 mt-3 text-lg uppercase mb-4'> <span className='text-2xl bg-yellow-400 p-1 rounded-full'>👨🏾</span> Nati's Bot</h1>
            <p className='p-2 text-xl'>Nice to meet you! 👋 I'm Natnael. Try these questions 👇</p>

            <Accordion />
        </BackgroundGradient>}

        <button className="w-20 h-20 flex items-center justify-center rounded-full bg-[#333] font-bold text-white 
        tracking-widest cursor-pointer transform hover:scale-110 transition-all duration-200 border-2 border-[#F9E79F]">
            <div className="text-5xl " onClick={handleButtonClick}>
                👨🏻‍💻
            </div>
        </button>
    </div>
  );
}

export default ChatBox;