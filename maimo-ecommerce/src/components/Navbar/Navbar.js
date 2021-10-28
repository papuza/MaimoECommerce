import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container>
            <div className="navContainer">
                <div className="logo">Maimo-Ecommerce</div>
                <nav>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/shop`}>Shop</Link></li>
                        <li><Link to={`/category/1`}>categ 1</Link></li>
                        <li><Link to={`/category/2`}>categ 2</Link></li>
                        <li><Link to={`/product/2`}><img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/></Link></li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}

export default Navbar
