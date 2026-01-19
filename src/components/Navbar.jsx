import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiNordicsemiconductor } from "react-icons/si";


const Navbar = () => {
    const [lastScroll, setLastScroll] = useState(0);
    const [show, setShow] = useState(true)

    useEffect(() => {
        const handleScroll = () =>{
            const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            setShow(false);
        } else {
            setShow(true);
        }
        setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
        }, [lastScroll]);


    return (
        <div 
        style={{
            position: 'fixed',
            top: show? '0' : '-80px',
            left: 0,
            right:0,
            transition: 'top 0.3s ease-in-out',
            height:'80px'
        }}
        className='w-full p-5 flex items-center justify-between bg-[#ffffff53] backdrop-blur-sm fixed z-20'>
            <SiNordicsemiconductor className='text-3xl' />
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
