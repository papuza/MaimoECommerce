import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {

    const {id:catId} = useParams()

    return (
        <div>
           One Category {catId} 
        </div>
    )
}

export default Category
