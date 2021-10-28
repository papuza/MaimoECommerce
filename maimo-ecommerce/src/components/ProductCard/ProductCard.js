import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import Imagendefecto from '../../assets/imgs/taza.png'

const ProductCard = ({ name, image, description, id }) => {
    


    return (
        <Container>
            <div className="info-card">
                <h2>Taza "And so it is"</h2>
                <img src={Imagendefecto} />
                <Link to="#" className="buy-btn">Ver más</Link>
            </div>
        </Container>



    )

}

export default ProductCard
