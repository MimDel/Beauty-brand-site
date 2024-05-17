import React, { useState, useEffect } from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import fetchProducts from '../utils/fetchProducts'

const ShoppingCartItem = ({product}) => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetchProducts().then(fetchedProducts => {
      console.log('Fetched Products:', fetchedProducts); // Check what is actually fetched
      setProducts(fetchedProducts);
    });
  }, []);

  const ProductInCart = products ? products.find(productInProducts => productInProducts.id === product.id) : []
  const { increaseQuantity, decreaseQuantity, removeFromCart} = useShoppingCart() //shopping cart context
  const [quantity, setQuantity] = useState(1) //tracking quantity

  //console.log('SHOPPING CART IMG -->', ProductInCart)

  const imageUrl = ProductInCart.images && ProductInCart.images.length > 0 ? ProductInCart.images[0].url : 'default-image-url.jpg';

  let productPrice = quantity * ProductInCart.price //if you calculate price while rendering it will not apply toFixed(2)

  console.log('CartItem -->', ProductInCart)

  //increases quantity
  const increase = () => {
      increaseQuantity(product.id)
      setQuantity(prevQuantity => prevQuantity + 1)
  }

  //decreases quantity
  const decrease = () => {
      if (quantity > 1) {
          decreaseQuantity(product.id)
          setQuantity(prevQuantity => prevQuantity - 1)
      }
  }

  return (
    <div className='flex justify-between w-full h-[150px] bg-white items-center text-black px-4 my-4'>
      <div className='flex'>
        <img src={imageUrl} alt="cover" className='w-[100px] h-[100px]' />
        <p>{ProductInCart.title}</p>
      </div>
      <div className='flex h-full'>
        <div className='flex flex-col h-full w-full justify-around'>  
            {/* removeFromCart doesn't need to take state into consideration so it's called here */}
            <div className='flex justify-end cursor-pointer hover:text-red-500' onClick={() => removeFromCart(product.id)}>Remove</div>         
            <div className='flex space-x-6'>
                <div className='flex space-x-1'>
                    <div className='cursor-pointer text-center w-[30px] h-[30px] 
                        font-bold rounded-full hover:text-red-500 hover:bg-gray-300' onClick={decrease}>-</div>
                    <p>{product.quantity}</p>
                    <div className='cursor-pointer text-center w-[30px] h-[30px] 
                        font-bold rounded-full hover:text-green-500 hover:bg-gray-300' onClick={increase}>+</div>
                </div>
                {/* makes priced fixed to 2 symbols after the decimal point */}
                <p>€{productPrice.toFixed(2)}</p>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartItem
