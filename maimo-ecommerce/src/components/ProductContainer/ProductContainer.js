import React from 'react'
import { Grid, Col } from '../Grid/index'
import { Container } from './styled'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Imagendefecto from '../../assets/imgs/taza.png'

const ProductContainer = () => {

    return (
        <Container>
            <div className="product-container">
                <div className="product-intro">
                        <img src={Imagendefecto} />
                        <div className="product-info">
                            <div className="product-head">
                                <h3>Tazas personalizadas</h3>
                                <h1>Taza "And so it is"</h1>
                                <h2>$439</h2>
                            </div>
                            <Link to="#" className="buy-btn">Comprar</Link>
                        </div>
                </div>
                <div className="product-description">
                    <h2>Descripción</h2>
                    <p className="desc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis, mauris ac pulvinar tempor, leo purus tempor nulla, non fermentum libero magna at urna. Fusce tristique turpis neque, ac aliquet nisl blandit malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sodales ornare accumsan. </p>
                    <h2>Información Técnica</h2>
                    <div className="tec-box">
                        <h3>Tamaño</h3>
                        <p>100 x 20 cm</p>
                    </div>
                    <div className="tec-box tec-box-middle">
                        <h3>Material</h3>
                        <p>Cerámica</p>
                    </div>
                    <div className="tec-box">
                        <h3>Color</h3>
                        <p>Blanco</p>
                    </div>
                </div>
             
            </div>
        </Container>
    )
}
export default ProductContainer
