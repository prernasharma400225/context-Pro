import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Image = () => {
    const imagesData = [
        {
            img: 'https://i.pinimg.com/736x/b8/3f/08/b83f0833956a171c1793d0e7327a642a.jpg',
            title: 'jacket',
        },
        {
            img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 't-shirt',
        },
        {
            img: 'https://i.pinimg.com/736x/0d/43/66/0d436630f3783b56fd6e169e92db892b.jpg',
            title: "Men's t-shirt",
        },
        {
            img: 'https://i.pinimg.com/1200x/11/1e/12/111e12ede388fc4eae2dd965448ef216.jpg',
            title: 'Gown',
        },
        {
            img: 'https://i.pinimg.com/1200x/b0/52/69/b052696e589ba6a6d3a9ac5cd7a1b6c8.jpg',
            title: 'Shirt',
        },
        {
            img: 'https://i.pinimg.com/736x/dc/c1/b8/dcc1b8ebdbeea397734a868f8d3e60c4.jpg',
            title: 'Top',
        },
        {
            img: 'https://i.pinimg.com/1200x/49/6f/49/496f49162fae62d2857f19521251a10a.jpg',
            title: 'Jeans',
        },

    ]
    return (
        <div className='p-10 w-full  '>
            <Swiper 
                modules={[Autoplay, Pagination,Navigation]}
                autoplay={{delay:2000, disableOnInteraction: false}}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                navigation={false}
                pagination={false}
            >

                {imagesData.map((elem, idx) => {
                    return (
                        <SwiperSlide 
                        key={idx}>
                        
                            <div className='w-52 h-64 mx-auto overflow-hidden rounded-2xl '>
                                <img className='w-full h-full hover:scale-110 transition-transform duration-500 object-center object-cover' src={elem.img} alt="" />
                            </div>
                            <h1 className='text-center text-xl capitalize'>{elem.title}</h1>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Image
