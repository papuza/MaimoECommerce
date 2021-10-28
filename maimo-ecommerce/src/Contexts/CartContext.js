//Componente GLOBAL que guarda el estado del carrito

import React, {useState, createContext} from 'react'

const CartContext = createContext();

const CartProvider = ({defaultValue=[], children}) => {
    const [cart, setCart] = useState([{name: 'Mario'}, {name: 'Luigi'}]);

    const resetCart = () => setCart([])

    const cartTotal = () => cart.length

    const addToCart = id =>{
        console.log("agrego el producto ", id)
    }

    console.log(cartTotal)
    
    
    return(
        <CartContext.Provider value={{cart, setCart, resetCart, cartTotal, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}
