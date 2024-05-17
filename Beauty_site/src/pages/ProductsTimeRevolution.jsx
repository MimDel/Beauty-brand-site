import React, { useEffect, useState } from 'react'
import HeroProduct from '../components/HeroProduct'
import ProductCatalog from '../components/ProductCatalog'
import CreamPhoto from '../assets/creams.webp'
import TimeRev from '../assets/time_revolution.webp'
//import Products from '../utils/Product'
import fetchProducts from '../utils/fetchProducts'

const ProductsTimeRevolution = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetchProducts().then(fetchedProducts => {
      console.log('Fetched Products:', fetchedProducts); // Check what is actually fetched
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <div>
        <HeroProduct
          title="Time Revolution"
          text="Comforts the skin all day long! Soothing Artemisia Care Line."
          image={TimeRev}  />
        <div className='flex justify-center'>
          <hr className='w-[80%] h-1 bg-tertiary my-10' />
        </div>
        <ProductCatalog prod={products} category="TR" />
        <img className='w-full h-[200px]' src={CreamPhoto} alt="" />
    </div>
  )
}

export default ProductsTimeRevolution
