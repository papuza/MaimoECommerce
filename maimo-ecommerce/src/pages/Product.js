import React from 'react'
import { useParams } from 'react-router-dom'
import ProductContainer from '../components/ProductContainer/ProductContainer'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Product = () => {

    const {id:prodId} = useParams()

    return (
        <>
            <Navbar />
            <ProductContainer id={prodId}/>
            <Footer />
        </>
    )
}

export default Product
