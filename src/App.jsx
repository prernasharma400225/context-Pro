import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'


const App = () => {


  return (
    <div className='bg-zinc-900 w-full h-screen text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
