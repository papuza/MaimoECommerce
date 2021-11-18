import React from 'react'
import { Container } from './styled'

const ProductContainer = ({id, product, addToCart}) => {

    return (
        <Container>
            <div className="product-container">
                <div className="product-intro">
                    <img src={product.image} />
                    <div className="product-info">
                        <div className="product-head">
                            <h3>Producto</h3>
                            <h1>{product.name}</h1>
                            <h2>${product.price}</h2>
                        </div>
                        <button className="buy-btn" onClick={() => addToCart({...product, quantity:1})}>Agregar al carrito</button>
                    </div>
                </div>
                <div className="product-description">
                    <h2>Descripción</h2>
                    <p className="desc-text">{product.description}</p>
                </div>

            </div>
        </Container>
    )
}
export default ProductContainer
