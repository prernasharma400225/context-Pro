import React from 'react'
import Image from './Image'

const Section1 = () => {
  return (
    <div className='px-10 w-full overflow-hidden'>
      <div className='border rounded-4xl p-10 gap-5 h-full flex flex-col items-center '>
        <h1 className='text-4xl font-semibold text-white'>Shop By Category</h1>
      <p className='text-sm text-zinc-200'>Express your style with our standout collection-- fashion meets sophistication.</p>

      <Image/>
      </div>

    </div>
  )
}

export default Section1
