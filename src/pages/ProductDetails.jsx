import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
  const productData = useContext(ProductDataContext)
  const { productId } = useParams()
  const selectedProduct = productData.find((elem) => productId == elem.id )
  console.log(selectedProduct);


  return (
    <div>
      <div className='h-72 w-52 '>
        <div className='h-56 w-52 bg-zinc-200 rounded-2xl p-2 '>
          <img className='h-full w-full object-top object-cover' src={selectedProduct?.image} alt="" />
        </div>
        <h2 className='text-xs p-2'>{selectedProduct?.title}</h2>
      </div>
    </div>
  )
}

export default ProductDetails
