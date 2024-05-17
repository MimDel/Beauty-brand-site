import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ProductCard = ({id, images, title, description, price, category}) => {
  const { increaseQuantity } = useShoppingCart()
  let navigate = useNavigate()

  const imageUrl = images && images.length > 0 ? images[0].url : 'default-image-url.jpg';

  console.log('Image URL', images[0].url)
  
  return (
    <div className='flex flex-col items-center justify-evenly border-2 border-secondary rounded-lg w-[255px] h-[500px]'>
        <img className='w-[200px] h-[200px] cursor-pointer' src={imageUrl} alt="essence mist" onClick={() => navigate(`/${category}/ProductInfo/${id}`)}/>
        <p className='text-center font-semibold text-md'>{title}</p>
        <p className='text-center text-s'>{description}</p>
        <p>€ {price}</p>
        <div onClick={() => {increaseQuantity(id)}}><Button title="ADD TO BAG"/></div>
    </div>
  )
}

export default ProductCard
