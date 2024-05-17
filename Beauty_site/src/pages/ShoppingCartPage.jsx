import React, {useState, useEffect} from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from '../components/ShoppingCartItem'
import { calculateTotal } from '../utils/calculateTotal'
import Button from '../components/Button'
import fetchProducts from '../utils/fetchProducts'

const ShoppingCartPage = () => {
    const {cartItems} = useShoppingCart()

    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetchProducts().then(fetchedProducts => {
        console.log('Fetched Products:', fetchedProducts); // Check what is actually fetched
        setProducts(fetchedProducts);
        });
    }, []);

    let total = parseFloat(calculateTotal(cartItems, products))

    // if the products are worth over €100 there is no service fee
    const getServiceFee = () => {
        return total > 100 ? 0 : 5; // Return as number
    };

    const serviceFee = getServiceFee()

    const finalTotal = total + serviceFee

    return (
        <div className='flex justify-center w-full h-full pt-10 pb-20 text-white'>
            <div className='flex justify-between items-start w-[80%] h-full'>
                <div className='flex flex-col justify-start items-start w-[600px] min-h-[400px] bg-primary py-4 px-6 shadow-custom'>
                    <p className='text-lg'>My Cart</p>
                    {console.log('cart page product list -->', cartItems)}
                    {cartItems && cartItems.map(item => (
                        <ShoppingCartItem key={item.id} product={item}/>
                    ))}
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col justify-start items-start w-[400px] h-[300px] bg-primary py-4 px-6 space-y-8 shadow-custom'>
                        <div className='flex flex-col '>
                            <p className='text-lg '>Summary</p>
                            <p className='text-s text-gray-400'>No service fee over €100</p>
                        </div>
                        <div className='flex flex-col w-full text-md space-y-2'>
                            <div className='flex justify-between w-full'>
                                <p>{cartItems.length} products</p>
                                <p>€{total.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p>Service fee</p>
                                <p>€{serviceFee.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className='flex justify-between text-md w-full'>
                            <p>Total:</p>
                            <p className='text-lg'>€{finalTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='pt-6 text-center'><Button title='Proceed to checkout'/></div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage
