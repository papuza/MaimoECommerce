import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <Container>
            <section className="hero">
                <div className="hero-content">
                    <h1>Una forma <span className="text-bold">distinta</span> de comprar</h1>
                    <p>Conseguí los productos que necesitas desde la comodidad de tu hogar</p>
                    <div className="hero-btn">
                        <a href="#"><Link to={`/shop`}>Comenzar</Link></a>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Main
