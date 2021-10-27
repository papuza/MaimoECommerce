import React from 'react'
import CategoryContainer from '../components/CategoryContainer/CategoryContainer'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Category = () => {

    const {id:catId} = useParams()

    return (
        <>
           <Navbar />
           <CategoryContainer catId={catId} />
            <Footer />
        </>
        
    )
}

export default Category
