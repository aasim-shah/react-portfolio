import { useRef } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineUser } from 'react-icons/ai'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function WorkHistory() {
    return (
        <>
            <div className="heading mb-20  pt-12" id='WorkHistory'>
                <p className="font-bold text-center text-yellow-300 text-3xl">PortFolio</p>
            </div>
            <div className='w-11/12 md:w-9/12 mx-auto ' >
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={50}
                    className="h-[30rem]"
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                >

                    <SwiperSlide>
                        <div className="swiper_wrapper bg-[#00000087] flex justify-center items-center rounded-md relative h-[14rem] text-white ">
                            <div id="projectImgOverlay" className='hidden h-[12rem] bg-gray-800 opacity-[.7] absolute w-full flex flex-col justify-center items-center'>
                                <a href="#" className='py-1 px-2 bg-black font-semibold  mb-2 h-8 rounded-md'>view demo</a>
                                <a href="#" className='py-1 px-2 bg-black   h-8 rounded-md font-semibold'>Github</a>
                            </div>
                            <div className="fill"><img src="sooz.png" alt="" /></div>
                        </div>

                        <div className="swiper_wrapper mt-3 bg-[#00000087] flex justify-center items-center rounded-md relative h-[14rem] text-white ">
                            <div id="projectImgOverlay" className='hidden h-[12rem] bg-gray-800 opacity-[.7] absolute w-full flex flex-col justify-center items-center'>
                                <a href="https://specscamp.com" className='py-1 px-2 bg-black font-semibold  mb-2 h-8 rounded-md'>view demo</a>
                                <a href="#" className='py-1 px-2 bg-black   h-8 rounded-md font-semibold'>Github</a>
                            </div>
                            <div className=""><img src="specscamp.png" alt="" /></div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
      <div  className="swiper_wrapper bg-[#00000087] flex justify-center items-center rounded-md relative h-[14rem] text-white ">
        <div  id="projectImgOverlay" className='hidden h-[12rem] bg-gray-800 opacity-[.7] absolute w-full flex flex-col justify-center items-center'>
        <a href="#" className='py-1 px-2 bg-black font-semibold  mb-2 h-8 rounded-md'>view demo</a>
            <a href="#" className='py-1 px-2 bg-black   h-8 rounded-md font-semibold'>Github</a>
        </div>
         <div className="fill"><img src="invest.png" alt="" /></div>
      </div>
  
      <div  className="swiper_wrapper mt-4 bg-[#00000087] flex justify-center items-center rounded-md relative h-[14rem] text-white ">
        <div  id="projectImgOverlay" className='hidden h-[12rem] bg-gray-800 opacity-[.7] absolute w-full flex flex-col justify-center items-center'>
            <a href="#" className='py-1 px-2 bg-black font-semibold  mb-2 h-8 rounded-md'>view demo</a>
            <a href="#" className='py-1 px-2 bg-black   h-8 rounded-md font-semibold'>Github</a>
        </div>
         <div className=""><img src="register.png" alt="" /></div>
      </div>
  
      </SwiperSlide>

      <SwiperSlide>
      <div  className="swiper_wrapper bg-[#00000087] flex justify-center items-center rounded-md relative h-[14rem] text-white ">
        <div  id="projectImgOverlay" className='hidden h-[12rem] bg-gray-800 opacity-[.7] absolute w-full flex flex-col justify-center items-center'>
        <a href="https://buyandgrabx.vercel.app/" className='py-1 px-2 bg-black font-semibold  mb-2 h-8 rounded-md'>view demo</a>
            <a href="#" className='py-1 px-2 bg-black   h-8 rounded-md font-semibold'>Github</a>
        </div>
         <div className="fill"><img src="buyandgrab.png" alt="" /></div>
      </div>
  
      <div  className="swiper_wrapper mt-3 bg-[#00000087] flex justify-center items-center rounded-md relative h-[14rem] text-white ">
        <div  id="projectImgOverlay" className='hidden h-[12rem] bg-gray-800 opacity-[.7] absolute w-full flex flex-col justify-center items-center'>
            <a href="#" className='py-1 px-2 bg-black font-semibold  mb-2 h-8 rounded-md'>view demo</a>
            <a href="#" className='py-1 px-2 bg-black   h-8 rounded-md font-semibold'>Github</a>
        </div>
         <div className=""><img src="specscamp.png" alt="" /></div>
      </div>
  
      </SwiperSlide>
                </Swiper>

            </div>
        </>

    )
}

export default WorkHistory