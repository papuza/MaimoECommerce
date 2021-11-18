//Componente GLOBAL que guarda el estado del carrito

import React, { useState, createContext } from 'react'

//El lugar donde van a estar ubicadas las variables:
const CartContext = createContext();

//Nuestra funcion que va a englovar nuestra app. Children sería la app.
const CartProvider = ({ defaultValue = [], children }) => {
    //Creo el carrito, que va a estar en toda la app
    const [cart, setCart] = useState([]);

    const resetCart = () => setCart([])

    const cartTotal = () => cart.length

    const isInCart = id =>
        cart.find(product => product.id === id) || false;

    const addToCart = ({ id, name, quantity, price }) => {
        const productInCart = isInCart(id);
        //Si ya está en el carrito, no lo agrego
        if (!productInCart) {
            setCart([...cart, { id, name, quantity, price }]);
        } else {
            //Me guardo la cantidad anterior
            const oldQuantity = productInCart.quantity;
            //Encuentro en mi carrito el producto que quiero agregar y lo saco del carrito
            const cartWidhoutProduct = cart.filter((product) => product.id !== id);
            //Agrego uno a la cantidad de ese producto
            const finalCart = [
                ...cartWidhoutProduct,
                { id: id, name: name, price: price, quantity: quantity + oldQuantity },
            ];
            //lo sumo al carrito
            setCart(finalCart);
        }
    };

    const updateQty = (productToAdd) =>
    setCart(
      cart.map((product) =>
        product.item.id === productToAdd.id ? productToAdd : product
      )
    );

    const removeItem = (id) =>
        setCart(cart.filter((productToRemove) => productToRemove.id !== id));

    const getCartTotal = () =>
        cart
            .reduce((total, current) => total + current.price * current.quantity, 0)
            .toFixed(2);




    //Llamo al cartContext y uso la funcion Provider.
    return (
        <CartContext.Provider value={{ cart, setCart, resetCart, cartTotal, addToCart, updateQty, removeItem, getCartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
