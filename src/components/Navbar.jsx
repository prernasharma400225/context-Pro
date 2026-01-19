import React from 'react'
import { Link } from 'react-router-dom'
import { SiNordicsemiconductor } from "react-icons/si";

const Navbar = () => {
    return (
        <div className='w-full p-5 flex items-center justify-between bg-white/30 backdrop-blur-sm fixed '>
            <SiNordicsemiconductor  className='text-3xl'/>
            <div className='flex gap-5 text-xl'>
                <Link to='/' elem>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>contact</Link>
            </div>
            <button className='py-1 px-5 border rounded-full border-white/30'>Login</button>
        </div>
    )
}

export default Navbar
