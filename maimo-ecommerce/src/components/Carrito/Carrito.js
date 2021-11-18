import React from 'react'
import { Container } from './styled'

const Carrito = ({cart, getCartTotal}) => {

    console.log(getCartTotal)
    return (
        <Container>
                <div className="carrito-container">
                <table className="carrito-productos">
                    <thead className="carrito-productos-heading">
                        <tr>
                            <th className="carrito-productos-heading-prod" colSpan="2">Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="carrito-productos-list">
                        {cart.map(({ name, price, quantity }) => 
                            <tr className="carrito-producto">
                                <td colSpan="2">{name} </td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                            </tr>
                        )}



                    </tbody>
                </table>
                <h2>Total:{getCartTotal()}</h2>
            </div>


        </Container>
    )
}

export default Carrito
