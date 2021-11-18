import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import Imagendefecto from '../../assets/imgs/taza.png'

const ProductCard = ({ name, image, id }) => {
    

    return (
        <Container>
            <div className="info-card">
                <h2>{name}</h2>
                <img src={image} />
                <Link to={`/product/${id}`} className="buy-btn" name={name}>Ver más</Link>
            </div>
        </Container>



    )

}

export default ProductCard
