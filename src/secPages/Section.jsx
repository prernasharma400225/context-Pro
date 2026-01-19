import React from 'react'
import { useNavigate } from 'react-router-dom'

const Section = () => {
    const navigate = useNavigate()
  return (
    <div className=' flex gap-20 px-5 items-center justify-between h-screen'>
      <div className='1/3 flex flex-col justify-center gap-10 '>
        <h1 className='text-7xl font-semibold'>Soft Comfort <br /> Bold Looks</h1>
      <button className='border-2 w-fit py-1 px-4 text-xl font-semibold rounded-full  ' onClick={()=>{
        navigate('/products')
      }}>Collection</button>
      </div>
      <div className='2/3 '>thrfd</div>
    </div>
  )
}

export default Section
