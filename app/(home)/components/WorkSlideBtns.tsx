"use client"

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { useSwiper } from "swiper/react"

interface WorkSlideBtnsProps{
    containerStyles?:string
    btnStyles?:string
    iconStyles?:string
}


const WorkSlideBtns = ({containerStyles, btnStyles, iconStyles}:WorkSlideBtnsProps) => {
 const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button className={btnStyles}>
            <PiCaretLeftBold className={iconStyles} onClick={() => swiper.slidePrev()}/>
        </button>
        <button className={btnStyles}>
            <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()}/>
        </button>
    </div>

  )
}

export default WorkSlideBtns