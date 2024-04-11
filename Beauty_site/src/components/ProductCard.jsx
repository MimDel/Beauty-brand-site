import React from 'react'
import Button from './Button'

const ProductCard = ({cover, title, description,price}) => {
  return (
    <div className='flex flex-col items-center justify-evenly border-2 border-secondary rounded-lg w-[255px] h-[500px]'>
        <img className='w-[200px] h-[200px]' src={cover} alt="essence mist" />
        <p className='text-center font-semibold text-md'>{title}</p>
        <p className='text-center text-s'>{description}</p>
        <p>€ {price}</p>
        <Button title="ADD TO BAG"/>
    </div>
  )
}

export default ProductCard
