import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

    const {id:prodId} = useParams()

    return (
        <div>
            One beautiful product: {prodId}
        </div>
    )
}

export default Product
