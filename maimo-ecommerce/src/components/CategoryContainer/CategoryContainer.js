import React from 'react'
import { Grid, Col } from '../Grid/index'
import { Container } from './styled'
import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getFirestore } from '../../services/firebase'
import { Link } from 'react-router-dom'

const CategoryContainer = ({ catId }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const db = getFirestore()
                const productsCollection = db.collection('products')
                const productsSnapshot = productsCollection.get()
                const products = productsSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                console.log(products)
                setProducts(products)

                setLoading(false)
            } catch (error) {

            }
        }

        getProducts()
    }, [catId])

    return (
        <Container>
            <Grid rowGap={15} colGap={15}>
                {products.map((un_product)=>{
                    
                })}
                <Col desktop={4} tablet={6} mobile={12}>
                    <ProductCard />
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ProductCard />
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ProductCard />
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ProductCard />
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ProductCard />
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ProductCard />
                </Col>
            </Grid>
        </Container>
    )
}

export default CategoryContainer
