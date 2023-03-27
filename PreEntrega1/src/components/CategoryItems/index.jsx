import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer'

const CategoryItems = () => {
    
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setProductos(data)
    });
    },[id])

    // console.log(id)

  return (
    <div>
        <ItemListContainer productos={productos}/>
    </div>
  )
}

export default CategoryItems