import React from 'react'
import { Container } from './styled'

const Main = () => {
    return (
        <Container>
            <section className="hero">
                <div className="hero-content">
                    <h1>Una forma <span className="text-bold">distinta</span> de comprar</h1>
                    <p>Conseguí los productos que necesitas desde la comodidad de tu hogar</p>
                    <div className="hero-btn">
                        <a href="#">Ver más</a>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Main
