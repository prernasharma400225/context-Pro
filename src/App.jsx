import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'


const App = () => {


  return (
    <div className='w-full h-full text-white bg-linear-to-bl from-indigo-800 to-indigo-200'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
