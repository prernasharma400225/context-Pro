import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'


const Products = () => {

    const productData = useContext(ProductDataContext)

    let renderData = 'NOTHING TO SHOW'

    if (productData.length > 0) {
        renderData = productData.map(function (elem, idx) {
            return <Link className='block w-60 p-5 text-center bg-white rounded-2xl' key={idx} to={`/products/${elem.id}`}>

                <div className='h-72 w-52 '>
                    <div className='h-56 w-52 bg-zinc-200 rounded-2xl p-2 '>
                        <img className='h-full w-full object-top object-cover' src={elem.image} alt="" />
                    </div>
                    <h2 className='text-xs p-2'>{elem.title}</h2>
                </div>

            </Link>
        })
    }

    return (
        <div className='flex flex-wrap items-center justify-center p-10 gap-10 bg-zinc-900 text-black w-full '>
            {renderData}
        </div>
    )
}

export default Products
