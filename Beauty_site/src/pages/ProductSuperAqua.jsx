import React, { useEffect, useState } from 'react'
import TimeRevolutionHero from '../components/HeroProduct'
import ProductCatalog from '../components/ProductCatalog'
import CreamPhoto from '../assets/creams.webp'
import SuperAqua from '../assets/bitmap.png'
import Products from '../utils/ProductSA'
import fetchProducts from '../utils/fetchProducts'

const ProductSuperAqua = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetchProducts().then(fetchedProducts => {
      console.log('Fetched Products:', fetchedProducts); // Check what is actually fetched
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <div>
        <TimeRevolutionHero 
          title="Super Aqua"
          text="100-hour moisture penetration ability of 10 kinds of hyaluronic acids!"
          image={SuperAqua}
          isAqua={true}  />
        <div className='flex justify-center'>
          <hr className='w-[80%] h-1 bg-primary my-10' />
        </div>
        <ProductCatalog prod={products} category="SA"/>
        <img className='w-full h-[200px]' src={CreamPhoto} alt="" />
    </div>
  )
}

export default ProductSuperAqua
