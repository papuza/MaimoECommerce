import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container>
            <h1>Maimo-Ecommerce</h1>
            <p className="footer-legal">© Maimo-Ecommerce | Todos los derechos reservados</p>
            <ul className="social-icons">
                <li><Link to={`#`}><img src="https://img.icons8.com/material/24/000000/facebook--v1.png" /></Link></li>
                <li><Link to={`#`}><img src="https://img.icons8.com/material/24/000000/instagram-new--v1.png" /></Link></li>
                <li><Link to={`#`}><img src="https://img.icons8.com/material/24/000000/twitter-squared.png" /></Link></li>
                <li><Link to={`#`}><img src="https://img.icons8.com/material/24/000000/linkedin--v1.png" /></Link></li>
            </ul>
        </Container>
    )
}

export default Footer
