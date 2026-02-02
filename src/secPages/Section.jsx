import React from 'react'
import { useNavigate } from 'react-router-dom'
import SwiperImg from './SwiperImg'


const Section = () => {
    const navigate = useNavigate()
    return (
        <div className=' flex gap-10 px-5 w-[100%]  justify-between h-screen items-center'>


            <div className='w-[30%] flex flex-col justify-center gap-10'>
                <h1 className='text-6xl font-semibold uppercase'>Soft Comfort <br /> Bold Looks</h1>
                <div className='flex flex-col gap-3'>
                    <p className='text-xs text-violet-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et nam laborum consectetur cupiditate debitis reprehenderit consequatur delectus doloribus ullam.</p>
                    <button className='border-2  w-fit py-1 px-4 text-xl font-semibold rounded-full hover:bg-violet-200 ' onClick={() => {
                        navigate('/products')
                    }}>Collection</button>
                </div>
            </div>


            <div className='w-[65%] flex gap-5 justify-between'>
                <SwiperImg />
            </div>


        </div>
    )
}

export default Section
