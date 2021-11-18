import React, { useContext, useState } from 'react'
import { Grid, Col } from "../components/Grid";
import { CartContext } from '../Contexts/CartContext'
import { getFirestore, getDate } from '../services/firebase'
import CheckoutForm from '../components/CheckoutForm/CheckoutForm'
import Carrito from '../components/Carrito/Carrito'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Inner } from '../components/Inner/Inner';

const Checkout = () => {
    //Preparo el pedido

    //Traigo el estado del carrito:
    const { cart, getCartTotal, setCart } = useContext(CartContext);
    const [orderCreated, setOrderCreated] = useState(false);

    //Primero traigo los datos del usuario:
    const placeOrder = async (buyerData) => {
        //Vamos a preparar el pedido
        //1-tenemos los datos del usuario (values)

        //2-tenemos el estado del carrito

        //3-Escribimos la orden en fireba

        try {
            const db = getFirestore();

            const cartProducts = cart.map(({ id, name, price, quantity }) => {
                return { id, name, price, quantity };
            });


            const order = {
                buyer: buyerData,
                products: cartProducts,
                date: getDate(),
                total: getCartTotal(),
            };

            const res = await db.collection("orders").add(order);
            setCart([]);
            setOrderCreated(res.id);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Navbar />
            {orderCreated ? (
                <h1 className="Checkout_title">Orden Realizada! {`Order N ${orderCreated}`}</h1>
            ) : (
                <h1 className="Checkout_title">Checkout</h1>
            )}

            <Inner>
                <Grid>
                    <Col desktop={6} tablet={6} mobile={12}>
                        <Carrito cart={cart} getCartTotal={getCartTotal} />
                    </Col>
                    <Col desktop={6} tablet={6} mobile={12}>
                        <CheckoutForm handleSubmit={placeOrder} />
                    </Col>
                </Grid>
            </Inner>
            <Footer />
        </>
    )
}

export default Checkout