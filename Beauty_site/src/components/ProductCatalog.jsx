import React from 'react'
import ProductCard from './ProductCard'

const ProductCatalog = ({prod}) => {
  return (
    <div className='flex w-full justify-center'>
         <div className='flex flex-wrap w-[80%] gap-4'>
            {prod.map((product)=>
            (
                <div> <ProductCard cover={product.cover} title={product.title} 
                description={product.description} price={product.price}/> </div>
            ))}
        </div>
    </div>
  )
}

export default ProductCatalog
