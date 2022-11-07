import React from 'react'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineUser} from 'react-icons/ai'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testomonials() {
  return (
    <>
     <div className="heading mb-12  pt-12" id='testomonials'>
    <p className="font-bold text-center text-white text-xl">Testimonial</p>
  </div>
    <div  className='w-11/12 md:w-6/12 mx-auto ' >
       <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
      <div className="swiper_wrapper bg-[#00000087] py-5 rounded-md">
      <div className="img flex flex-row justify-center ">
          {/* <img src="hero.png" alt="Aasim shah" className='w-24 rounded-full' /> */}
          <div className="w-20 h-20 rounded-full bg-gray-800 flex justify-center items-center">
          <AiOutlineUser size={60 } color={"white"}/>
          </div>
      </div>
      <div className="qoute">
        <p className="text-md px-6 py-3 text-gray-400 h-32">
        "Best seller ever, he very smart and understanding. I’m enjoying working with him."
        </p>
      </div>
      <div className="byUser">
        <p className="text-sm text-right pr-12 text-gray-600">
          By : Kim Luong | US
        </p>
      </div>
      </div>
      </SwiperSlide>
  
      <SwiperSlide>
      <div className="swiper_wrapper bg-[#00000087] py-5 rounded-md">
      <div className="img flex flex-row justify-center ">
          {/* <img src="hero.png" alt="Aasim shah" className='w-24 rounded-full' /> */}
          <div className="w-20 h-20 rounded-full bg-gray-800 flex justify-center items-center">
          <AiOutlineUser size={60 } color={"white"}/>
          </div>
      </div>
      <div className="qoute">
        <p className="text-md px-6 py-3 text-gray-400 h-32">
        "Asimm is  very professional and was very open to any ideas or changes that I had in mind. In addition, did a great service in a quick time, and was very responsive."
        </p>
      </div>
      <div className="byUser">
        <p className="text-sm text-right pr-12 text-gray-600">
          By : Julian | US
        </p>
      </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper_wrapper bg-[#00000087] py-5 rounded-md">
      <div className="img flex flex-row justify-center ">
          {/* <img src="hero.png" alt="Aasim shah" className='w-24 rounded-full' /> */}
          <div className="w-20 h-20 rounded-full bg-gray-800 flex justify-center items-center">
          <AiOutlineUser size={60 } color={"white"}/>
          </div>
      </div>
      <div className="qoute">
        <p className="text-md px-6 py-3 text-gray-400 h-32">
        "Aasim never disappoints. Good communicator. Negotiates well, and delivers tasks on timely manner. Thank you again."
        </p>
      </div>
      <div className="byUser">
        <p className="text-sm text-right pr-12 text-gray-600">
          By : Glinnex | Kenya
        </p>
      </div>
      </div>
      </SwiperSlide>
    </Swiper>

    </div>
    </>

  )
}

export default Testomonials