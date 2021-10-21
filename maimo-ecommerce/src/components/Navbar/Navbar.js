import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container>
            <div className="logo">LOGO</div>
            <nav>
                <ul>
                    <li><Link to={`/`}>home</Link></li>
                    <li><Link to={`/shop`}>shop</Link></li>
                    <li><Link to={`/category`}>categ 1</Link></li>
                    <li><Link to={`/category`}>categ 2</Link></li>
                    <li><Link to={`/product`}>cart</Link></li>
                </ul>
            </nav>
        </Container>
    )
}

export default Navbar
