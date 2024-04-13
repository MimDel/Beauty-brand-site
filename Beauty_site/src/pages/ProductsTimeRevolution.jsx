import React from 'react'
import Navbar from '../components/Navbar'
import TimeRevolutionHero from '../components/TimeRevolutionHero'
import ProductCatalog from '../components/ProductCatalog'
import CreamPhoto from '../assets/creams.webp'
import TimeRev from '../assets/time_revolution.webp'
import Products from '../utils/Product'

const ProductsTimeRevolution = () => {
  return (
    <div>
        <Navbar />
        <TimeRevolutionHero 
          title="Time Revolution"
          text="Comforts the skin all day long! Soothing Artemisia Care Line."
          image={TimeRev}  />
        <div className='flex justify-center'>
          <hr className='w-[80%] h-1 bg-tertiary my-10' />
        </div>
        <ProductCatalog prod={Products} />
        <img className='w-full h-[200px]' src={CreamPhoto} alt="" />
    </div>
  )
}

export default ProductsTimeRevolution
