import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const CategoryItems = () => {
    
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'products');
      const queryFilter = query(queryCollection, where('category', '==', id))
      getDocs(queryFilter)
        .then(res => setProductos(res.docs.map(product =>({id: product.id, ...product.data() }))))

      
    },[id])
  

  return (
    <div>
        <ItemListContainer productos={productos}/>
    </div>
  )
}

export default CategoryItems