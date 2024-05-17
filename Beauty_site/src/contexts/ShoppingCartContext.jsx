import { createContext, useContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext({})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        console.log('cart items updated -->', cartItems);
    }, [cartItems]);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseQuantity = (id) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map( item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseQuantity = (id) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value = {{cartItems, getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart}}>
        {children}
    </ShoppingCartContext.Provider>
}