import React from 'react'
import Navbar from '../components/Navbar'
import TimeRevolutionHero from '../components/TimeRevolutionHero'
import ProductCatalog from '../components/ProductCatalog'
import CreamPhoto from '../assets/creams.webp'

const ProductsTimeRevolution = () => {
  return (
    <div>
        <Navbar />
        <TimeRevolutionHero />
        <div className='flex justify-center'>
          <hr className='w-[80%] h-1 bg-tertiary my-10' />
        </div>
        <ProductCatalog />
        <img className='w-full h-[200px]' src={CreamPhoto} alt="" />
    </div>
  )
}

export default ProductsTimeRevolution
