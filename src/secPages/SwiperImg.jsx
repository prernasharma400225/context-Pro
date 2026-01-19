import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperImg = () => {
  const Data = [
    {
      img: "https://i.pinimg.com/736x/c5/ce/b0/c5ceb0ce58e6469a3229a4293b9ff617.jpg",
      title: "Fashion",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias?",
    },
    {
      img: "https://i.pinimg.com/736x/00/fd/29/00fd29f4dfbf1360d24d667163e7a936.jpg",
      title: "Fashion",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias?",
    },
    {
      img: "https://i.pinimg.com/736x/4e/17/de/4e17de27db011d9b8958e401f21bf598.jpg",
      title: "Fashion",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias?",
    },
    {
      img: "https://i.pinimg.com/736x/15/b7/6c/15b76cd086d88cb30f2ee8d0e0567308.jpg",
      title: "Fashion",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias?",
    },
    {
      img: "https://i.pinimg.com/736x/22/6e/2a/226e2a3c262db262eef6e2373a61100c.jpg",
      title: "Fashion",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias?",
    },
    {
      img: "https://i.pinimg.com/736x/1f/23/3a/1f233a64611fce0cde8f7db56d2a7ed5.jpg",
      title: "Fashion",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias?",
    },
  ]
  return (
    <div className='p-5 mt-14 w-full'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        navigation={false}
        pagination={false}
      >
        {Data.map((elem, idx) => {
          return (
            <SwiperSlide key={idx} className='!w-auto'>
              <div className='relative w-[250px] mx-auto h-[450px] rounded-2xl overflow-hidden group'>
                <img className='object-center object-cover h-full w-full' src={elem.img} alt="" />

                <div className='absolute p-5 z-10 left-0 bottom-0 bg-[#ffffff2e] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <h1 className='text-xl font-semibold  text-violet-900'>{elem.title}</h1>
                  <p className='text-xs text-violet-400'>{elem.para}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperImg
