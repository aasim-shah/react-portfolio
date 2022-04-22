import React from 'react'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testomonials() {
  return (
    <>
        <div className="heading my-12 ">
    <p className="font-bold text-center text-white text-xl">Testimonial</p>
  </div>
    <div id='testomonials' className='w-11/12 md:w-7/12 mx-auto ' >
       <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
      <div className="swiper_wrapper bg-[#000] py-5 rounded-md">
      <div className="img flex flex-row justify-center ">
          <img src="hero.png" alt="Aasim shah" className='w-24 rounded-full' />
      </div>
      <div className="qoute">
        <p className="text-xl font-bold px-4 py-3 text-gray-400">"
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minima dolores est ad expedita molestiae rerum reiciendis labore vitae, quisquam nesciunt mollitia. Repudiandae maiores quidem laborum provident accusamus impedit natus dolore debitis in?"
        </p>
      </div>
      <div className="byUser">
        <p className="text-sm text-right pr-12 text-gray-200">
          By :  Aasim shah
        </p>
      </div>
      </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className="swiper_wrapper bg-[#000] py-5 rounded-md">
      <div className="img flex flex-row justify-center ">
          <img src="hero.png" alt="Aasim shah" className='w-24 rounded-full' />
      </div>
      <div className="qoute">
        <p className="text-xl font-bold px-4 py-3 text-gray-400">"
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minima dolores est ad expedita molestiae rerum reiciendis labore vitae, quisquam nesciunt mollitia. Repudiandae maiores quidem laborum provident accusamus impedit natus dolore debitis in?"
        </p>
      </div>
      <div className="byUser">
        <p className="text-sm text-right pr-12 text-gray-200">
          By :  Aasim shah
        </p>
      </div>
      </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className="swiper_wrapper bg-[#000]  py-5 rounded-md">
      <div className="img flex flex-row justify-center ">
          <img src="hero.png" alt="Aasim shah" className='w-24 rounded-full' />
      </div>
      <div className="qoute">
        <p className="text-xl font-bold px-4 py-3 text-gray-400">"
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minima dolores est ad expedita molestiae rerum reiciendis labore vitae, quisquam nesciunt mollitia. Repudiandae maiores quidem laborum provident accusamus impedit natus dolore debitis in?"
        </p>
      </div>
      <div className="byUser">
        <p className="text-sm text-right pr-12 text-gray-200">
          By :  Aasim shah
        </p>
      </div>
      </div>
      </SwiperSlide>
      <SwiperSlide style={{paddingBottom:53}}>
      <div className="swiper_wrapper  bg-[#000] py-5 rounded-md">
      <div className="img flex flex-row justify-center ">
          <img src="hero.png" alt="Aasim shah" className='w-24 rounded-full' />
      </div>
      <div className="qoute">
        <p className="text-xl font-bold px-4 py-3 text-gray-400">"
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minima dolores est ad expedita molestiae rerum reiciendis labore vitae, quisquam nesciunt mollitia. Repudiandae maiores quidem laborum provident accusamus impedit natus dolore debitis in?"
        </p>
      </div>
      <div className="byUser">
        <p className="text-sm text-right pr-12 text-gray-200">
          By :  Aasim shah
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