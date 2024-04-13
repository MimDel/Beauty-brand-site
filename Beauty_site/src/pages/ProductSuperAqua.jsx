import React from 'react'
import Navbar from '../components/Navbar'
import TimeRevolutionHero from '../components/TimeRevolutionHero'
import ProductCatalog from '../components/ProductCatalog'
import CreamPhoto from '../assets/creams.webp'
import SuperAqua from '../assets/bitmap.png'
import Products from '../utils/ProductSA'

const ProductSuperAqua = () => {
  return (
    <div>
        <Navbar />
        <TimeRevolutionHero 
          title="Super Aqua"
          text="100-hour moisture penetration ability of 10 kinds of hyaluronic acids!"
          image={SuperAqua}  />
        <div className='flex justify-center'>
          <hr className='w-[80%] h-1 bg-primary my-10' />
        </div>
        <ProductCatalog prod={Products}/>
        <img className='w-full h-[200px]' src={CreamPhoto} alt="" />
    </div>
  )
}

export default ProductSuperAqua
