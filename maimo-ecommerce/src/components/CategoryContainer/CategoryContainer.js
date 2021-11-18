import React from 'react'
import { Grid, Col } from '../Grid/index'
import { Container } from './styled'
import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
//Para interactuar con la base de datos:
import { getFirestore } from '../../services/firebase'

const CategoryContainer = ({ catId }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    //Quiero que cuando cargue el componente, traiga el contenido: useEffect
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                //Traigo la base de datos
                const db = getFirestore()
                //Agarro los productos de la base de datos mediante "Collection"
                const productsCollection = db.collection(`products`)

                //Filtro. Si no viene el catId, agarra todos.
                const productsSnapshot = catId ?
                    await productsCollection.where('category', '==', catId).limit(20).get()
                    :
                    await productsCollection.orderBy('price', 'desc').limit(20).get();
                
                    //Y ahora si puedo agarrar los datos. Siempre primero accedo a .docs y luego retorno con un map
                const products = productsSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
                setLoading(false)
            } catch (error) {
                console.log('Error', error)
            }
        }
        getProducts()
    }, [catId])

    return (
        <Container>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Grid rowGap={15} colGap={15}>

                    {products.map(({name, image, description, price, id}, index) =>
                        <Col desktop={4} tablet={6} mobile={12}>
                            <ProductCard name={name} image={image} description={description} price={price} id={id} />
                        </Col>
                    )}
                
                </Grid>
            )}
        </Container>
    )
}

export default CategoryContainer
