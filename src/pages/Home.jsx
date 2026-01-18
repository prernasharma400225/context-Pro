import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()
    

  return (
    <div>
      <h2>Products Details yaha payi jati h</h2>
      <button onClick={()=>{
        navigate('/products')
      }}>explore products</button>
    </div>
  )
}

export default Home
